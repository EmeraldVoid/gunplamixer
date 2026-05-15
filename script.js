let mode = 1;
let currentBuild = null;

const kits = [
  "Atlas Gundam",
  "Full Armor Gundam Thunderbolt Version",
  "Mobile Worker",
  "Psycho Zaku Thunderbolt Version",
  "Acguy",
  "Ball",
  "Char Aznable's Gelgoog",
  "Char Aznable's Zaku II S",
  "Dom",
  "G-3 Gundam",
  "Garma Zabi's Zaku II FS",
  "Gelgoog Jaeger",
  "GM",
  "GM Command",
  "Gouf",
  "Gouf Custom",
  "Guncannon",
  "Gundam",
  "Gundam Ez8",
  "Gundam Ground Type",
  "Gundam NT-1",
  "Guntank",
  "Gyan",
  "Hy-Gogg",
  "Johnny Ridden's High Mobility Gelgoog",
  "Johnny Ridden's Zaku II High Mobility Type",
  "Kampfer",
  "Perfect Zeong",
  "Zaku II",
  "Zaku II FZ",
  "Zaku Minelayer",
  "Zeong",
  "Z'Gok",
  "Zudah",
  "Dom Tropen",
  "Gerbera Tetra",
  "GM Custom",
  "Gundam GP01 Zephyranthes",
  "Gundam GP02 Physalis",
  "Gundam GP03 Stamen",
  "Barzam",
  "Baund Doc",
  "Zeta Gundam",
  "Hi-Nu Gundam",
  "Nu Gundam",
  "Sazabi",
  "Unicorn Gundam",
  "Sinanju",
  "Strike Freedom Gundam",
  "00 Gundam",
  "00 Raiser",
  "Gundam Exia",
  "Gundam Aerial",
  "Barbatos Lupus Rex",
  "Perfect Gundam"
];

function rand() {
  return kits[Math.floor(Math.random() * kits.length)];
}

function generate() {
  return {
    head: rand(),
    body: rand(),
    legs: rand(),
    leftArm: rand(),
    rightArm: rand(),
    backpack: rand()
  };
}

function start(selectedMode) {
  mode = selectedMode;
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");

  let bar = document.getElementById("barFill");
  bar.style.width = "0%";

  setTimeout(() => {
    bar.style.width = "100%";
  }, 100);

  setTimeout(() => {
    currentBuild = generate();
    showResult();
  }, 1600);
}

function showResult() {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  render();
}

function render() {
  document.getElementById("output").textContent =
`HEAD      : ${currentBuild.head}
BODY      : ${currentBuild.body}
LEGS      : ${currentBuild.legs}
LEFT ARM  : ${currentBuild.leftArm}
RIGHT ARM : ${currentBuild.rightArm}
BACKPACK  : ${currentBuild.backpack}`;
}

function reroll() {
  currentBuild = generate();
  render();
}

function copyBuild() {
  navigator.clipboard.writeText(document.getElementById("output").textContent);
  alert("Copied to clipboard!");
}

function reset() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}