
<span class=<span class="string">"keyword"</span>>const</span> timerCircle = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;timer-circle&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> timerText = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;timer-text&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> startButton = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;start-button&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> pauseButton = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;pause-button&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> packPickInfo = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;pack-pick-info&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> menuToggle = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.menu-toggle&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> menuContent = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.menu-content&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> boosterCountInput = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;booster-count&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> cardsPerBoosterInput = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;cards-per-booster&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> languageOptions = document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.language-option&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> pauseOverlay = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.pause-overlay&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> previousPickButton = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;previous-pick&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> nextPickButton = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;next-pick&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> countdownSound = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;countdown-sound&#<span class=<span class="string">"number"</span>>039</span>;);
<span class=<span class="string">"keyword"</span>>const</span> timerEndSound = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;timer-end-sound&#<span class=<span class="string">"number"</span>>039</span>;);

<span class=<span class="string">"keyword"</span>>const</span> circumference = <span class=<span class="string">"number"</span>>2</span> * Math.PI * <span class=<span class="string">"number"</span>>90</span>;
<span class=<span class="string">"keyword"</span>>let</span> timeLeft = <span class=<span class="string">"number"</span>>40</span>;
<span class=<span class="string">"keyword"</span>>let</span> timerInterval;
<span class=<span class="string">"keyword"</span>>let</span> currentPack = <span class=<span class="string">"number"</span>>1</span>;
<span class=<span class="string">"keyword"</span>>let</span> currentPick = <span class=<span class="string">"number"</span>>1</span>;
<span class=<span class="string">"keyword"</span>>let</span> boosterCount = <span class=<span class="string">"number"</span>>3</span>;
<span class=<span class="string">"keyword"</span>>let</span> cardsPerBooster = <span class=<span class="string">"number"</span>>14</span>;
<span class=<span class="string">"keyword"</span>>let</span> isPaused = false;
<span class=<span class="string">"keyword"</span>>let</span> currentLanguage = &#<span class=<span class="string">"number"</span>>039</span>;en&#<span class=<span class="string">"number"</span>>039</span>;;
<span class=<span class="string">"keyword"</span>>let</span> isReviewMode = false;

<span class=<span class="string">"keyword"</span>>const</span> pickTimes = {
  <span class=<span class="string">"number"</span>>15</span>: <span class=<span class="string">"number"</span>>40</span>, <span class=<span class="string">"number"</span>>14</span>: <span class=<span class="string">"number"</span>>40</span>, <span class=<span class="string">"number"</span>>13</span>: <span class=<span class="string">"number"</span>>35</span>, <span class=<span class="string">"number"</span>>12</span>: <span class=<span class="string">"number"</span>>30</span>, <span class=<span class="string">"number"</span>>11</span>: <span class=<span class="string">"number"</span>>25</span>, <span class=<span class="string">"number"</span>>10</span>: <span class=<span class="string">"number"</span>>25</span>,
  <span class=<span class="string">"number"</span>>9</span>: <span class=<span class="string">"number"</span>>20</span>, <span class=<span class="string">"number"</span>>8</span>: <span class=<span class="string">"number"</span>>20</span>, <span class=<span class="string">"number"</span>>7</span>: <span class=<span class="string">"number"</span>>15</span>, <span class=<span class="string">"number"</span>>6</span>: <span class=<span class="string">"number"</span>>10</span>, <span class=<span class="string">"number"</span>>5</span>: <span class=<span class="string">"number"</span>>10</span>, <span class=<span class="string">"number"</span>>4</span>: <span class=<span class="string">"number"</span>>5</span>, <span class=<span class="string">"number"</span>>3</span>: <span class=<span class="string">"number"</span>>5</span>, <span class=<span class="string">"number"</span>>2</span>: <span class=<span class="string">"number"</span>>5</span>, <span class=<span class="string">"number"</span>>1</span>: <span class=<span class="string">"number"</span>>5</span>
};

