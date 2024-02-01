let selection = 0;
const sentences = [
  ["likes to cook", "likes to eat"],
  ["likes to dance", "likes to sing"],
  ["likes to sing", "likes to play the guitar"],
  ["likes to talk", "likes to listen"],
  ["likes rom-coms", "likes coms without the rom"],
  ["is Italian", "is Israeli-American"],
  ["is pretty funny", "is pretty funny too"],
  ["is passionate", "is calm"],
  ["is creative", "is a problem-solver"],
  ["loves him", "loves her"],
];

const timeout = 3 * 1000;

function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selectSentences() {
  let newSelection = selection;
  while (newSelection === selection) {
    newSelection = random(sentences.length - 1);
  }
  selection = newSelection;

  const elisaSpan = document.querySelector("#elisa-description span");
  const saarSpan = document.querySelector("#saar-description span");
  const newSentences = sentences[selection];

  elisaSpan.innerHTML = newSentences[0];
  saarSpan.innerHTML = newSentences[1];
}

window.addEventListener("load", () => {
  selectSentences();
  setInterval(selectSentences, timeout);
});
