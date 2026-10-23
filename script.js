// NAVBAR: scroll style + mobile menu
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
document.getElementById('menuBtn').addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// PARALLAX on scroll
const layers = document.querySelectorAll('[data-speed]');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  if (y < window.innerHeight) {
    layers.forEach(l => { l.style.transform = `translateY(${y * l.dataset.speed}px)`; });
  }
});

// PARALLAX on mouse (3D depth in hero)
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  document.querySelectorAll('.trees, .mountains').forEach((l, i) => {
    l.style.marginLeft = `${x * (i + 1) * 0.6}px`;
  });
});

// SCROLL REVEAL + COUNTERS
function animateCount(el) {
  const target = +el.dataset.count;
  let n = 0;
  const step = Math.max(1, Math.ceil(target / 80));
  const timer = setInterval(() => {
    n += step;
    if (n >= target) { n = target; clearInterval(timer); }
    el.textContent = n;
  }, 25);
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      const counter = entry.target.querySelector('[data-count]');
      if (counter && !counter.dataset.done) { counter.dataset.done = 1; animateCount(counter); }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.12 + 's';
  observer.observe(el);
});

// 3D TILT CARDS
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// FLIP CARDS (tap on mobile)
document.querySelectorAll('.flip').forEach(f => f.addEventListener('click', () => f.classList.toggle('active')));

// PLANT A TREE
const scene = document.getElementById('scene');
const treeCountEl = document.getElementById('treeCount');
const co2El = document.getElementById('co2Count');
const trees = ['🌲', '🌳', '🌴', '🌲', '🌳'];
let count = 0;
scene.addEventListener('click', e => {
  const r = scene.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  if (y < r.height * 0.45) return; // only plant on the ground
  const t = document.createElement('span');
  t.className = 'tree';
  t.textContent = trees[Math.floor(Math.random() * trees.length)];
  t.style.left = x + 'px';
  t.style.top = y + 'px';
  t.style.fontSize = (28 + (y / r.height) * 30) + 'px'; // depth effect
  t.style.zIndex = Math.floor(y);
  scene.appendChild(t);
  count++;
  treeCountEl.textContent = count;
  co2El.textContent = count * 22;
});
document.getElementById('resetBtn').addEventListener('click', () => {
  scene.querySelectorAll('.tree').forEach(t => t.remove());
  count = 0; treeCountEl.textContent = 0; co2El.textContent = 0;
});

// PLEDGE FORM
document.getElementById('pledgeForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('pName').value.trim();
  const action = document.getElementById('pAction').value.toLowerCase();
  document.getElementById('pledgeMsg').textContent = `🌿 Thank you, ${name}! You promised to ${action}. Together we can save our forests.`;
  e.target.reset();
});