// Set initial values for the pet's status
let petName = "Mali";
let hungerLevel = 100;
let mood = "Angry";
let moodLevel = "0";
let sleepLevel = "Sleepy";

// Get DOM elements for the pet's status
const petNameEl = document.querySelector("#pet-name");
const hungerEl = document.querySelector("#hunger-level");
const moodEl = document.querySelector("#mood");
const moodLevelEl = document.querySelector("#mood-level");
const sleepLevelEl = document.querySelector("#sleep-level");
const codeLevelEl = document.querySelector("code-level");

// Get DOM elements for the action buttons
const feedButton = document.getElementById("feed-button");
const playButton = document.getElementById("play-button");
const sleepingButton = document.getElementById("sleep-button");
const codeButton = document.getElementById("code-button");

// Function to update the pet's status when fed
function feedPet() {
  // TODO: The way we update and use hungerLevel can cause unexpected results
  // Ask the students if they can think of a way to improve the code
  if (hungerLevel >= 10) {
    hungerLevel -= 10;
    // TODO: Ask the students to explain type coercion
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

// function to update the pet's sleep level

function makePetSleep() {
  if (sleepLevel < 40) {
    sleepLevel += 100;  
    sleepLevelEl.innerText = Sleepy;
  } else {
    sleepLevel = 0
  }
}

// Function to update the pet's status when played with
function playWithPet() {
  if (hungerLevel < 90) {
    hungerLevel += 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Excited";
    moodEl.innerText = mood;
    r;
  } else {
    mood = "Bored";
    moodEl.innerText = mood;
  }
}
playWithPet();

// function codeButton() {
//  if (codeButton)
// }

function showMessage() {
  alert(
    "Hi there! Welcome to Mali's world! We love to Eat, Sleep and Develop Code! Come and hang out with me!"
  );
}

showMessage();

// Add event listeners to the action buttons
feedButton.addEventListener("click", feedPet);
playButton.addEventListener("click", playWithPet);
sleepingButton.addEventListener("click", makePetSleep);
