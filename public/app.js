const DATA=[{k:'AMA',n:'Advanced Management Accounting',los:[
['LO1 Budgeting & budgetary control',['*Budget approaches: incremental, zero-based, activity-based, rolling (behavioural implications & suitability)','*Budgeted profit or loss: sales, purchases & cost of sales','*Budgeted SOFP: working capital, capex, long-term financing','*Cash budget: sales collections & purchase payments','*Material mix & yield variances','*Sales mix & quantity variances','*Planning & operational variances and interrelationships','*Performance reports reconciling actual vs budget']],
['LO2 Public sector budgeting',['Incremental vs zero-based in public sector','Top-down vs bottom-up (pros, cons, political system, civil service)','*Role of MDAs: preparation, scrutiny & authorisation','*Role of the legislature: scrutinising the budget (Nepal examples)','*Executive & implementation: service costing','Job / contract costing for control']],
['LO3 Cost management & pricing',['*Marginal cost pricing','*Full cost pricing','*Activity-based pricing & cost drivers','*Cost-plus: mark-up vs margin conversions','*Target costing & pricing','*Life cycle costing & pricing','*Backflush accounting & pricing']],
['LO4 Divisional performance & transfer pricing',['Divisionalisation: advantages & disadvantages','*Profit as a divisional measure','*Return on investment (ROI)','*Residual income (RI)','*Cost-based transfer pricing','*Market-based transfer pricing','*Negotiated transfer pricing','*International transfer pricing: group tax, forex risk, challenges']],
['LO5 Current developments',['*Beyond budgeting & adaptive management processes','*Just-in-time','*Kaizen costing','*Value chain analysis','*Process re-engineering','IT strategy & business strategy: new technologies, customer experience, value vs cost','Factors influencing IT: adaptability, cost, environmental','Strategic management accounting','Role in environmental & sustainability reporting']]]},
{k:'AFR',n:'Advanced Financial Reporting',los:[
['LO1 Corporate reporting policies',['*Measurement bases: historical & current cost','*Fair value (NFRS 13): highest & best use, principal market, hierarchy, techniques','Nepalese GAAP, NFRS & legal requirements','Conceptual Framework: objective, qualitative characteristics, elements, presentation','Public sector accounting regulations','*Accounting policies & estimates (NAS 8 / IPSAS 3)','*First-time adoption (NFRS 1 / IPSAS 33)','Going concern, non-going-concern statements, accrual basis','*Sustainability & climate-related disclosures','Disclosure initiatives, due process, IASB work plan']],
['LO2 Application of accounting standards',['Policy choices affecting performance (PPE, investment property, grants)','Measurement effects: financial instruments, borrowing costs, inventories, impairment, held for sale','Classification effects: IP/owner-occupied/inventory; biological assets/PPE','Presentation of FS (NAS 1) & events after reporting period (NAS 10)','*Revenue five-step model (NFRS 15)','*Revenue scenarios: returns, warranties, principal/agent, options, licensing, repurchase, consignment, bill & hold','Contract costs; upfront fees; unexercised rights','Public sector revenue (IPSAS 9, 23, 11)','*Operating segments (NFRS 8 / IPSAS 18)','Discontinued operations (NFRS 5)','*Diluted EPS (NAS 33)','*Interim reporting (NAS 34)','NFRS for SMEs','Retirement benefit plans (NAS 26), mineral exploration (NFRS 6), insurance (NFRS 17/4), rate regulation (NFRS 14)','Related party disclosures (NAS 24 / IPSAS 20)','Issues covered by IFRS but not NFRS']],
['LO3 Assets & non-financial liabilities',['*Data analytics in valuation','PPE (NAS 16 / IPSAS 17)','Intangible assets (NAS 38)','Non-current assets held for sale (NFRS 5)','Inventories (NAS 2)','*Investment property (NAS 40): transfers, models','*Biological assets (NAS 41)','*Impairment: single asset (NAS 36)','*Impairment: CGUs, goodwill & shared assets','Impairment in public sector (IPSAS 21/26)','Provisions, contingencies, onerous contracts, restructuring (NAS 37)']],
['LO4 Financing',['*Classification & reclassification of financial instruments; fair value option','Initial & subsequent measurement incl. derivatives','*Derecognition & modification of liabilities','*Impairment: general, simplified, POCI (ECL)','Compound instruments & embedded derivatives','*Hedge accounting: fair value & cash flow, rebalancing','Macro hedging (NAS 39) & disclosure (NFRS 7)','Leases: lessee, recognition exemption, separation of components','*Lessor accounting','*Sale and leaseback','Public sector leases (IPSAS 13)','Borrowing costs (NAS 23)','Government grants (NAS 20)','*Consolidated statement of cash flows (NAS 7)','Single-entity cash flows & usefulness']],
['LO5 Employee remuneration',['Short-term, long-term & termination benefits','Defined contribution plans','*Defined benefit plans: curtailments, amendments, asset ceiling','*Equity-settled share-based payments (NFRS 2)','*Cash-settled & choice-of-settlement SBP','Group SBP, cancellations & settlements']],
['LO6 Groups',['Separate FS of investor','*Control, joint control & significant influence','Joint arrangements classification (NFRS 11)','Definition of a business; public sector combinations','*Goodwill / bargain purchase, contingent amounts','*Business combinations achieved in stages','Consolidation & equity accounting procedures','NCI, fair value adjustments, subsequent measurement','*Disposals & part disposals (loss of control / influence)','*Changes in controlling shareholding','Subsidiaries acquired for disposal; NFRS 12 disclosure']],
['LO7 Overseas activities',['Functional & presentation currency','Foreign currency transactions & exchange differences','*Translation of foreign operations','*Consolidation with foreign operation & goodwill retranslation','Hyperinflation (NAS 29)','Foreign currency cash flows']],
['LO8 Taxation',['Current tax','*Deferred tax: single entity incl. share-based payments','*Deferred tax in consolidated FS & business combinations']],
['LO9 Public sector accounting (Nepal)',['Importance & features of sound PFM','Budget formulation process','Budgeted information in FS (IPSAS 25)','Government accounting system','Role of Comptroller General, Auditor General & PAC']],
['LO10 Financial statement analysis',['*Non-financial information: management commentary, governance','*Sustainability & integrated reports','Limitations of financial analysis','*Ratio & trend analysis; stakeholder needs','Interpreting cash flow statements','*Economic environment & strategy from annual report','Inconsistencies & omissions','Comparing entities with different policies','*Underlying earnings & adjustments','Additional performance measures','*Business risks','*Financial risks (currency, interest, financing)','Accrual vs cash flow basis']],
['LO11 Ethics',['Fundamental principles & ethical codes','Identifying ethical issues in scenarios','Consequences & stakeholder impact','*Threats & safeguards','*Actions, resolutions & framing an answer']]]}];
const T={};DATA.forEach(s=>s.los.forEach((lo,j)=>lo[1].forEach((t,k)=>T[s.k+(j+1)+'.'+k]={sub:s.k,lo:lo[0],txt:t.replace(/^\*/,''),core:t[0]=='*'})));
const $=s=>document.querySelector(s),K='canook1',ds=d=>new Date(d).toLocaleDateString('en-CA'),today=()=>ds(Date.now());
let S={done:{},notes:{},ses:[],goal:120,exam:'',dark:0,tm:{mode:'focus',fm:25,acc:0,st:0,id:''},sub:'AMA'};
try{Object.assign(S,JSON.parse(localStorage.getItem(K)||'{}'))}catch(e){}
/* ---------- Upstash Redis sync (via /api/state) ---------- */
const sig=()=>JSON.stringify([S.done,S.notes,S.ses,S.goal,S.exam,S.dark,S.sub]);
let lastSig=sig(),pc=localStorage.getItem('canook-pc')||'',pt=null,syncing=false;
const store=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
const save=()=>{const g=sig();if(g!==lastSig){lastSig=g;S.updated=Date.now();schedPush()}store()};
const status=t=>{const b=$('#sy');if(b)b.textContent=t};
function schedPush(){if(!pc)return;clearTimeout(pt);pt=setTimeout(push,1500)}
async function api(method,body){
 const r=await fetch('/api/state',{method,headers:{'x-passcode':pc,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});
 if(r.status==401){pc='';localStorage.removeItem('canook-pc');status('☁ Sync');throw new Error('auth')}
 const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||'Server error');return j}
