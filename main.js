import * as THREE from "https://esm.sh/three@0.136.0";
import { OrbitControls } from "https://esm.sh/three@0.136.0/examples/jsm/controls/OrbitControls.js";

console.clear();

/* =========================
   PASSWORD
========================= */

const PASSWORD = "104919072026";

const passwordScreen =
  document.getElementById("password-screen");

const passwordInput =
  document.getElementById("password-input");

const passwordButton =
  document.getElementById("password-button");

const passwordError =
  document.getElementById("password-error");

let websiteUnlocked = false;

function checkPassword() {

  if (
    passwordInput.value.trim() ===
    PASSWORD
  ) {

    websiteUnlocked = true;
introStartTime = performance.now();
    passwordScreen.classList.add("hide");

    passwordError.textContent = "";

  } else {

    passwordError.textContent =
      "Sai rồi liu liu ❤️";

    passwordInput.value = "";

    passwordInput.focus();

  }
}

passwordButton.addEventListener(
  "click",
  checkPassword
);

passwordInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {
      checkPassword();
    }

  }
);
/* =========================
   PASSWORD HINT
========================= */

// Mật khẩu phụ để mở ảnh gợi ý
const HINT_PASSWORD =
  "07042001";

// Ảnh gợi ý
const PASSWORD_HINT_IMAGE =
  "./images/first_mess.png";


/* =========================
   HINT BUTTON
========================= */

const hintButton =
  document.createElement("button");

hintButton.type =
  "button";

hintButton.textContent =
  "💡 Gợi ý";

hintButton.style.cssText = `
  margin-top: 12px;
  padding: 10px 18px;

  border:
    1px solid
    rgba(255,255,255,0.3);

  border-radius: 20px;

  background:
    rgba(255,80,150,0.15);

  color: white;

  font-size: 14px;

  cursor: pointer;
`;

passwordButton.insertAdjacentElement(
  "afterend",
  hintButton
);


/* =========================
   HINT OVERLAY
========================= */

const hintOverlay =
  document.createElement("div");

hintOverlay.style.cssText = `
  position: fixed;
  inset: 0;

  display: none;
  align-items: center;
  justify-content: center;

  background:
    rgba(5,0,15,0.94);

  backdrop-filter:
    blur(12px);

  z-index: 2147483647;
`;

hintOverlay.innerHTML = `
  <div style="
    position: relative;

    width: min(440px, 88vw);

    padding: 32px 24px;

    border-radius: 28px;

    background:
      radial-gradient(
        circle at center,
        rgba(120,20,80,0.65),
        rgba(10,0,25,0.98)
      );

    border:
      1px solid
      rgba(255,150,200,0.35);

    box-shadow:
      0 0 60px
      rgba(255,70,160,0.45);

    text-align: center;
  ">

    <button
      id="hint-close"
      type="button"
      style="
        position: absolute;

        top: 10px;
        right: 15px;

        border: none;

        background:
          transparent;

        color: white;

        font-size: 28px;

        cursor: pointer;
      "
    >
      ×
    </button>


    <div style="
      color: white;

      font-size: 24px;

      font-weight: bold;
    ">
      Giờ-Ngày-Tháng-Năm 💌
    </div>


    <div
      id="hint-text"
      style="
        margin-top: 18px;

        color: #ffc6df;

        font-size: 17px;

        line-height: 1.7;
      "
    >
      Giờ muốn biết password thì hun anh 100 cái đi Hé hé ❤️
    </div>


    <input
      id="hint-password-input"
      type="password"

      placeholder="Nhập mật khẩu..."

      style="
        box-sizing: border-box;

        width: 100%;

        margin-top: 22px;

        padding: 13px 16px;

        border:
          1px solid
          rgba(255,255,255,0.25);

        border-radius: 16px;

        outline: none;

        background:
          rgba(255,255,255,0.08);

        color: white;

        font-size: 16px;

        text-align: center;
      "
    >


    <button
      id="hint-password-button"
      type="button"

      style="
        margin-top: 14px;

        padding: 12px 24px;

        border:
          1px solid
          rgba(255,255,255,0.3);

        border-radius: 22px;

        background:
          rgba(255,80,150,0.2);

        color: white;

        font-size: 15px;

        cursor: pointer;
      "
    >
      Mở gợi ý ❤️
    </button>


    <div
      id="hint-password-error"
      style="
        min-height: 22px;

        margin-top: 12px;

        color: #ff9fc8;

        font-size: 14px;
      "
    ></div>


    <div
      id="hint-image-container"
      style="
        display: none;

        margin-top: 22px;
      "
    >

      <img
        id="hint-image"

        src="${PASSWORD_HINT_IMAGE}"

        alt="Gợi ý"

        style="
          display: block;

          width:
            min(300px, 72vw);

          max-height: 380px;

          object-fit: contain;

          margin: 0 auto;

          border-radius: 18px;

          box-shadow:
            0 0 35px
            rgba(255,80,160,0.45);
        "
      >

    </div>

  </div>
`;

passwordScreen.appendChild(
  hintOverlay
);


/* =========================
   HINT ELEMENTS
========================= */

const hintClose =
  document.getElementById(
    "hint-close"
  );

const hintPasswordInput =
  document.getElementById(
    "hint-password-input"
  );

const hintPasswordButton =
  document.getElementById(
    "hint-password-button"
  );

const hintPasswordError =
  document.getElementById(
    "hint-password-error"
  );

const hintImageContainer =
  document.getElementById(
    "hint-image-container"
  );


/* =========================
   OPEN HINT
========================= */

hintButton.addEventListener(
  "click",
  () => {

    hintOverlay.style.display =
      "flex";

    hintPasswordInput.value =
      "";

    hintPasswordError.textContent =
      "";

    hintImageContainer.style.display =
      "none";

    hintPasswordInput.style.display =
      "block";

    hintPasswordButton.style.display =
      "inline-block";

    hintPasswordInput.focus();
  }
);


/* =========================
   CHECK HINT PASSWORD
========================= */

function checkHintPassword() {

  if (
    hintPasswordInput.value.trim() ===
    HINT_PASSWORD
  ) {

    hintPasswordError.textContent =
      "❤️";

    hintImageContainer.style.display =
      "block";

    hintPasswordInput.style.display =
      "none";

    hintPasswordButton.style.display =
      "none";

  }
  else {

    hintPasswordError.textContent =
      "Sai rồi liu liu 😝";

    hintPasswordInput.value =
      "";

    hintPasswordInput.focus();
  }
}


hintPasswordButton.addEventListener(
  "click",
  checkHintPassword
);


hintPasswordInput.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Enter"
    ) {

      checkHintPassword();

    }
  }
);


/* =========================
   CLOSE HINT
========================= */

hintClose.addEventListener(
  "click",
  () => {

    hintOverlay.style.display =
      "none";
  }
);
/* =========================
   SCENE
========================= */

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x160016);
const introBgStart = new THREE.Color(0x000000);
const introBgEnd = new THREE.Color(0x160016);

/* =========================
   CAMERA
========================= */

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

camera.position.set(0, 15, 110);

/* =========================
   RENDERER
========================= */

const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
);

document.body.appendChild(renderer.domElement);


/* =========================
   WINDOW RESIZE
========================= */
let pendingHeartIndex = null;
let pendingStoryIndex = null;

let heartGameActive = false;
/* =========================
   HEART MINI GAME
========================= */

const gameOverlay =
  document.createElement("div");

gameOverlay.style.cssText = `
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;

  background:
    rgba(5, 0, 15, 0.82);

  backdrop-filter:
    blur(10px);

  z-index: 9000;
`;

gameOverlay.innerHTML = `
  <div id="heart-game-box" style="
    position: relative;

    width: min(600px, 90vw);
    height: min(600px, 75vh);

    overflow: hidden;

    border-radius: 28px;

    background:
      radial-gradient(
        circle at center,
        rgba(120,20,80,0.55),
        rgba(10,0,25,0.96)
      );

    box-shadow:
      0 0 60px
      rgba(255,70,160,0.45);

    border:
      1px solid
      rgba(255,150,200,0.35);
  ">

    <div style="
      position: absolute;
      top: 18px;
      left: 0;
      right: 0;

      text-align: center;
      color: white;

      font-family: Arial, sans-serif;

      z-index: 10;
    ">

      <div style="
        font-size: 24px;
        font-weight: bold;
      ">
        💗
      </div>

      <div
        id="heart-game-score"
        style="
          margin-top: 8px;
          font-size: 18px;
        "
      >
        0 / 7
      </div>

    </div>

  </div>
`;
document.body.appendChild(
  gameOverlay
);

const gameBox =
  document.getElementById(
    "heart-game-box"
  );

const gameScore =
  document.getElementById(
    "heart-game-score"
  );
  let gameCaught = 0;

const GAME_TARGET = 7;

let currentGameHeart = null;
function startHeartGame(
  heartIndex
) {

  if (heartGameActive) {
    return;
  }

  heartGameActive = true;

  // Tim vật lý vừa được click
  pendingHeartIndex =
    heartIndex;

  // Thứ tự tiến trình hiện tại
  pendingStoryIndex =
    openedHeartCount;

  switch (
    pendingStoryIndex
  ) {

    // Trái tim được mở đầu tiên
    case 0:

      startSimonGame();

      break;


    // Trái tim được mở thứ hai
    case 1:

      startMemoryGame();

      break;


    // Trái tim được mở thứ ba
    case 2:

      startReactionGame();

      break;


    // Trái tim cuối cùng
    case 3:

      startFinalGame();

      break;


    default:

      heartGameActive = false;

      pendingHeartIndex = null;
      pendingStoryIndex = null;

      break;
  }
}

/* =========================
   SIMON SAYS GAME
========================= */

const simonOverlay =
  document.createElement("div");

simonOverlay.style.cssText = `
  position: fixed;
  inset: 0;

  display: none;
  align-items: center;
  justify-content: center;

  background:
    rgba(5, 0, 15, 0.86);

  backdrop-filter:
    blur(10px);

  z-index: 9000;
`;

simonOverlay.innerHTML = `
  <div style="
    width: min(520px, 90vw);

    padding: 30px 22px;

    border-radius: 28px;

    background:
      radial-gradient(
        circle at center,
        rgba(120,20,80,0.55),
        rgba(10,0,25,0.97)
      );

    border:
      1px solid
      rgba(255,150,200,0.35);

    box-shadow:
      0 0 60px
      rgba(255,70,160,0.4);

    text-align: center;
  ">

    <div style="
      color: white;
      font-size: 25px;
      font-weight: bold;
    ">
      REMEMBER 💗
    </div>

    <div
      id="simon-status"
      style="
        color: #ffc6df;
        margin-top: 10px;
        margin-bottom: 25px;
        min-height: 24px;
        font-size: 17px;
      "
    >
      Hãy nhớ thứ tự các trái tim
    </div>

    <div
      id="simon-board"
      style="
        display: grid;

        grid-template-columns:
          repeat(2, 120px);

        gap: 18px;

        justify-content: center;
      "
    >

      <button
        class="simon-heart"
        data-simon="0"
      >
        💗
      </button>

      <button
        class="simon-heart"
        data-simon="1"
      >
        💖
      </button>

      <button
        class="simon-heart"
        data-simon="2"
      >
        💕
      </button>

      <button
        class="simon-heart"
        data-simon="3"
      >
        ❤️
      </button>

    </div>

    <div
      id="simon-round"
      style="
        color: white;
        margin-top: 24px;
        font-size: 15px;
        opacity: 0.75;
      "
    >
      Vòng 1 / 3
    </div>

  </div>
`;

