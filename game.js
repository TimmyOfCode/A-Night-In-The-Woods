const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
const WIDTH = 800;
const HEIGHT = 600;
canvas.width = WIDTH;
canvas.height = HEIGHT;

// Character settings
const charSpeed = 5;
let charX = WIDTH / 2;
let charY = HEIGHT / 2;
let characterImage = new Image(); // Placeholder for character image

// Set the character image URL here (Replace this URL with your desired image URL)
const characterImageURL = 'https://example.com/path/to/your/character-image.png';  // <--- CHANGE THIS URL

// Load character image using the provided URL
characterImage.src = characterImageURL;

// Background function: generate random green shades
function generateBackground() {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const r = randomInt(50, 100);
      const g = randomInt(100, 255);
      const b = randomInt(50, 100);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Random number generator function
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Handle character movement
function moveCharacter() {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w": // Move up
        charY -= charSpeed;
        break;
      case "s": // Move down
        charY += charSpeed;
        break;
      case "a": // Move left
        charX -= charSpeed;
        break;
      case "d": // Move right
        charX += charSpeed;
        break;
    }
  });
}

// Draw character on the canvas
function drawCharacter() {
  ctx.drawImage(characterImage, charX, charY);
}

// Main game loop
function gameLoop() {
  // Clear the screen
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  
  // Generate background
  generateBackground();
  
  // Draw the character
  drawCharacter();
  
  // Loop the game
  requestAnimationFrame(gameLoop);
}

// Ensure the image is loaded before starting the game
characterImage.onload = function() {
  moveCharacter();
  gameLoop();
};
