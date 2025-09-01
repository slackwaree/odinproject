let choiceBtn = document.querySelector("choice-btn");
let playerChoice;

let btnClickSfx = new Audio('../assets/audio/click.mp3');

choiceBtn.addEventListener("click", function() {
    btnClickSfx.play();
    choiceBtn.classList.add("invis");
});