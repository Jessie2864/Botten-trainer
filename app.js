// Global variabelen voor het spel
let huidigeLevel = 1;
let levens = 3;
let score = 0;

// UI Elementen ophalen
const levensDisplay = document.getElementById("levens-display");
const scoreDisplay = document.getElementById("score-display");

// Functie om de levens-display op het scherm bij te werken
function updateLevensDisplay() {
  if (levensDisplay) {
    levensDisplay.innerText = `Levens: ${levens}`;
  }
}

// Functie om het spel/level te herstarten bij Game Over
function gameOver() {
  alert("Game Over! Je hebt geen levens meer.");
  // Herstart het huidige level met 3 nieuwe levens
  startLevel(huidigeLevel);
}

// Functie om een level te starten en levens te resetten naar 3
function startLevel(levelNummer) {
  huidigeLevel = levelNummer;
  levens = 3; // Geef de speler weer 3 levens voor het nieuwe level
  updateLevensDisplay();

  console.log(`Level ${huidigeLevel} gestart met 3 levens.`);
}

// ==========================================
// LEVEL 1: Antwoord Controle
// ==========================================
function controleerAntwoordLevel1(isCorrect) {
  if (isCorrect) {
    score += 10;
    alert("Goed gedaan! Op naar Level 2.");
    startLevel(2); // Ga naar level 2
  } else {
    levens--;
    updateLevensDisplay();
    if (levens <= 0) {
      gameOver();
    } else {
      alert(`Fout antwoord! Je hebt nog ${levens} leven(s) over.`);
    }
  }
}

// ==========================================
// LEVEL 2: Antwoord Controle
// ==========================================
function controleerAntwoordLevel2(isCorrect) {
  if (isCorrect) {
    score += 15;
    alert("Super! Op naar Level 3.");
    startLevel(3); // Ga naar level 3
  } else {
    levens--; // 1 leven eraf
    updateLevensDisplay();
    if (levens <= 0) {
      gameOver();
    } else {
      alert(`Fout antwoord in Level 2! Je hebt nog ${levens} leven(s) over.`);
    }
  }
}

// ==========================================
// LEVEL 3: Antwoord Controle
// ==========================================
function controleerAntwoordLevel3(isCorrect) {
  if (isCorrect) {
    score += 20;
    alert("Gefeliciteerd! Je hebt alle levels gehaald!");
  } else {
    levens--; // 1 leven eraf
    updateLevensDisplay();
    if (levens <= 0) {
      gameOver();
    } else {
      alert(`Fout antwoord in Level 3! Je hebt nog ${levens} leven(s) over.`);
    }
  }
}

// Start het spel bij het laden op Level 1
startLevel(1);