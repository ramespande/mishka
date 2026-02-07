// FORCE JS TO WAIT
window.onload = () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const heartLayer = document.getElementById("heart-layer");
  const mainCard = document.getElementById("mainCard");

  const emojis = ["❤️", "💖", "💕", "💘", "💗"];

  /* Floating hearts */
  function spawnFloatHeart() {
    const h = document.createElement("div");
    h.className = "float-heart";
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 20 + 20 + "px";
    heartLayer.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }

  setInterval(spawnFloatHeart, 500);

  /* No button */
  noBtn.onmouseover = () => {
    noBtn.style.transform =
      `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
  };

  /* YES click */
  yesBtn.onclick = () => {
    mainCard.innerHTML = `
      <h1>YAYYYYY 🥹❤️</h1>
      <p>You just made me the happiest person alive.</p>
      <p>Happy Valentine’s Day 💘</p>
    `;

    for (let i = 0; i < 80; i++) {
      setTimeout(spawnBlastHeart, i * 20);
    }
  };

  /* Explosion hearts */
  function spawnBlastHeart() {
    const h = document.createElement("div");
    h.className = "blast-heart";
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300 + 100;

    h.style.setProperty("--x", Math.cos(angle) * distance + "px");
    h.style.setProperty("--y", Math.sin(angle) * distance + "px");

    h.style.left = "50%";
    h.style.top = "50%";
    h.style.fontSize = Math.random() * 20 + 20 + "px";

    heartLayer.appendChild(h);
    setTimeout(() => h.remove(), 1400);
  }
};
