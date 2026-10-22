// Dataset van de 21 VWO Biologie botten zonder Latijnse namen
const BONES_DATA = [
  {
    id: 'schedel',
    name: 'Schedel',
    category: 'Hoofd',
    region: 'hoofd',
    viewBox: '130 10 140 180',
    desc: 'Beschermt de hersenen en vormt de structuur van het gezicht.',
    tip: 'Vormt de doos om je hersenen. Bestaat bij volwassenen uit vergroeide schedelbeenderen.'
  },
  {
    id: 'halswervels',
    name: 'Halswervels',
    category: 'Wervelkolom',
    region: 'hoofd',
    viewBox: '140 100 120 120',
    desc: 'De bovenste 7 wervels van de wervelkolom die het hoofd ondersteunen en laten draaien.',
    tip: 'Eettijdenregel: Ontbijten om 7 uur -> 7 Halswervels.'
  },
  {
    id: 'sleutelbeen',
    name: 'Sleutelbeen',
    category: 'Schoudergordel',
    region: 'borstkas',
    viewBox: '110 140 180 120',
    desc: 'Verbindt het borstbeen met het schouderblad en stabiliseert de arm.',
    tip: 'Sleutelbeen is het S-vormige bot dat als sleutel tussen je borstkas en schouder ligt.'
  },
  {
    id: 'schouderblad',
    name: 'Schouderblad',
    category: 'Schoudergordel',
    region: 'borstkas',
    viewBox: '100 150 200 140',
    desc: 'Plat driehoekig bot aan de rugzijde dat spieraanhechting biedt voor de arm.',
    tip: 'Platte vleugels op je rug. Biedt grote kom voor de kogel van de opperarm.'
  },
  {
    id: 'borstwervels',
    name: 'Borstwervels',
    category: 'Wervelkolom',
    region: 'wervelkolom',
    viewBox: '140 160 120 150',
    desc: '12 wervels waaraan de ribben zijn bevestigd.',
    tip: 'Eettijdenregel: Lunchen om 12 uur -> 12 Borstwervels.'
  },
  {
    id: 'ribben',
    name: 'Ribben',
    category: 'Borstkas',
    region: 'borstkas',
    viewBox: '100 160 200 140',
    desc: 'Beschermen de hart en longen en helpen bij de ademhaling.',
    tip: 'Vormen samen met het borstbeen de borstkas (borstkas = ribben + borstbeen).'
  },
  {
    id: 'borstbeen',
    name: 'Borstbeen',
    category: 'Borstkas',
    region: 'borstkas',
    viewBox: '140 160 120 140',
    desc: 'Plat bot aan de voorzijde van de borstkas waar de ribben aan hechten.',
    tip: 'Ligt precies in het midden van je borstkas.'
  },
  {
    id: 'lendewervels',
    name: 'Lendewervels',
    category: 'Wervelkolom',
    region: 'wervelkolom',
    viewBox: '140 250 120 120',
    desc: '5 stevige, dikke wervels in de onderrug die het lichaamsgewicht dragen.',
    tip: 'Eettijdenregel: Avondeten om 5 uur -> 5 Lendewervels.'
  },
  {
    id: 'heupbeen',
    name: 'Heupbeen',
    category: 'Bekkengordel',
    region: 'bekkenbeen',
    viewBox: '110 300 180 140',
    desc: 'Vormt samen met het heiligbeen het bekken en verbindt de benen met de romp.',
    tip: 'Grote stevige komstructuur in de heup die je kunt voelen aan je zijkant.'
  },
  {
    id: 'heiligbeen',
    name: 'Heiligbeen',
    category: 'Wervelkolom / Bekken',
    region: 'bekkenbeen',
    viewBox: '140 310 120 120',
    desc: 'Driehoekig bot gevormd uit 5 samengesmolten heiligbeenwervels.',
    tip: 'Ligt midden in het bekken tussen de twee heupbeenderen.'
  },
  {
    id: 'staartbeen',
    name: 'Staartbeen',
    category: 'Wervelkolom',
    region: 'bekkenbeen',
    viewBox: '150 360 100 80',
    desc: 'Het onderste puntje van de wervelkolom, gevormd uit 3 tot 5 kleine wervels.',
    tip: 'Het restant van de staart uit de evolutie, onderaan het heiligbeen.'
  },
  {
    id: 'opperarmbeen',
    name: 'Opperarmbeen',
    category: 'Bovenste ledematen',
    region: 'armhand',
    viewBox: '80 170 240 140',
    desc: 'Het lange pijpbeen van de bovenarm, van schouder tot elleboog.',
    tip: 'Loopt in je BOVENarm.'
  },
  {
    id: 'spaakbeen',
    name: 'Spaakbeen',
    category: 'Bovenste ledematen',
    region: 'armhand',
    viewBox: '70 270 260 120',
    desc: 'Onderarmbot aan de zijde van de duim. Laten draaien van de hand mogelijk.',
    tip: 'Spaakbeen aan de DUIMzijde! Denk aan het stuur / spaken vastpakken met je duimen.'
  },
  {
    id: 'ellepijp',
    name: 'Ellepijp',
    category: 'Bovenste ledematen',
    region: 'armhand',
    viewBox: '70 270 260 120',
    desc: 'Onderarmbot aan de zijde van de pink. Vormt de punt van de elleboog.',
    tip: 'Ellepijp zit aan de PINKzijde! Vormt met de punt de harde elleboog.'
  },
  {
    id: 'handwortelbeentjes',
    name: 'Handwortelbeentjes',
    category: 'Bovenste ledematen',
    region: 'armhand',
    viewBox: '60 340 280 80',
    desc: '8 kleine botjes in de pols die flexibiliteit aan de hand geven.',
    tip: 'Zitten in de pols bij de wortel van je hand.'
  },
  {
    id: 'middenhandsbeentjes',
    name: 'Middenhandsbeentjes',
    category: 'Bovenste ledematen',
    region: 'armhand',
    viewBox: '50 350 300 90',
    desc: '5 pijpbeentjes in de handpalm die de pols met de vingers verbinden.',
    tip: 'Vormen de structuur van je handpalm.'
  },
  {
    id: 'vingerkootjes',
    name: 'Vingerkootjes',
    category: 'Bovenste ledematen',
    region: 'armhand',
    viewBox: '40 370 320 100',
    desc: 'Botjes van de vingers (duim heeft 2, de overige vingers 3 kootjes).',
    tip: 'De losse beweeglijke kootjes van je 5 vingers.'
  },
  {
    id: 'dijbeen',
    name: 'Dijbeen',
    category: 'Onderste ledematen',
    region: 'bekkenbeen',
    viewBox: '110 380 180 180',
    desc: 'Het langste en sterkste bot in het menselijk lichaam, in het bovenbeen.',
    tip: 'Het langste, zwaarste pijpbeen in je bovenbeen.'
  },
  {
    id: 'knieschijf',
    name: 'Knieschijf',
    category: 'Onderste ledematen',
    region: 'bekkenbeen',
    viewBox: '120 520 160 60',
    desc: 'Sesambeen voor de knie die de pees van de bovenbeenspier beschermt.',
    tip: 'Het losse ronde schijfje midden voor je kniegewricht.'
  },
  {
    id: 'scheenbeen',
    name: 'Scheenbeen',
    category: 'Onderste ledematen',
    region: 'bekkenbeen',
    viewBox: '110 540 180 180',
    desc: 'Het grote, dragende bot aan de binnenkant van het onderbeen.',
    tip: 'Het dikke bot aan de binnenkant dat zit op je scheen.'
  },
  {
    id: 'kuitbeen',
    name: 'Kuitbeen',
    category: 'Onderste ledematen',
    region: 'bekkenbeen',
    viewBox: '110 540 180 180',
    desc: 'Het dunnere bot aan de buitenkant van het onderbeen.',
    tip: 'Het dunnere bot aan de buitenkant (kuitzijde).'
  }
];

