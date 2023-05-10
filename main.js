// Set initial values for the pet's status
let petName = "Mali";
let hungerLevel = 100;
let mood = "Angry";
let moodLevel = "0";

// Get DOM elements for the pet's status
const petNameEl = document.querySelector("#pet-name");
const hungerEl = document.querySelector("#hunger-level");
const moodEl = document.querySelector("#mood");
const moodLevelEl = document.querySelector("#mood-level");

// Get DOM elements for the action buttons
const feedButton = document.getElementById("feed-button");
const playButton = document.getElementById("play-button");

// TODO: The way we update and use hungerLevel can cause unexpected results
// Ask the students if they can think of a way to improve the code

// TODO: Ask the students to explain type coercion
// I found the following documentation on type coercion https://www.scaler.com/topics/javascript/type-coercion-javascript/

// Function to update the pet's status when fed
function feedPet() {
  if (hungerLevel >= 0) {
    hungerLevel -= 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Happy";
    moodEl.innerText = mood;
  } else {
    hungerLevel = 0;
    hungerEl.innerText = "0%";
    mood = "Sad";
    moodEl.innerText = mood;
  }
}
// Function to update the pet's status when played with
function playWithPet() {
  if (hungerLevel < 100) {
    hungerLevel += 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Excited";
    moodEl.innerText = mood;
  } else {
    mood = "Bored";
    moodEl.innerText = mood;
  }
}

function showMessage() {
  alert(
    "Hi there! Welcome to MaliCat's world! We love to Eat, Sleep and Develop Code! Come and hang out with me!"
  );
}

showMessage();

// Add event listeners to the action buttons
feedButton.addEventListener("click", feedPet);
playButton.addEventListener("click", playWithPet);
