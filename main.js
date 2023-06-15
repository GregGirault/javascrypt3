document.getElementById("input").addEventListener("keyup", function (event) {
  const capsLockActive = event.getModifierState("CapsLock");
  const numLockActive = event.getModifierState("NumLock");

  if (capsLockActive && numLockActive) {
    document.getElementById("warning").textContent =
      "Caps Lock and Num Lock are activated";
    document.getElementById("warning").style.display = "block";
  } else if (capsLockActive) {
    document.getElementById("warning").textContent =
      "Caps Lock is activated";
    document.getElementById("warning").style.display = "block";
  } else if (numLockActive) {
    document.getElementById("warning").textContent =
      "Num Lock is activated";
    document.getElementById("warning").style.display = "block";
  } else {
    document.getElementById("warning").style.display = "none";
  }
});