// State variables
let activeTab = 'quiz';
let quizMode = 'adaptive'; // 'adaptive' or 'random'
let soundEnabled = true;

// Quiz Level 1 state
let currentQuizTarget = null;
let quizLives = 3;
let quizStreak = 0;
let masteredBones = new Set();
let mistakeBones = new Set();
let isQuestionAnswered = false;
let questionCounter = 1;

// Pinpoint Level 2 state
let unlockedLevel2 = false;
let level2Lives = 3;
let level2Mastered = new Set();
let currentPinpointTarget = null;

// Time Attack Level 3 state
let unlockedLevel3 = false;
let isTimeAttackActive = false;
let timeAttackLives = 3;
let timeAttackScore = 0;
let timeAttackHighScore = 0;
let timeAttackTime = 60;
let timeAttackTimer = null;
let timeAttackTarget = null;
let timeAttackType = 'quiz'; // 'quiz' of 'pinpoint'

// SVG Zoom State
const DEFAULT_VIEWBOX = '0 0 400 780';
let currentViewBox = DEFAULT_VIEWBOX;

// Sound Generator with Web Audio API
function playTone(type) {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc.frequency.exponentialRampToValueAtTime(130.81, ctx.currentTime + 0.2); // C3
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'win') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    }
  } catch (e) {
    // Audio fallback silence
  }
}