<span class=<span class="string">"keyword"</span>>const</span> translations = {
  en: {
    title: &#<span class=<span class="string">"number"</span>>039</span>;Magic: The Gathering Draft Timer&#<span class=<span class="string">"number"</span>>039</span>;,
    startButton: &#<span class=<span class="string">"number"</span>>039</span>;Start Timer&#<span class=<span class="string">"number"</span>>039</span>;,
    restartButton: &#<span class=<span class="string">"number"</span>>039</span>;Restart Pick&#<span class=<span class="string">"number"</span>>039</span>;,
    pauseButton: &#<span class=<span class="string">"number"</span>>039</span>;Pause&#<span class=<span class="string">"number"</span>>039</span>;,
    resumeButton: &#<span class=<span class="string">"number"</span>>039</span>;Resume&#<span class=<span class="string">"number"</span>>039</span>;,
    packPick: &#<span class=<span class="string">"number"</span>>039</span>;Pack {pack} Pick {pick}&#<span class=<span class="string">"number"</span>>039</span>;,
    review: &#<span class=<span class="string">"number"</span>>039</span>;Review&#<span class=<span class="string">"number"</span>>039</span>;,
    boosterCount: &#<span class=<span class="string">"number"</span>>039</span>;Number of Boosters:&#<span class=<span class="string">"number"</span>>039</span>;,
    cardsPerBooster: &#<span class=<span class="string">"number"</span>>039</span>;Number of Cards per Booster:&#<span class=<span class="string">"number"</span>>039</span>;,
    paused: &#<span class=<span class="string">"number"</span>>039</span>;PAUSED&#<span class=<span class="string">"number"</span>>039</span>;,
    previousPick: &#<span class=<span class="string">"number"</span>>039</span>;Previous Pick&#<span class=<span class="string">"number"</span>>039</span>;,
    nextPick: &#<span class=<span class="string">"number"</span>>039</span>;Next Pick&#<span class=<span class="string">"number"</span>>039</span>;,
    language: &#<span class=<span class="string">"number"</span>>039</span>;Language&#<span class=<span class="string">"number"</span>>039</span>;
  },
  es: {
    title: &#<span class=<span class="string">"number"</span>>039</span>;Temporizador de Draft de Magic: The Gathering&#<span class=<span class="string">"number"</span>>039</span>;,
    startButton: &#<span class=<span class="string">"number"</span>>039</span>;Iniciar Timer&#<span class=<span class="string">"number"</span>>039</span>;,
    restartButton: &#<span class=<span class="string">"number"</span>>039</span>;Reiniciar Pick&#<span class=<span class="string">"number"</span>>039</span>;,
    pauseButton: &#<span class=<span class="string">"number"</span>>039</span>;Pausar&#<span class=<span class="string">"number"</span>>039</span>;,
    resumeButton: &#<span class=<span class="string">"number"</span>>039</span>;Reanudar&#<span class=<span class="string">"number"</span>>039</span>;,
    packPick: &#<span class=<span class="string">"number"</span>>039</span>;Pack {pack} Pick {pick}&#<span class=<span class="string">"number"</span>>039</span>;,
    review: &#<span class=<span class="string">"number"</span>>039</span>;Revisión&#<span class=<span class="string">"number"</span>>039</span>;,
    boosterCount: &#<span class=<span class="string">"number"</span>>039</span>;Número de Boosters:&#<span class=<span class="string">"number"</span>>039</span>;,
    cardsPerBooster: &#<span class=<span class="string">"number"</span>>039</span>;Número de Cartas por Booster:&#<span class=<span class="string">"number"</span>>039</span>;,
    paused: &#<span class=<span class="string">"number"</span>>039</span>;PAUSADO&#<span class=<span class="string">"number"</span>>039</span>;,
    previousPick: &#<span class=<span class="string">"number"</span>>039</span>;Pick Anterior&#<span class=<span class="string">"number"</span>>039</span>;,
    nextPick: &#<span class=<span class="string">"number"</span>>039</span>;Siguiente Pick&#<span class=<span class="string">"number"</span>>039</span>;,
    language: &#<span class=<span class="string">"number"</span>>039</span>;Idioma&#<span class=<span class="string">"number"</span>>039</span>;
  }
};