document.body.appendChild(
  simonOverlay
);

const simonStatus =
  document.getElementById(
    "simon-status"
  );

const simonRoundText =
  document.getElementById(
    "simon-round"
  );

const simonButtons =
  Array.from(
    document.querySelectorAll(
      ".simon-heart"
    )
  );
  simonButtons.forEach(
  (button) => {

    button.type = "button";

    button.style.cssText = `
      width: 120px;
      height: 120px;

      border: 1px solid
        rgba(255,255,255,0.2);

      border-radius: 28px;

      background:
        rgba(255,80,150,0.12);

      font-size: 56px;

      cursor: pointer;

      transition:
        transform 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease,
        opacity 0.18s ease;

      user-select: none;
    `;
  }
);
let simonSequence = [];

let simonPlayerIndex = 0;

let simonRound = 1;

const SIMON_TOTAL_ROUNDS = 3;

let simonAcceptInput = false;

let simonPlayingSequence = false;

function simonDelay(ms) {

  return new Promise(
    resolve =>
      setTimeout(resolve, ms)
  );
}
async function flashSimonHeart(
  index
) {

  const button =
    simonButtons[index];

  if (!button) {
    return;
  }

  button.style.transform =
    "scale(1.18)";

  button.style.background =
    "rgba(255,255,255,0.32)";

  button.style.boxShadow =
    `
      0 0 30px
      rgba(255,120,190,0.95)
    `;

  await simonDelay(320);

  button.style.transform =
    "scale(1)";

  button.style.background =
    "rgba(255,80,150,0.12)";

  button.style.boxShadow =
    "none";
}
async function playSimonSequence() {

  simonAcceptInput = false;

  simonPlayingSequence = true;

  simonStatus.textContent =
    "Nhìn thật kỹ... 💕";

  await simonDelay(600);

  for (
    let i = 0;
    i < simonSequence.length;
    i++
  ) {

    if (!heartGameActive) {
      return;
    }

    await flashSimonHeart(
      simonSequence[i]
    );

    await simonDelay(230);
  }

  simonPlayingSequence = false;

  simonPlayerIndex = 0;

  simonAcceptInput = true;

  simonStatus.textContent =
    "Đến lượt em ❤️";
}
function startSimonGame() {

  simonSequence = [];

  simonPlayerIndex = 0;

  simonRound = 1;

  simonAcceptInput = false;

  simonRoundText.textContent =
    "Vòng 1 / 3";

  simonOverlay.style.display =
    "flex";

  controls.enabled = false;
  controls.autoRotate = false;

  // Round 1 có 3 nhịp
  simonSequence.push(
    Math.floor(
      Math.random() * 4
    )
  );

  simonSequence.push(
    Math.floor(
      Math.random() * 4
    )
  );

  simonSequence.push(
    Math.floor(
      Math.random() * 4
    )
  );

  playSimonSequence();
}
simonButtons.forEach(
  (button) => {

    button.addEventListener(
      "pointerdown",
      async (event) => {

        event.stopPropagation();

        if (!simonAcceptInput) {
          return;
        }

        const selected =
          Number(
            button.dataset.simon
          );

        simonAcceptInput = false;

        await flashSimonHeart(
          selected
        );

        const expected =
          simonSequence[
            simonPlayerIndex
          ];

        // Bấm sai
        if (
          selected !== expected
        ) {

          simonStatus.textContent =
            "Sai rồi liu liu 😝 Bé làm lại i";

          simonPlayerIndex = 0;

          await simonDelay(900);

          playSimonSequence();

          return;
        }

        // Bấm đúng
        simonPlayerIndex++;

        // Chưa hết sequence
        if (
          simonPlayerIndex <
          simonSequence.length
        ) {

          simonAcceptInput = true;

          return;
        }

        // Hoàn thành round
        simonStatus.textContent =
          "Ghê dạ haha 💗";

        await simonDelay(650);

        finishSimonRound();

      }
    );

  }
);
function finishSimonRound() {

  // Đã thắng vòng cuối
  if (
    simonRound >=
    SIMON_TOTAL_ROUNDS
  ) {

    finishSimonGame();

    return;
  }

  simonRound++;

  simonPlayerIndex = 0;

  // Mỗi round thêm 1 nhịp
  simonSequence.push(
    Math.floor(
      Math.random() * 4
    )
  );

  simonRoundText.textContent =
    `Vòng ${simonRound} / ${SIMON_TOTAL_ROUNDS}`;

  simonStatus.textContent =
    "💕";

  setTimeout(() => {

    playSimonSequence();

  }, 800);
}
function finishSimonGame() {

  simonAcceptInput = false;

  simonStatus.textContent =
    "Ghiaaaaaa ❤️";

  setTimeout(() => {

    simonOverlay.style.display =
      "none";

    finishHeartGame();

  }, 900);
}
/* =========================
   MEMORY GAME
========================= */

const memoryOverlay =
  document.createElement("div");

memoryOverlay.style.cssText = `
  position: fixed;
  inset: 0;

  display: none;
  align-items: center;
  justify-content: center;

  background:
    rgba(5, 0, 15, 0.86);

  backdrop-filter:
    blur(10px);

  z-index: 9000;
`;

memoryOverlay.innerHTML = `
  <div style="
    width: min(560px, 90vw);

    padding: 28px 22px;

    border-radius: 28px;

    background:
      radial-gradient(
        circle at center,
        rgba(120,20,80,0.55),
        rgba(10,0,25,0.97)
      );

    border:
      1px solid
      rgba(255,150,200,0.35);

    box-shadow:
      0 0 60px
      rgba(255,70,160,0.4);

    text-align: center;
  ">

    <div style="
      color: white;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
    ">
      Ghép hình nha 💕
    </div>

    <div
      id="memory-status"
      style="
        color: #ffc6df;
        font-size: 16px;
        margin-bottom: 22px;
      "
    >
      Tìm 3 cặp ảnh giống nhau
    </div>

    <div
      id="memory-grid"
      style="
        display: grid;

        grid-template-columns:
          repeat(3, 1fr);

        gap: 12px;

        max-width: 430px;
        margin: auto;
      "
    ></div>

  </div>
`;

document.body.appendChild(
  memoryOverlay
);

const memoryGrid =
  document.getElementById(
    "memory-grid"
  );

const memoryStatus =
  document.getElementById(
    "memory-status"
  );

  let memoryFirstCard = null;
let memorySecondCard = null;

let memoryMatchedPairs = 0;

let memoryLock = false;

function shuffleArray(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );

    [
      array[i],
      array[j]
    ] =
    [
      array[j],
      array[i]
    ];
  }

  return array;
}
function startMemoryGame() {

  memoryMatchedPairs = 0;

  memoryFirstCard = null;
  memorySecondCard = null;

  memoryLock = false;

  memoryGrid.innerHTML = "";

  memoryStatus.textContent =
    "Tìm 3 cặp ảnh giống nhau";

  const memoryImages = [

    "./images/1_resize.jpg",
    "./images/2_resize.jpg",
    "./images/3_resize.jpg"

  ];

  const cards =
    shuffleArray([
      ...memoryImages,
      ...memoryImages
    ]);

  cards.forEach(
    (imagePath) => {

      createMemoryCard(
        imagePath
      );

    }
  );

  memoryOverlay.style.display =
    "flex";

  controls.enabled = false;
  controls.autoRotate = false;
}
function createMemoryCard(
  imagePath
) {

  const card =
    document.createElement(
      "button"
    );

  card.type = "button";

  card.dataset.image =
    imagePath;

  card.dataset.matched =
    "false";

  card.style.cssText = `
    position: relative;

    aspect-ratio: 3 / 4;

    border: none;
    border-radius: 16px;

    cursor: pointer;

    overflow: hidden;

    background:
      linear-gradient(
        145deg,
        #ff5ca4,
        #7a1746
      );

    box-shadow:
      0 0 18px
      rgba(255,80,150,0.35);

    transition:
      transform 0.25s ease,
      opacity 0.3s ease;

    padding: 0;
  `;

  card.innerHTML = `
    <div
      class="memory-cover"
      style="
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 40px;

        background:
          linear-gradient(
            145deg,
            #ff69ad,
            #8a174f
          );
      "
    >
      💗
    </div>

    <img
      src="${imagePath}"
      style="
        width: 100%;
        height: 100%;

        object-fit: cover;

        opacity: 0;

        transition:
          opacity 0.25s ease;
      "
    >
  `;

  card.addEventListener(
    "pointerdown",
    (event) => {

      event.stopPropagation();

      handleMemoryCard(
        card
      );

    }
  );

  memoryGrid.appendChild(
    card
  );
}
function revealMemoryCard(
  card
) {

  const cover =
    card.querySelector(
      ".memory-cover"
    );

  const image =
    card.querySelector(
      "img"
    );

  cover.style.opacity = "0";

  image.style.opacity = "1";

  card.style.transform =
    "scale(1.04)";
}


function hideMemoryCard(
  card
) {

  const cover =
    card.querySelector(
      ".memory-cover"
    );

  const image =
    card.querySelector(
      "img"
    );

  cover.style.opacity = "1";

  image.style.opacity = "0";

  card.style.transform =
    "scale(1)";
}
function handleMemoryCard(
  card
) {

  if (memoryLock) {
    return;
  }

  if (
    card.dataset.matched ===
    "true"
  ) {
    return;
  }

  if (
    card === memoryFirstCard
  ) {
    return;
  }

  revealMemoryCard(
    card
  );

  if (!memoryFirstCard) {

    memoryFirstCard =
      card;

    return;
  }

  memorySecondCard =
    card;

  memoryLock = true;


  // MATCH
  if (
    memoryFirstCard.dataset.image ===
    memorySecondCard.dataset.image
  ) {

    memoryFirstCard.dataset.matched =
      "true";

    memorySecondCard.dataset.matched =
      "true";

    memoryMatchedPairs++;

    memoryStatus.textContent =
      `${memoryMatchedPairs} / 3 cặp`;

    setTimeout(() => {

      memoryFirstCard.style.opacity =
        "0.55";

      memorySecondCard.style.opacity =
        "0.55";

      memoryFirstCard = null;
      memorySecondCard = null;

      memoryLock = false;


      if (
        memoryMatchedPairs === 3
      ) {

        finishMemoryGame();

      }

    }, 350);

  }

  // KHÔNG MATCH
  else {

    setTimeout(() => {

      hideMemoryCard(
        memoryFirstCard
      );

      hideMemoryCard(
        memorySecondCard
      );

      memoryFirstCard = null;
      memorySecondCard = null;

      memoryLock = false;

    }, 700);
  }
}
function finishMemoryGame() {

  memoryStatus.textContent =
    "Bé giỏiii ❤️";

  setTimeout(() => {

    memoryOverlay.style.display =
      "none";

    finishHeartGame();

  }, 700);
}
/* =========================
   REACTION GAME
========================= */