function toggleAudio() {
  soundEnabled = !soundEnabled;
  const statusText = soundEnabled ? 'AAN' : 'UIT';
  const icon = soundEnabled ? '🔊' : '🔇';

  document.getElementById('sound-status').innerText = statusText;
  document.getElementById('sound-icon').innerText = icon;
  document.getElementById('sound-toggle-btn').innerText = icon;

  const statusEl = document.getElementById('sound-status');
  if (soundEnabled) {
    statusEl.className = "text-emerald-400";
  } else {
    statusEl.className = "text-rose-400";
  }
  playTone('click');
}

// Tab Navigation
function switchTab(tabName) {
  playTone('click');
  activeTab = tabName;

  // Update Nav Buttons styling
  const tabs = ['quiz', 'pinpoint', 'timeattack', 'explore'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const content = document.getElementById(`tab-content-${t}`);
    if (!btn || !content) return;

    if (t === tabName) {
      btn.className = "flex-1 px-3 py-2 rounded-lg transition duration-200 flex items-center justify-center gap-1.5 bg-emerald-500 text-slate-950 font-bold shadow whitespace-nowrap";
      content.classList.remove('hidden');
    } else {
      btn.className = "flex-1 px-3 py-2 rounded-lg transition duration-200 flex items-center justify-center gap-1.5 text-slate-300 hover:text-white font-semibold whitespace-nowrap";
      content.classList.add('hidden');
    }
  });

  // Special handling for Level 2 locked status
  if (tabName === 'pinpoint') {
    const lockedCard = document.getElementById('level2-locked-card');
    const activeCard = document.getElementById('level2-active-card');
    const gameoverCard = document.getElementById('level2-gameover-card');
    
    if (!unlockedLevel2) {
      lockedCard.classList.remove('hidden');
      activeCard.classList.add('hidden');
      gameoverCard.classList.add('hidden');
    } else {
      lockedCard.classList.add('hidden');
      if (level2Lives > 0) {
        activeCard.classList.remove('hidden');
        gameoverCard.classList.add('hidden');
        if (!currentPinpointTarget) {
          setupNextPinpoint();
        }
      }
    }
  }

  // Special handling for Level 3 locked status
  if (tabName === 'timeattack') {
    const lockedCard = document.getElementById('level3-locked-card');
    const startCard = document.getElementById('level3-start-card');
    const activeCard = document.getElementById('level3-active-card');
    const resultCard = document.getElementById('level3-result-card');

    if (!unlockedLevel3) {
      lockedCard.classList.remove('hidden');
      startCard.classList.add('hidden');
      activeCard.classList.add('hidden');
      resultCard.classList.add('hidden');
    } else if (!isTimeAttackActive && document.getElementById('level3-result-card').classList.contains('hidden')) {
      lockedCard.classList.add('hidden');
      startCard.classList.remove('hidden');
      activeCard.classList.add('hidden');
    }
  }

  // Stop Level 3 timer automatically if the user switches away
  if (tabName !== 'timeattack' && isTimeAttackActive) {
    endTimeAttack('nav');
  }

  // Reset zoom if switching away
  if (tabName === 'explore') {
    clearHighlights();
  } else if (tabName === 'quiz' && currentQuizTarget) {
    highlightBone(currentQuizTarget.id);
  }
}

// SVG Zoom & Camera Focus
function setSvgViewBox(viewBoxStr) {
  const svg = document.getElementById('skeleton-svg');
  svg.setAttribute('viewBox', viewBoxStr);
  currentViewBox = viewBoxStr;
}

function resetZoom() {
  playTone('click');
  setSvgViewBox(DEFAULT_VIEWBOX);
}