function payload(){const{tm,...rest}=S;return rest}
async function push(){if(!pc)return;try{status('☁ Saving…');await api('PUT',{state:payload(),updated:S.updated||Date.now()});status('☁ Synced')}catch(e){status(pc?'☁ Offline':'☁ Sync')}}
function refresh(){$('#gl').value=S.goal;$('#ex').value=S.exam;document.documentElement.dataset.d=S.dark;exd();strk();syl();rep();tick()}
async function pull(){
 if(!pc||syncing)return;syncing=true;
 try{status('☁ Syncing…');const r=await api('GET'),first=!localStorage.getItem('canook-synced');
  if(r.state&&(first||r.updated>(S.updated||0))){
   const rs=r.state;
   if(first){const have=new Set((rs.ses||[]).map(x=>x.at));rs.ses=(rs.ses||[]).concat(S.ses.filter(x=>!have.has(x.at)));rs.done=Object.assign({},S.done,rs.done||{})}
   const tm=S.tm;S=Object.assign({},S,rs,{tm,updated:first?Date.now():r.updated});lastSig=sig();store();refresh();
   localStorage.setItem('canook-synced','1');if(first)await push();else status('☁ Synced')}
  else if(!r.state||(S.updated||0)>r.updated){localStorage.setItem('canook-synced','1');await push()}
  else{localStorage.setItem('canook-synced','1');status('☁ Synced')}
 }catch(e){status(pc?'☁ Offline':'☁ Sync');if(e.message=='auth')toast('Wrong passcode')}
 syncing=false}
