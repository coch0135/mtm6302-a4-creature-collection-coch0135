// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.

// sets up global variables
// key saving to local storage
const $storageKey = "mtm6302-a4-creature-collection"
// theme and layout user preferences start as empty strings, assigned value by loadPreferences()
let $themePreference = ""
let $layoutPreference = ""

// 1. Select the collection and preference controls using their IDs
const $collection = document.getElementById("collection")
const $theme = document.getElementById("theme")
const $layout = document.getElementById("layout")
const $status = document.getElementById("status")

// calls the functions needed for starting the build
loadPreferences()
buildCreatureCards($creatures)

// 3. Listen for changes to each preference control and update the appearance.
// 4. Save both selected preferences to Local Storage.
// Pseudocode:
// use .addEventListener on the $theme and $layout elements to listen for a change
// parameters: event
// set the global variable $themePreference or $layoutPreference to be equal to the value of the option tag the user selects
// use .dataset to change the associated data property to the global variable
// saves the new preferences

$theme.addEventListener("change", (e) => {
  $themePreference = e.target.value
  document.body.dataset.theme = $themePreference
  savePreferences()
})

$layout.addEventListener("change", (e) => {
  $layoutPreference = e.target.value
  $collection.dataset.layout = $layoutPreference
  savePreferences()
})


// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.
// Pseudocode: 
// parameters: creatures is the array with all of the creature information, passing that into the function buildCreatureCards
// create template array to hold all of the card templates
// loop through all of the creatures
      // push to the template array the card template using template literals and plugging in the creature information
// joins the html templates into a string and puts them inside of the ul named collection

function buildCreatureCards(creatures) {
  const html = []
  for (creature of creatures) {
    html.push(`<li class="creature">
  <img src="${creature.image}" alt="${creature.alt}">
  <div class="creature-info">
    <h3>${creature.name}</h3>
    <p class="creature-description">${creature.description}</p>
  </div>
</li>`)
  }
  $collection.innerHTML = html.join("")
}

// 5. Check for saved data on load and restore the controls and appearance.
// Pseudocode:
// function loadPreferences()
// use try/catch to catch any errors
// try {
      // looks in local storage for the information at $storageKey
      // if there is nothing at $storageKey...
            // update status message text content
            // set defaults (layout & theme) to global variables
            // save the default preferences
            // return to end the loop
      // if there is something at $storageKey...
            // parse JSON and save to variable
            // use parsed JSON to save to the global variables
            // update status text content
// }
// catch {
      // add error message to console
      // add error message to the status
// }
// for body and $collection, set the data attributes to be equal to their global variables
// for both $theme and $layout, set the select to be equal to their global variables

function loadPreferences() {
  try {
    const $savedChoices = localStorage.getItem($storageKey)
    if ($savedChoices === null) {
      $status.textContent = "No saved choices found."
      $themePreference = "forest"
      $layoutPreference = "cards"

      savePreferences()
      return
    }
    const $choices = JSON.parse($savedChoices)
    $themePreference = $choices.theme
    $layoutPreference = $choices.layout
    $status.textContent = "Saved choices and notes restored."
  } catch (error) {
    console.error(error)
    $status.textContent - "Unable to load saved choices."
  }
  document.body.dataset.theme = $themePreference
  $theme.value = $themePreference
  $collection.dataset.layout = $layoutPreference
  $layout.value = $layoutPreference
}

// Pseudocode:
// set local storage item $storageKey equal to a stringified object holding the global variables

function savePreferences() {
  localStorage.setItem($storageKey, JSON.stringify({ theme: $themePreference, layout: $layoutPreference }))
}