function manualZoom(factor) {
  playTone('click');
  const svg = document.getElementById('skeleton-svg');
  const parts = currentViewBox.split(' ').map(Number);
  let [x, y, w, h] = parts;

  const newW = w * factor;
  const newH = h * factor;
  const newX = x + (w - newW) / 2;
  const newY = y + (h - newH) / 2;

  setSvgViewBox(`${newX} ${newY} ${newW} ${newH}`);
}

function zoomToRegion(region) {
  playTone('click');
  let viewBox = DEFAULT_VIEWBOX;
  switch (region) {
    case 'hoofd': viewBox = '120 20 160 180'; break;
    case 'borstkas': viewBox = '100 140 200 160'; break;
    case 'wervelkolom': viewBox = '130 130 140 280'; break;
    case 'armhand': viewBox = '40 170 320 280'; break;
    case 'bekkenbeen': viewBox = '100 310 200 420'; break;
  }
  setSvgViewBox(viewBox);
}

// Bone Visual Highlights on SVG
function clearHighlights() {
  document.querySelectorAll('.bone').forEach(b => {
    b.classList.remove('highlighted', 'correct-flash', 'wrong-flash');
  });
}

function highlightBone(boneId, flashClass = 'highlighted') {
  clearHighlights();
  const group = document.getElementById(`bone-${boneId}`);
  if (group) {
    group.querySelectorAll('.bone').forEach(b => {
      b.classList.add(flashClass);
    });
  }
}

function flashBone(boneId, statusClass) {
  const group = document.getElementById(`bone-${boneId}`);
  if (group) {
    group.querySelectorAll('.bone').forEach(b => {
      b.classList.remove('highlighted');
      b.classList.add(statusClass);
    });
    setTimeout(() => {
      group.querySelectorAll('.bone').forEach(b => {
        b.classList.remove(statusClass);
      });
    }, 1200);
  }
}

// LEVEL 1: QUIZ GAME LOGIC
function setQuizMode(mode) {
  playTone('click');
  quizMode = mode;
  
  const adaptiveBtn = document.getElementById('mode-btn-adaptive');
  const randomBtn = document.getElementById('mode-btn-random');

  if (mode === 'adaptive') {
    adaptiveBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition bg-emerald-500 text-slate-950 shadow";
    randomBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";
  } else {
    randomBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition bg-emerald-500 text-slate-950 shadow";
    adaptiveBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";
  }
}

function updateQuizScoreboard() {
  document.getElementById('quiz-mastered-count').innerText = masteredBones.size;
  document.getElementById('quiz-streak').innerText = quizStreak;
  document.getElementById('quiz-mistakes-count').innerText = mistakeBones.size;

  // Render Lives Skulls
  let skullsHtml = '';
  for (let i = 0; i < 3; i++) {
    if (i < quizLives) {
      skullsHtml += '<span>💀</span>';
    } else {
      skullsHtml += '<span class="opacity-20 grayscale">💀</span>';
    }
  }
  document.getElementById('quiz-lives').innerHTML = skullsHtml;
}

function setupNextQuizQuestion() {
  if (quizLives <= 0) return;

  // Check level 1 victory condition
  if (masteredBones.size >= BONES_DATA.length) {
    showQuizVictory();
    return;
  }

  isQuestionAnswered = false;
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('question-number').innerText = questionCounter;

  // Select Target Bone
  let candidate = null;

  // Adaptive mode prioritizes mistake list first, then unmastered
  if (quizMode === 'adaptive' && mistakeBones.size > 0 && Math.random() < 0.65) {
    const mistakeArray = Array.from(mistakeBones);
    const randomMistakeId = mistakeArray[Math.floor(Math.random() * mistakeArray.length)];
    candidate = BONES_DATA.find(b => b.id === randomMistakeId);
    document.getElementById('repeat-notice-badge').classList.remove('hidden');
    document.getElementById('repeat-notice-badge').classList.add('flex');
  } else {
    document.getElementById('repeat-notice-badge').classList.add('hidden');
    document.getElementById('repeat-notice-badge').classList.remove('flex');
    
    const unmastered = BONES_DATA.filter(b => !masteredBones.has(b.id));
    if (unmastered.length > 0) {
      candidate = unmastered[Math.floor(Math.random() * unmastered.length)];
    } else {
      candidate = BONES_DATA[Math.floor(Math.random() * BONES_DATA.length)];
    }
  }

  currentQuizTarget = candidate;

  // Zoom to Target Bone
  if (currentQuizTarget.region) {
    zoomToRegion(currentQuizTarget.region);
  }
  highlightBone(currentQuizTarget.id);

  // Generate 4 Multiple Choice Options
  const options = [currentQuizTarget];
  while (options.length < 4) {
    const randomBone = BONES_DATA[Math.floor(Math.random() * BONES_DATA.length)];
    if (!options.some(o => o.id === randomBone.id)) {
      options.push(randomBone);
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  // Render Options Buttons
  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.onclick = () => handleQuizOptionClick(opt, btn);
    btn.className = "w-full p-4 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-slate-800 text-left text-sm font-semibold text-slate-200 transition-all duration-150 flex items-center justify-between group shadow-sm";
    btn.innerHTML = `
      <span>${opt.name}</span>
    `;
    optionsContainer.appendChild(btn);
  });
}