const reactionOverlay =
  document.createElement("div");

reactionOverlay.style.cssText = `
  position: fixed;
  inset: 0;

  display: none;
  align-items: center;
  justify-content: center;

  background:
    rgba(5, 0, 15, 0.86);

  backdrop-filter:
    blur(10px);

  z-index: 9000;
`;

reactionOverlay.innerHTML = `
  <div style="
    width: min(500px, 88vw);

    padding: 32px 24px;

    border-radius: 28px;

    background:
      radial-gradient(
        circle at center,
        rgba(120,20,80,0.55),
        rgba(10,0,25,0.97)
      );

    border:
      1px solid
      rgba(255,150,200,0.35);

    box-shadow:
      0 0 60px
      rgba(255,70,160,0.4);

    text-align: center;
  ">

    <div style="
      color: white;
      font-size: 25px;
      font-weight: bold;
    ">
      NHANH TAY NHA! 💓
    </div>

    <div
      id="reaction-status"
      style="
        min-height: 28px;
        margin-top: 12px;
        color: #ffc6df;
        font-size: 17px;
      "
    >
      Waitingg.....
    </div>

    <button
      id="reaction-heart"
      type="button"
      style="
        width: 170px;
        height: 170px;

        margin-top: 28px;

        border: none;
        border-radius: 50%;

        background:
          rgba(255,80,150,0.1);

        font-size: 76px;

        cursor: pointer;

        opacity: 0.35;

        transition:
          transform 0.15s ease,
          opacity 0.15s ease,
          background 0.15s ease,
          box-shadow 0.15s ease;
      "
    >
      💗
    </button>

    <div
      id="reaction-score"
      style="
        margin-top: 25px;

        color: white;

        font-size: 15px;

        opacity: 0.8;
      "
    >
      0 / 3
    </div>

  </div>
`;

document.body.appendChild(
  reactionOverlay
);

const reactionHeart =
  document.getElementById(
    "reaction-heart"
  );

const reactionStatus =
  document.getElementById(
    "reaction-status"
  );

const reactionScore =
  document.getElementById(
    "reaction-score"
  );


let reactionSuccess = 0;

const REACTION_TARGET = 3;

let reactionReady = false;

let reactionWaiting = false;

let reactionWaitTimer = null;

let reactionFailTimer = null;

let reactionStartTime = 0;


function resetReactionHeartStyle() {

  reactionHeart.style.opacity =
    "0.35";

  reactionHeart.style.transform =
    "scale(1)";

  reactionHeart.style.background =
    "rgba(255,80,150,0.1)";

  reactionHeart.style.boxShadow =
    "none";
}


function startReactionGame() {

  reactionSuccess = 0;

  reactionReady = false;
  reactionWaiting = false;

  reactionScore.textContent =
    `0 / ${REACTION_TARGET}`;

  reactionStatus.textContent =
    "Chuẩn bị nha... 💗";

  resetReactionHeartStyle();

  reactionOverlay.style.display =
    "flex";

  controls.enabled = false;
  controls.autoRotate = false;

  setTimeout(() => {

    startReactionRound();

  }, 700);
}


function startReactionRound() {

  reactionReady = false;
  reactionWaiting = true;

  resetReactionHeartStyle();

  reactionStatus.textContent =
    "Đợi nó sáng rồi bấm nhaa!";

  const waitTime =
    1400 +
    Math.random() * 1800;

  reactionWaitTimer =
    setTimeout(() => {

      reactionWaiting = false;
      reactionReady = true;

      reactionStartTime =
        performance.now();

      reactionStatus.textContent =
        "BẤM NGAY! ❤️";

      reactionHeart.style.opacity =
        "1";

      reactionHeart.style.transform =
        "scale(1.25)";

      reactionHeart.style.background =
        "rgba(255,120,180,0.35)";

      reactionHeart.style.boxShadow =
        `
          0 0 45px
          rgba(255,80,160,1)
        `;

      reactionFailTimer =
        setTimeout(() => {

          if (!reactionReady) {
            return;
          }

          reactionReady = false;

          reactionStatus.textContent =
            "Cùi bắppp 😝";

          resetReactionHeartStyle();

          setTimeout(() => {

            startReactionRound();

          }, 900);

        }, 900);

    }, waitTime);
}


reactionHeart.addEventListener(
  "pointerdown",
  (event) => {

    event.stopPropagation();

    // Bấm quá sớm
    if (reactionWaiting) {

      clearTimeout(
        reactionWaitTimer
      );

      reactionWaiting = false;

      reactionStatus.textContent =
        "Cùi bắpppp 😝";

      resetReactionHeartStyle();

      setTimeout(() => {

        startReactionRound();

      }, 900);

      return;
    }


    if (!reactionReady) {
      return;
    }


    reactionReady = false;

    clearTimeout(
      reactionFailTimer
    );

    const reactionTime =
      Math.round(
        performance.now() -
        reactionStartTime
      );

    reactionSuccess++;

    reactionScore.textContent =
      `${reactionSuccess} / ${REACTION_TARGET}`;

    reactionStatus.textContent =
      `${reactionTime} ms 💗`;

    reactionHeart.style.transform =
      "scale(1.4)";


    // Đủ 3 lần
    if (
      reactionSuccess >=
      REACTION_TARGET
    ) {

      setTimeout(() => {

        finishReactionGame();

      }, 700);

      return;
    }


    setTimeout(() => {

      startReactionRound();

    }, 850);

  }
);


function finishReactionGame() {

  reactionReady = false;
  reactionWaiting = false;

  clearTimeout(
    reactionWaitTimer
  );

  clearTimeout(
    reactionFailTimer
  );

  reactionStatus.textContent =
    "Hay quá taaa ❤️";

  setTimeout(() => {

    reactionOverlay.style.display =
      "none";

    finishHeartGame();

  }, 900);
}

/* =========================
   FINAL LOVE PUZZLE
========================= */

const finalOverlay =
  document.createElement("div");

finalOverlay.style.cssText = `
  position: fixed;
  inset: 0;

  display: none;
  align-items: center;
  justify-content: center;

  background:
    rgba(5, 0, 15, 0.9);

  backdrop-filter:
    blur(12px);

  z-index: 9000;
`;

finalOverlay.innerHTML = `
  <div style="
    width: min(560px, 90vw);

    padding: 34px 24px;

    border-radius: 28px;

    background:
      radial-gradient(
        circle at center,
        rgba(130,20,85,0.6),
        rgba(10,0,25,0.98)
      );

    border:
      1px solid
      rgba(255,150,200,0.4);

    box-shadow:
      0 0 70px
      rgba(255,60,150,0.5);

    text-align: center;
  ">

    <div style="
      color: white;
      font-size: 26px;
      font-weight: bold;
    ">
      Mở khóa lời cuối 💌
    </div>

    <div
      id="final-status"
      style="
        color: #ffc6df;
        margin-top: 12px;
        min-height: 26px;
        font-size: 17px;
      "
    >
      Ghép câu theo đúng thứ tự
    </div>

    <div
      id="final-answer"
      style="
        min-height: 42px;

        margin-top: 24px;
        margin-bottom: 25px;

        color: white;

        font-size: 22px;
        font-weight: bold;

        letter-spacing: 2px;
      "
    ></div>

    <div
      id="final-buttons"
      style="
        display: flex;
        flex-wrap: wrap;

        justify-content: center;

        gap: 12px;
      "
    ></div>

  </div>
`;

document.body.appendChild(
  finalOverlay
);

const finalStatus =
  document.getElementById(
    "final-status"
  );

const finalAnswer =
  document.getElementById(
    "final-answer"
  );

const finalButtons =
  document.getElementById(
    "final-buttons"
  );


const FINAL_WORDS = [
  "ANH",
  "YÊU",
  "EM",
  "RẤT",
  "NHIỀU"
];

let finalCurrentIndex = 0;
let finalLocked = false;


function startFinalGame() {

  finalCurrentIndex = 0;
  finalLocked = false;

  finalAnswer.textContent =
    "";

  finalStatus.textContent =
    "Ghép câu nhaaa 💗";

  finalButtons.innerHTML =
    "";

  const shuffledWords =
    shuffleArray([
      ...FINAL_WORDS
    ]);

  shuffledWords.forEach(
    (word) => {

      const button =
        document.createElement(
          "button"
        );

      button.type =
        "button";

      button.textContent =
        word;

      button.style.cssText = `
        padding:
          14px 20px;

        border:
          1px solid
          rgba(255,255,255,0.25);

        border-radius:
          18px;

        background:
          rgba(255,80,150,0.16);

        color:
          white;

        font-size:
          18px;

        font-weight:
          bold;

        cursor:
          pointer;

        transition:
          transform 0.18s ease,
          background 0.18s ease,
          opacity 0.18s ease,
          box-shadow 0.18s ease;
      `;

      button.addEventListener(
        "pointerdown",
        (event) => {

          event.stopPropagation();

          handleFinalWord(
            button,
            word
          );

        }
      );

      finalButtons.appendChild(
        button
      );

    }
  );

  finalOverlay.style.display =
    "flex";

  controls.enabled = false;
  controls.autoRotate = false;
}
function handleFinalWord(
  button,
  word
) {

  if (finalLocked) {
    return;
  }

  const expectedWord =
    FINAL_WORDS[
      finalCurrentIndex
    ];


  // Bấm sai
  if (
    word !== expectedWord
  ) {

    finalLocked = true;

    finalStatus.textContent =
      "Sai rồi liu liu 😝";

    finalAnswer.textContent =
      "";

    finalCurrentIndex = 0;

    Array.from(
      finalButtons.children
    ).forEach(
      (btn) => {

        btn.disabled = false;

        btn.style.opacity =
          "1";

        btn.style.transform =
          "scale(1)";

      }
    );

    setTimeout(() => {

      finalStatus.textContent =
        "Ghép lại nhenn 💕";

      finalLocked = false;

    }, 700);

    return;
  }


  // Bấm đúng
  button.disabled = true;

  button.style.opacity =
    "0.35";

  button.style.transform =
    "scale(0.9)";

  finalCurrentIndex++;


  finalAnswer.textContent =
    FINAL_WORDS
      .slice(
        0,
        finalCurrentIndex
      )
      .join(" ");


  // Chưa hoàn thành
  if (
    finalCurrentIndex <
    FINAL_WORDS.length
  ) {

    finalStatus.textContent =
      "Ghia dạ.. 💗";

    return;
  }


  // Hoàn thành
  finalLocked = true;

  finalStatus.textContent =
    "Đúng rùii ❤️";

  finalAnswer.style.textShadow =
    `
      0 0 20px
      rgba(255,100,180,1)
    `;

  setTimeout(() => {

    finishFinalGame();

  }, 1000);
}
function finishFinalGame() {

  finalStatus.textContent =
    "Final test 💌";

  setTimeout(() => {

    finalOverlay.style.display =
      "none";

    finishHeartGame();

  }, 900);
}