const toast=m=>{const t=$('#toast');t.textContent=m;t.className='s';setTimeout(()=>t.className='',2200)};
const MODES={focus:['Focus',0],short:['Short break',5],long:['Long break',15],free:['Stopwatch',0]};
const dur=()=>(S.tm.mode=='focus'?S.tm.fm:MODES[S.tm.mode][1])*60000;
const el=()=>S.tm.acc+(S.tm.st?Date.now()-S.tm.st:0);
const fmt=ms=>{const s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor(s%3600/60);return(h?h+':'+String(m).padStart(2,'0'):String(m).padStart(2,'0'))+':'+String(s%60).padStart(2,'0')};
const QS=['Every page you turn is a mark closer.','Small steps, big chartered dreams. 🎀','Revise today, relax on exam day.','One topic at a time, bestie.','Future CA in the making ✨'];
// petals + book pages
for(let i=0;i<9;i++){const p=document.createElement('div');p.className='petal';p.textContent='✿';p.style.cssText=`left:${i*11+Math.random()*6}%;font-size:${14+Math.random()*14}px;animation-duration:${14+Math.random()*12}s;animation-delay:-${Math.random()*20}s`;document.body.append(p)}
$('#pgs').innerHTML=[0,1,2,3,4,5].map(i=>`<div class="pg" style="--i:${i};z-index:${10-i}"></div>`).join('');
// timer UI
$('#modes').innerHTML=Object.entries(MODES).map(([k,v])=>`<button class="btn ghost" data-m="${k}">${v[0]}</button>`).join('');
$('#tsel').innerHTML='<option value="">— general study —</option>'+DATA.map(s=>s.los.map((lo,j)=>`<optgroup label="${s.k} · ${lo[0]}">`+lo[1].map((t,k)=>`<option value="${s.k}${j+1}.${k}">${t.replace(/^\*/,'').slice(0,70)}</option>`).join('')+'</optgroup>').join('')).join('');
function tick(){const tm=S.tm,e=el(),free=tm.mode=='free',d=dur();let shown=free?e:Math.max(0,d-e);
 $('#tt').textContent=fmt(shown);$('#tl').textContent=MODES[tm.mode][0]+(tm.st?'':e?' · paused':'');
 $('#ring').style.strokeDashoffset=free?741.4*(1-(e%3600000)/3600000):741.4*(e/d);
 $('#go').textContent=tm.st?'⏸ Pause':e?'▶ Resume':'▶ Start';$('#bk').classList.toggle('run',!!tm.st);
 document.title=(tm.st?fmt(shown)+' · ':'')+'CA Study Nook';
 if(tm.st&&!free&&shown<=0){beep();pause();toast('Time is up! 🎉');if(tm.mode=='focus')openLog();else reset()}
 const w=Math.round(todayMin()+(tm.mode!='short'&&tm.mode!='long'?e/60000:0));$('#gtxt').textContent=`Today: ${w} / ${S.goal} min`;$('#gbar').style.width=Math.min(100,w/S.goal*100)+'%';}