menuToggle.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;click&#<span class=<span class="string">"number"</span>>039</span>;, () =&gt; {
  menuContent.classList.toggle(&#<span class=<span class="string">"number"</span>>039</span>;active&#<span class=<span class="string">"number"</span>>039</span>;);
});

<span class=<span class="string">"keyword"</span>>function</span> startTimer() {
  <span class=<span class="string">"keyword"</span>>if</span> (timerInterval) clearInterval(timerInterval);
  timeLeft = isReviewMode ? <span class=<span class="string">"number"</span>>60</span> : getPickTime();
  updateTimer();
  resetTimerColor();
  timerInterval = setInterval(() =&gt; {
    <span class=<span class="string">"keyword"</span>>if</span> (!isPaused) {
      timeLeft--;
      updateTimer();
      <span class=<span class="string">"keyword"</span>>if</span> (timeLeft &lt;= <span class=<span class="string">"number"</span>>5</span>) {
        timerCircle.style.stroke = &#<span class=<span class="string">"number"</span>>039</span>;#ff<span class=<span class="string">"number"</span>>0000</span>&#<span class=<span class="string">"number"</span>>039</span>;;
        countdownSound.play();
      }
      <span class=<span class="string">"keyword"</span>>if</span> (timeLeft === <span class=<span class="string">"number"</span>>1</span>) {
        timerEndSound.play();
      }
      <span class=<span class="string">"keyword"</span>>if</span> (timeLeft &lt;= <span class=<span class="string">"number"</span>>0</span>) {
        clearInterval(timerInterval);
        <span class=<span class="string">"keyword"</span>>if</span> (isReviewMode) {
          startNextPack();
        } <span class=<span class="string">"keyword"</span>>else</span> {
          nextPick();
        }
      }
    }
  }, <span class=<span class="string">"number"</span>>1000</span>);
}

<span class=<span class="string">"keyword"</span>>function</span> updateTimer() {
  <span class=<span class="string">"keyword"</span>>const</span> percentage = timeLeft / (isReviewMode ? <span class=<span class="string">"number"</span>>60</span> : getPickTime());
  <span class=<span class="string">"keyword"</span>>const</span> strokeDashoffset = circumference * (<span class=<span class="string">"number"</span>>1</span> - percentage);
  timerCircle.style.strokeDashoffset = strokeDashoffset;
  timerText.textContent = timeLeft;
}

<span class=<span class="string">"keyword"</span>>function</span> nextPick() {
  currentPick++;
  <span class=<span class="string">"keyword"</span>>if</span> (currentPick &gt; cardsPerBooster) {
    startReviewTimer();
  } <span class=<span class="string">"keyword"</span>>else</span> {
    updatePackPickInfo();
    startTimer();
  }
}

<span class=<span class="string">"keyword"</span>>function</span> previousPick() {
  <span class=<span class="string">"keyword"</span>>if</span> (isReviewMode) {
    isReviewMode = false;
    currentPick = cardsPerBooster;
  } <span class=<span class="string">"keyword"</span>>else</span> <span class=<span class="string">"keyword"</span>>if</span> (currentPick &gt; <span class=<span class="string">"number"</span>>1</span>) {
    currentPick--;
  } <span class=<span class="string">"keyword"</span>>else</span> <span class=<span class="string">"keyword"</span>>if</span> (currentPack &gt; <span class=<span class="string">"number"</span>>1</span>) {
    currentPack--;
    currentPick = cardsPerBooster;
  }
  updatePackPickInfo();
  startTimer();
}

