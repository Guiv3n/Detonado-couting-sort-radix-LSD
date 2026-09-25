const demoInputElement = document.querySelector("#counting-input");
const demoCountsElement = document.querySelector("#counting-counts");
const demoOutputElement = document.querySelector("#counting-output");
const demoStatusElement = document.querySelector("#counting-demo-status");
const demoNarrationElement = document.querySelector("#counting-demo-narration");
const demoProgressElement = document.querySelector("#counting-demo-progress");
const countingPlayButton = document.querySelector("#counting-play-button");
const countingStepButton = document.querySelector("#counting-step-button");
const countingSlowerButton = document.querySelector("#counting-slower-button");
const countingFasterButton = document.querySelector("#counting-faster-button");
const countingSpeedLabel = document.querySelector("#counting-speed-label");

const input = document.querySelector("#numbers-input");
const inputError = document.querySelector("#input-error");
const danceButton = document.querySelector("#dance-button");
const stepButton = document.querySelector("#step-button");
const resetButton = document.querySelector("#reset-button");
const shuffleButton = document.querySelector("#shuffle-button");
const speedInput = document.querySelector("#speed-input");
const danceFloor = document.querySelector("#dance-floor");
const passTimeline = document.querySelector("#pass-timeline");
const passLabel = document.querySelector("#pass-label");
const stageTitle = document.querySelector("#stage-title");
const digitName = document.querySelector("#digit-name");
const explanation = document.querySelector("#explanation-strip");
const progressBar = document.querySelector("#progress-bar");
const liveStatus = document.querySelector("#live-status");
const sonicModeButton = document.querySelector("#sonic-mode-button");

const digitLabels = ["UNIDADES", "DEZENAS", "CENTENAS"];

// Demonstração automática do Counting Sort puro.
const countingExample = [4, 2, 2, 8, 3, 3, 1];
const countingSpeedLevels = [2400, 1800, 1200, 800, 500];
const countingSpeedLabels = ["0,5×", "0,75×", "1×", "1,5×", "2×"];
let countingDemo = createCountingDemo();
let countingDemoTimer = null;
let countingSpeedIndex = 1;
let countingDemoRunning = true;

function createCountingDemo() {
  return {
    phase: "count",
    counts: Array(9).fill(0),
    output: Array(countingExample.length).fill(null),
    inputIndex: 0,
    prefixIndex: 1,
    placeIndex: countingExample.length - 1,
    activeInput: null,
    activeCount: null,
    activeOutput: null,
    message: "Começamos com C zerado e percorremos a entrada.",
    hold: 0,
  };
}

function demoProgress() {
  const n = countingExample.length;
  const operations = n + 8 + n;
  if (countingDemo.phase === "count") return countingDemo.inputIndex / operations;
  if (countingDemo.phase === "prefix") return (n + countingDemo.prefixIndex - 1) / operations;
  if (countingDemo.phase === "place") return (n + 8 + (n - 1 - countingDemo.placeIndex)) / operations;
  return 1;
}

function renderCountingDemo() {
  demoInputElement.innerHTML = countingExample.map((value, index) => `
    <span class="demo-number ${index === countingDemo.activeInput ? "active" : ""}">
      <small>${index}</small>${value}
    </span>`).join("");

  demoCountsElement.innerHTML = countingDemo.counts.map((value, index) => `
    <span class="demo-count ${index === countingDemo.activeCount ? "active changed" : ""}">
      <small>C[${index}]</small>${value}
    </span>`).join("");

  demoOutputElement.innerHTML = countingDemo.output.map((value, index) => `
    <span class="demo-number ${value !== null ? "done" : ""} ${index === countingDemo.activeOutput ? "active" : ""}">
      <small>${index}</small>${value === null ? "·" : value}
    </span>`).join("");

  const labels = {
    count: "1 · Contando ocorrências",
    prefix: "2 · Reservando posições",
    place: "3 · Preenchendo a saída",
    done: "Counting Sort concluído",
  };
  demoStatusElement.textContent = labels[countingDemo.phase];
  demoNarrationElement.innerHTML = countingDemo.message;
  demoProgressElement.style.width = `${demoProgress() * 100}%`;
}

