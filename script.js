const heartLayer = document.getElementById("heart-layer");
const hearts = ["❤️", "💖", "💕", "💘", "💗"];

function spawnHeart() {
  const h = document.createElement("div");
  h.className = "float-heart";
  h.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 20 + 20 + "px";

  heartLayer.appendChild(h);

  setTimeout(() => h.remove(), 6000);
}

// 🔥 this MUST run
setInterval(spawnHeart, 400);

// DEBUG PROOF
console.log("Heart spawner running");
