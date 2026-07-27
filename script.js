// =========================
// ELEMENTS
// =========================

const startBtn = document.getElementById("startBtn");
const blowBtn = document.getElementById("blowBtn");

const galleryBtn = document.getElementById("galleryBtn");

const restart = document.getElementById("restart");

const flame = document.getElementById("flame");

const giftClosed = document.getElementById("giftClosed");

const giftOpen = document.getElementById("giftOpen");

const cakePage = document.getElementById("cakePage");

const giftPage = document.getElementById("giftPage");

const gallery = document.getElementById("gallery");

// =========================
// START
// =========================

startBtn.onclick=()=>{

cakePage.scrollIntoView({

behavior:"smooth"

});

}

// =========================
// BLOW CANDLE
// =========================

blowBtn.onclick=()=>{

flame.style.opacity="0";

blowBtn.innerHTML="Wish Made ❤️";

createConfetti();

setTimeout(()=>{

giftPage.scrollIntoView({

behavior:"smooth"

});

},1200);

}

// =========================
// OPEN GIFT
// =========================

giftClosed.onclick=()=>{

giftClosed.style.display="none";

giftOpen.style.display="block";

createSparkles();

setTimeout(()=>{

document.querySelector(".messagePage")

.scrollIntoView({

behavior:"smooth"

});

},1200);

}

// =========================
// OPEN GALLERY
// =========================

galleryBtn.onclick=()=>{

gallery.scrollIntoView({

behavior:"smooth"

});

}

// =========================
// REPLAY
// =========================

restart.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// =========================
// CONFETTI
// =========================

function createConfetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.animationDelay=

Math.random()*2+"s";

c.style.background=

["gold","#fff","#FFD76A","#ffdd55"][

Math.floor(Math.random()*4)

];

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}

// =========================
// SPARKLES
// =========================

function createSparkles(){

for(let i=0;i<50;i++){

let s=document.createElement("div");

s.className="spark";

s.style.left=

(window.innerWidth/2-80+

Math.random()*160)+"px";

s.style.top=

(window.scrollY+350+

Math.random()*100)+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},2500);

}

}

// =========================
// FLOATING STARS
// =========================

setInterval(()=>{

let star=document.createElement("div");

star.className="floatingStar";

star.style.left=Math.random()*100+"vw";

star.style.animationDuration=

5+Math.random()*5+"s";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},9000);

},400);

// =========================
// MOON PARALLAX
// =========================

window.addEventListener("scroll",()=>{

document.querySelector(".moon")

.style.transform=

`translateY(${window.scrollY*.12}px)`;

});

// =========================
// SHOW MESSAGE
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show","fade");

}

});

},{threshold:.4});

observer.observe(document.querySelector(".messagePage"));

// =========================
// FLOATING HEARTS
// =========================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

4+Math.random()*4+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,900);

// =========================
// TYPEWRITER EFFECT
// =========================

const msg=document.querySelector(".card p");

const fullText=msg.innerHTML;

msg.innerHTML="";

let i=0;

function type(){

if(i<fullText.length){

msg.innerHTML+=fullText.charAt(i);

i++;

setTimeout(type,25);

}

}

setTimeout(type,2500);

// =========================
// PHOTO CLICK ZOOM
// =========================

document.querySelectorAll(".photo").forEach(photo=>{

photo.onclick=()=>{

photo.classList.toggle("zoom");

}

});

giftClosed.onclick=()=>{

giftClosed.classList.add("shake");

setTimeout(()=>{

giftClosed.style.display="none";

giftOpen.style.display="block";

createSparkles();

document.querySelector(".messagePage")

.scrollIntoView({

behavior:"smooth"

});

},900);

}
