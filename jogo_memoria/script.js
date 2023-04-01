const cards = document.querySelectorAll('.memory-card');
const numCards = 10;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var hits = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  // Verifica se a condição das cartas serem iguais é verdadeira
  if(isMatch == true){
    // Soma no contador hits a quantidade de acertos
    hits++;
    // Valida se todos os acertos já foram realizados
    if(hits == numCards/2){
      // reinicia a variável de contador
      hits = 0;
      // Chama a função de finalizar o jogo
      endGame(true);
    }
    // Se não foram realizados todos os acertos, chama a função de desabilitar as cartas que acabaram de ser acertadas
    disableCards();
  } else {
    // Chama a função de virar as cartas
    unflipCards();
  }
}

function disableCards() {
  console.log("disable Match:");
  console.log(firstCard.dataset.nome);
  console.log(secondCard.dataset.nome);
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * numCards);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// Timer do jogo
const countdownEl = document.getElementById('countdown');
let timeLeft = 60;

const countdown = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        endGame(false);
    } else {
        countdownEl.innerHTML = timeLeft;
        timeLeft--;
    }
}, 1000);

// Função que termina o jogo
function endGame(win) {
    clearInterval(countdown);
    const resultsEl = document.querySelector('.results');
    const messageEl = document.querySelector('.message');
    resultsEl.classList.remove('hidden');
    messageEl.innerHTML = win ? 'Você ganhou!' : 'Você perdeu.';
}
    
// Adicionar evento de clique no botão de reiniciar
const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', () => {
    location.reload();
});