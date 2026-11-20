# CA Study Nook

Pink study timer + full syllabus tracker for ICAN Advisory Level
(Advanced Management Accounting and Advanced Financial Reporting).

## Files
- `public/index.html`, `public/style.css`, `public/app.js` : the site (no build step)
- `api/state.js` : serverless function that reads/writes your progress in Upstash Redis
- `vercel.json`, `package.json` : Vercel config

## Deploy
1. Push this folder to a GitHub repo and import it in Vercel. Framework preset: **Other**. Leave build and output settings empty.
2. In the Vercel project: **Storage > Marketplace > Upstash for Redis** (free plan), create it and connect it to the project. This adds the REST URL and token variables automatically (`KV_REST_API_URL` / `KV_REST_API_TOKEN` or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`; both are supported).
3. **Settings > Environment Variables**: add `PASSCODE` with a secret of your choice. Redeploy.
4. Open the site, tap **☁ Sync**, enter the passcode once per device.

## How storage works
Progress is always saved on the device (localStorage) so it works offline. When you are connected, it is also pushed to Upstash a moment after each change, and pulled when you open the tab, every minute, and when you come back online. The newest change wins. The running timer is per device and is not synced. Use **Export backup** in the Report tab for a manual copy.

If you already have progress on two devices, connect the one with the most progress first.
