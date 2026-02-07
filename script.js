function moveNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClicked() {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px;">
      <h1>YAYYYYY 🥹❤️</h1>
      <p>You just made me the happiest person alive.</p>
      <p>Happy Valentine’s Day 💘</p>
    </div>
  `;
}
