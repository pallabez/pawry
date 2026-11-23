/* empty css             */import"./latin-900-Fxq72Xyc.js";import{c as l,a as m,b as h,L as p,d as u}from"./scene-DjK9IsFc.js";const g="../",s="../play/",c=new URLSearchParams(location.search),o=c.get("as"),r=o==="ios"||o==="android"?o:u(navigator.userAgent,navigator.maxTouchPoints),d=l(document.documentElement.dataset.src??c.get("src")),e=document.getElementById("get"),t=m(r,p,d);if(t.to==="home"||!e)location.replace(g);else if(t.to==="play")location.replace(s);else{const i=r==="ios"?"App Store":"Google Play";e.innerHTML=`<div class="thumb"></div>
     <h1>Opening ${i}…</h1>
     <p>If nothing happens, tap the button.</p>
     <a class="btn" id="go">Get Pawry: Ear Game</a>
     <a class="btn ghost" href="${s}">Play in your browser</a>`;const a=e.querySelector(".thumb");a&&h(a);const n=e.querySelector("#go");n&&(n.href=t.url,location.replace(t.url))}