function handleQuizOptionClick(selectedOpt, btnElement) {
  if (isQuestionAnswered || quizLives <= 0) return;
  isQuestionAnswered = true;

  const feedbackEl = document.getElementById('quiz-feedback');
  const iconEl = document.getElementById('feedback-icon');
  const textEl = document.getElementById('feedback-text');

  feedbackEl.classList.remove('hidden');

  if (selectedOpt.id === currentQuizTarget.id) {
    // CORRECT ANSWER
    playTone('correct');
    flashBone(currentQuizTarget.id, 'correct-flash');
    
    masteredBones.add(currentQuizTarget.id);
    mistakeBones.delete(currentQuizTarget.id);
    quizStreak++;

    btnElement.className = "w-full p-4 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 text-left text-sm font-bold text-emerald-300 flex items-center justify-between shadow";

    feedbackEl.className = "p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-sm font-medium flex items-center gap-3";
    iconEl.className = "w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center shrink-0 font-bold text-slate-950";
    iconEl.innerText = "✓";
    textEl.innerHTML = `<strong>Uitstekend!</strong> Dat is inderdaad het/de <strong>${currentQuizTarget.name}</strong>.`;

  } else {
    // WRONG ANSWER
    playTone('wrong');
    flashBone(currentQuizTarget.id, 'wrong-flash');

    quizLives--;
    quizStreak = 0;
    mistakeBones.add(currentQuizTarget.id);

    btnElement.className = "w-full p-4 rounded-xl bg-rose-500/20 border-2 border-rose-500 text-left text-sm font-bold text-rose-300 flex items-center justify-between shadow";

    feedbackEl.className = "p-4 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-300 text-sm font-medium flex items-center gap-3";
    iconEl.className = "w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center shrink-0 font-bold text-white";
    iconEl.innerText = "✕";
    textEl.innerHTML = `<strong>Helaas!</strong> Dit was het/de <strong>${currentQuizTarget.name}</strong>. <br><span class="text-xs text-rose-300/80 italic">${currentQuizTarget.tip}</span>`;
  }

  updateQuizScoreboard();

  if (quizLives <= 0) {
    setTimeout(showGameOver, 1500);
  } else {
    questionCounter++;
    setTimeout(setupNextQuizQuestion, 2000);
  }
}

function showGameOver() {
  document.getElementById('quiz-question-box').classList.add('hidden');
  document.getElementById('quiz-gameover-card').classList.remove('hidden');
}

function showQuizVictory() {
  unlockedLevel2 = true;
  document.getElementById('level2-lock-icon').innerText = '✅';
  
  document.getElementById('quiz-question-box').classList.add('hidden');
  document.getElementById('quiz-completion-card').classList.remove('hidden');
  playTone('win');
}

function restartQuiz() {
  playTone('click');
  quizLives = 3;
  quizStreak = 0;
  questionCounter = 1;
  masteredBones.clear();
  mistakeBones.clear();

  document.getElementById('quiz-gameover-card').classList.add('hidden');
  document.getElementById('quiz-completion-card').classList.add('hidden');
  document.getElementById('quiz-question-box').classList.remove('hidden');

  updateQuizScoreboard();
  setupNextQuizQuestion();
}

function unlockAndStartLevel2() {
  unlockedLevel2 = true;
  switchTab('pinpoint');
}

// LEVEL 2: PINPOINT (AANWIJS) GAME LOGIC
function updatePinpointLivesUI() {
  const livesContainer = document.getElementById('pinpoint-lives');
  if (!livesContainer) return;
  let skullsHtml = '';
  for (let i = 0; i < 3; i++) {
    if (i < level2Lives) {
      skullsHtml += '<span>💀</span>';
    } else {
      skullsHtml += '<span class="opacity-20 grayscale">💀</span>';
    }
  }
  livesContainer.innerHTML = skullsHtml;
}

