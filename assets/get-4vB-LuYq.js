import{c as u,s as d,a as g,L as l,d as p}from"./scene-B_UUHHJM.js";const a="../",h=new URLSearchParams(location.search),o=h.get("as"),s=o==="ios"||o==="android"?o:p(navigator.userAgent,navigator.maxTouchPoints),b=u(document.documentElement.dataset.src??h.get("src")),e=document.getElementById("get");if(s==="other"||!e)location.replace(a);else{const n=s==="ios"?"iPhone":"Android",m=s==="ios"?"App Store":"Google Play",t=d(s,l,b);e.innerHTML=t?`<div class="thumb"></div>
       <h1>Opening ${m}…</h1>
       <p>If nothing happens, tap the button.</p>
       <a class="btn" id="go">Get Pawry: Ear Game</a>
       <a class="btn ghost" href="${a}">About the game</a>`:`<div class="thumb"></div>
       <span class="pill">COMING SOON</span>
       <h1>Not on ${n} yet</h1>
       <p>Pawry: Ear Game is on its way to ${n}. Until then, play along with the reels.</p>
       <a class="btn" id="reels">Watch the reels</a>
       <a class="btn ghost" href="${a}">About the game</a>`;const c=e.querySelector(".thumb");c&&g(c);const r=e.querySelector("#go"),i=e.querySelector("#reels");i&&(i.href=l.youtube),r&&t&&(r.href=t,location.replace(t))}