function startCatchHeartGame() {
  gameCaught = 0;

  gameScore.textContent =
    `0 / ${GAME_TARGET}`;

  gameOverlay.style.display =
    "flex";

  controls.enabled = false;
  controls.autoRotate = false;

  spawnGameHeart();
}
function spawnGameHeart() {

  if (!heartGameActive) {
    return;
  }

  if (currentGameHeart) {

    currentGameHeart.remove();

    currentGameHeart = null;
  }

  const heart =
    document.createElement(
      "button"
    );

  heart.textContent =
    "💗";

  heart.type =
    "button";

  heart.style.cssText = `
    position: absolute;

    width: 70px;
    height: 70px;

    border: none;
    background: transparent;

    font-size: 52px;

    cursor: pointer;

    user-select: none;

    transition:
      transform 0.15s ease;

    filter:
      drop-shadow(
        0 0 12px
        rgba(255,80,160,0.9)
      );
  `;

  const margin = 80;

  const maxX =
    Math.max(
      0,
      gameBox.clientWidth -
      margin
    );

  const maxY =
    Math.max(
      100,
      gameBox.clientHeight -
      margin
    );

  heart.style.left =
    Math.random() *
      maxX +
    "px";

  heart.style.top =
    80 +
    Math.random() *
      (maxY - 80) +
    "px";

  heart.addEventListener(
    "pointerdown",
    (event) => {

      event.stopPropagation();

      gameCaught++;

      gameScore.textContent =
        `${gameCaught} / ${GAME_TARGET}`;

      heart.style.transform =
        "scale(1.6)";

      setTimeout(() => {

        if (
          gameCaught >=
          GAME_TARGET
        ) {

          finishHeartGame();

        }
        else {

          spawnGameHeart();

        }

      }, 120);

    }
  );

  gameBox.appendChild(
    heart
  );

  currentGameHeart =
    heart;
}
function finishHeartGame() {

  heartGameActive = false;

  if (currentGameHeart) {
    currentGameHeart.remove();
    currentGameHeart = null;
  }

  gameOverlay.style.display =
    "none";

  // Tim lớn vừa được chọn
  const completedHeart =
    orbitHearts[
      pendingHeartIndex
    ];

  if (!completedHeart) {
    return;
  }

  // Đánh dấu đã hoàn thành
  completedHeart.userData.playing =
  false;

completedHeart.userData.opened =
  true;

  // Fade tim đó đi
  completedHeart.userData.targetOpacity =
    0;

  // Lưu thứ tự câu chuyện trước
const completedStoryIndex =
  pendingStoryIndex;

openedHeartCount++;

// Mở lá thư theo tiến trình,
// không theo trái tim vật lý
// 3 lá thư đầu dùng popup thường
if (
  completedStoryIndex < 3
) {

  openHeartLetter(
    completedStoryIndex
  );

}

// Lá thư cuối dùng cinematic riêng
else {

  openFinalLetter();

}

  // Xóa trạng thái tim đang xử lý
  pendingHeartIndex = null;
  pendingStoryIndex = null;
}
window.addEventListener("resize", () => {

  camera.aspect =
    window.innerWidth /
    window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

});


/* =========================
   ORBIT CONTROL
========================= */

const controls = new OrbitControls(
  camera,
  renderer.domElement
);

controls.enableDamping = true;
controls.enablePan = false;
/* =========================
   WISH / LANTERN MODE
========================= */

const lanternGroup = new THREE.Group();
scene.add(lanternGroup);

const lanterns = [];

/* =========================
   FLOATING TEXT
========================= */

function createTextTexture(text) {

  const canvas =
    document.createElement("canvas");

  canvas.width = 1024;
  canvas.height = 256;

  const ctx =
    canvas.getContext("2d");

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font =
    "bold 70px Arial";

  ctx.shadowColor =
    "#ff66cc";

  ctx.shadowBlur =
    35;

  ctx.fillStyle =
    "#ffffff";

  ctx.fillText(
    text,
    canvas.width / 2,
    canvas.height / 2
  );

  const texture =
    new THREE.CanvasTexture(canvas);

  texture.needsUpdate = true;

  return texture;
}
const wishTexts = [

  "Anh Yêu Em"

];
const textureLoader =
  new THREE.TextureLoader();

const photoTextures = [
  textureLoader.load("./images/1_resize.jpg"),
  textureLoader.load("./images/2_resize.jpg"),
  textureLoader.load("./images/3_resize.jpg"),
  textureLoader.load("./images/4_resize.jpg"),
  textureLoader.load("./images/5_resize.jpg"),
  textureLoader.load("./images/6_resize.jpg"),
  textureLoader.load("./images/7_resize.jpg"),
  textureLoader.load("./images/8_resize.jpg"),
  textureLoader.load("./images/9_resize.jpg"),
  textureLoader.load("./images/10_resize.jpg")
];
function spawnWishPhoto(
  x = null,
  z = null
) {

  const texture =
    photoTextures[
      Math.floor(
        Math.random() *
        photoTextures.length
      )
    ];

  const depthZ =
    z ??
    (-45 + Math.random() * 70);

  const depth01 =
    THREE.MathUtils.clamp(
      (depthZ + 45) / 70,
      0,
      1
    );

  const material =
    new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity:
        0.45 + depth01 * 0.55,
      depthWrite: false,
      depthTest: false
    });

  const sprite =
    new THREE.Sprite(material);

  // kích thước ảnh
  const height =
    5 + depth01 * 4;

  // tạm dùng tỉ lệ 3:4
  const width =
    height * 0.75;

  sprite.scale.set(
    width,
    height,
    1
  );

  sprite.position.set(
    x ??
      ((Math.random() - 0.5) * 65),

    -30,

    depthZ
  );

  sprite.userData = {

    vx:
      (Math.random() - 0.5) *
      0.01,

    vy:
      0.04 +
      depth01 * 0.035 +
      Math.random() * 0.02,

    vz: 0,

    swayPhase:
      Math.random() *
      Math.PI * 2,

    swaySpeed:
      0.7 +
      Math.random() * 1.1,

    swayAmp:
      0.01 +
      depth01 * 0.025,

    rotAmp:
      0.01,

    fadeStartY:
      18 +
      Math.random() * 8,

    life: 1
  };

  lanternGroup.add(sprite);

  lanterns.push(sprite);
}
function spawnWishText(
  text = null,
  x = null,
  z = null
) {

  if (!text) {
    text =
      wishTexts[
        Math.floor(
          Math.random() *
          wishTexts.length
        )
      ];
  }

  // z lớn hơn = gần camera hơn
  const depthZ =
    z ??
    (-45 + Math.random() * 70); // từ -45 đến 25

  // 0 = xa, 1 = gần
  const depth01 =
    THREE.MathUtils.clamp(
      (depthZ + 45) / 70,
      0,
      1
    );

  const texture =
    createTextTexture(text);

  const material =
    new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.35 + depth01 * 0.65,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });

  const sprite =
    new THREE.Sprite(material);

  // gần thì to hơn, xa thì nhỏ hơn
  const scale =
    3.5 + depth01 * 4.5 + Math.random() * 1.2;

  sprite.scale.set(
    scale * 4,
    scale,
    1
  );

  sprite.position.set(
    x ??
    ((Math.random() - 0.5) * 70),

    -30,

    depthZ
  );

  sprite.userData = {

    vx:
      (Math.random() - 0.5) * 0.01,

    // gần thì bay nhanh hơn nhẹ
    vy:
      0.05 + depth01 * 0.04 + Math.random() * 0.02,

    vz:
      0,

    swayPhase:
      Math.random() * Math.PI * 2,

    swaySpeed:
      0.8 + Math.random() * 1.2,

    swayAmp:
      0.01 + depth01 * 0.03,

    rotAmp:
      0.01 + depth01 * 0.02,

    fadeStartY:
      16 + Math.random() * 10,

    life: 1
  };

  lanternGroup.add(sprite);
  lanterns.push(sprite);
}
let lanternSpawnTimer = 0;

// Cho phép zoom bằng con lăn
controls.enableZoom = true;

// Intro chưa xong thì khóa chuột
controls.enabled = false;

// Sau intro mới bật auto rotate
controls.autoRotate = false;

controls.autoRotateSpeed = 0.5;
/* =========================
   INTRO CAMERA
========================= */

const INTRO_DURATION = 11000; // 6 giây

const cameraStart = new THREE.Vector3(
  0,
  15,
  190
);

const cameraEnd = new THREE.Vector3(
  0,
  4,
  50
);

let introStartTime = null;

let introFinished = false;
function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function phaseProgress(time, start, end) {
  return clamp01((time - start) / (end - start));
}

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutExpo(t) {
  return t >= 1
    ? 1
    : 1 - Math.pow(2, -10 * t);
}

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

// Khóa điều khiển trong lúc intro
controls.enabled = false;

/* =========================
   SHADER UNIFORM
========================= */

const gu = {

  time: {
    value: 0
  }

};


/* =========================
   PARTICLE DATA
========================= */

const innerSizes = [];
const innerShift = [];

const outerSizes = [];
const outerShift = [];