function stepCountingDemo() {
  if (countingDemo.phase === "count") {
    if (countingDemo.inputIndex < countingExample.length) {
      const index = countingDemo.inputIndex;
      const value = countingExample[index];
      countingDemo.counts[value] += 1;
      countingDemo.inputIndex += 1;
      countingDemo.activeInput = index;
      countingDemo.activeCount = value;
      countingDemo.message = `A[${index}] vale <strong>${value}</strong>: fazemos <strong>C[${value}]++</strong>.`;
    } else {
      countingDemo.phase = "prefix";
      countingDemo.activeInput = null;
      countingDemo.activeCount = null;
      countingDemo.message = "Agora C guarda frequências. Vamos transformá-las em lugares reservados.";
    }
  } else if (countingDemo.phase === "prefix") {
    if (countingDemo.prefixIndex < countingDemo.counts.length) {
      const index = countingDemo.prefixIndex;
      const previous = countingDemo.counts[index - 1];
      const current = countingDemo.counts[index];
      countingDemo.counts[index] += previous;
      countingDemo.prefixIndex += 1;
      countingDemo.activeCount = index;
      countingDemo.message = `C[${index}] = ${current} + ${previous} = <strong>${countingDemo.counts[index]}</strong>. Agora sabemos quantos valores são ≤ ${index}.`;
    } else {
      countingDemo.phase = "place";
      countingDemo.activeCount = null;
      countingDemo.message = "As cadeiras estão reservadas. Lemos A da direita para a esquerda para manter a estabilidade.";
    }
  } else if (countingDemo.phase === "place") {
    if (countingDemo.placeIndex >= 0) {
      const inputIndex = countingDemo.placeIndex;
      const value = countingExample[inputIndex];
      const outputIndex = countingDemo.counts[value] - 1;
      countingDemo.output[outputIndex] = value;
      countingDemo.counts[value] -= 1;
      countingDemo.placeIndex -= 1;
      countingDemo.activeInput = inputIndex;
      countingDemo.activeCount = value;
      countingDemo.activeOutput = outputIndex;
      countingDemo.message = `<strong>${value}</strong> ocupa B[${outputIndex}]. Depois C[${value}] diminui para reservar a cadeira anterior.`;
    } else {
      countingDemo.phase = "done";
      countingDemo.activeInput = null;
      countingDemo.activeCount = null;
      countingDemo.activeOutput = null;
      countingDemo.message = "B está ordenado: <strong>1 · 2 · 2 · 3 · 3 · 4 · 8</strong>. A demonstração recomeçará.";
    }
  } else {
    countingDemo.hold += 1;
    if (countingDemo.hold >= 3) countingDemo = createCountingDemo();
  }
  renderCountingDemo();
}

function startCountingDemo() {
  renderCountingDemo();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    countingDemo.phase = "done";
    countingDemo.counts = [0, 1, 3, 5, 6, 6, 6, 6, 7];
    countingDemo.output = [1, 2, 2, 3, 3, 4, 8];
    countingDemo.message = "Resultado: <strong>1 · 2 · 2 · 3 · 3 · 4 · 8</strong>.";
    countingDemoRunning = false;
    updateCountingPlayButton();
    renderCountingDemo();
    return;
  }
  scheduleCountingDemo();
}

function scheduleCountingDemo() {
  window.clearTimeout(countingDemoTimer);
  if (!countingDemoRunning) return;
  countingDemoTimer = window.setTimeout(() => {
    stepCountingDemo();
    scheduleCountingDemo();
  }, countingSpeedLevels[countingSpeedIndex]);
}

function updateCountingPlayButton() {
  countingPlayButton.textContent = countingDemoRunning ? "Pausar animação" : "Continuar animação";
  countingPlayButton.setAttribute("aria-pressed", String(!countingDemoRunning));
}

function updateCountingSpeed() {
  countingSpeedLabel.textContent = countingSpeedLabels[countingSpeedIndex];
  countingSlowerButton.disabled = countingSpeedIndex === 0;
  countingFasterButton.disabled = countingSpeedIndex === countingSpeedLevels.length - 1;
  scheduleCountingDemo();
}

// Simulador de alto nível do Radix LSD.
let radixTimer = null;
let danceTimeout = null;
let radixState = null;