<span class=<span class="string">"keyword"</span>>function</span> startReviewTimer() {
  isReviewMode = true;
  timeLeft = <span class=<span class="string">"number"</span>>60</span>;
  updateTimer();
  resetTimerColor();
  packPickInfo.textContent = translations[currentLanguage].review;
  startTimer();
}

<span class=<span class="string">"keyword"</span>>function</span> startNextPack() {
  isReviewMode = false;
  currentPack++;
  currentPick = <span class=<span class="string">"number"</span>>1</span>;
  <span class=<span class="string">"keyword"</span>>if</span> (currentPack &gt; boosterCount) {
    currentPack = <span class=<span class="string">"number"</span>>1</span>;
    startButton.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;span&#<span class=<span class="string">"number"</span>>039</span>;).textContent = translations[currentLanguage].startButton;
    clearInterval(timerInterval);
    <span class=<span class="string">"keyword"</span>>return</span>;
  }
  updatePackPickInfo();
  startTimer();
}

<span class=<span class="string">"keyword"</span>>function</span> updatePackPickInfo() {
  <span class=<span class="string">"keyword"</span>>if</span> (!isReviewMode) {
    packPickInfo.textContent = translations[currentLanguage].packPick
      .replace(&#<span class=<span class="string">"number"</span>>039</span>;{pack}&#<span class=<span class="string">"number"</span>>039</span>;, currentPack)
      .replace(&#<span class=<span class="string">"number"</span>>039</span>;{pick}&#<span class=<span class="string">"number"</span>>039</span>;, currentPick);
  } <span class=<span class="string">"keyword"</span>>else</span> {
    packPickInfo.textContent = translations[currentLanguage].review;
  }
}

<span class=<span class="string">"keyword"</span>>function</span> getPickTime() {
  <span class=<span class="string">"keyword"</span>>return</span> pickTimes[cardsPerBooster - currentPick + <span class=<span class="string">"number"</span>>1</span>] || <span class=<span class="string">"number"</span>>5</span>;
}

<span class=<span class="string">"keyword"</span>>function</span> togglePause() {
  isPaused = !isPaused;
  updatePauseButtonState();
  pauseOverlay.classList.toggle(&#<span class=<span class="string">"number"</span>>039</span>;active&#<span class=<span class="string">"number"</span>>039</span>;, isPaused);
  pauseOverlay.textContent = translations[currentLanguage].paused;
}

<span class=<span class="string">"keyword"</span>>function</span> updatePauseButtonState() {
  <span class=<span class="string">"keyword"</span>>const</span> pauseButtonImg = pauseButton.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;img&#<span class=<span class="string">"number"</span>>039</span>;);
  <span class=<span class="string">"keyword"</span>>const</span> pauseButtonText = pauseButton.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;span&#<span class=<span class="string">"number"</span>>039</span>;);
  <span class=<span class="string">"keyword"</span>>if</span> (isPaused) {
    pauseButtonImg.src = &quot;/a/<span class=<span class="string">"number"</span>>93821</span>eca-<span class=<span class="string">"number"</span>>4</span>a<span class=<span class="string">"number"</span>>3</span>d-<span class=<span class="string">"number"</span>>423</span>e-<span class=<span class="string">"number"</span>>8167</span>-<span class=<span class="string">"number"</span>>6</span>f<span class=<span class="string">"number"</span>>8</span>a<span class=<span class="string">"number"</span>>695148</span>e<span class=<span class="string">"number"</span>>1</span>&quot;;
    pauseButtonImg.alt = &quot;Play&quot;;
    pauseButtonText.textContent = translations[currentLanguage].resumeButton;
  } <span class=<span class="string">"keyword"</span>>else</span> {
    pauseButtonImg.src = &quot;/a/<span class=<span class="string">"number"</span>>6</span>de<span class=<span class="string">"number"</span>>4</span>c<span class=<span class="string">"number"</span>>75</span>a-<span class=<span class="string">"number"</span>>8</span>f<span class=<span class="string">"number"</span>>9</span>a-<span class=<span class="string">"number"</span>>4190</span>-<span class=<span class="string">"number"</span>>9</span>fd<span class=<span class="string">"number"</span>>5</span>-<span class=<span class="string">"number"</span>>462264</span>f<span class=<span class="string">"number"</span>>61</span>cff&quot;;
    pauseButtonImg.alt = &quot;Pause&quot;;
    pauseButtonText.textContent = translations[currentLanguage].pauseButton;
  }
}

<span class=<span class="string">"keyword"</span>>function</span> resetTimerColor() {
  timerCircle.style.stroke = &#<span class=<span class="string">"number"</span>>039</span>;#<span class=<span class="string">"number"</span>>4</span>CAF<span class=<span class="string">"number"</span>>50</span>&#<span class=<span class="string">"number"</span>>039</span>;;
}

startButton.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;click&#<span class=<span class="string">"number"</span>>039</span>;, () =&gt; {
  boosterCount = parseInt(boosterCountInput.value);
  cardsPerBooster = parseInt(cardsPerBoosterInput.value);
  currentPack = <span class=<span class="string">"number"</span>>1</span>;
  currentPick = <span class=<span class="string">"number"</span>>1</span>;
  isReviewMode = false;
  updatePackPickInfo();
  startTimer();
  startButton.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;span&#<span class=<span class="string">"number"</span>>039</span>;).textContent = translations[currentLanguage].restartButton;
});

pauseButton.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;click&#<span class=<span class="string">"number"</span>>039</span>;, togglePause);
previousPickButton.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;click&#<span class=<span class="string">"number"</span>>039</span>;, previousPick);
nextPickButton.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;click&#<span class=<span class="string">"number"</span>>039</span>;, nextPick);

languageOptions.<span class=<span class="string">"keyword"</span>>for</span>Each(option =&gt; {
  option.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;click&#<span class=<span class="string">"number"</span>>039</span>;, () =&gt; {
    currentLanguage = option.dataset.lang;
    languageOptions.<span class=<span class="string">"keyword"</span>>for</span>Each(opt =&gt; opt.classList.remove(&#<span class=<span class="string">"number"</span>>039</span>;active&#<span class=<span class="string">"number"</span>>039</span>;));
    option.classList.add(&#<span class=<span class="string">"number"</span>>039</span>;active&#<span class=<span class="string">"number"</span>>039</span>;);
    updateTranslations();
  });
});

<span class=<span class="string">"keyword"</span>>function</span> updateTranslations() {
  document.title = translations[currentLanguage].title;
  document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;h<span class=<span class="string">"number"</span>>1</span>&#<span class=<span class="string">"number"</span>>039</span>;).textContent = translations[currentLanguage].title;
  startButton.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;span&#<span class=<span class="string">"number"</span>>039</span>;).textContent = translations[currentLanguage].startButton;
  updatePauseButtonState();
  updatePackPickInfo();
  document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.label-text&#<span class=<span class="string">"number"</span>>039</span>;)[<span class=<span class="string">"number"</span>>0</span>].textContent = translations[currentLanguage].boosterCount;
  document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.label-text&#<span class=<span class="string">"number"</span>>039</span>;)[<span class=<span class="string">"number"</span>>1</span>].textContent = translations[currentLanguage].cardsPerBooster;
  pauseOverlay.textContent = translations[currentLanguage].paused;
  previousPickButton.textContent = translations[currentLanguage].previousPick;
  nextPickButton.textContent = translations[currentLanguage].nextPick;
  document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.language-selector h<span class=<span class="string">"number"</span>>3</span>&#<span class=<span class="string">"number"</span>>039</span>;).textContent = translations[currentLanguage].language;
}

timerCircle.style.strokeDasharray = `${circumference} ${circumference}`;
timerCircle.style.strokeDashoffset = `${circumference}`;
updateTranslations();

