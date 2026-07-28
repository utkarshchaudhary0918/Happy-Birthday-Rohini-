(function () {
  "use strict";

  /* ---------- Sparkles ---------- */
  var sparkles = document.getElementById("sparkles");
  for (var i = 0; i < 40; i++) {
    var s = document.createElement("span");
    var size = Math.random() * 3 + 1;
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.animationDelay = Math.random() * 3 + "s";
    sparkles.appendChild(s);
  }

  /* ---------- Confetti ---------- */
  var confetti = document.getElementById("confetti");
  var colors = ["#e8c56a", "#f2dfa4", "#b8862f", "#ffd580"];
  for (var j = 0; j < 30; j++) {
    var b = document.createElement("span");
    var size2 = 4 + Math.random() * 6;
    var dur = 3 + Math.random() * 3;
    b.style.left = Math.random() * 100 + "%";
    b.style.width = size2 + "px";
    b.style.height = size2 * 1.6 + "px";
    b.style.background = colors[j % colors.length];
    b.style.animationDuration = dur + "s";
    b.style.animationDelay = Math.random() * 2 + "s";
    b.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    confetti.appendChild(b);
  }

  /* ---------- Scene navigation ---------- */
  var order = ["landing", "cake", "gift", "card", "album", "message", "thanks"];
  var scenes = {};
  order.forEach(function (name) {
    scenes[name] = document.querySelector('[data-scene="' + name + '"]');
  });

  function show(name) {

    order.forEach(function (n) {

        var el = scenes[n];

        if (n === name) {

            el.hidden = false;

            el.classList.remove("active");

            void el.offsetWidth;

            requestAnimationFrame(function () {
                el.classList.add("active");
            });

        } else {

            el.classList.remove("active");

            el.hidden = true;

        }

    });

    window.scrollTo(0, 0);

}
   show("landing");
  
  document.querySelectorAll("[data-next]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var current = btn.closest(".scene").getAttribute("data-scene");
      var idx = order.indexOf(current);
      if (idx >= 0 && idx < order.length - 1) show(order[idx + 1]);
    });
  });

  document.getElementById("restart").addEventListener("click", function () {
    window.location.reload();
});

  /* ---------- Cake scene ---------- */
  var cakeStage = document.querySelector(".cake-stage");
  var cakeControls = document.getElementById("cakeControls");
  var wishGranted = document.getElementById("wishGranted");
  var tapBtn = document.getElementById("tapBtn");
  var micBtn = document.getElementById("micBtn");
  var cakeHint = document.getElementById("cakeHint");

  function blowOutCandle() {
    if (cakeStage.classList.contains("blown")) return;
    cakeStage.classList.add("blown");
cakeControls.hidden = true;

// Let the smoke finish first
// Let the smoke finish
setTimeout(function () {

    // Blur the whole cake section
    document.querySelector('[data-scene="cake"]').classList.add("blur");

    // Show the text
    wishGranted.classList.add("show");

}, 2000);

// Go to gift after a short pause
setTimeout(function () {
    wishGranted.classList.remove("show");
}, 3400);

setTimeout(function () {

    document.querySelector('[data-scene="cake"]').classList.remove("blur");

    show("gift");

}, 4000);
  }
  tapBtn.addEventListener("click", blowOutCandle);

  micBtn.addEventListener("click", function () {
    if (!navigator.mediaDevices) { blowOutCandle(); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      cakeHint.textContent = "Listening… blow softly ✧";
      micBtn.hidden = true;
      var AC = window.AudioContext || window.webkitAudioContext;
      var ctx = new AC();
      var src = ctx.createMediaStreamSource(stream);
      var analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      src.connect(analyser);
      var data = new Uint8Array(analyser.frequencyBinCount);
      function tick() {
        analyser.getByteFrequencyData(data);
        var sum = 0;
        for (var k = 0; k < data.length; k++) sum += data[k];
        var avg = sum / data.length;
        if (avg > 55) {
          stream.getTracks().forEach(function (t) { t.stop(); });
          ctx.close();
          blowOutCandle();
          return;
        }
        if (!cakeStage.classList.contains("blown")) requestAnimationFrame(tick);
      }
      tick();
    }).catch(function () { /* fallback tap still works */ });
  });

  /* ---------- Gift scene ---------- */
  var magicGlow = document.getElementById("magicGlow");
var magicText = document.getElementById("magicText");
  var giftBtn = document.getElementById("giftBtn");
  var giftClosed = document.getElementById("giftClosed");
  var giftOpen = document.getElementById("giftOpen");
  var giftHint = document.getElementById("giftHint");
  var particles = document.getElementById("magicParticles");
  var shaking = false;

  function burstParticles(){

    for(var i=0;i<28;i++){

        var p=document.createElement("span");

        p.className="magicParticle";

        var x=(Math.random()*240)-120;
        var y=-(Math.random()*220)-40;

        p.style.setProperty("--x",x+"px");
        p.style.setProperty("--y",y+"px");

        p.style.animationDelay=(Math.random()*0.08)+"s";

        particles.appendChild(p);

        (function(el){
            setTimeout(function(){
                el.remove();
            },1000);
        })(p);

    }

}
  giftBtn.addEventListener("click", function () {
    if (shaking) return;
    shaking = true;
    giftBtn.classList.remove("drift");
    giftBtn.classList.add("shake");

if (navigator.vibrate) {
    navigator.vibrate([200, 80, 200, 80, 300]);
}
    giftHint.textContent = "Shaking…";
    setTimeout(function () {
    magicGlow.classList.add("show");
magicText.classList.add("show");
      burstParticles();
    giftBtn.hidden = true;
    giftOpen.hidden = false;
    giftOpen.classList.add("reveal");
    giftHint.textContent = "Opening…";
      

    var letter = document.getElementById("letterEnvelope");
var flash = document.getElementById("flash");

letter.hidden = false;

setTimeout(function () {
    letter.classList.add("fly");
},300);

setTimeout(function () {
    flash.classList.add("show");
},1450);

setTimeout(function () {
    flash.classList.remove("show");
},1600);

setTimeout(function () {
    show("card");
},1650);

}, 800);
});
})();
if (/Android/i.test(navigator.userAgent)) {
    document.body.classList.add("android");
}

alert(navigator.userAgent);

alert(document.body.className);

