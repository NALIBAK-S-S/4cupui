// Select all the cups
const cups = document.querySelectorAll('.cup');

// Add a click event to each cup
cups.forEach(cup => {
  cup.addEventListener('click', function() {
    // Change color on click
    this.style.backgroundColor = getRandomColor();
    this.style.borderColor = getRandomColor();
  });
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


