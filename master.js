// npc random Choose
let rock = "fa-solid fa-hand-back-fist";
let scissors = "fa-solid fa-hand-scissors";
let paper = "fa-solid fa-hand";
let icons = [paper, rock, scissors];
let winAudio = new Audio("./audio/mixkit-achievement-bell-600.wav");
let loseAudio = new Audio("./audio/mixkit-losing-bleeps-2026.wav");
let drawAudio = new Audio("./audio/mixkit-wind-chimes-2014.wav");
function npcTurn() {
  let npcChoice = Math.floor(Math.random() * 3);
  document.getElementById(
    "npc"
  ).innerHTML = `<i class="${icons[npcChoice]}"></i>`;
  return npcChoice;
}
// random animation
// playerTurn
let player = document.getElementById("player");
function playerTurn(playerChoice) {
  player.innerHTML = `<i class="${icons[playerChoice]}"></i>`;
  let npcChoice = npcTurn();
  check(playerChoice, npcChoice);
}
let playerScore = 0;
let npcScore = 0;
let result
function check(playerChoice, npcChoice) {

  if (
    (playerChoice === 0 && npcChoice === 1) ||
    (playerChoice === 1 && npcChoice === 2) ||
    (playerChoice === 2 && npcChoice === 0)
  ) {
    document.getElementById("you").innerHTML = `You:${++playerScore}`;
    winAudio.play();
     result="You"
     document.getElementById("result").innerHTML = result;
     document.getElementById("result").style.color ="green";

  } else if (
    (playerChoice === 0 && npcChoice === 2) ||
    (playerChoice === 1 && npcChoice === 0) ||
    (playerChoice === 2 && npcChoice === 1)
  ) {
    document.getElementById("pc").innerHTML = `You:${++npcScore}`;
    loseAudio.play();
     result="NPC"
     document.getElementById("result").innerHTML = result;
     document.getElementById("result").style.color =" red";

  } else if (playerChoice === npcChoice) {
     result="draw"
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.color ="blue";

    drawAudio.play();
  }
}