function setupNextPinpoint() {
  if (level2Lives <= 0) return;

  if (level2Mastered.size >= BONES_DATA.length) {
    showLevel2Victory();
    return;
  }

  clearHighlights();
  resetZoom();

  const remaining = BONES_DATA.filter(b => !level2Mastered.has(b.id));
  currentPinpointTarget = remaining[Math.floor(Math.random() * remaining.length)];

  document.getElementById('pinpoint-target-name').innerText = currentPinpointTarget.name;
  document.getElementById('pinpoint-found-count').innerText = level2Mastered.size;
  document.getElementById('pinpoint-feedback').classList.add('hidden');
  updatePinpointLivesUI();
}

function handleLevel2Click(boneId) {
  if (!currentPinpointTarget || activeTab !== 'pinpoint' || level2Lives <= 0) return;

  const feedbackEl = document.getElementById('pinpoint-feedback');
  feedbackEl.classList.remove('hidden');

  if (boneId === currentPinpointTarget.id) {
    playTone('correct');
    flashBone(boneId, 'correct-flash');

    level2Mastered.add(boneId);
    document.getElementById('pinpoint-found-count').innerText = level2Mastered.size;

    feedbackEl.className = "p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-center text-xs";
    feedbackEl.innerText = `Goed zo! Dat is inderdaad het/de ${currentPinpointTarget.name}!`;

    setTimeout(setupNextPinpoint, 1600);
  } else {
    playTone('wrong');
    flashBone(boneId, 'wrong-flash');

    level2Lives--;
    updatePinpointLivesUI();

    const clickedBone = BONES_DATA.find(b => b.id === boneId);
    const clickedName = clickedBone ? clickedBone.name : 'een ander bot';

    feedbackEl.className = "p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-center text-xs";
    feedbackEl.innerText = `Oeps! Dat was het/de ${clickedName}. Zoek het/de ${currentPinpointTarget.name}! (-1 leven)`;

    if (level2Lives <= 0) {
      setTimeout(showLevel2GameOver, 1500);
    }
  }
}

function showLevel2GameOver() {
  document.getElementById('level2-active-card').classList.add('hidden');
  document.getElementById('level2-gameover-card').classList.remove('hidden');
}

function showLevel2Victory() {
  unlockedLevel3 = true;
  document.getElementById('level3-lock-icon').innerText = '✅';

  document.getElementById('level2-active-card').classList.add('hidden');
  document.getElementById('level2-completion-card').classList.remove('hidden');
  playTone('win');
}

function restartLevel2() {
  playTone('click');
  level2Lives = 3;
  level2Mastered.clear();

  document.getElementById('level2-gameover-card').classList.add('hidden');
  document.getElementById('level2-completion-card').classList.add('hidden');
  document.getElementById('level2-active-card').classList.remove('hidden');

  updatePinpointLivesUI();
  setupNextPinpoint();
}

// LEVEL 3: TIJDRACE LOGIC (MIXED MODE WITH LIVES)
function updateTimeAttackLivesUI() {
  const livesContainer = document.getElementById('l3-lives');
  if (!livesContainer) return;
  let skullsHtml = '';
  for (let i = 0; i < 3; i++) {
    if (i < timeAttackLives) {
      skullsHtml += '<span>💀</span>';
    } else {
      skullsHtml += '<span class="opacity-20 grayscale">💀</span>';
    }
  }
  livesContainer.innerHTML = skullsHtml;
}

function unlockAndStartLevel3() {
  unlockedLevel3 = true;
  document.getElementById('level3-lock-icon').innerText = '✅';
  switchTab('timeattack');
}

function startTimeAttack() {
  playTone('click');
  isTimeAttackActive = true;
  timeAttackScore = 0;
  timeAttackLives = 3;
  timeAttackTime = 60;

  document.getElementById('level3-start-card').classList.add('hidden');
  document.getElementById('level3-result-card').classList.add('hidden');
  document.getElementById('level3-active-card').classList.remove('hidden');

  document.getElementById('l3-score').innerText = timeAttackScore;
  document.getElementById('l3-time').innerText = timeAttackTime;
  updateTimeAttackLivesUI();

  if (timeAttackTimer) clearInterval(timeAttackTimer);

  timeAttackTimer = setInterval(() => {
    timeAttackTime--;
    document.getElementById('l3-time').innerText = timeAttackTime;
    if (timeAttackTime <= 0) {
      endTimeAttack('time');
    }
  }, 1000);

  setupNextTimeAttack();
}

