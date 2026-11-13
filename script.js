(()=>{
const d=document,$=(s,c=d)=>c.querySelector(s),$$=(s,c=d)=>[...c.querySelectorAll(s)];
d.documentElement.classList.add('js');
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const vt=f=>{(d.startViewTransition&&!rm)?d.startViewTransition(f):f()};
const P=[["Nightfall Identity","Branding","#2b1a6e","#ff6b8a","Logo, type and motion rules for a late-night radio brand."],
["Tide Store","Web","#0f766e","#ffc857","A fast shop with 3D product viewers and no heavy libraries."],
["Halo Lamp","Product","#c44dff","#4fd1c5","Industrial design for a lamp that follows your daylight."],
["Fable Books","Branding","#b45309","#ff6b8a","Warm packaging system for an independent publisher."],
["Pulse Dashboard","Web","#1e3a8a","#4fd1c5","Live data views with scroll-linked charts."],
["Ripple Watch","Product","#9d174d","#ffc857","Glass watch face study with haptic notification patterns."]];
const gal=$('#gal');
P.forEach((p,i)=>{const b=d.createElement('button');b.className='proj';b.dataset.cat=p[1];b.dataset.i=i;
b.style.cssText=`--g:linear-gradient(135deg,${p[2]},#140f2e);--g2:radial-gradient(circle at 30% 30%,${p[3]},transparent 60%),conic-gradient(from ${i*50}deg,${p[2]},${p[3]},${p[2]});view-transition-name:pj${i}`;
b.innerHTML=`<div class="art"></div><div class="cap"><span class="tag">${p[1]}</span><h3>${p[0]}</h3><p>${p[4]}</p></div>`;
b.onclick=()=>{const q=P[i];$('#lbi').style.background=b.style.getPropertyValue('--g2');$('#lc').textContent=q[1];$('#lt').textContent=q[0];$('#ld').textContent=q[4];vt(()=>$('#lb').showModal())};
gal.append(b)});
$$('[data-f]').forEach(btn=>btn.onclick=()=>{const f=btn.dataset.f;vt(()=>{$$('[data-f]').forEach(x=>x.setAttribute('aria-pressed',x===btn));$$('.proj').forEach(p=>p.hidden=f!=='all'&&p.dataset.cat!==f)})});
// dialogs
$$('[data-open]').forEach(b=>b.onclick=()=>{nav.classList.remove('show');vt(()=>$('#'+b.dataset.open).showModal())});
$$('dialog').forEach(dl=>{dl.addEventListener('click',e=>{if(e.target===dl||e.target.closest('[data-close]'))dl.close()})});
$('#cf').onsubmit=e=>{e.preventDefault();$('#ok').textContent='Thanks! We will reply within two days.';setTimeout(()=>{$('#contact').close();$('#ok').textContent='';e.target.reset()},1500)};
// nav
const nav=$('#menu'),bg=$('.burger');
bg.onclick=()=>bg.setAttribute('aria-expanded',nav.classList.toggle('show'));
$$('#menu a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show');bg.setAttribute('aria-expanded',false)}));
const dd=$('.dd'),db=$('button',dd);
db.onclick=()=>db.setAttribute('aria-expanded',dd.classList.toggle('open'));
d.addEventListener('keydown',e=>{if(e.key==='Escape'){dd.classList.remove('open');db.setAttribute('aria-expanded',false);nav.classList.remove('show')}});
d.addEventListener('click',e=>{if(!dd.contains(e.target)){dd.classList.remove('open');db.setAttribute('aria-expanded',false)}});
// 3D tilt (pointer)
if(!rm)$$('.pcard').forEach(c=>{const p=$('.pin',c);
c.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.setProperty('--ry',x*18+'deg');p.style.setProperty('--rx',-y*18+'deg')});
c.addEventListener('pointerleave',()=>{p.style.removeProperty('--ry');p.style.removeProperty('--rx')})});
// fallbacks when scroll-driven animations are unsupported
const sd=CSS.supports('animation-timeline: scroll()');
if(!sd){const bar=$('#bar');let t=0;const u=()=>{t=0;const y=scrollY,m=d.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${m>0?y/m:0})`;d.documentElement.style.setProperty('--sy',rm?0:y)};
addEventListener('scroll',()=>{t||(t=requestAnimationFrame(u))},{passive:true});u()}
if(!CSS.supports('animation-timeline: view()')){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.reveal').forEach(r=>io.observe(r))}
// band parallax tweak (works with or without SD)
const band=$('.band');if(band&&!rm){let q=0;addEventListener('scroll',()=>{q||(q=requestAnimationFrame(()=>{q=0;const r=band.getBoundingClientRect();band.style.setProperty('--py',(r.top*-.15)+'px')}))},{passive:true})}
})();