function pause(){if(S.tm.st){S.tm.acc+=Date.now()-S.tm.st;S.tm.st=0;save()}}
function reset(){S.tm.acc=0;S.tm.st=0;save();tick()}
function beep(){try{const a=new AudioContext();[660,880,1100].forEach((f,i)=>{const o=a.createOscillator(),g=a.createGain();o.frequency.value=f;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.15,a.currentTime+i*.25);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+i*.25+.22);o.start(a.currentTime+i*.25);o.stop(a.currentTime+i*.25+.25)})}catch(e){}}
$('#go').onclick=()=>{if(S.tm.st)pause();else{S.tm.st=Date.now();$('#quote').textContent=QS[Math.floor(Math.random()*QS.length)];save()}tick()};
$('#rst').onclick=()=>{if(!el()||confirm('Reset the timer without logging?'))reset()};
$('#fin').onclick=()=>{pause();if(el()<15000||S.tm.mode=='short'||S.tm.mode=='long'){reset();return}openLog()};
$('#modes').onclick=e=>{const m=e.target.dataset.m;if(!m)return;if(el()&&!confirm('Switch mode and reset current timer?'))return;S.tm.mode=m;reset();mk()};
function mk(){document.querySelectorAll('#modes .btn').forEach(b=>b.classList.toggle('on',b.dataset.m==S.tm.mode));$('#modes .btn.on')&&($('#modes .btn.on').style.background='var(--pk)',$('#modes .btn.on').style.color='#fff');document.querySelectorAll('#modes .btn:not(.on)').forEach(b=>{b.style.background='';b.style.color=''})}
$('#tsel').onchange=e=>{S.tm.id=e.target.value;save()};
$('#cm').onchange=e=>{S.tm.fm=Math.max(1,+e.target.value||25);save();tick()};
$('#gl').onchange=e=>{S.goal=Math.max(10,+e.target.value||120);save();tick();rep()};
$('#ex').onchange=e=>{S.exam=e.target.value;save();exd()};
function exd(){if(!S.exam){$('#exd').textContent='';return}const n=Math.ceil((new Date(S.exam)-new Date(today()))/864e5);$('#exd').textContent=n>=0?` · ${n} days to go 💪`:' · exam passed'}
// log dialog
function openLog(){const m=Math.max(1,Math.round(el()/60000));$('#dmin').value=m;const t=T[S.tm.id];$('#dinfo').textContent=(t?t.sub+' · '+t.txt:'General study')+' · '+today();$('#dnote').value='';$('#dlg').showModal()}
$('#dcan').onclick=()=>{$('#dlg').close();if(S.tm.mode=='focus'&&!S.tm.st&&el()>=dur())reset()};
$('#dsave').onclick=()=>{const n=$('#dnote').value.trim();if(!n){toast('Please write what you studied 🌸');return}
 S.ses.push({d:today(),at:Date.now(),m:Math.max(1,+$('#dmin').value||1),id:S.tm.id,n});reset();save();$('#dlg').close();toast('Session saved 🎀');strk();rep();syl()};
// stats
const todayMin=()=>S.ses.filter(s=>s.d==today()).reduce((a,s)=>a+s.m,0);
function days(){const d=new Set(S.ses.map(s=>s.d));Object.values(S.done).forEach(v=>d.add(ds(v.t)));return d}
function streak(){const d=days();let c=0,x=new Date();if(!d.has(ds(x)))x.setDate(x.getDate()-1);while(d.has(ds(x))){c++;x.setDate(x.getDate()-1)}
 const a=[...d].sort();let b=0,r=0,p=null;a.forEach(k=>{r=p&&(new Date(k)-new Date(p))==864e5?r+1:1;b=Math.max(b,r);p=k});return[c,b,d]}
