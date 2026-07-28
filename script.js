(function () {
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
  var giftBtn = document.getElementById("giftBtn");
  var giftClosed = document.getElementById("giftClosed");
  var giftOpen = document.getElementById("giftOpen");
  var giftHint = document.getElementById("giftHint");
  var shaking = false;

  giftBtn.addEventListener("click", function () {
    if (shaking) return;
    shaking = true;
    giftBtn.classList.remove("drift");
    giftBtn.classList.add("shake");
    giftHint.textContent = "Shaking…";
    setTimeout(function () {
      giftBtn.hidden = true;
      giftOpen.hidden = false;
      giftOpen.classList.add("reveal");
      giftHint.textContent = "Opening…";
      setTimeout(function () { show("card"); }, 2800);
    }, 800);
  });
})();