/* Tạo dữ liệu chuyển động ngẫu nhiên */
function pushShift(targetShift) {

  targetShift.push(
    Math.random() * Math.PI,
    Math.random() * Math.PI * 2,
    (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
    Math.random() * 0.9 + 0.1
  );

}


/* =========================
   INNER ROSE
========================= */

const innerPts = [];

const ROSE_LAYERS = 160;
const POINTS_PER_LAYER = 312; // 160 * 312 = 49920 ~ 50k
const PETAL_COUNT = 8;

for (let i = 0; i < ROSE_LAYERS; i++) {

  const u = i / (ROSE_LAYERS - 1);

  // từ nụ ở giữa ra cánh ngoài
  const radiusBase =
    0.25 + u * 6.8;

  const twist =
    u * Math.PI * 2.8;

  const budClose =
    Math.pow(1 - u, 1.6) * 4.0;

  const outerDroop =
    Math.pow(u, 1.7) * 3.2;

  for (let j = 0; j < POINTS_PER_LAYER; j++) {

    const a =
      (j / POINTS_PER_LAYER) * Math.PI * 2;

    // độ nở của cánh
    const petal =
      Math.pow(
        Math.abs(
          Math.sin((PETAL_COUNT * a) / 2)
        ),
        1.7
      );

    let r =
      radiusBase * (0.22 + 0.95 * petal);

    let x =
      Math.cos(a + twist) * r;

    let z =
      Math.sin(a + twist) * r;

    let y =
      u * 8.5 - 4.0;

    // nụ ở giữa khép chặt
    y -= budClose * (1.0 - petal);

    // cánh ngoài hơi cụp xuống
    y -= outerDroop * petal * 0.55;

    // gợn nhẹ cho cánh nhìn tự nhiên hơn
    y +=
      Math.cos(a * PETAL_COUNT) *
      0.15 *
      (0.3 + u);

    // cánh ngoài mở lớn hơn
    const bloom =
      1 + u * 0.35;

    x *= bloom;
    z *= bloom;

    // thêm nhiễu nhẹ cho particle
    x += (Math.random() - 0.5) * 0.14;
    y += (Math.random() - 0.5) * 0.14;
    z += (Math.random() - 0.5) * 0.14;

    innerPts.push(
      new THREE.Vector3(x, y, z)
    );

    innerSizes.push(
      0.6 + Math.random() * 1.3
    );

    pushShift(innerShift);
  }
}

/* =========================
   OUTER DISC / GALAXY
========================= */

const outerPts = [];
for (let i = 0; i < 100000; i++) {

  const r = 10;

  const R = 40;

  const rand =
    Math.pow(
      Math.random(),
      1.5
    );

  const radius =
    Math.sqrt(

      R * R * rand
      +
      (1 - rand) * r * r

    );

  const point =
    new THREE.Vector3()
      .setFromCylindricalCoords(

        radius,

        Math.random()
          * 2
          * Math.PI,

        (Math.random() - 0.5)
          * 2

      );

  outerPts.push(point);
  outerSizes.push(
  Math.random() * 1.5 + 0.5
    );

  pushShift(outerShift);
}


/* =========================
   GEOMETRY
========================= */

const innerGeometry =
  new THREE.BufferGeometry()
    .setFromPoints(innerPts);

innerGeometry.setAttribute(
  "sizes",
  new THREE.Float32BufferAttribute(
    innerSizes,
    1
  )
);

innerGeometry.setAttribute(
  "shift",
  new THREE.Float32BufferAttribute(
    innerShift,
    4
  )
);


const outerGeometry =
  new THREE.BufferGeometry()
    .setFromPoints(outerPts);

outerGeometry.setAttribute(
  "sizes",
  new THREE.Float32BufferAttribute(
    outerSizes,
    1
  )
);

outerGeometry.setAttribute(
  "shift",
  new THREE.Float32BufferAttribute(
    outerShift,
    4
  )
);
/* =========================
   MOUSE PARTICLE TRAIL
========================= */

const MOUSE_TRAIL_LENGTH = 8;

const mouseTarget =
  new THREE.Vector2(10, 10);

const mouseTrail =
  Array.from(
    { length: MOUSE_TRAIL_LENGTH },
    () => new THREE.Vector2(10, 10)
  );

window.addEventListener(
  "pointermove",
  (event) => {

    mouseTarget.x =
      (event.clientX / window.innerWidth) * 2 - 1;

    mouseTarget.y =
      -(event.clientY / window.innerHeight) * 2 + 1;

  }
);

window.addEventListener(
  "pointerleave",
  () => {

    mouseTarget.set(10, 10);

  }
);
/* =========================
   PARTICLE MATERIAL
========================= */

const material =
  new THREE.PointsMaterial({

    size: 0.125,

    transparent: true,

    depthTest: false,

    blending:
      THREE.AdditiveBlending,

    onBeforeCompile: shader => {

      shader.uniforms.time =
        gu.time;
shader.uniforms.uTrail = {
  value: mouseTrail
};

shader.uniforms.uMouseRadius = {
  value: 0.14
};

shader.uniforms.uMouseStrength = {
  value: 0.045
};

      /* =========================
         VERTEX SHADER
      ========================= */

      shader.vertexShader = `

        uniform float time;

uniform vec2 uTrail[8];
uniform float uMouseRadius;
uniform float uMouseStrength;

attribute float sizes;
attribute vec4 shift;

varying vec3 vColor;

        ${shader.vertexShader}

      `

      .replace(

        `gl_PointSize = size;`,

        `
        gl_PointSize =
          size * sizes;
        `

      )

      .replace(

        `#include <color_vertex>`,

        `
        #include <color_vertex>

        float d =
  length(position.xz) / 40.0;

d =
  clamp(
    d,
    0.0,
    1.0
  );

        vColor = mix(

  vec3(
    255.0,
    40.0,
    110.0
  ),

  vec3(
    255.0,
    180.0,
    220.0
  ),

  d

) / 255.0;

        `

      )

      .replace(

        `#include <begin_vertex>`,

        `
        #include <begin_vertex>

        float t =
          time;

        float moveT =
          mod(
            shift.x
            +
            shift.z * t,
            PI2
          );

        float moveS =
          mod(
            shift.y
            +
            shift.z * t,
            PI2
          );

        transformed +=

          vec3(

            cos(moveS)
            *
            sin(moveT),

            cos(moveT),

            sin(moveS)
            *
            sin(moveT)

          )

          * shift.w;

        `

      );


      /* =========================
         FRAGMENT SHADER
      ========================= */

      shader.fragmentShader = `

        varying vec3 vColor;

        ${shader.fragmentShader}

      `

      .replace(

        `#include <clipping_planes_fragment>`,

        `
        #include <clipping_planes_fragment>

        float d =
          length(
            gl_PointCoord.xy
            -
            0.5
          );

        `

      )

      .replace(

        `vec4 diffuseColor = vec4( diffuse, opacity );`,

        `
        vec4 diffuseColor =
          vec4(

            vColor,

            smoothstep(
              0.5,
              0.1,
              d
            )

          );
        `

      );

    }

  });


/* =========================
   POINT CLOUD
========================= */
// Intro: ban đầu chưa vẽ particle hoa
// =========================
// SORT ROSE: CENTER -> OUTSIDE
// =========================

function sortPointGeometryFromCenter(geometry) {

  const position =
    geometry.attributes.position;

  const count =
    position.count;

  const order =
    new Array(count);

  for (let i = 0; i < count; i++) {

    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);

    // Khoảng cách particle tới tâm hoa
    const distance =
      x * x +
      y * y +
      z * z;

    order[i] = {
      index: i,
      distance: distance
    };
  }

  // Gần tâm trước -> ngoài cánh sau
  order.sort(
    (a, b) =>
      a.distance - b.distance
  );

  // Sort toàn bộ attribute cùng nhau
  // để color/size/... không bị lệch particle
  for (const name in geometry.attributes) {

    const oldAttribute =
      geometry.attributes[name];

    const itemSize =
      oldAttribute.itemSize;

    const OldArrayType =
      oldAttribute.array.constructor;

    const newArray =
      new OldArrayType(
        oldAttribute.array.length
      );

    for (let newIndex = 0;
         newIndex < count;
         newIndex++) {

      const oldIndex =
        order[newIndex].index;

      for (let j = 0;
           j < itemSize;
           j++) {

        newArray[
          newIndex * itemSize + j
        ] =
          oldAttribute.array[
            oldIndex * itemSize + j
          ];
      }
    }

    geometry.setAttribute(
      name,
      new THREE.BufferAttribute(
        newArray,
        itemSize,
        oldAttribute.normalized
      )
    );
  }
}


// Sắp particle hoa từ tâm -> ngoài
sortPointGeometryFromCenter(
  innerGeometry
);

// Ban đầu chưa vẽ particle hoa
innerGeometry.setDrawRange(
  0,
  0
);

const innerParticles =
  new THREE.Points(
    innerGeometry,
    material
  );
// Intro: ban đầu chưa vẽ particle galaxy
outerGeometry.setDrawRange(0, 0);
const outerParticles =
  new THREE.Points(
    outerGeometry,
    material
  );

innerParticles.rotation.order = "ZYX";
outerParticles.rotation.order = "ZYX";

innerParticles.rotation.z = 0.2;
outerParticles.rotation.z = 0.2;

scene.add(innerParticles);
scene.add(outerParticles);
function createHeartTexture() {

  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 128, 128);

  ctx.beginPath();

  ctx.moveTo(64, 108);

  ctx.bezierCurveTo(
    15, 75,
    20, 30,
    45, 30
  );

  ctx.bezierCurveTo(
    58, 30,
    64, 42,
    64, 42
  );

  ctx.bezierCurveTo(
    64, 42,
    70, 30,
    83, 30
  );

  ctx.bezierCurveTo(
    108, 30,
    113, 75,
    64, 108
  );

  ctx.closePath();

  ctx.fillStyle = "#ff5ca4";

  ctx.shadowColor = "#ff66cc";
  ctx.shadowBlur = 18;

  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}
/* =========================
   ORBITING HEARTS
========================= */

const orbitHeartGroup = new THREE.Group();
innerParticles.add(orbitHeartGroup);

// dùng lại heart texture cũ nếu vẫn còn
const orbitHeartTexture = createHeartTexture();

const heartRaycaster =
  new THREE.Raycaster();

const heartPointer =
  new THREE.Vector2();
const orbitHearts = [];
const ORBIT_HEART_COUNT = 4;
let openedHeartCount = 0;
const heartLetters = [

  {
    title: "Món quà dành cho em ❤️",
    text: `Đây là một trong những lý do anh kéo dài thời gian mới tỏ tình em, vì anh muốn chuẩn bị thật chỉnh chu cho em ❤️`
  },

  {
    title: "Anh muốn bản thân mình thật tốt 🌷",
    text: `Anh còn nhiều công việc phải thực hiện, sợ rằng sẽ vô tâm với em nên anh muốn sắp xếp thời gian thật kỹ`
  },

  {
    title: "Anh muốn biết thời gian có quan trọng hay không 💌",
    text: `Như anh đã nói, anh sẽ phải cố gắng thêm để mình theo đuổi được  ước mơ nghiên cứu của mình, 
    nên chắc chắn mình sẽ phải yêu xa, đó là điều làm em chờ đợi tiếp theo mà anh trăn trở!`
  },

  {
    title: "Dành cho em ❤️",
    text: `Anh đã suy nghĩ thật kỹ rồi, nếu bây giờ mình không tỏ tình em, sẽ thiệt thòi cho em, thay vì vậy anh muốn lựa chọn việc mình cùng cố gắng hen!!`
  }

];
/* =========================
   FINAL LETTER
========================= */

const finalLetterOverlay =
  document.createElement("div");

finalLetterOverlay.style.cssText = `
  position: fixed;
  inset: 0;

  display: none;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      circle at center,
      rgba(80,10,50,0.72),
      rgba(0,0,10,0.96)
    );

  backdrop-filter:
    blur(14px);

  z-index: 10000;

  opacity: 0;

  transition:
    opacity 1.2s ease;
`;