function parseValues() {
  const parts = input.value.trim().split(/[\s,;]+/).filter(Boolean);
  if (parts.length < 2 || parts.length > 10) throw new Error("Informe entre 2 e 10 números.");
  const values = parts.map(Number);
  if (values.some((value) => !Number.isInteger(value) || value < 0 || value > 999)) {
    throw new Error("Use somente inteiros entre 0 e 999.");
  }
  return values;
}

function createRadixState(values) {
  const items = values.map((value, id) => ({ value, id }));
  return {
    items,
    original: [...values],
    pass: 0,
    maxDigits: Math.max(1, String(Math.max(...values)).length),
    history: [{ label: "entrada", values: [...values] }],
    phase: "ready",
    dancing: false,
  };
}

function ensureRadixState() {
  try {
    const values = parseValues();
    inputError.textContent = "";
    input.removeAttribute("aria-invalid");
    if (!radixState || radixState.original.join(",") !== values.join(",") || radixState.phase === "done") {
      radixState = createRadixState(values);
    }
    return true;
  } catch (error) {
    inputError.textContent = error.message;
    input.setAttribute("aria-invalid", "true");
    stopRadixAuto();
    return false;
  }
}

function stableCountingByDigit(items, exponent) {
  const counts = Array(10).fill(0);
  const output = Array(items.length);
  items.forEach((item) => { counts[Math.floor(item.value / exponent) % 10] += 1; });
  for (let i = 1; i < 10; i += 1) counts[i] += counts[i - 1];
  for (let i = items.length - 1; i >= 0; i -= 1) {
    const item = items[i];
    const digit = Math.floor(item.value / exponent) % 10;
    output[counts[digit] - 1] = item;
    counts[digit] -= 1;
  }
  return output;
}

function formatValue(value, activeDigit = -1) {
  if (activeDigit < 0) return String(value);
  const padded = String(value).padStart(activeDigit + 1, "0");
  const index = padded.length - 1 - activeDigit;
  return `${padded.slice(0, index)}<span class="digit-char">${padded[index]}</span>${padded.slice(index + 1)}`;
}

function dancerMarkup(item, activeDigit, sorted) {
  return `<div class="dancer-card ${item.id % 2 ? "male" : "female"} ${radixState.dancing ? "dancing" : ""} ${sorted ? "sorted" : ""}">
    <span class="dancer-portrait" aria-hidden="true"></span>
    <span class="dancer-value">${formatValue(item.value, activeDigit)}</span>
  </div>`;
}

function renderRadix() {
  if (!radixState) return;
  const activeDigit = radixState.pass > 0 && radixState.phase !== "done" ? radixState.pass - 1 : -1;
  danceFloor.innerHTML = radixState.items.map((item) => dancerMarkup(item, activeDigit, radixState.phase === "done")).join("");

  passTimeline.innerHTML = `<p class="timeline-label">Uma chamada completa de Counting Sort por linha</p><div class="timeline-list">${radixState.history.map((entry) => `
    <div class="timeline-item"><strong>${entry.label}</strong><span>${entry.values.join(" · ")}</span></div>`).join("")}</div>`;

  if (radixState.phase === "ready") {
    passLabel.textContent = "ENTRADA ORIGINAL";
    stageTitle.textContent = "O grupo está no palco";
    digitName.textContent = "—";
    explanation.textContent = "Cada clique executa um Counting Sort estável completo.";
  } else if (radixState.phase === "done") {
    passLabel.textContent = "RADIX LSD CONCLUÍDO";
    stageTitle.textContent = "Todos os dígitos foram processados";
    digitName.textContent = "✓";
    explanation.innerHTML = `<strong>${radixState.items.map((item) => item.value).join(" · ")}</strong> — ordem final após ${radixState.maxDigits} ${radixState.maxDigits === 1 ? "chamada" : "chamadas"}.`;
  } else {
    const label = digitLabels[radixState.pass - 1];
    passLabel.textContent = `CHAMADA ${radixState.pass} DE ${radixState.maxDigits}`;
    stageTitle.textContent = `Counting Sort concluiu as ${label.toLowerCase()}`;
    digitName.textContent = label;
    explanation.innerHTML = `A chave foi apenas o dígito das <strong>${label.toLowerCase()}</strong>. Como a subrotina é estável, a ordem anterior foi preservada nos empates.`;
  }
  progressBar.style.width = `${(radixState.pass / radixState.maxDigits) * 100}%`;
}

