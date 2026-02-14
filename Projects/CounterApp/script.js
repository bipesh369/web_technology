// Initialize counter value
let count = 0

// Get DOM elements
const counterDisplay = document.getElementById('counter')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const resetBtn = document.getElementById('reset')

// Function to update the counter display
function updateCounter() {
  counterDisplay.textContent = count;

  // Update color based on value
  counterDisplay.classList.remove('positive', 'negative')
  if(count > 0) {
    counterDisplay.classList.add('positive')
  } else if (count < 0) {
    counterDisplay.classList.add('negative')
  }
}

// Function to increment counter
function increment() {
  count++
  updateCounter()
}

// Function to decrement counter
function decrement() {
  count--
  updateCounter()
}

// Function to reset counter
function reset() {
  count = 0
  updateCounter()
}

// Add event listeners to buttons
incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
resetBtn.addEventListener('click', reset)