function strk(){const[c,b,d]=streak();let h='';for(let i=6;i>=0;i--){const x=new Date();x.setDate(x.getDate()-i);h+=`<i class="${d.has(ds(x))?'on':''}" title="${ds(x)}"></i>`}$('#strk').innerHTML=`🔥 ${c} <span class="m">best ${b}</span> ${h}`}
// syllabus
const op=new Set(),nt=new Set(),spent=id=>S.ses.filter(s=>s.id==id).reduce((a,s)=>a+s.m,0);
function syl(){$('#stabs').innerHTML=DATA.map(s=>{const ids=Object.keys(T).filter(i=>T[i].sub==s.k),n=ids.filter(i=>S.done[i]).length;return`<button class="btn ${S.sub==s.k?'':'ghost'}" data-s="${s.k}">${s.n} · ${n}/${ids.length}</button>`}).join('');
 const s=DATA.find(x=>x.k==S.sub);
 $('#slist').innerHTML=`<div class="card"><div class="bar"><i style="width:${Math.round(Object.keys(T).filter(i=>T[i].sub==s.k&&S.done[i]).length/Object.keys(T).filter(i=>T[i].sub==s.k).length*100)}%"></i></div><p class="m" style="margin-bottom:0">★ core = teach/practise in class per ICAN guide · ♡ = confidence · ▶ = send to timer</p></div>`+s.los.map((lo,j)=>{const ids=lo[1].map((_,k)=>s.k+(j+1)+'.'+k),n=ids.filter(i=>S.done[i]).length;
 return`<details data-o="${s.k+j}" ${op.has(s.k+j)?'open':''}><summary><span>${lo[0]}</span><span class="m">${n}/${ids.length}</span></summary>`+ids.map(id=>{const t=T[id],d=S.done[id],c=d?d.c:0,sp=spent(id);
 return`<div class="row ${d?'dn':''}"><input type="checkbox" data-c="${id}" ${d?'checked':''}><span class="t">${t.txt} ${t.core?'<span class="core">★ core</span>':''}</span><span class="m">${sp?sp+' min':''}</span><button class="ic" data-h="${id}" title="Confidence">${'♥'.repeat(c)+'♡'.repeat(3-c)}</button><button class="ic" data-p="${id}" title="Study this">▶</button><button class="ic" data-n="${id}" title="Notes">📝</button></div>${nt.has(id)?`<textarea data-w="${id}" placeholder="Notes...">${S.notes[id]||''}</textarea>`:''}`}).join('')+'</details>'}).join('')}
$('#stabs').onclick=e=>{const s=e.target.dataset.s;if(s){S.sub=s;save();syl()}};
$('#slist').addEventListener('toggle',e=>{const o=e.target.dataset.o;if(o)e.target.open?op.add(o):op.delete(o)},true);
$('#slist').onclick=e=>{const d=e.target.dataset;
 if(d.h){const r=S.done[d.h];if(!r){toast('Tick the topic first 🌸');return}r.c=(r.c+1)%4;r.r=Date.now()}
 else if(d.p){S.tm.id=d.p;$('#tsel').value=d.p;tab('timer');toast('Topic set — press Start ▶')}
 else if(d.n){nt.has(d.n)?nt.delete(d.n):nt.add(d.n)}
 else return;save();syl();rep()};
$('#slist').onchange=e=>{const d=e.target.dataset;if(d.c){e.target.checked?S.done[d.c]={t:Date.now(),c:0,r:Date.now()}:delete S.done[d.c];if(e.target.checked)toast('Topic done! 🌷');save();syl();strk();rep()}
 if(d.w){S.notes[d.w]=e.target.value;save()}};