function advanceRadix() {
  if (!ensureRadixState()) return;
  if (radixState.pass >= radixState.maxDigits) return;

  const exponent = 10 ** radixState.pass;
  radixState.items = stableCountingByDigit(radixState.items, exponent);
  radixState.pass += 1;
  const label = digitLabels[radixState.pass - 1].toLowerCase();
  radixState.history.push({ label, values: radixState.items.map((item) => item.value) });
  radixState.phase = radixState.pass === radixState.maxDigits ? "done" : "active";
  radixState.dancing = true;
  window.clearTimeout(danceTimeout);
  danceTimeout = window.setTimeout(() => { radixState.dancing = false; renderRadix(); }, 520);
  liveStatus.textContent = `Counting Sort pelas ${label}: ${radixState.items.map((item) => item.value).join(", ")}.`;
  renderRadix();
  if (radixState.phase === "done") stopRadixAuto();
}

function startRadixAuto() {
  if (!ensureRadixState()) return;
  if (radixTimer) {
    stopRadixAuto();
    return;
  }
  danceButton.classList.add("playing");
  danceButton.querySelector("span:last-child").textContent = "Pausar dança";
  stepButton.disabled = true;
  advanceRadix();
  if (radixState.phase !== "done") {
    radixTimer = window.setInterval(advanceRadix, 2300 - Number(speedInput.value));
  }
}

function stopRadixAuto() {
  if (radixTimer) window.clearInterval(radixTimer);
  radixTimer = null;
  danceButton.classList.remove("playing");
  danceButton.querySelector("span:last-child").textContent = "Dançar e ordenar";
  stepButton.disabled = false;
}

function resetRadix() {
  stopRadixAuto();
  if (!ensureRadixState()) return;
  radixState = createRadixState(parseValues());
  renderRadix();
}

danceButton.addEventListener("click", startRadixAuto);
stepButton.addEventListener("click", () => { stopRadixAuto(); advanceRadix(); });
resetButton.addEventListener("click", resetRadix);
shuffleButton.addEventListener("click", () => {
  input.value = Array.from({ length: 8 }, () => Math.floor(Math.random() * 1000)).join(", ");
  resetRadix();
});
speedInput.addEventListener("input", () => {
  if (radixTimer) {
    window.clearInterval(radixTimer);
    radixTimer = window.setInterval(advanceRadix, 2300 - Number(speedInput.value));
  }
});
input.addEventListener("input", () => { if (radixTimer) stopRadixAuto(); inputError.textContent = ""; });
countingPlayButton.addEventListener("click", () => {
  countingDemoRunning = !countingDemoRunning;
  if (countingDemoRunning && countingDemo.phase === "done") countingDemo = createCountingDemo();
  updateCountingPlayButton();
  scheduleCountingDemo();
  renderCountingDemo();
});
countingStepButton.addEventListener("click", () => {
  countingDemoRunning = false;
  window.clearTimeout(countingDemoTimer);
  if (countingDemo.phase === "done") countingDemo = createCountingDemo();
  else stepCountingDemo();
  updateCountingPlayButton();
  renderCountingDemo();
});
countingSlowerButton.addEventListener("click", () => {
  countingSpeedIndex = Math.max(0, countingSpeedIndex - 1);
  updateCountingSpeed();
});
countingFasterButton.addEventListener("click", () => {
  countingSpeedIndex = Math.min(countingSpeedLevels.length - 1, countingSpeedIndex + 1);
  updateCountingSpeed();
});
sonicModeButton.addEventListener("click", () => {
  const isActive = sonicModeButton.getAttribute("aria-checked") !== "true";
  sonicModeButton.setAttribute("aria-checked", String(isActive));
  sonicModeButton.querySelector(".sonic-switch-state").textContent = isActive ? "ON" : "OFF";
  document.body.classList.toggle("sonic-mode", isActive);
  liveStatus.textContent = isActive ? "Modo Sonic ativado." : "Modo Sonic desativado.";
});

updateCountingPlayButton();
startCountingDemo();
updateCountingSpeed();
resetRadix();
