/**
 * NPS TraQ! — Typeform-style
 * Logica de steps, atalhos de teclado e submit AJAX
 */

document.addEventListener('DOMContentLoaded', () => {
  initClientParam();
  initNPSScale();
  initExperienceScale();
  initLoyaltyOptions();
  initTextareas();
  initNavigation();
  initFormSubmit();
  initKeyboardShortcuts();
});

/* ==========================================
   STATE
   ========================================== */

let currentStep = 0;
const totalSteps = 5;
let isTransitioning = false;

/* ==========================================
   PARAMETRO DO CLIENTE
   ========================================== */

function initClientParam() {
  // First try URL parameters (e.g., ?cliente=empresa-alpha)
  const params = new URLSearchParams(window.location.search);
  let cliente = params.get('cliente');

  // Fallback: If no query param, try to extract from the pathname (e.g., /empresa-alpha or /nps-traq/empresa-alpha)
  if (!cliente) {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      // Get the last segment, ignoring 'nps-traq' or 'index.html'
      const lastSegment = pathSegments[pathSegments.length - 1];
      if (lastSegment && lastSegment !== 'nps-traq' && lastSegment !== 'index.html') {
        cliente = lastSegment;
      }
    }
  }

  const hidden = document.getElementById('cliente-hidden');
  if (cliente && hidden) {
    hidden.value = cliente;
  }
}

/* ==========================================
   STEP NAVIGATION
   ========================================== */

function goToStep(stepNumber) {
  if (isTransitioning || stepNumber < 0 || stepNumber > totalSteps) return;
  if (stepNumber === currentStep) return;

  isTransitioning = true;

  const currentEl = document.querySelector(`[data-step="${currentStep}"]`);
  const nextEl = document.querySelector(`[data-step="${stepNumber}"]`);
  if (!currentEl || !nextEl) return;

  // Exit current step
  currentEl.classList.remove('active');
  currentEl.classList.add('exiting');

  // After exit animation
  setTimeout(() => {
    currentEl.classList.remove('exiting');

    // Enter new step
    nextEl.classList.add('active');
    currentStep = stepNumber;

    // Update progress bar
    updateProgress(stepNumber);

    // Auto-focus textarea on desktop
    if (!isTouchDevice()) {
      const textarea = nextEl.querySelector('.form-textarea');
      if (textarea) {
        setTimeout(() => textarea.focus(), 600);
      }
    }

    isTransitioning = false;
  }, 350);
}

function updateProgress(step) {
  const fill = document.getElementById('progress-fill');
  if (fill) {
    fill.style.width = (step / totalSteps) * 100 + '%';
  }
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/* ==========================================
   NPS SCALE (0-10)
   ========================================== */

function initNPSScale() {
  const container = document.getElementById('nps-scale');
  const hidden = document.getElementById('nota-nps');
  if (!container || !hidden) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.nps-btn');
    if (!btn) return;

    // Remove previous selection
    container.querySelectorAll('.nps-btn').forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-checked', 'false');
    });

    // Select
    btn.classList.add('selected');
    btn.setAttribute('aria-checked', 'true');
    container.classList.add('has-selection');
    hidden.value = btn.dataset.value;

    // Enable next
    enableNextButton(1);
  });
}

function selectNPSByKey(value) {
  const container = document.getElementById('nps-scale');
  const btn = container?.querySelector(`[data-value="${value}"]`);
  if (btn) btn.click();
}

/* ==========================================
   EXPERIENCE SCALE
   ========================================== */

function initExperienceScale() {
  const container = document.getElementById('experience-scale');
  const hidden = document.getElementById('experiencia-geral');
  if (!container || !hidden) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.exp-btn');
    if (!btn) return;

    // Remove previous
    container.querySelectorAll('.exp-btn').forEach(b => {
      b.classList.remove('selected', 'just-selected');
      b.setAttribute('aria-checked', 'false');
    });

    // Select with bounce
    btn.classList.add('selected', 'just-selected');
    btn.setAttribute('aria-checked', 'true');
    container.classList.add('has-selection');
    hidden.value = btn.dataset.value;

    // Remove bounce class after animation
    setTimeout(() => btn.classList.remove('just-selected'), 400);

    // Enable next
    enableNextButton(3);
  });
}

/* ==========================================
   LOYALTY OPTIONS
   ========================================== */

function initLoyaltyOptions() {
  const container = document.getElementById('loyalty-options');
  const hidden = document.getElementById('fidelidade');
  if (!container || !hidden) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.loyalty-btn');
    if (!btn) return;

    // Remove previous
    container.querySelectorAll('.loyalty-btn').forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-checked', 'false');
    });

    // Select
    btn.classList.add('selected');
    btn.setAttribute('aria-checked', 'true');
    container.classList.add('has-selection');
    hidden.value = btn.dataset.value;

    // Enable submit
    const submitBtn = document.getElementById('btn-submit');
    if (submitBtn) submitBtn.disabled = false;
  });
}

/* ==========================================
   TEXTAREAS
   ========================================== */