finalLetterOverlay.innerHTML = `
  <div
    id="final-letter-container"
    style="
      width: min(620px, 88vw);

      text-align: center;

      color: white;

      font-family:
        Georgia,
        serif;
    "
  >

    <div
      id="final-envelope"
      style="
        font-size: 90px;

        transform:
          scale(0.7);

        opacity: 0;

        transition:
          transform 1s ease,
          opacity 1s ease;

        filter:
          drop-shadow(
            0 0 30px
            rgba(255,100,180,0.9)
          );
      "
    >
      💌
    </div>


    <div
      id="final-letter-intro"
      style="
        margin-top: 20px;

        font-size: 22px;

        line-height: 1.7;

        opacity: 0;

        transform:
          translateY(20px);

        transition:
          opacity 1s ease,
          transform 1s ease;
      "
    >
      Anh Tặng Em Bé ❤️
    </div>


    <button
      id="final-open-letter"
      type="button"
      style="
        margin-top: 30px;

        padding:
          15px 30px;

        border:
          1px solid
          rgba(255,255,255,0.4);

        border-radius:
          30px;

        background:
          rgba(255,80,150,0.22);

        color:
          white;

        font-size:
          18px;

        cursor:
          pointer;

        opacity: 0;

        transform:
          translateY(20px);

        transition:
          opacity 1s ease,
          transform 1s ease,
          background 0.2s ease,
          box-shadow 0.2s ease;
      "
    >
      OPEN
    </button>


    <div
  id="final-letter-content"
  style="
    display: none;

    width: min(520px, 82vw);

    max-height: 65vh;

    overflow-y: auto;

    box-sizing: border-box;

    margin: 25px auto 0;

    padding: 30px 26px;

    border-radius: 24px;

    background:
      linear-gradient(
        145deg,
        rgba(255,245,250,0.98),
        rgba(255,210,230,0.98)
      );

    color: #7a1746;

    font-family:
      Georgia,
      serif;

    font-size: 19px;

    line-height: 1.9;

    text-align: left;

    white-space:
      pre-line;

    box-shadow:
      0 0 60px
      rgba(255,80,150,0.45);

    opacity: 0;

    transform:
      translateY(25px)
      scale(0.97);

    transition:
      opacity 1s ease,
      transform 1s ease;
  "
></div>
<div
  id="final-question"
  style="
    display: none;

    margin-top: 28px;

    text-align: center;

    opacity: 0;

    transform: translateY(20px);

    transition:
      opacity 1s ease,
      transform 1s ease;
  "
>

  <div
    style="
      color: white;

      font-size: 27px;

      font-weight: bold;

      line-height: 1.6;

      text-shadow:
        0 0 25px
        rgba(255,100,180,0.8);
    "
  >
    Em làm người yêu anh nhé? ❤️
  </div>


  <div
    id="final-choice-area"
    style="
      position: relative;

      width: min(420px, 80vw);
      height: 140px;

      margin: 25px auto 0;
    "
  >

    <button
      id="final-yes-button"
      type="button"
      style="
        position: absolute;

        left: 25%;
        top: 50%;

        transform:
          translate(-50%, -50%);

        padding: 14px 25px;

        border: none;

        border-radius: 28px;

        background:
          linear-gradient(
            135deg,
            #ff4f9a,
            #b84cff
          );

        color: white;

        font-size: 17px;

        font-weight: bold;

        cursor: pointer;

        white-space: nowrap;

        box-shadow:
          0 0 25px
          rgba(255,70,160,0.45);
      "
    >
      Đồng ý ❤️
    </button>


    <button
      id="final-no-button"
      type="button"
      style="
        position: absolute;

        left: 75%;
        top: 50%;

        transform:
          translate(-50%, -50%);

        padding: 14px 22px;

        border:
          1px solid
          rgba(255,255,255,0.35);

        border-radius: 28px;

        background:
          rgba(255,255,255,0.1);

        color: white;

        font-size: 16px;

        cursor: pointer;

        white-space: nowrap;

        transition:
          left 0.22s ease,
          top 0.22s ease;
      "
    >
      Không đồng ý 😝
    </button>

  </div>


`;

document.body.appendChild(
  finalLetterOverlay
);


const finalEnvelope =
  document.getElementById(
    "final-envelope"
  );

const finalLetterIntro =
  document.getElementById(
    "final-letter-intro"
  );

const finalOpenLetter =
  document.getElementById(
    "final-open-letter"
  );

const finalLetterContent =
  document.getElementById(
    "final-letter-content"
  );
  const finalQuestion =
  document.getElementById(
    "final-question"
  );

const finalYesButton =
  document.getElementById(
    "final-yes-button"
  );
  /* =========================
   LOVE FINALE
========================= */

const loveFinale =
  document.createElement("div");

loveFinale.style.cssText = `
  display: none;

  position: absolute;
  inset: 0;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  text-align: center;

  opacity: 0;

  transform: scale(0.9);

  transition:
    opacity 1.3s ease,
    transform 1.3s ease;

  pointer-events: none;
`;

loveFinale.innerHTML = `
  <div
    id="love-finale-text"
    style="
      color: white;

      font-size:
        clamp(38px, 7vw, 80px);

      font-weight: bold;

      text-shadow:
        0 0 20px rgba(255,80,160,0.9),
        0 0 55px rgba(255,50,150,0.7);

      opacity: 0;

      transform:
        translateY(25px)
        scale(0.9);

      transition:
        opacity 1.5s ease,
        transform 1.5s ease;
    "
  >
    ❤️ Anh yêu em ❤️
  </div>

  <div
    id="love-finale-sub"
    style="
      margin-top: 20px;

      color: #ffd3e8;

      font-size: 50px;

      opacity: 0;

      transform:
        translateY(20px);

      transition:
        opacity 1.4s ease,
        transform 1.4s ease;
    "
  >
    ❤️ Dương Thúy Quỳnh ❤️
  </div>
`;

finalLetterOverlay.appendChild(
  loveFinale
);

const loveFinaleText =
  document.getElementById(
    "love-finale-text"
  );

const loveFinaleSub =
  document.getElementById(
    "love-finale-sub"
  );
  function launchFinaleBurst() {

  finaleActive = true;


  // Bung nhiều ảnh lên
  for (
    let i = 0;
    i < 20;
    i++
  ) {

    setTimeout(() => {

      spawnWishPhoto(
        (Math.random() - 0.5) * 55,
        -20 + Math.random() * 40
      );

    }, i * 120);
  }


  // Xen chữ giữa các ảnh
  const finaleTexts = [
    "Anh Yêu Em ❤️",
    "Mãi bên nhau nha 💕",
    "Love You ❤️"
  ];


  for (
    let i = 0;
    i < 8;
    i++
  ) {

    setTimeout(() => {

      spawnWishText(
        finaleTexts[
          Math.floor(
            Math.random() *
            finaleTexts.length
          )
        ],

        (Math.random() - 0.5) * 45,

        -15 + Math.random() * 35
      );

    }, 500 + i * 400);
  }
}
  async function startLoveFinale() {

    launchFinaleBurst();
  // Khóa nút
  finalYesButton.disabled =
    true;

  finalYesButton.style.pointerEvents =
    "none";


  // Fade lá thư
  finalLetterContent.style.opacity =
    "0";

  finalLetterContent.style.transform =
    "translateY(-20px) scale(0.97)";


  // Fade câu hỏi
  finalQuestion.style.opacity =
    "0";

  finalQuestion.style.transform =
    "translateY(20px)";


  await finalLetterDelay(
    TEST_MODE ? 100 : 900
  );


  finalLetterContent.style.display =
    "none";

  finalQuestion.style.display =
    "none";


  // Làm overlay trong hơn để galaxy lộ ra
  finalLetterOverlay.style.background =
    `
      radial-gradient(
        circle at center,
        rgba(120,20,80,0.35),
        rgba(0,0,10,0.72)
      )
    `;

  finalLetterOverlay.style.backdropFilter =
    "blur(3px)";


  // Hiện ending
  loveFinale.style.display =
    "flex";


  requestAnimationFrame(() => {

    loveFinale.style.opacity =
      "1";

    loveFinale.style.transform =
      "scale(1)";
  });


  await finalLetterDelay(
    TEST_MODE ? 100 : 700
  );


  // Chữ chính
  loveFinaleText.style.opacity =
    "1";

  loveFinaleText.style.transform =
    "translateY(0) scale(1)";


  await finalLetterDelay(
    TEST_MODE ? 100 : 1200
  );


  // Chữ phụ
  loveFinaleSub.style.opacity =
    "1";

  loveFinaleSub.style.transform =
    "translateY(0)";
}
finalYesButton.addEventListener(
  "click",
  (event) => {

    event.preventDefault();
    event.stopPropagation();

    startLoveFinale();
  }
);

const finalNoButton =
  document.getElementById(
    "final-no-button"
  );

const finalChoiceArea =
  document.getElementById(
    "final-choice-area"
  );
  /* =========================
   FINAL LETTER TEXT
========================= */

const FINAL_LETTER_TEXT = `
Dear Em Bé,

Đây là bức thư anh đã chuẩn bị để dành tặng cho em.
Có lẽ em đã chờ thời điểm này lâu lắm òi he, cứ đòi anh tỏ tình há há.

Như anh đã nói là sẽ hong làm thất vọng đâu.
Anh muốn làm nhiều thiệt là nhiều điều bất ngờ nữa dành cho em kìa.

Tại vì hiện tại anh chỉ có thể ở cạnh và chia sẻ cùng em thui.
Anh biết mình chỉ là mới bắt đầu nhưng đã đi rất nhanh.

Anh hy vọng mình sẽ cùng đi thật xa thật dài nữa.
Sẽ còn nhiều thứ khó khăn lắm nhưng mà hy vọng cả hai mình sẽ cùng vượt qua.

Nên là....
Em bé ơi....
...

`;


function finalLetterDelay(ms) {

  return new Promise(
    resolve =>
      setTimeout(resolve, ms)
  );
}

async function typeFinalLetter(
  text
) {

  finalLetterContent.textContent =
    "";

  // Chuẩn hóa Unicode tiếng Việt
  const normalizedText =
    text.normalize("NFC");

  // Tách theo grapheme:
  // chữ + dấu được xem là 1 ký tự
  const segmenter =
    new Intl.Segmenter(
      "vi",
      {
        granularity:
          "grapheme"
      }
    );

  const characters =
    Array.from(
      segmenter.segment(
        normalizedText
      ),
      item => item.segment
    );


  for (
    let i = 0;
    i < characters.length;
    i++
  ) {

    const char =
      characters[i];

    finalLetterContent.textContent +=
      char;


    finalLetterContent.scrollTop =
      finalLetterContent.scrollHeight;


    if (
      char === "\n"
    ) {

      await finalLetterDelay(
        TEST_MODE ? 10 : 550
      );

    }

    else if (
      char === "." ||
      char === "!" ||
      char === "?"
    ) {

      await finalLetterDelay(
        TEST_MODE ? 10 : 400
      );

    }

    else {

      await finalLetterDelay(
        TEST_MODE ? 2 : 75
      );

    }
  }
}

async function showFinalQuestion() {

  await finalLetterDelay(
    TEST_MODE ? 100 : 1200
  );

  finalQuestion.style.display =
    "block";


  requestAnimationFrame(
    () => {

      finalQuestion.style.opacity =
        "1";

      finalQuestion.style.transform =
        "translateY(0)";
    }
  );
}
function moveNoButton() {

  const areaWidth =
    finalChoiceArea.clientWidth;

  const areaHeight =
    finalChoiceArea.clientHeight;

  const buttonWidth =
    finalNoButton.offsetWidth;

  const buttonHeight =
    finalNoButton.offsetHeight;


  const padding = 10;


  const minX =
    buttonWidth / 2 +
    padding;

  const maxX =
    areaWidth -
    buttonWidth / 2 -
    padding;

  const minY =
    buttonHeight / 2 +
    padding;

  const maxY =
    areaHeight -
    buttonHeight / 2 -
    padding;


  const randomX =
    minX +
    Math.random() *
    (maxX - minX);

  const randomY =
    minY +
    Math.random() *
    (maxY - minY);


  finalNoButton.style.left =
    `${randomX}px`;

  finalNoButton.style.top =
    `${randomY}px`;
}
const noButtonTexts = [
  "Không đồng ý 😝",
  "Ủa alo 😳",
  "Bé chắc chưa 😭",
  "Bắt được đi 😜",
  "Không cho bấm đâu 😌",
  "Suy nghĩ lại iii 🥺"
];

