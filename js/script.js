const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const scoreElement = document.getElementById("score");
const jumpSong = document.getElementById("jump");
let botao = document.getElementById("botao");
let gameOverGif = document.getElementById("gameOverGif");
let song = document.getElementById("song");
let score = 0;

function updateDisplay(val) {
  document.getElementById("score").innerHTML = val;
}
const jump = () => {
  mario.classList.add("jump");
  updateDisplay((score += 10));
  jumpSong.play();
  jumpSong.playbackRate = 3;
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
  

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png"
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    song.pause();
    song = new Audio("./musicas/gameOver.mp3");
    song.play();
    botao2();

    clearInterval(loop);
  }
}, 10);

function botao2() {
  setTimeout(function () {
    botao.style.display = "block";
    gameOverGif.style.display = "block";
    botao.addEventListener("click", gameOver);
  }, 3000);
}

function gameOver() {
  setTimeout(function () {
    score = 0;
    window.location.reload();
  });
}
document.addEventListener("keydown", jump);
document.addEventListener("touchstart",jump);