// report
const IV=[2,2,7,21];
function rep(){const[c,b]=streak(),tot=S.ses.reduce((a,s)=>a+s.m,0),wk=[];for(let i=6;i>=0;i--){const x=new Date();x.setDate(x.getDate()-i);const k=ds(x);wk.push([x.toLocaleDateString('en',{weekday:'short'}),S.ses.filter(s=>s.d==k).reduce((a,s)=>a+s.m,0)])}
 const mx=Math.max(30,...wk.map(w=>w[1])),sm=k=>S.ses.filter(s=>s.id?T[s.id]&&T[s.id].sub==k:false).reduce((a,s)=>a+s.m,0);
 const due=Object.entries(S.done).filter(([i,v])=>(Date.now()-v.r)/864e5>=IV[v.c]).sort((a,b)=>a[1].r-b[1].r).slice(0,8);
 $('#rep').innerHTML=`<div class="g"><div class="card stat"><b>${todayMin()}m</b>today (goal ${S.goal})</div><div class="card stat"><b>${(tot/60).toFixed(1)}h</b>total studied</div><div class="card stat"><b>🔥 ${c}</b>streak · best ${b}</div><div class="card stat"><b>${Object.keys(S.done).length}/${Object.keys(T).length}</b>topics done</div></div>
 <div class="card"><h2 style="margin-top:0">Last 7 days</h2><div class="bars">${wk.map(w=>`<div><i style="height:${w[1]/mx*90}px"></i>${w[1]}m<br>${w[0]}</div>`).join('')}</div></div>
 <div class="card"><h2 style="margin-top:0">By subject</h2>${DATA.map(s=>`<p>${s.n}: <b>${sm(s.k)} min</b></p>`).join('')}</div>
 <div class="card"><h2 style="margin-top:0">Revision due ♻️</h2>${due.length?due.map(([i])=>`<div class="row"><span class="t">${T[i].sub} · ${T[i].txt}</span><button class="btn ghost" data-rv="${i}">Revised ✓</button></div>`).join(''):'<p class="m">Nothing due. Tick topics as you finish them and they return here for spaced revision.</p>'}</div>
 <div class="card"><h2 style="margin-top:0">Daily reports</h2>${S.ses.slice().reverse().slice(0,40).map(s=>`<div class="row"><span class="m">${s.d} · ${s.m}m</span><span class="t"><b>${s.id&&T[s.id]?T[s.id].sub+' · '+T[s.id].txt:'General'}</b><br>${s.n.replace(/</g,'&lt;')}</span><button class="ic" data-x="${s.at}">✕</button></div>`).join('')||'<p class="m">No sessions yet.</p>'}
 <p><button class="btn ghost" id="ex1">⬇ Export backup</button> <button class="btn ghost" id="im1">⬆ Import</button><input type="file" id="imf" class="hid" accept=".json"></p></div>`}
$('#rep').onclick=e=>{const d=e.target.dataset;
 if(d.rv){S.done[d.rv].r=Date.now();toast('Nice revision! 💖')}
 else if(d.x){if(!confirm('Delete this session?'))return;S.ses=S.ses.filter(s=>s.at!=d.x)}
 else if(e.target.id=='ex1'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'}));a.download='ca-study-backup.json';a.click();return}
 else if(e.target.id=='im1'){$('#imf').click();return}else return;save();rep();strk();syl();tick()};
$('#rep').onchange=e=>{if(e.target.id!='imf')return;const f=e.target.files[0],r=new FileReader();r.onload=()=>{try{Object.assign(S,JSON.parse(r.result));save();location.reload()}catch(x){toast('Invalid file')}};f&&r.readAsText(f)};
// tabs & theme
function tab(t){['timer','syl','rep'].forEach(x=>$('#'+x).classList.toggle('hid',x!=t));document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.dataset.t==t));if(t=='rep')rep();if(t=='syl')syl()}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>tab(b.dataset.t));
$('#dk').onclick=()=>{S.dark=S.dark?0:1;document.documentElement.dataset.d=S.dark;save()};
document.documentElement.dataset.d=S.dark;
$('#cm').value=S.tm.fm;$('#gl').value=S.goal;$('#ex').value=S.exam;$('#tsel').value=S.tm.id||'';
mk();exd();strk();syl();rep();tab('timer');tick();setInterval(tick,250);
$('#sy').onclick=()=>{$('#spc').value='';$('#sdis').style.display=pc?'':'none';$('#sdlg').showModal()};
$('#scon').onclick=async()=>{const v=$('#spc').value.trim();if(!v)return;pc=v;localStorage.setItem('canook-pc',pc);$('#sdlg').close();await pull();if(pc)toast('Connected ☁')};
$('#sdis').onclick=()=>{pc='';localStorage.removeItem('canook-pc');status('☁ Sync');$('#sdlg').close();toast('Disconnected')};
$('#scan').onclick=()=>$('#sdlg').close();
pull();setInterval(pull,60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)pull()});
addEventListener('online',()=>{if(pc)push()});
