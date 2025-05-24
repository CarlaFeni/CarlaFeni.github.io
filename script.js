const toggleBtn = document.getElementById('langToggle');
const langES = document.querySelectorAll('.lang-es');
const langEN = document.querySelectorAll('.lang-en');

toggleBtn.addEventListener('click', () => {
  const isSpanish = toggleBtn.textContent === 'EN';
  toggleBtn.textContent = isSpanish ? 'ES' : 'EN';

  langES.forEach(el => el.style.display = isSpanish ? 'none' : 'block');
  langEN.forEach(el => el.style.display = isSpanish ? 'block' : 'none');
});
