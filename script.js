/* =======================
   Part 2: JavaScript Functions
   Demonstrating Parameters, Return Values, Scope
   ======================= */

// Global variable
let globalMultiplier = 2;

// Function with parameter & return value
function squareNumber(num) {
  // local variable (scope demo)
  let result = num * num * globalMultiplier;
  return result;
}

// Reusable function to update DOM
function displayResult(message) {
  document.getElementById("calcResult").textContent = message;
}

// Event listener to use functions
document.getElementById("calcBtn").addEventListener("click", function () {
  let input = 5; // Example number
  let output = squareNumber(input);
  displayResult(`The square of ${input} × multiplier is: ${output}`);
});

/* =======================
   Part 3: Combining CSS & JavaScript
   ======================= */

// Animate box on button click
const animBox = document.querySelector(".anim-box");
document.getElementById("animateBoxBtn").addEventListener("click", function () {
  animBox.classList.toggle("active");
});

// Modal popup
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Function to show modal
function showModal() {
  modal.classList.add("show");
}

// Function to hide modal
function hideModal() {
  modal.classList.remove("show");
}

toggleModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", hideModal);
