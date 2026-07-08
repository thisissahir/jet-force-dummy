/* ============================================================
   Jet Force — site.js
   Injects nav + footer, wires mobile nav / scroll / forms
   ============================================================ */

const JF = {
  phone:     '(555) 555-5555',
  phoneHref: 'tel:5555555555',
  location:  'Denver, CO Metro Area',
  year:      new Date().getFullYear(),
};

const SVC = [
  { l:'Main Sewer Line Jetting',      h:'main-sewer-line-jetting.html' },
  { l:'Sewer Scope Inspections',      h:'sewer-scope-inspections.html' },
  { l:'Sewer Line Repair',            h:'sewer-line-repair.html' },
  { l:'Grease Trap Cleaning',         h:'grease-trap-cleaning.html' },
  { l:'Water Line Repair',            h:'water-line-repair.html' },
  { l:'Underground Fire Line Repair', h:'underground-fire-line-repair.html' },
  { l:'Leak Detection',               h:'leak-detection.html' },
  { l:'Water Extraction',             h:'water-extraction.html' },
];

const IC = {
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10 19.79 19.79 0 0 1 1.62 1.33A2 2 0 0 1 3.56 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  map:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  shield:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevD: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevR: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>`,
  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
};

/* ── Nav HTML ────────────────────────────────────────────── */
function buildNav(active) {
  const svcLinks = SVC.map(s =>
    `<a href="${s.h}"${active===s.h?' style="color:var(--ye-500)"':''}>${s.l}</a>`
  ).join('');
  const mobLinks = SVC.map(s =>
    `<a href="${s.h}" class="indent">${s.l}</a>`
  ).join('');
  return `
<header id="site-header">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo"><img class="nav-logo-mark" src="assets/jf-mark-navy-wm.png" alt="Jet Force Grease &amp; Pipe Solutions"><span class="nav-logo-wm"><span class="nav-logo-name">JET FORCE</span><span class="nav-logo-mid">Underground</span><span class="nav-logo-sub">Grease &amp; Pipe Solutions</span></span></a>
    <nav class="nav-links">
      <div class="nav-drop">
        <button class="nav-drop-btn">Services ${IC.chevD}</button>
        <div class="nav-drop-menu">${svcLinks}</div>
      </div>
      <a href="index.html#why-us" class="nav-link">Why Jet Force</a>
      <a href="index.html#areas" class="nav-link">Service Areas</a>
      <a href="faq.html" class="nav-link${active==='faq.html'?' active':''}">FAQ</a>
      <a href="contact.html" class="nav-link${active==='contact.html'?' active':''}">Contact</a>
    </nav>
    <div class="nav-actions">
      <a href="${JF.phoneHref}" class="nav-phone">${IC.phone} ${JF.phone}</a>
      <a href="contact.html" class="nav-cta">Get a Quote</a>
    </div>
    <button class="nav-ham" id="nav-ham" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<nav class="mob-nav" id="mob-nav" aria-label="Mobile navigation">
  <div class="mob-sec">Services</div>
  ${mobLinks}
  <div class="mob-sec">Company</div>
  <a href="index.html">Home</a>
  <a href="index.html#why-us">Why Jet Force</a>
  <a href="index.html#areas">Service Areas</a>
  <a href="faq.html">FAQ</a>
  <a href="contact.html">Contact</a>
  <a href="${JF.phoneHref}" class="mob-cta">${IC.phone} &nbsp;${JF.phone}</a>
  <a href="contact.html" class="mob-cta-ghost">Get a Free Quote</a>
</nav>`;
}

/* ── Footer HTML ─────────────────────────────────────────── */
function buildFooter() {
  const AREAS = ['Denver','Aurora','Lakewood','Englewood','Centennial','Littleton','Greenwood Village','Arvada','Westminster','Broomfield'];
  const col1 = SVC.slice(0,4).map(s=>`<a href="${s.h}" class="foot-link">${s.l}</a>`).join('');
  const col2 = SVC.slice(4).map(s=>`<a href="${s.h}" class="foot-link">${s.l}</a>`).join('');
  const aLinks = AREAS.slice(0,6).map(a=>`<span class="foot-link">${a}</span>`).join('');
  return `
<footer id="site-footer">
  <div class="container">
    <div class="foot-grid">
      <div>
        <div class="foot-logo-lockup">
          <img class="nav-logo-mark" src="assets/jf-mark-navy-wm.png" alt="Jet Force Grease &amp; Pipe Solutions">
          <span class="nav-logo-wm"><span class="nav-logo-name">JET FORCE</span><span class="nav-logo-mid">Underground</span><span class="nav-logo-sub">Grease &amp; Pipe Solutions</span></span>
        </div>
        <p class="foot-about">Denver's underground specialists — sewer line jetting, sewer and water line repair, grease traps, leak detection, and more. One call handles it all. No down payment required.</p>
        <div class="foot-info">${IC.map} ${JF.location}</div>
        <div class="foot-info">${IC.phone} <a href="${JF.phoneHref}">${JF.phone}</a></div>
      </div>
      <div><span class="foot-col-title">Services</span>${col1}</div>
      <div><span class="foot-col-title">More Services</span>${col2}</div>
      <div><span class="foot-col-title">Service Areas</span>${aLinks}</div>
    </div>
    <div class="foot-bottom">
      <span class="foot-copy">&copy; ${JF.year} Jet Force Grease &amp; Pipe Solutions LLC. All rights reserved.</span>
      <span class="foot-copy">${IC.shield} Licensed &amp; Insured in Colorado</span>
    </div>
  </div>
</footer>`;
}

/* ── Sidebar form HTML helper ────────────────────────────── */
function buildSidebarForm(serviceLabel) {
  const opts = SVC.map(s=>
    `<option value="${s.h}"${s.l===serviceLabel?' selected':''}>${s.l}</option>`
  ).join('');
  return `
<div class="sb-card">
  <div class="sb-hdr">
    <h3>Get a Free Quote</h3>
    <p>No obligation. We'll give you an honest assessment and clear pricing.</p>
  </div>
  <div class="sb-body">
    <form data-qform>
      <div data-fields>
        <div class="f-field"><label class="f-label">Your Name *</label><input class="f-input" type="text" placeholder="Jane Smith" required></div>
        <div class="f-field"><label class="f-label">Phone *</label><input class="f-input" type="tel" placeholder="(555) 555-0000" required></div>
        <div class="f-field"><label class="f-label">Email</label><input class="f-input" type="email" placeholder="you@example.com"></div>
        <div class="f-field"><label class="f-label">Service Needed</label>
          <select class="f-input" style="appearance:none;cursor:pointer">
            <option value="">Select a service…</option>
            ${opts}
            <option value="emergency">Emergency Service</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
        <div class="f-field"><label class="f-label">Message</label><textarea class="f-input f-ta" placeholder="Describe your situation…"></textarea></div>
        <button type="submit" class="btn-submit">Send Request</button>
        <a href="${JF.phoneHref}" class="sb-phone">${IC.phone} ${JF.phone}</a>
      </div>
      <div data-succ style="display:none" class="sb-success">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2E6329" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto 12px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <h3>Request Received</h3>
        <p>We'll call you back within 2 business hours. For emergencies, call us directly at ${JF.phone}.</p>
      </div>
    </form>
    <div class="sb-trust">
      <div class="sb-trust-item">${IC.check} No down payment required</div>
      <div class="sb-trust-item">${IC.check} Licensed &amp; insured in Colorado</div>
      <div class="sb-trust-item">${IC.check} 24/7 emergency response</div>
    </div>
  </div>
</div>`;
}

/* ── CTA Banner HTML helper ──────────────────────────────── */
function buildCTA() {
  return `
<section class="cta-banner bg-green">
  <div class="container">
    <div class="cta-row">
      <div>
        <span class="accent-rule"></span>
        <h2>Need Underground Help Now?</h2>
        <p>Call Jet Force for one crew, clear diagnosis, and honest underground service across the Denver metro.</p>
      </div>
      <div class="cta-actions">
        <a href="${JF.phoneHref}" class="btn btn-primary">${IC.phone} Call Now</a>
        <a href="contact.html" class="btn btn-ghost-white">Request a Free Estimate</a>
      </div>
    </div>
  </div>
</section>`;
}

/* ── Breadcrumb HTML helper ──────────────────────────────── */
function buildBreadcrumb(label) {
  return `<nav class="breadcrumb"><a href="index.html">Home</a>${IC.chevR}<a href="index.html#services">Services</a>${IC.chevR}<span>${label}</span></nav>`;
}

/* ── Related Services helper ─────────────────────────────── */
function buildRelated(exclude) {
  const pool = SVC.filter(s => s.h !== exclude);
  const picks = pool.sort(() => .5 - Math.random()).slice(0, 3);
  return picks.map(s => `
<a href="${s.h}" class="svc-card">
  <div class="svc-ico">${getIcon(s.h)}</div>
  <div class="svc-name">${s.l}</div>
  <div class="svc-more">Learn More ${IC.chevR}</div>
</a>`).join('');
}

function getIcon(h) {
  const icons = {
    'main-sewer-line-jetting.html':      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    'sewer-scope-inspections.html':      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
    'sewer-line-repair.html':            `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    'grease-trap-cleaning.html':         `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>`,
    'water-line-repair.html':            `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    'underground-fire-line-repair.html': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    'leak-detection.html':               `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    'water-extraction.html':             `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  };
  return icons[h] || '';
}

/* ── Init ────────────────────────────────────────────────── */
function initSite(active) {
  active = active || '';

  const nr = document.getElementById('nav-root');
  if (nr) nr.innerHTML = buildNav(active);

  const fr = document.getElementById('foot-root');
  if (fr) fr.innerHTML = buildFooter();

  // CTA banners
  document.querySelectorAll('[data-cta-banner]').forEach(el => {
    el.innerHTML = buildCTA();
  });

  // Sidebar forms
  document.querySelectorAll('[data-sidebar-form]').forEach(el => {
    el.innerHTML = buildSidebarForm(el.dataset.sidebarForm);
  });

  // Related services
  document.querySelectorAll('[data-related]').forEach(el => {
    el.innerHTML = buildRelated(el.dataset.related);
  });

  // Scroll effect on header
  const hdr = document.getElementById('site-header');
  if (hdr) {
    const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Mobile nav toggle
  const ham = document.getElementById('nav-ham');
  const mob = document.getElementById('mob-nav');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      const o = mob.classList.toggle('open');
      ham.classList.toggle('open', o);
    });
    document.addEventListener('click', e => {
      if (!ham.contains(e.target) && !mob.contains(e.target)) {
        mob.classList.remove('open');
        ham.classList.remove('open');
      }
    });
  }

  // Quote forms
  document.querySelectorAll('[data-qform]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const f = form.querySelector('[data-fields]');
      const s = form.querySelector('[data-succ]');
      if (f && s) { f.style.display = 'none'; s.style.display = 'block'; }
    });
  });
}

/* ── Service photo slider: autoplay (max 3s) + manual nav ────── */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.jf-slider').forEach(function (slider) {
    var slides = [].slice.call(slider.querySelectorAll('.jf-slide'));
    if (slides.length < 2) return;
    var dotsWrap = slider.querySelector('.jf-dots');
    var i = 0, timer = null;
    var delay = Math.min(parseInt(slider.getAttribute('data-autoplay'), 10) || 3000, 3000);
    slides.forEach(function (_, idx) {
      var d = document.createElement('button');
      d.type = 'button';
      d.className = 'jf-dot' + (idx === 0 ? ' is-active' : '');
      d.setAttribute('aria-label', 'Show image ' + (idx + 1));
      d.addEventListener('click', function () { go(idx); restart(); });
      dotsWrap.appendChild(d);
    });
    var dots = [].slice.call(dotsWrap.children);
    function go(n) {
      slides[i].classList.remove('is-active'); dots[i].classList.remove('is-active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('is-active'); dots[i].classList.add('is-active');
    }
    function start() { if (reduce) return; stop(); timer = setInterval(function () { go(i + 1); }, delay); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { start(); }
    slider.querySelector('.jf-next').addEventListener('click', function () { go(i + 1); restart(); });
    slider.querySelector('.jf-prev').addEventListener('click', function () { go(i - 1); restart(); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    start();
  });
})();
