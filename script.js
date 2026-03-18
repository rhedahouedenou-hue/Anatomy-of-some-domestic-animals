// ── Squelette interactif ──
function showAnat(id, btn) {
  document.querySelectorAll('.anat-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.anatomy-display').forEach(d => d.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('anat-' + id);
  if (panel) panel.classList.add('active');
}

// ── Onglets Systèmes ──
function showSys(id, btn) {
  document.querySelectorAll('.sys-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sys-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('sys-' + id);
  if (panel) panel.classList.add('active');
}

// ── Animation au scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.animal-card, .curio-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = `opacity 0.55s ${i * 0.07}s ease, transform 0.55s ${i * 0.07}s ease`;
  observer.observe(el);
});
