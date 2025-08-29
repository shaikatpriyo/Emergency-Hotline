const clearButton = document.getElementById("clear-btn");
const copyButtons = document.getElementsByClassName("copy-btn");
const callButtons = document.getElementsByClassName("call-btn");
const loveButtons = document.getElementsByClassName("love-btn");

let loveCount = document.querySelector(".loveCount").innerText;
for (const btn of loveButtons) {
  btn.addEventListener("click", function () {
    loveCount++;
    document.querySelector(".loveCount").innerText = loveCount;
  });
}

let copyCount = document.querySelector(".copyCount").innerText;
for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const number = card.querySelector(".number");
    const text = number.innerText;

    // Use prompt as a foolproof way to copy
    const userInput = prompt("Copy the number below:", text);
    if (userInput !== null) {
      copyCount++;
      document.querySelector(".copyCount").innerText = copyCount;
      alert("Copied " + text);
    }
  });
}