function setupNextTimeAttack() {
  if (!isTimeAttackActive || timeAttackLives <= 0) return;
  document.getElementById('l3-feedback').classList.add('hidden');
  clearHighlights();

  // Willekeurig kiezen tussen Quiz of Aanwijzen (50/50 kans)
  timeAttackType = Math.random() > 0.5 ? 'quiz' : 'pinpoint';
  timeAttackTarget = BONES_DATA[Math.floor(Math.random() * BONES_DATA.length)];

  if (timeAttackType === 'quiz') {
    // Quiz UI: Zoom + Groen bot + 4 keuzes
    if (timeAttackTarget.region) zoomToRegion(timeAttackTarget.region);
    highlightBone(timeAttackTarget.id);

    document.getElementById('l3-prompt').innerHTML = `Welk bot is <span class="text-[#00f0b5] underline">groen</span> gekleurd?`;
    document.getElementById('l3-options-container').classList.remove('hidden');

    const options = [timeAttackTarget];
    while (options.length < 4) {
      const randomBone = BONES_DATA[Math.floor(Math.random() * BONES_DATA.length)];
      if (!options.some(o => o.id === randomBone.id)) options.push(randomBone);
    }
    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('l3-options');
    optionsContainer.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = "w-full p-4 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-slate-800 text-left text-sm font-semibold text-slate-200 transition group shadow-sm flex items-center justify-between";
      btn.innerHTML = `<span>${opt.name}</span>`;
      btn.onclick = () => processTimeAttackAnswer(opt.id === timeAttackTarget.id, opt.id, btn);
      optionsContainer.appendChild(btn);
    });

  } else {
    // Pinpoint UI: Geen zoom + Vraag + Geen knoppen
    resetZoom();
    document.getElementById('l3-prompt').innerHTML = `Klik direct op het skelet: <br><span class="text-2xl text-fuchsia-400 font-black mt-1 inline-block">${timeAttackTarget.name}</span>`;
    document.getElementById('l3-options-container').classList.add('hidden');
  }
}

function handleTimeAttackSvgClick(boneId) {
  if (!isTimeAttackActive || timeAttackType !== 'pinpoint' || timeAttackLives <= 0) return;
  processTimeAttackAnswer(boneId === timeAttackTarget.id, boneId);
}

function processTimeAttackAnswer(isCorrect, clickedBoneId, btnElement = null) {
  if (!isTimeAttackActive || timeAttackLives <= 0) return;
  const feedbackEl = document.getElementById('l3-feedback');
  feedbackEl.classList.remove('hidden');

  if (isCorrect) {
    playTone('correct');
    flashBone(timeAttackTarget.id, 'correct-flash');
    timeAttackScore++;
    document.getElementById('l3-score').innerText = timeAttackScore;
    feedbackEl.className = "p-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-center text-sm";
    feedbackEl.innerText = "Correct! +1";

    if (btnElement) btnElement.classList.add('border-emerald-500', 'bg-emerald-500/20');

    setTimeout(() => {
      if (isTimeAttackActive && timeAttackLives > 0) setupNextTimeAttack();
    }, 700);

  } else {
    playTone('wrong');
    flashBone(clickedBoneId, 'wrong-flash');
    if (timeAttackType === 'quiz') flashBone(timeAttackTarget.id, 'correct-flash'); 

    timeAttackLives--;
    updateTimeAttackLivesUI();

    feedbackEl.className = "p-3 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold text-center text-sm";
    feedbackEl.innerText = `Fout! Het was de ${timeAttackTarget.name} (-1 leven)`;

    if (btnElement) btnElement.classList.add('border-rose-500', 'bg-rose-500/20');

    if (timeAttackLives <= 0) {
      setTimeout(() => {
        endTimeAttack('lives');
      }, 1000);
    } else {
      setTimeout(() => {
        if (isTimeAttackActive && timeAttackLives > 0) setupNextTimeAttack();
      }, 900);
    }
  }
}

