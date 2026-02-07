document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const heartLayer = document.getElementById("heart-layer");
  const mainCard = document.getElementById("mainCard");

  const emojis = ["❤️", "💖", "💕", "💘", "💗"];

  /* ❌ Move No button */
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* 💖 YES click → explosion */
  yesBtn.addEventListener("click", () => {
    mainCard.innerHTML = `
      <h1>YAYYYYY 🥹❤️</h1>
      <p>You just made me the happiest person alive.</p>
      <p>Happy Valentine’s Day 💘</p>
    `;

    for (let i = 0; i < 90; i++) {
      setTimeout(spawnBlastHeart, i * 20);
    }
  });

  /* 💕 Floating hearts (background) */
  function spawnFloatHeart() {
    const heart = document.createElement("div");
    heart.className = "float-heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";

    heartLayer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(spawnFloatHeart, 500);

  /* 💥 Explosion hearts */
  function spawnBlastHeart() {
    const heart = document.createElement("div");
    heart.className = "blast-heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300 + 100;

    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    heartLayer.appendChild(heart);

    setTimeout(() => heart.remove(), 1400);
  }
});
