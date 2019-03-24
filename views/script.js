console.log("Roar! I'm here!");

const name = document.getElementById("name");
const cardPer = document.getElementById("card");
const cardAbv = document.getElementById("cardAboveAvg");
const wellPer = document.getElementById("well");
const wellAbv = document.getElementById("wellAboveAvg");

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const SIZE = 640;
let startHarmony = false;

let canvasObject = [];
let intensities = [];
circles.forEach((el, i) => {
  canvasObject.push({
    index: i,
    y: 160 + SIZE - (1 / 0.15) * (el.centre.x - 51.35) * SIZE,
    x: 30 + 5 * (el.centre.y + 2.7) * SIZE,
    card: el.cardAboveAvg,
    well: el.wellBeingAboveAvg
  });
});

console.log(canvasObject);

function renderCircles() {
  canvasObject.forEach((el, i) => {
    c.beginPath();
    c.arc(el.x, el.y, 10, 0, Math.PI * 2, false);
    c.fillStyle = "orangered";
    c.fill();
    c.closePath();
  });
}

function getIntensity(x1, y1, x2, y2) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  let r2 = dx * dx + dy * dy;
  return r2 > 400 ? 10 * Math.log2(400 / (r2 + 1)) : 0;
}

let player = { x: 219, y: 363 };

window.addEventListener("keydown", ev => {
  ev.preventDefault();
  switch (ev.keyCode) {
    case 37:
      player.x -= 1;
      break;
    case 38:
      player.y -= 1;
      break;
    case 39:
      player.x += 1;
      break;
    case 40:
      player.y += 1;
      break;
    default:
      break;
  }
  update();
  render();
});

function renderPlayer() {
  c.beginPath();
  c.arc(player.x, player.y, 20, 0, Math.PI * 2, false);
  c.fillStyle = "lime";
  c.fill();
  c.closePath();
}

function render() {
  c.beginPath();
  c.clearRect(0, 0, SIZE, SIZE);
  c.closePath();
  renderCircles();
  renderPlayer();
}

function update() {
  let maxIntensityIndex = 99;
  let maxIntensity = -100;
  canvasObject.forEach((el, i) => {
    intensities[i] = getIntensity(el.x, el.y, player.x, player.y);
    if (intensities[i] > maxIntensity) {
      maxIntensity = intensities[i];
      maxIntensityIndex = i;
    }
  });

  name.textContent = circles[maxIntensityIndex].name;
  cardPer.textContent = `${Math.round(circles[maxIntensityIndex].card * 100) /
    100}%`;
  cardAbv.textContent = `${
    circles[maxIntensityIndex].cardAboveAvg ? "Above" : "Below"
  } Bristol average`;
  cardAbv.style.backgroundColor = circles[maxIntensityIndex].cardAboveAvg
    ? "#00c800"
    : "#c80000";
  wellPer.textContent = `${Math.round(
    circles[maxIntensityIndex].wellBeing * 100
  ) / 100}%`;
  wellAbv.textContent = `${
    circles[maxIntensityIndex].wellBeingAboveAvg ? "Above" : "Below"
  } Bristol average`;
  wellAbv.style.backgroundColor = circles[maxIntensityIndex].wellBeingAboveAvg
    ? "#00c800"
    : "#c80000";

  if (!startHarmony) {
    lead1.volume.value = 0;
    lead2.volume.value = 0;
    tenor_p.volume.value = -100;
    tenor_n.volume.value = -100;
    bass_p.volume.value = -100;
    bass_n.volume.value = -100;
  } else {
    if (canvasObject[maxIntensityIndex].card) {
      bass_p.volume.value = maxIntensity;
      bass_n.volume.value = -100;
    } else {
      bass_p.volume.value = -100;
      bass_n.volume.value = maxIntensity;
    }
    if (canvasObject[maxIntensityIndex].well) {
      tenor_p.volume.value = maxIntensity;
      tenor_n.volume.value = -100;
    } else {
      tenor_p.volume.value = -100;
      tenor_n.volume.value = maxIntensity;
    }
  }
}

window.setTimeout(() => {
  startHarmony = true;
}, Tone.Time("2n") * 8);

render();
