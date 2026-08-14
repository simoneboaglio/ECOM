// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ accordion
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const panel = item.querySelector('.accordion-panel');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        openItem.querySelector('.accordion-panel').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      panel.style.maxHeight = null;
    } else {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

// Show "not live yet" note inline
const liveSelect = document.getElementById('live');
const notLiveNote = document.getElementById('notLiveNote');
if (liveSelect && notLiveNote) {
  liveSelect.addEventListener('change', () => {
    notLiveNote.hidden = liveSelect.value !== 'Not yet, still building';
  });
}

// Application form -> opens a pre-filled email to the owner
const applyForm = document.getElementById('applyForm');
if (applyForm) {
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(applyForm);
    const get = (key) => (data.get(key) || '').toString().trim();

    const subject = `Full System Audit Application — ${get('name') || 'New applicant'}`;
    const bodyLines = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Website: ${get('website')}`,
      `Store live: ${get('live')}`,
      `How long live: ${get('howlong')}`,
      `Daily ad spend: ${get('adspend')}`,
      `Monthly revenue: ${get('revenue')}`,
      `Biggest struggle: ${get('struggle')}`,
      `Notes: ${get('notes')}`
    ];
    const body = bodyLines.join('\n');
    const mailto = `mailto:simone.boaglio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
