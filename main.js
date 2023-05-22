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
const codeButton = document.getElementById("code-button");

// I found the following documentation on type coercion https://www.scaler.com/topics/javascript/type-coercion-javascript/

// Function to update the pet's status when fed
function feedPet() {
  if (hungerLevel >= 0) {
    hungerLevel -= 5;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Delighted!";
    moodEl.innerText = mood;
  } else {
    hungerLevel = 0;
    hungerEl.innerText = "0%";
    mood = "Whew! I'm Stuffed! Let's build a project!";
    moodEl.innerText = mood;
  }
}

function codeWithPet() {
  if (hungerLevel < 100) {
    hungerLevel += 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Excited";
    moodEl.innerText = mood;
  } else {
    mood = "That took forever!! Lets grab a snack!";
    moodEl.innerText = mood;
  }
}

function showMessage() {
  alert(
    "Hi there! Welcome to MaliCat's world! I love to Eat, and Develop Code! Come and hang out with me! Click feed to change my mood and click the code button watch me build!"
  );
}

showMessage();

// Event listeners
feedButton.addEventListener("click", feedPet);
codeButton.addEventListener("click", codeWithPet);