let noButtonClickCount = 0;


finalNoButton.addEventListener(
  "pointerdown",
  (event) => {

    event.preventDefault();
    event.stopPropagation();

    noButtonClickCount++;

    finalNoButton.textContent =
      noButtonTexts[
        noButtonClickCount %
        noButtonTexts.length
      ];

    moveNoButton();
  }
);
  function openFinalLetter() {

  finalLetterOverlay.style.display =
    "flex";

  controls.enabled = false;
  controls.autoRotate = false;


  requestAnimationFrame(() => {

    finalLetterOverlay.style.opacity =
      "1";

  });


  setTimeout(() => {

    finalEnvelope.style.opacity =
      "1";

    finalEnvelope.style.transform =
      "scale(1)";

  }, 500);


  setTimeout(() => {

    finalLetterIntro.style.opacity =
      "1";

    finalLetterIntro.style.transform =
      "translateY(0)";

  }, 1400);


  setTimeout(() => {

    finalOpenLetter.style.opacity =
      "1";

    finalOpenLetter.style.transform =
      "translateY(0)";

  }, 2300);
}
/* =========================
   OPEN FINAL ENVELOPE
========================= */

finalOpenLetter.addEventListener(
  "click",
  async (event) => {

    event.stopPropagation();


    // Không cho bấm nhiều lần
    finalOpenLetter.disabled =
      true;

    finalOpenLetter.style.pointerEvents =
      "none";


    // Phong thư phóng nhẹ rồi biến mất
    finalEnvelope.style.opacity =
      "0";

    finalEnvelope.style.transform =
      "scale(1.25) translateY(-20px)";


    // Intro biến mất
    finalLetterIntro.style.opacity =
      "0";

    finalLetterIntro.style.transform =
      "translateY(-15px)";


    // Nút biến mất
    finalOpenLetter.style.opacity =
      "0";

    finalOpenLetter.style.transform =
      "translateY(15px)";


    await finalLetterDelay(
      800
    );


    // Ẩn hẳn phần phong thư
    finalEnvelope.style.display =
      "none";

    finalLetterIntro.style.display =
      "none";

    finalOpenLetter.style.display =
      "none";


    // Hiện giấy thư
    finalLetterContent.style.display =
      "block";

    finalLetterContent.textContent =
      "";


    requestAnimationFrame(
      () => {

        finalLetterContent.style.opacity =
          "1";

        finalLetterContent.style.transform =
          "translateY(0) scale(1)";
      }
    );


    // Đợi giấy thư hiện ra
    await finalLetterDelay(
      700
    );


    // Bắt đầu chạy chữ
    await typeFinalLetter(
      FINAL_LETTER_TEXT
    );
    await showFinalQuestion();

  }
);

finalYesButton.addEventListener(
  "mouseenter",
  () => {

    finalYesButton.style.transform =
      "translate(-50%, -50%) scale(1.07)";

    finalYesButton.style.boxShadow =
      `
        0 0 45px
        rgba(255,80,170,0.75)
      `;
  }
);


finalYesButton.addEventListener(
  "mouseleave",
  () => {

    finalYesButton.style.transform =
      "translate(-50%, -50%) scale(1)";

    finalYesButton.style.boxShadow =
      `
        0 0 30px
        rgba(255,70,160,0.45)
      `;
  }
);
/* =========================
   HEART LETTER POPUP
========================= */

const letterOverlay =
  document.createElement("div");

letterOverlay.style.cssText = `
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.68);
  backdrop-filter: blur(10px);
  z-index: 9999;
`;

letterOverlay.innerHTML = `
  <div id="letter-card" style="
    position: relative;
    width: min(420px, 82vw);
    padding: 38px 30px;
    border-radius: 24px;
    background:
      linear-gradient(
        145deg,
        rgba(255,245,250,0.98),
        rgba(255,205,225,0.97)
      );
    box-shadow:
      0 0 60px rgba(255,80,150,0.45);
    text-align: center;
    color: #7a1746;
  ">

    <button id="letter-close" style="
      position: absolute;
      top: 10px;
      right: 16px;
      border: none;
      background: transparent;
      font-size: 30px;
      color: #9a3765;
      cursor: pointer;
    ">×</button>

    <div style="
      font-size: 48px;
      margin-bottom: 14px;
    ">
      💌
    </div>

    <h2 id="letter-title" style="
      margin: 0 0 18px;
      font-family: Georgia, serif;
      font-size: 26px;
    "></h2>

    <div id="letter-text" style="
      white-space: pre-line;
      font-family: Georgia, serif;
      font-size: 18px;
      line-height: 1.7;
    "></div>

  </div>
`;

document.body.appendChild(
  letterOverlay
);

const letterTitle =
  document.getElementById(
    "letter-title"
  );

const letterText =
  document.getElementById(
    "letter-text"
  );

const letterClose =
  document.getElementById(
    "letter-close"
  );
  function openHeartLetter(index) {

  const letter =
    heartLetters[index];

  if (!letter) return;

  letterTitle.textContent =
    letter.title;

  letterText.textContent =
    letter.text;

  letterOverlay.style.display =
    "flex";

  controls.enabled = false;
  controls.autoRotate = false;
}


function closeHeartLetter() {

  letterOverlay.style.display =
    "none";

  controls.enabled = true;
  controls.autoRotate = true;
}
letterClose.addEventListener(
  "click",
  closeHeartLetter
);

letterOverlay.addEventListener(
  "pointerdown",
  (event) => {

    if (event.target === letterOverlay) {
      closeHeartLetter();
    }

  }
);
for (let i = 0; i < ORBIT_HEART_COUNT; i++) {

  const material = new THREE.SpriteMaterial({
    map: orbitHeartTexture,
    color: 0xff6fb5,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending
  });

  const heart = new THREE.Sprite(material);

  const baseScale =
  1.2 + Math.random() * 0.8;

heart.scale.set(
  baseScale,
  baseScale,
  1
);

heart.userData = {

  heartIndex: i,

  radius:
    12 + Math.random() * 5,

  speed:
    0.35 + Math.random() * 0.35,

  phase:
    Math.random() * Math.PI * 2,

  yBase:
    -1 + Math.random() * 5,

  yAmp:
    0.3 + Math.random() * 0.7,

  baseScale:
    baseScale,
  clickPulse: 1,

opened: false,
playing: false,

currentOpacity: 0.9,
targetOpacity: 0.9
};

  orbitHeartGroup.add(heart);
  orbitHearts.push(heart);
}
window.addEventListener(
  "pointerdown",
  (event) => {

    if (!introFinished) return;
    if (heartGameActive) return;

    heartPointer.x =
      (event.clientX / window.innerWidth) * 2 - 1;

    heartPointer.y =
      -(event.clientY / window.innerHeight) * 2 + 1;

    heartRaycaster.setFromCamera(
      heartPointer,
      camera
    );

    const hits =
      heartRaycaster.intersectObjects(
        orbitHearts,
        false
      );

    if (hits.length === 0) {
      return;
    }

    const clickedHeart =
  hits[0].object;
  if (
  clickedHeart.userData.opened ||
  clickedHeart.userData.playing
) {
  return;
}

const heartIndex =
  orbitHearts.indexOf(
    clickedHeart
  );
//   clickedHeart.userData.opened = true;

// clickedHeart.userData.targetOpacity = 0;

// openedHeartCount++;
// if (
//   openedHeartCount ===
//   ORBIT_HEART_COUNT
// ) {

//   setTimeout(() => {

//     resetAllHearts();

//   }, 1000);

// }

// clickedHeart.userData.opened = true;

// openHeartLetter(
//   heartIndex
// );


console.log(
  "Clicked heart:",
  heartIndex
);

clickedHeart.userData.playing =
  true;
startHeartGame(
  heartIndex
);
// ===== TEST CLICK =====
clickedHeart.userData.clickPulse = 1.8;

clickedHeart.material.color.set(
  0xffffff
);

setTimeout(() => {

  clickedHeart.userData.clickPulse = 1;

  if (
    !clickedHeart.userData.opened
  ) {

    clickedHeart.material.color.set(
      0xff6fb5
    );

  }

}, 300);
  }
);
/* =========================
   RAINBOW NEBULA OUTER
========================= */

function createGlowTexture() {

  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    128, 128, 0,
    128, 128, 128
  );

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.15, "rgba(255,255,255,0.8)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.25)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  return new THREE.CanvasTexture(canvas);
}

const nebulaTexture = createGlowTexture();

const nebulaGroup = new THREE.Group();

const nebulaColors = [
  0xff3366, // đỏ hồng
  0xff8800, // cam
  0xffee33, // vàng
  0x33ff99, // xanh lá
  0x33ccff, // cyan
  0x6666ff, // xanh tím
  0xcc55ff  // tím
];

const NEBULA_COUNT = 80;

for (let i = 0; i < NEBULA_COUNT; i++) {

  const angle =
    Math.random() * Math.PI * 2;

  // nằm chủ yếu ở vùng ngoài galaxy
  const radius =
    100 + Math.random() * 5;

  const x =
    Math.cos(angle) * radius;

  const z =
    Math.sin(angle) * radius;

  const y =
    (Math.random() - 0.5) * 4;

  const color =
    nebulaColors[
      Math.floor(
        Math.random() * nebulaColors.length
      )
    ];

  const material =
  new THREE.SpriteMaterial({

    map: nebulaTexture,

    color: color,

    transparent: true,

   opacity: 0,

    depthTest: false,
    depthWrite: false,

    blending:
      THREE.AdditiveBlending

  });
  

  const glow =
    new THREE.Sprite(material);

  glow.position.set(
  x,
  y,
  z
);

glow.userData = {
  angle: angle,
  baseRadius: radius,
  phase: Math.random() * Math.PI * 2,
  speed: 0.9 + Math.random() * 0.1,
  amplitude: 5 + Math.random() * 9,
  baseOpacity:
  0.50 + Math.random() * 0.25,
};

  const size =
    100 + Math.random() * 12;

  glow.scale.set(
    size,
    size,
    1
  );

  nebulaGroup.add(glow);
}

outerParticles.add(nebulaGroup);
/* =========================
   OUTER EDGE AURA
========================= */

const AURA_COUNT = 5000;

const auraPositions =
  new Float32Array(AURA_COUNT * 3);

const auraSpeeds =
  new Float32Array(AURA_COUNT);

for (let i = 0; i < AURA_COUNT; i++) {

  const angle =
    Math.random() * Math.PI * 2;

  const r = 10;
  const R = 40;

  const rand =
    Math.random();

  const radius =
    Math.sqrt(
      r * r +
      rand * (R * R - r * r)
    );

  const x =
    Math.cos(angle) * radius;

  const z =
    Math.sin(angle) * radius;

  // Xuất phát ngay gần mặt outer
  const y =
    (Math.random() - 0.5) * 2;

  auraPositions[i * 3] = x;
  auraPositions[i * 3 + 1] = y;
  auraPositions[i * 3 + 2] = z;

  auraSpeeds[i] =
    0.01 + Math.random() * 0.04;
}

