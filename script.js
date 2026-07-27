// ===============================
// ELEMENTS
// ===============================

const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");

const gift = document.querySelector(".gift-box");
const lid = document.getElementById("lid");
const light = document.querySelector(".gift-light");

const card = document.getElementById("card");
const gallery = document.getElementById("gallery");

const photoBtn = document.getElementById("photoBtn");
const replay = document.getElementById("replay");

// ===============================
// INITIAL STATE
// ===============================

card.style.opacity = "0";
card.style.transform = "translateY(120px)";

gallery.style.opacity = "0";
gallery.style.transform = "translateY(120px)";

// ===============================
// BLOW CANDLE
// ===============================

blowBtn.addEventListener("click", () => {

flame.style.transition = ".4s";
flame.style.opacity = "0";

smoke.style.opacity = "1";
smoke.style.animation = "smoke 2s forwards";

blowBtn.innerHTML = "Wish Made ❤️";
blowBtn.disabled = true;

setTimeout(() => {

document.getElementById("gift").scrollIntoView({

behavior:"smooth"

});

},1800);

});

// ===============================
// OPEN GIFT
// ===============================

let opened = false;

gift.addEventListener("click",()=>{

if(opened) return;

opened = true;

lid.style.transform =
"translateY(-120px) rotate(-12deg)";

light.style.opacity = "1";

light.style.transform =
"translateX(-50%) scale(1.5)";

setTimeout(()=>{

card.style.transition=".8s";

card.style.opacity="1";

card.style.transform="translateY(0)";

card.scrollIntoView({

behavior:"smooth"

});

},900);

});

// ===============================
// SHOW PHOTOS
// ===============================

photoBtn.addEventListener("click",()=>{

gallery.style.transition=".8s";

gallery.style.opacity="1";

gallery.style.transform="translateY(0)";

gallery.scrollIntoView({

behavior:"smooth"

});

});

// ===============================
// REPLAY
// ===============================

replay.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// PARALLAX MOON
// ===============================

window.addEventListener("scroll",()=>{

const moon = document.querySelector(".moon");

const y = window.scrollY;

moon.style.transform =
`translateY(${y*0.12}px)`;

});

// ===============================
// SHOOTING STARS
// ===============================

function createStar(){

const star=document.createElement("div");

star.className="shoot";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*250+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(createStar,2200);

// ===============================
// FLOATING PARTICLES
// ===============================

for(let i=0;i<35;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=

5+Math.random()*8+"s";

p.style.animationDelay=

Math.random()*6+"s";

document.body.appendChild(p);

}