function initTextareas() {
  const motivo = document.getElementById('motivo-nota');
  if (motivo) {
    motivo.addEventListener('input', () => {
      if (motivo.value.trim().length >= 10) {
        motivo.classList.remove('error');
        enableNextButton(2);
      } else {
        disableNextButton(2);
      }
    });
  }

  const melhoria = document.getElementById('ponto-melhoria');
  if (melhoria) {
    melhoria.addEventListener('input', () => {
      if (melhoria.value.trim().length >= 10) {
        melhoria.classList.remove('error');
        enableNextButton(4);
      } else {
        disableNextButton(4);
      }
    });
  }
}

/* ==========================================
   NAVIGATION BUTTONS
   ========================================== */

function initNavigation() {
  document.querySelectorAll('.btn-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const nextStep = parseInt(btn.dataset.next);
      goToStep(nextStep);
    });
  });

  document.querySelectorAll('.btn-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = parseInt(btn.dataset.prev);
      goToStep(prevStep);
    });
  });
}

function enableNextButton(stepNumber) {
  const step = document.querySelector(`[data-step="${stepNumber}"]`);
  if (!step) return;
  const btn = step.querySelector('.btn-next');
  if (btn) btn.disabled = false;
}

function disableNextButton(stepNumber) {
  const step = document.querySelector(`[data-step="${stepNumber}"]`);
  if (!step) return;
  const btn = step.querySelector('.btn-next');
  if (btn) btn.disabled = true;
}

/* ==========================================
   KEYBOARD SHORTCUTS (Typeform UX)
   ========================================== */

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ignore if in transition
    if (isTransitioning) return;

    const activeTextarea = document.activeElement?.tagName === 'TEXTAREA';

    // 0-9 keys for NPS (step 1 only, not in textarea)
    if (currentStep === 1 && !activeTextarea) {
      const key = parseInt(e.key);
      if (!isNaN(key) && key >= 0 && key <= 9) {
        e.preventDefault();
        selectNPSByKey(key);
        return;
      }
      // "x" or "X" selects 10
      if (e.key === 'x' || e.key === 'X') {
        e.preventDefault();
        selectNPSByKey(10);
        return;
      }
    }

    // Enter to advance
    if (e.key === 'Enter') {
      if (activeTextarea && !e.shiftKey) {
        // Normal Enter in textarea = line break, don't intercept
        return;
      }

      e.preventDefault();

      if (activeTextarea && e.shiftKey) {
        // Shift+Enter in textarea = advance
        const nextBtn = document.querySelector(`[data-step="${currentStep}"] .btn-next`);
        if (nextBtn && !nextBtn.disabled) nextBtn.click();
        return;
      }

      // Enter on submit step
      if (currentStep === totalSteps) {
        const submitBtn = document.getElementById('btn-submit');
        if (submitBtn && !submitBtn.disabled) submitBtn.click();
        return;
      }

      // Enter on other steps
      const nextBtn = document.querySelector(`[data-step="${currentStep}"] .btn-next`);
      if (nextBtn && !nextBtn.disabled) nextBtn.click();
      return;
    }

    // Backspace to go back (not in textarea)
    if (e.key === 'Backspace' && !activeTextarea && currentStep > 0) {
      e.preventDefault();
      goToStep(currentStep - 1);
    }
  });
}

/* ==========================================
   FORM SUBMIT
   ========================================== */

function initFormSubmit() {
  const form = document.getElementById('nps-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('btn-submit');
    const feedback = document.getElementById('form-feedback');

    // Final validation
    const notaNps = document.getElementById('nota-nps').value;
    const motivo = document.getElementById('motivo-nota').value.trim();
    const experiencia = document.getElementById('experiencia-geral').value;
    const melhoria = document.getElementById('ponto-melhoria').value.trim();
    const fidelidade = document.getElementById('fidelidade').value;

    if (!notaNps || !motivo || !experiencia || !melhoria || !fidelidade) {
      showFeedback(feedback, 'error', 'Por favor, responda todas as perguntas antes de enviar.');
      return;
    }

    // Validate minimum length for textareas
    if (motivo.length < 10 || melhoria.length < 10) {
      showFeedback(feedback, 'error', 'Por favor, escreva pelo menos 10 caracteres nas respostas descritivas.');
      return;
    }

    // Disable button
    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando...';

    try {
      const formData = new FormData(form);
      const clienteHidden = document.getElementById('cliente-hidden');
      if (clienteHidden && clienteHidden.value && !formData.has('cliente')) {
        formData.append('cliente', clienteHidden.value);
      } else if (clienteHidden && clienteHidden.value) {
        formData.set('cliente', clienteHidden.value);
      }

      // Envia os dados especificamente para a rota onde o formulário HTML original reside
      const res = await fetch('/nps-traq/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (res.ok) {
        // Redirect with params
        const action = form.getAttribute('action');
        if (action) {
          const redirectUrl = new URL(action, window.location.origin);
          new URLSearchParams(window.location.search).forEach((value, key) => {
            redirectUrl.searchParams.set(key, value);
          });
          window.location.href = redirectUrl.toString();
          return;
        }

        showFeedback(feedback, 'success', 'Pesquisa enviada com sucesso!');
      } else {
        throw new Error('Erro no envio');
      }
    } catch {
      showFeedback(feedback, 'error', 'Erro ao enviar a pesquisa. Tente novamente.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
    }
  });
}

function showFeedback(el, type, msg) {
  if (!el) return;
  el.className = 'form-feedback ' + type;
  el.textContent = msg;
  setTimeout(() => {
    el.className = 'form-feedback';
    el.textContent = '';
  }, 5000);
}