function endTimeAttack(reason = 'time') {
  clearInterval(timeAttackTimer);
  isTimeAttackActive = false;
  clearHighlights();

  if (timeAttackScore > timeAttackHighScore) {
    timeAttackHighScore = timeAttackScore;
  }

  const iconEl = document.getElementById('l3-result-icon');
  const titleEl = document.getElementById('l3-result-title');
  const msgEl = document.getElementById('l3-result-msg');

  if (reason === 'lives') {
    playTone('wrong');
    if (iconEl) iconEl.innerText = '💀';
    if (titleEl) {
      titleEl.innerText = 'Game Over!';
      titleEl.className = 'text-2xl font-black text-rose-400';
    }
    if (msgEl) {
      msgEl.innerHTML = `Je levens waren op! Je behaalde <strong class="text-2xl text-white mx-1" id="l3-final-score">${timeAttackScore}</strong> botten.`;
    }
  } else {
    playTone('win');
    if (iconEl) iconEl.innerText = '🏁';
    if (titleEl) {
      titleEl.innerText = 'Tijd is om!';
      titleEl.className = 'text-2xl font-black text-purple-400';
    }
    if (msgEl) {
      msgEl.innerHTML = `Je had <strong class="text-2xl text-white mx-1" id="l3-final-score">${timeAttackScore}</strong> botten goed in 60 seconden.`;
    }
  }

  document.getElementById('level3-active-card').classList.add('hidden');
  document.getElementById('level3-result-card').classList.remove('hidden');
  document.getElementById('l3-high-score').innerText = timeAttackHighScore;
}

// TAB 3: EXPLORE & INSPECT BONES
function renderExploreTab() {
  const selectEl = document.getElementById('explore-select');
  const gridEl = document.getElementById('explore-grid');

  selectEl.innerHTML = '<option value="">-- Kies een bot uit de 21 VWO botten --</option>';
  gridEl.innerHTML = '';

  BONES_DATA.forEach(bone => {
    // Dropdown option
    const opt = document.createElement('option');
    opt.value = bone.id;
    opt.innerText = bone.name;
    selectEl.appendChild(opt);

    // Grid Button
    const btn = document.createElement('button');
    btn.onclick = () => handleExploreSelect(bone.id);
    btn.className = "p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs font-semibold text-slate-200 transition truncate";
    btn.innerText = bone.name;
    gridEl.appendChild(btn);
  });
}

function handleExploreSelect(boneId) {
  if (!boneId) return;
  playTone('click');

  const bone = BONES_DATA.find(b => b.id === boneId);
  if (!bone) return;

  document.getElementById('explore-select').value = boneId;
  document.getElementById('explore-bone-title').innerText = bone.name;
  document.getElementById('explore-bone-category').innerText = bone.category;
  document.getElementById('explore-bone-desc').innerText = bone.desc;
  document.getElementById('explore-bone-tip').innerText = bone.tip;

  if (bone.region) {
    zoomToRegion(bone.region);
  }
  highlightBone(bone.id);
}

// SVG Global Bone Click Handler
function handleBoneClick(boneId) {
  if (activeTab === 'explore') {
    handleExploreSelect(boneId);
  } else if (activeTab === 'timeattack' && isTimeAttackActive) {
    // Speciale SVG click routing voor Level 3
    if (timeAttackType === 'pinpoint') {
      handleTimeAttackSvgClick(boneId);
    } else if (timeAttackType === 'quiz') {
      const clickedBone = BONES_DATA.find(b => b.id === boneId);
      if (clickedBone) {
        const matchingOptionBtn = Array.from(document.querySelectorAll('#l3-options button'))
          .find(btn => btn.innerText.includes(clickedBone.name));
        if (matchingOptionBtn) {
          processTimeAttackAnswer(clickedBone.id === timeAttackTarget.id, clickedBone.id, matchingOptionBtn);
        }
      }
    }
  } else if (activeTab === 'pinpoint' && unlockedLevel2) {
    handleLevel2Click(boneId);
  } else if (activeTab === 'quiz' && currentQuizTarget) {
    // SVG click option in Quiz
    const clickedBone = BONES_DATA.find(b => b.id === boneId);
    if (clickedBone) {
      const matchingOptionBtn = Array.from(document.querySelectorAll('#quiz-options button'))
        .find(btn => btn.innerText.includes(clickedBone.name));
      if (matchingOptionBtn) {
        handleQuizOptionClick(clickedBone, matchingOptionBtn);
      }
    }
  }
}

// Initialize App
window.onload = function() {
  renderExploreTab();
  updateQuizScoreboard();
  setupNextQuizQuestion();
};