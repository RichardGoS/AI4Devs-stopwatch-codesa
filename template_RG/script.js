
// Variables globales
let countdownInterval, countupInterval;
let countdownTime = 0;
let countupTime = 0;

// Pantallas y botones
const mainMenu = document.getElementById("main-menu");
const countdownScreen = document.getElementById("countdown-screen");
const countupScreen = document.getElementById("countup-screen");

// Botones principales
const countdownBtn = document.getElementById("countdown-btn");
const countupBtn = document.getElementById("countup-btn");

// Botones de cuenta atrás
const startCountdown = document.getElementById("start-countdown");
const stopCountdown = document.getElementById("stop-countdown");
const countdownInput = document.getElementById("countdown-input");
const countdownDisplay = document.getElementById("countdown-display");
const backToMenu1 = document.getElementById("back-to-menu-1");

// Botones de cuenta adelante
const startCountup = document.getElementById("start-countup");
const stopCountup = document.getElementById("stop-countup");
const countupDisplay = document.getElementById("countup-display");
const backToMenu2 = document.getElementById("back-to-menu-2");

// Funciones de cambio de pantalla
function showScreen(screen) {
  mainMenu.classList.add("hidden");
  countdownScreen.classList.add("hidden");
  countupScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

// Funciones de cuenta atrás
function startCountdownTimer() {
  if (countdownInput.value) {
    countdownTime = parseInt(countdownInput.value) * 60;
    countdownInput.value = "";
    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
      countdownTime--;
      updateCountdownDisplay();
      if (countdownTime <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }
}

function stopCountdownTimer() {
  clearInterval(countdownInterval);
}

function updateCountdownDisplay() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  countdownDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Funciones de cuenta adelante
function startCountupTimer() {
  countupInterval = setInterval(() => {
    countupTime++;
    updateCountupDisplay();
  }, 1000);
}

function stopCountupTimer() {
  clearInterval(countupInterval);
}

function updateCountupDisplay() {
  const minutes = Math.floor(countupTime / 60);
  const seconds = countupTime % 60;
  countupDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Eventos de botones principales
countdownBtn.addEventListener("click", () => showScreen(countdownScreen));
countupBtn.addEventListener("click", () => showScreen(countupScreen));

// Eventos de cuenta atrás
startCountdown.addEventListener("click", startCountdownTimer);
stopCountdown.addEventListener("click", stopCountdownTimer);
backToMenu1.addEventListener("click", () => {
  stopCountdownTimer();
  showScreen(mainMenu);
});

// Eventos de cuenta adelante
startCountup.addEventListener("click", startCountupTimer);
stopCountup.addEventListener("click", stopCountupTimer);
backToMenu2.addEventListener("click", () => {
  stopCountupTimer();
  countupTime = 0;
  updateCountupDisplay();
  showScreen(mainMenu);
});
