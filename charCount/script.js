const sentenceInput = document.getElementById("sentence");
const characterInput = document.getElementById("character");
const countButton = document.getElementById("count-button");
const resultElement = document.getElementById("result");

countButton.addEventListener("click", () => {
  const sentence = sentenceInput.value;
  const character = characterInput.value;
  const count = countOfChar(sentence, character);
  resultElement.textContent = `The character '${character}' appears ${count} times in the sentence.`;
});

function countOfChar(metin, karakter) {
  let sayac = 0;
  const karakterler = metin.split("");
  for (const harf of karakterler) {
    if (harf.toLowerCase() === karakter.toLowerCase()) {
      sayac++;
    }
  }
  return sayac;
}
