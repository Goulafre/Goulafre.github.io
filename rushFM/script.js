// Playful placeholder JS for buttons
const buttons = document.querySelectorAll('.controls button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`You clicked "${btn.textContent}"! Placeholder action.`);
  });
});