const auraGeometry =
  new THREE.BufferGeometry();

auraGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(
    auraPositions,
    3
  )
);

const auraMaterial =
  new THREE.PointsMaterial({

    size: 0.1,

    color: 0xcc66ff,

    transparent: true,

    opacity: 0.7,

    depthWrite: false,

    blending:
      THREE.AdditiveBlending

  });

const auraParticles =
  new THREE.Points(
    auraGeometry,
    auraMaterial
  );

// Gắn trực tiếp vào outer
// => outer xoay thì aura xoay theo
outerParticles.add(auraParticles);

/* =========================
   CLOCK
========================= */

const clock =
  new THREE.Clock();


/* =========================
   ANIMATION
========================= */
let nebulaIntensity = 1.4;
let finaleActive = false;

function resetAllHearts() {

  openedHeartCount = 0;

  orbitHearts.forEach((heart) => {

    const d =
      heart.userData;

    d.opened = false;

    d.playing = false;

    d.clickPulse = 1;

    d.currentOpacity = 0;

    d.targetOpacity = 0.9;

    heart.visible = true;

    heart.material.color.set(
      0xff6fb5
    );

  });
}
renderer.setAnimationLoop(() => {
  if (!websiteUnlocked) {
  renderer.render(scene, camera);
  return;
}
 controls.update();

  /* =========================
     TIME
  ========================= */

  const elapsedTime =
    clock.getElapsedTime();

  const t =
    elapsedTime * 0.5;

  gu.time.value =
    t * Math.PI;


  /* =========================
     CAMERA INTRO
  ========================= */
if (!introFinished) {

  const elapsed =
    performance.now() - introStartTime;

  const elapsedSec =
    elapsed / 1000;

  // Camera chỉ di chuyển từ giây 2 -> giây 5
  const cameraProgress =
    easeInOutCubic(
      phaseProgress(
        elapsedSec,
        2,
        5
      )
    );

  camera.position.lerpVectors(
    cameraStart,
    cameraEnd,
    cameraProgress
  );

  camera.lookAt(
    0,
    0,
    0
  );

  // Toàn bộ intro kết thúc ở giây 11
  if (elapsed >= INTRO_DURATION) {

    introFinished = true;

    controls.enabled = true;

    controls.target.set(
      0,
      0,
      0
    );

    controls.autoRotate = true;

  }

}


/* =========================
     ROTATION
  ========================= */

  const roseElapsedSec =
  introStartTime === null
    ? 0
    : (performance.now() - introStartTime) / 1000;

// Hoa xuất hiện từ giây 7 -> 9
const roseProgress =
  introFinished
    ? 1
    : easeOutExpo(
        phaseProgress(
          roseElapsedSec,
          7,
          9
        )
      );

const roseParticleCount =
  innerGeometry.attributes.position.count;

innerGeometry.setDrawRange(
  0,
  Math.floor(
    roseParticleCount *
    roseProgress
  )
);

// Scale nhẹ khi hoa hình thành
innerParticles.scale.setScalar(
  0.82 + 0.18 * roseProgress
);

// Xoay từ rất chậm -> tốc độ cũ
innerParticles.rotation.y =
  t * (
    0.01 +
    0.04 * roseProgress
  );

  const galaxyElapsedSec =
  introStartTime === null
    ? 0
    : (performance.now() - introStartTime) / 1000;

// Galaxy xuất hiện từ giây 5 -> 7
// 5 -> 7s: galaxy chỉ hình thành 35%
const galaxyBuild =
  easeOutExpo(
    phaseProgress(
      galaxyElapsedSec,
      5,
      7
    )
  );

// 9 -> 11s: galaxy mới hoàn thiện 35% -> 100%
const galaxyFinish =
  easeInOutCubic(
    phaseProgress(
      galaxyElapsedSec,
      9,
      11
    )
  );

const galaxyProgress =
  introFinished
    ? 1
    : (
        0.35 * galaxyBuild +
        0.65 * galaxyFinish
      );

// Vẽ dần 0 -> 100000 particle
const galaxyParticleCount =
  outerGeometry.attributes.position.count;

outerGeometry.setDrawRange(
  0,
  Math.floor(
    galaxyParticleCount *
    galaxyProgress
  )
);

// Galaxy hơi mở rộng khi xuất hiện
outerParticles.scale.setScalar(
  0.92 + 0.08 * galaxyProgress
);

// Xoay từ chậm -> tốc độ hiện tại
outerParticles.rotation.y =
  t * (
    0.015 +
    0.035 * galaxyProgress
  );

  
  /* =========================
     INNER FLOAT
  ========================= */

  innerParticles.position.y =
    (1 - Math.cos(t * 2)) * 2.5;

/* =========================
   ORBITING HEARTS UPDATE
========================= */

for (let i = 0; i < orbitHearts.length; i++) {

  const h = orbitHearts[i];
  const d = h.userData;
  // Fade tim mượt
d.currentOpacity =
  THREE.MathUtils.lerp(
    d.currentOpacity,
    d.targetOpacity,
    0.06
  );

h.material.opacity =
  d.currentOpacity;

// Fade xong thì ẩn hẳn
if (
  d.opened &&
  d.currentOpacity < 0.02
) {
  h.visible = false;
}

  const a =
    elapsedTime * d.speed + d.phase;

  h.position.x =
    Math.cos(a) * d.radius;

  h.position.z =
    Math.sin(a) * d.radius;

  h.position.y =
    d.yBase +
    Math.sin(a * 1.8) * d.yAmp;

  const pulse =
    1 + Math.sin(elapsedTime * 3 + d.phase) * 0.08;

  h.scale.set(
  d.baseScale *
    pulse *
    d.clickPulse,

  d.baseScale *
    pulse *
    d.clickPulse,

  1
);
}
  /* =========================
     OUTER AURA FLY
  ========================= */

  const auraPos =
    auraGeometry.attributes.position.array;

  for (let i = 0; i < AURA_COUNT; i++) {

    auraPos[i * 3 + 1] +=
      auraSpeeds[i];

    if (auraPos[i * 3 + 1] > 50) {

      auraPos[i * 3 + 1] =
        -5 + Math.random() * 2;

    }

  }

  auraGeometry.attributes.position.needsUpdate =
    true;

  /* =========================
     RENDER
  ========================= */
/* =========================
   NEBULA INTRO BRIGHTNESS
========================= */
const introElapsedSec =
  introStartTime === null
    ? 0
    : (performance.now() - introStartTime) / 1000;
// =========================
// CINEMATIC LIGHT TIMELINE
// =========================

// Camera zoom từ 2 -> 5s:
// ánh sáng giảm từ 100% xuống gần tắt
const lightFadeOut =
  easeInOutCubic(
    phaseProgress(
      introElapsedSec,
      2,
      5
    )
  );

// Sau khi hoa hoàn thành:
// 9 -> 11s ánh sáng bật trở lại
const lightFadeIn =
  easeInOutCubic(
    phaseProgress(
      introElapsedSec,
      9,
      11
    )
  );

let introLightFactor;

if (introElapsedSec < 2) {

  // Ban đầu sáng lóa
  introLightFactor = 1.0;

}
else if (introElapsedSec < 5) {

  // Zoom vào -> ánh sáng tắt dần
  introLightFactor =
    1.0 - lightFadeOut;

}
else if (introElapsedSec < 9) {

  // Galaxy + hoa hình thành trong bóng tối
  introLightFactor = 0.08;

}
else {

  // Hoa hoàn thành -> sáng trở lại
  introLightFactor =
    0.08 +
    0.92 * lightFadeIn;

}

if (introFinished) {
  introLightFactor = 1.0;
}
const introFade =
  introFinished
    ? 1
    : easeOutQuad(
        phaseProgress(
          introElapsedSec,
          0,
          2
        )
      );

const targetNebulaIntensity =
  finaleActive
    ? 1.35
    : (
        introFinished
          ? 0.55
          : 1.5
      );

nebulaIntensity =
  THREE.MathUtils.lerp(
    nebulaIntensity,
    targetNebulaIntensity,
    0.025
  );

nebulaGroup.children.forEach((glow) => {

  glow.material.opacity =
  Math.min(
    1,
    glow.userData.baseOpacity *
    nebulaIntensity *
    introLightFactor
  );

});
/* =========================
   LANTERN UPDATE
========================= */

if (introFinished) {

  lanternSpawnTimer += 0.016;

  if (lanternSpawnTimer > 1.5) {
  lanternSpawnTimer = 0;
  spawnWishPhoto();
}

}
for (let i = lanterns.length - 1; i >= 0; i--) {

  const l = lanterns[i];
  const d = l.userData;

  l.position.x +=
    d.vx +
    Math.sin(
      elapsedTime * d.swaySpeed +
      d.swayPhase
    ) * d.swayAmp;

  l.position.y += d.vy;
  l.position.z += d.vz;

  l.material.rotation =
    Math.sin(
      elapsedTime * d.swaySpeed +
      d.swayPhase
    ) * d.rotAmp;

  if (l.position.y > d.fadeStartY) {

    d.life -= 0.012;

    l.material.opacity =
      Math.max(0, d.life);
  }

  if (
    d.life <= 0 ||
    l.position.y > 55
  ) {

    lanternGroup.remove(l);

    l.material.dispose();

    lanterns.splice(i, 1);
  }
}
  renderer.render(
    scene,
    camera
  );
/* =========================
   NEBULA MOVE IN / OUT
========================= */

nebulaGroup.children.forEach((glow) => {

  const data =
    glow.userData;

  const radius =
    data.baseRadius +
    Math.sin(
      elapsedTime * data.speed +
      data.phase
    ) * data.amplitude;

  glow.position.x =
    Math.cos(data.angle) * radius;

  glow.position.z =
    Math.sin(data.angle) * radius;

});
});

/* =========================
   DEBUG / TEST SHORTCUT
========================= */

const TEST_MODE = false;

window.addEventListener(
  "keydown",
  (event) => {

    if (!TEST_MODE) {
      return;
    }


    // Shift + F
    // Nhảy thẳng tới lá thư cuối
    if (
      event.shiftKey &&
      event.key.toLowerCase() === "f"
    ) {

      console.log(
        "TEST: FINAL LETTER"
      );


      // Bỏ màn password
      websiteUnlocked = true;

      passwordScreen.classList.add(
        "hide"
      );


      // Bỏ intro
      introStartTime =
        performance.now();

      introFinished =
        true;


      // Hiện toàn bộ hoa
      innerGeometry.setDrawRange(
        0,
        innerGeometry
          .attributes
          .position
          .count
      );


      // Hiện toàn bộ galaxy
      outerGeometry.setDrawRange(
        0,
        outerGeometry
          .attributes
          .position
          .count
      );


      controls.enabled =
        true;

      controls.autoRotate =
        true;


      // Mở thẳng Final Letter
      openFinalLetter();
    }

  }
);