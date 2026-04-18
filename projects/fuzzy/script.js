/**
 * Fuzzy Logic Mastery — Consolidated Quiz Engine
 * QUIZ_DATA is a flat array of 144 questions loaded from data.js
 */
(() => {
  // ---- State ----
  let questions = [];
  let idx = 0;
  let score = 0;
  let answered = false;
  let quizSize = 15;
  let userAnswers = [];

  // ---- DOM helpers ----
  const $ = (sel) => document.getElementById(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const screens = {
    landing:  $('screen-landing'),
    quiz:     $('screen-quiz'),
    results:  $('screen-results'),
    review:   $('screen-review'),
  };

  // ---- Screen management ----
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Shuffle (Fisher-Yates) ----
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- Quiz size picker ----
  function initSizePicker() {
    const btns = $$('.size-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        quizSize = parseInt(btn.dataset.count, 10);
      });
    });
  }

  // ---- Start Quiz ----
  function startQuiz() {
    questions = shuffle(QUIZ_DATA).slice(0, quizSize);
    idx = 0;
    score = 0;
    answered = false;
    userAnswers = [];
    $('live-score').textContent = '0';
    showScreen('quiz');
    renderQuestion();
  }

  // ---- Render Question ----
  function renderQuestion() {
    answered = false;
    const q = questions[idx];

    // Progress
    $('progress-fill').style.width = ((idx / questions.length) * 100) + '%';
    $('q-index').textContent = idx + 1;
    $('q-total').textContent = questions.length;

    // Difficulty badge
    const badge = $('quiz-difficulty-badge');
    const diff = (q.difficulty || 'Easy').toLowerCase();
    badge.textContent = q.difficulty || 'Easy';
    badge.className = 'diff-badge ' + diff;

    // Question text
    $('question-text').textContent = q.question;

    // Options
    const list = $('options-list');
    list.innerHTML = '';
    ['A','B','C','D'].forEach(label => {
      const text = q.options[label];
      if (text === undefined || text === null) return;

      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerHTML = `
        <span class="opt-letter">${label}</span>
        <span class="opt-text">${text}</span>
      `;
      btn.addEventListener('click', () => selectAnswer(label, btn));
      list.appendChild(btn);
    });

    // Hide explanation + nav
    $('explanation-card').classList.add('hidden');
    $('explanation-card').classList.remove('is-correct', 'is-wrong');
    $('nav-bar').classList.add('hidden');
  }

  // ---- Answer ----
  function selectAnswer(label, btn) {
    if (answered) return;
    answered = true;

    const q = questions[idx];
    const correct = q.answer.trim();
    const isCorrect = label === correct;

    userAnswers.push({ selected: label, correct, isCorrect, question: q });

    if (isCorrect) {
      score++;
      $('live-score').textContent = score;
    }

    // Lock & highlight
    const allBtns = $('options-list').querySelectorAll('.opt-btn');
    allBtns.forEach(b => {
      b.classList.add('locked');
      if (b.querySelector('.opt-letter').textContent === correct) {
        b.classList.add('correct');
      }
    });
    if (!isCorrect) btn.classList.add('wrong');

    // Show explanation
    const card = $('explanation-card');
    card.classList.remove('hidden', 'is-correct', 'is-wrong');
    card.classList.add(isCorrect ? 'is-correct' : 'is-wrong');

    $('feedback-icon').textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';

    // Build explanation text
    const correctOptText = q.options[correct] || '';
    let explText = '';
    if (!isCorrect) {
      explText += `The correct answer is <strong>${correct}) ${correctOptText}</strong>.\n\n`;
    }
    if (q.explanation) {
      explText += q.explanation;
    }
    $('explanation-text').innerHTML = explText;

    // Show next button
    $('nav-bar').classList.remove('hidden');
    $('btn-next').textContent = (idx === questions.length - 1) ? 'See Results →' : 'Next →';

    // Scroll explanation into view
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ---- Next ----
  function nextQuestion() {
    idx++;
    if (idx < questions.length) {
      renderQuestion();
      // Scroll to top of quiz
      $('screen-quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      showResults();
    }
  }

  // ---- Results ----
  function showResults() {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);

    $('res-score').textContent = score;
    $('res-total').textContent = total;
    $('res-pct').textContent = pct + '%';

    // Ring animation
    const circ = 339.29;
    const offset = circ - (circ * score / total);
    const ring = $('ring-fg');
    ring.style.strokeDashoffset = circ;
    requestAnimationFrame(() => {
      ring.style.strokeDashoffset = offset;
    });

    // Emoji & message
    const emoji = $('res-emoji');
    const msg = $('res-message');
    if (pct === 100)      { emoji.textContent='🏆'; msg.textContent='Perfect score! Absolute mastery!'; }
    else if (pct >= 80)   { emoji.textContent='🌟'; msg.textContent='Outstanding! You really know your stuff.'; }
    else if (pct >= 60)   { emoji.textContent='👏'; msg.textContent='Well done! A solid performance.'; }
    else if (pct >= 40)   { emoji.textContent='📖'; msg.textContent='Good effort. Review the topics and try again!'; }
    else                  { emoji.textContent='💪'; msg.textContent="Keep studying — you'll get there!"; }

    // Difficulty breakdown
    const stats = { Easy:{t:0,c:0}, Medium:{t:0,c:0}, Hard:{t:0,c:0} };
    userAnswers.forEach(a => {
      const d = a.question.difficulty || 'Easy';
      if (stats[d]) { stats[d].t++; if (a.isCorrect) stats[d].c++; }
    });
    ['easy','medium','hard'].forEach(d => {
      const key = d.charAt(0).toUpperCase() + d.slice(1);
      const el = $('bd-' + d);
      const val = el.querySelector('.bd-val');
      val.textContent = stats[key].t > 0 ? `${stats[key].c}/${stats[key].t}` : '—';
    });

    showScreen('results');
  }

  // ---- Review ----
  function showReview() {
    const list = $('review-list');
    list.innerHTML = '';

    userAnswers.forEach((a, i) => {
      const item = document.createElement('div');
      const diffClass = (a.question.difficulty || 'easy').toLowerCase();
      item.className = 'review-item ' + (a.isCorrect ? 'ri-correct' : 'ri-wrong');

      let html = `
        <div class="ri-head">
          <span class="ri-num">Q${i + 1}</span>
          <span class="diff-badge ${diffClass}">${a.question.difficulty || 'Easy'}</span>
          <span class="${a.isCorrect ? 'ri-status-correct' : 'ri-status-wrong'}">${a.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
        </div>
        <div class="ri-q">${a.question.question}</div>
        <div class="ri-row">Your answer: <strong class="${a.isCorrect ? 'ri-correct-tag' : 'ri-wrong-tag'}">${a.selected}) ${a.question.options[a.selected] || ''}</strong></div>
      `;

      if (!a.isCorrect) {
        html += `<div class="ri-row">Correct answer: <strong class="ri-correct-tag">${a.correct}) ${a.question.options[a.correct] || ''}</strong></div>`;
      }

      if (a.question.explanation) {
        html += `<div class="ri-explanation"><strong>Why?</strong> ${a.question.explanation}</div>`;
      }

      item.innerHTML = html;
      list.appendChild(item);
    });

    showScreen('review');
  }

  // ---- Modal ----
  function openModal()  { $('modal-quit').classList.remove('hidden'); }
  function closeModal() { $('modal-quit').classList.add('hidden'); }
  function quitQuiz()   { closeModal(); showScreen('landing'); }

  // ---- Wire up events ----
  function init() {
    initSizePicker();
    $('btn-start').addEventListener('click', startQuiz);
    $('btn-next').addEventListener('click', nextQuestion);
    $('btn-quit').addEventListener('click', openModal);
    $('modal-cancel').addEventListener('click', closeModal);
    $('modal-confirm').addEventListener('click', quitQuiz);
    $('btn-review').addEventListener('click', showReview);
    $('btn-retry').addEventListener('click', () => showScreen('landing'));
    $('btn-back-results').addEventListener('click', () => showScreen('results'));
    $('btn-new-quiz').addEventListener('click', () => showScreen('landing'));
  }

  init();
})();
