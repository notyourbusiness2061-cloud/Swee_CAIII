// Vercel serverless function: stores the study state in Upstash Redis.
// GET  /api/state  -> { state, updated }
// PUT  /api/state  -> body { state, updated }
// Every request must send the header  x-passcode: <PASSCODE env var>
const crypto = require('crypto');

const URL_ = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const KEY = 'canook:state';

const same = (a, b) => {
  const x = Buffer.from(String(a || '')), y = Buffer.from(String(b || ''));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

async function redis(cmd) {
  const r = await fetch(URL_, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd),
  });
  const j = await r.json();
  if (!r.ok || j.error) throw new Error(j.error || 'Redis ' + r.status);
  return j.result;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!process.env.PASSCODE || !URL_ || !TOKEN) {
    return res.status(500).json({ error: 'Server not configured: add PASSCODE and connect Upstash Redis' });
  }
  if (!same(req.headers['x-passcode'], process.env.PASSCODE)) {
    return res.status(401).json({ error: 'Wrong passcode' });
  }
  try {
    if (req.method === 'GET') {
      const v = await redis(['GET', KEY]);
      return res.status(200).json(v ? JSON.parse(v) : { state: null, updated: 0 });
    }
    if (req.method === 'PUT') {
      let b = req.body;
      if (typeof b === 'string') b = JSON.parse(b);
      if (!b || typeof b.state !== 'object' || b.state === null) {
        return res.status(400).json({ error: 'Bad request' });
      }
      const s = JSON.stringify({ state: b.state, updated: Number(b.updated) || Date.now() });
      if (s.length > 900000) return res.status(413).json({ error: 'State too large' });
      await redis(['SET', KEY, s]);
      return res.status(200).json({ ok: true });
    }
    res.setHeader('Allow', 'GET, PUT');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: 'Storage error' });
  }
};
