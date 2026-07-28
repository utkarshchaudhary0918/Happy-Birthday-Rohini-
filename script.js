// =============================
// SCENES
// =============================
alert("JS Loaded");
const scenes = document.querySelectorAll(".scene");

let current = 0;

function showScene(index){

scenes.forEach((scene,i)=>{

scene.classList.remove("active");

if(i===index){

scene.classList.add("active");

}

});

current=index;

}

// =============================
// ELEMENTS
// =============================

const begin=document.getElementById("begin");

const blow=document.getElementById("blow");

const flame=document.getElementById("flame");

const smoke=document.getElementById("smoke");

const giftClosed=document.getElementById("giftClosed");
console.log(giftClosed);

giftClosed.onclick = function () {
    alert("Gift clicked!");
};

const giftOpen=document.getElementById("giftOpen");

const goldLight=document.querySelector(".goldLight");

const letter=document.getElementById("letter");

const typed=document.getElementById("typed");

const continueBtn=document.getElementById("continue");

const finish=document.getElementById("finish");

const replay=document.getElementById("replay");

// =============================
// BEGIN
// =============================

begin.onclick=()=>{

showScene(1);

};

// =============================
// CANDLE
// =============================

blow.onclick=()=>{

blow.disabled=true;

flame.style.opacity="0";

smoke.style.opacity="1";

let y=0;

let smokeAnim=setInterval(()=>{

y+=4;

smoke.style.transform=

`translate(-50%,-${y}px) scale(${1+y/80})`;

smoke.style.opacity=1-y/90;

if(y>90){

clearInterval(smokeAnim);

}

},20);

createConfetti();

setTimeout(()=>{

showScene(2);

},1800);

};

// =============================
// GIFT
// =============================

// =============================
// GIFT
// =============================

// =============================
// GIFT
// =============================

alert("Gift section reached");

if (giftClosed) {

    alert("Gift element found");

    giftClosed.addEventListener("click", function () {

        alert("Gift clicked!");

    });

} else {

    alert("Gift element NOT found");

}

// =============================
// LETTER
// =============================

const message=

`Happy Birthday Rohini ❤️

May your smile never fade.

May every dream become reality.

Stay happy.

Stay amazing.

You deserve the best.

Happy Birthday 🎂`;

let i=0;

function typeLetter(){

typed.innerHTML="";

i=0;

continueBtn.style.display="none";

let typer=setInterval(()=>{

typed.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(typer);

continueBtn.style.display="block";

}

},35);

}

// =============================
// CONTINUE
// =============================

continueBtn.onclick=()=>{

showScene(3);

};

// =============================
// FINISH
// =============================

finish.onclick=()=>{

createHearts();

showScene(4);

};

// =============================
// REPLAY
// =============================

replay.onclick=()=>{

// back to scene one

showScene(0);

// flame back

flame.style.opacity="1";

// smoke reset

smoke.style.opacity="0";

smoke.style.transform="translate(-50%,0) scale(1)";

// cake button

blow.disabled=false;

// gift reset

giftClosed.style.display="block";

giftClosed.style.pointerEvents="auto";

giftClosed.classList.remove("shake");

giftOpen.style.display="none";

goldLight.style.opacity="0";

// letter

letter.classList.remove("show");

typed.innerHTML="";

continueBtn.style.display="none";

};

// =============================
// CONFETTI
// =============================

function createConfetti(){

for(let i=0;i<120;i++){

let c=document.createElement("span");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=

["gold","#fff","#FFD86B","#ffeb8a"]

[Math.floor(Math.random()*4)];

c.style.animationDelay=

Math.random()*1.5+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},4500);

}

}

// =============================
// HEARTS
// =============================

function createHearts(){

for(let i=0;i<40;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=

4+Math.random()*3+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},7000);

}

}
