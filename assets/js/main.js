/* FORGE: dependency-free interactions, intentionally frontend-only. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const page = location.pathname.split('/').pop() || 'index.html';
  const navItems = [
    ['index.html', 'Home'], ['about.html', 'About'], ['programs.html', 'Programs'],
    ['coaches.html', 'Coaches'], ['membership.html', 'Membership'], ['contact.html', 'Contact']
  ];
  const navLinks = navItems.map(([href, label]) => `<a href="${href}" ${page === href ? 'class="active" aria-current="page"' : ''}>${label}</a>`).join('');
  const header = $('#site-header');
  if (header) header.innerHTML = `
    <div class="announcement"><span>YOUR NEXT LEVEL STARTS HERE</span><strong>3-DAY TRIAL PASS — ON US</strong><a href="#" data-open-modal="Free 3-day pass">CLAIM YOUR PASS <span aria-hidden="true">↗</span></a></div>
    <header class="site-header" id="main-header"><div class="container nav-inner">
      <a class="brand" href="index.html" aria-label="FORGE Gym home">FORGE<span aria-hidden="true"></span></a>
      <nav class="main-nav" aria-label="Main navigation">${navLinks}</nav>
      <div class="nav-right"><a class="btn" href="membership.html">Join the movement <span class="arrow-inline" aria-hidden="true">→</span></a>
      <button class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></div>
    </div></header>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">${navLinks}<a href="membership.html" class="btn">Become a member ↗</a></nav>`;
  const footer = $('#site-footer');
  if (footer) footer.innerHTML = `<footer class="footer"><div class="container">
    <div class="footer-top">
      <div><a href="index.html" class="brand" aria-label="FORGE home">FORGE<span></span></a><p class="footer-intro">A better kind of strong. Good people, great coaching, and a space that makes you want to show up. Your next chapter starts here.</p><a class="link-arrow" href="contact.html">Come say hello <span>↗</span></a></div>
      <div class="footer-col"><h4>Explore</h4><a href="about.html">Our story</a><a href="programs.html">Training programs</a><a href="coaches.html">Our coaches</a><a href="membership.html">Membership</a></div>
      <div class="footer-col"><h4>Get in touch</h4><a href="contact.html">Visit the studio</a><a href="mailto:hello@forgegym.example">hello@forgegym.example</a><a href="tel:+910000000000">+91 00000 00000</a><a href="contact.html">Send a message ↗</a></div>
      <div class="footer-col"><h4>Studio hours</h4><p>Monday – Friday<br>5:30 AM – 10:00 PM</p><p>Saturday – Sunday<br>7:00 AM – 8:00 PM</p><p>Demo website • Details are illustrative</p></div>
    </div>
    <div class="footer-bottom"><p>© <span id="copyright-year"></span> FORGE Athletics. All rights reserved. <span class="text-muted">Fictional fitness brand for demonstration.</span></p>
    <div class="footer-credit"><span class="credit-star">✳</span><span>Thoughtfully designed &amp; developed by</span><strong>XYZ COMPANY ↗</strong></div></div>
    <div class="footer-giant" aria-hidden="true">FORGE.</div></div></footer>`;
  const year = $('#copyright-year');
  if (year) year.textContent = new Date().getFullYear();

  // Smooth mobile menu, with accessible state and ESC dismissal.
  const menuBtn = $('#menu-toggle'), mobile = $('#mobile-menu');
  function closeMenu() {
    if (!menuBtn || !mobile) return;
    menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu');
    mobile.classList.remove('open'); document.body.classList.remove('nav-open');
  }
  menuBtn?.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', String(open));menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobile.classList.toggle('open', open);document.body.classList.toggle('nav-open', open);
  });
  $$('a', mobile || document.createElement('div')).forEach(el => el.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {if (innerWidth > 830) closeMenu();});
  const topButton = $('#to-top'), mainHeader = $('#main-header');
  function handleScroll() {
    mainHeader?.classList.toggle('scrolled', scrollY > 20);
    topButton?.classList.toggle('visible', scrollY > 650);
    if (mainHeader) mainHeader.style.setProperty('--scroll-progress', `${Math.max(0,Math.min(100,(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight))*100))}%`);
  }
  addEventListener('scroll', handleScroll, {passive:true}); handleScroll();
  topButton?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // IntersectionObserver reveals, respectful of motion preferences.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible');observer.unobserve(e.target); } });
    }, {threshold:0.11,rootMargin:'0px 0px -25px 0px'});
    $$('.reveal').forEach(el => observer.observe(el));
  } else $$('.reveal').forEach(el => el.classList.add('visible'));

  // Weekly timetable: schedules are sample demo data, not live bookings.
  const weekly = {
    Mon: [['06:00 AM','Strength Lab','All levels','Coach Arjun'],['07:30 AM','Engine Room','Intermediate','Coach Maya'],['06:00 PM','HIIT / 45','All levels','Coach Dev'],['07:30 PM','Mobility Flow','All levels','Coach Maya']],
    Tue: [['06:30 AM','HIIT / 45','All levels','Coach Dev'],['08:00 AM','Strength Lab','All levels','Coach Arjun'],['05:30 PM','Core & Control','All levels','Coach Maya'],['07:00 PM','Engine Room','Intermediate','Coach Dev']],
    Wed: [['06:00 AM','Engine Room','Intermediate','Coach Dev'],['07:30 AM','Mobility Flow','All levels','Coach Maya'],['06:00 PM','Strength Lab','All levels','Coach Arjun'],['07:30 PM','HIIT / 45','All levels','Coach Dev']],
    Thu: [['06:30 AM','Strength Lab','All levels','Coach Arjun'],['08:00 AM','Core & Control','All levels','Coach Maya'],['05:30 PM','Engine Room','Intermediate','Coach Dev'],['07:00 PM','Mobility Flow','All levels','Coach Maya']],
    Fri: [['06:00 AM','HIIT / 45','All levels','Coach Dev'],['07:30 AM','Strength Lab','All levels','Coach Arjun'],['06:00 PM','Engine Room','Intermediate','Coach Dev'],['07:30 PM','Recovery Flow','All levels','Coach Maya']],
    Sat: [['07:00 AM','Weekend Warrior','All levels','Coach Arjun'],['08:30 AM','HIIT / 45','All levels','Coach Dev'],['10:00 AM','Mobility Flow','All levels','Coach Maya']],
    Sun: [['08:00 AM','Reset & Recover','All levels','Coach Maya'],['09:30 AM','Community Circuit','All levels','Coach Dev']]
  };
  const scheduleList = $('#schedule-list');
  function renderSchedule(day) {
    if (!scheduleList) return;
    scheduleList.innerHTML = weekly[day].map(([time, title, level, coach]) => `
      <div class="schedule-row"><div class="schedule-time">${time}</div><div class="schedule-name">${title}</div><div class="tag">${level} · ${coach}</div><button class="book-link" type="button" data-open-modal="${title} (${day}, ${time})">Book a spot <span>↗</span></button></div>`).join('');
    $$('.day').forEach(b => {const active = b.dataset.day === day;b.classList.toggle('active',active);b.setAttribute('aria-pressed', String(active));});
  }
  $$('.day').forEach(b => b.addEventListener('click', () => renderSchedule(b.dataset.day)));
  if (scheduleList) renderSchedule('Mon');

  // Pricing toggle: annual is 15% off 12 monthly payments, billed annually.
  const yearly = $('#price-switch');
  function updatePricing(annual) {
    $$('.price-card[data-monthly]').forEach(card => {
      const perMonth = Number(card.dataset.monthly), effective = annual ? Math.round(perMonth * 0.85) : perMonth;
      const priceElement = $('.price-value', card), sub = $('.price-sub', card);
      if (priceElement) priceElement.textContent = effective.toLocaleString('en-IN');
      if (sub) sub.textContent = annual ? `Billed ₹${(effective * 12).toLocaleString('en-IN')} annually · save 15%` : 'Billed monthly · cancel as per plan terms';
    });
    yearly?.setAttribute('aria-checked', String(annual));
  }
  yearly?.addEventListener('click', () => updatePricing(yearly.getAttribute('aria-checked') !== 'true'));
  if (yearly) updatePricing(false);

  // Testimonial cycling.
  const quotes = [
    {quote:'I used to think I wasn’t a gym person. FORGE completely changed that. I’ve never felt stronger, or more at home.', person:'Riya Mehta', label:'Member since 2024'},
    {quote:'The coaches actually know your name, your goals, and when to push you. It feels personal in the best possible way.', person:'Aman Patel', label:'Strength Lab member'},
    {quote:'I came for the workouts. I stayed for the people. This place makes showing up the best part of my day.', person:'Nisha Shah', label:'Founding member'}
  ];
  let quoteIndex = 0;
  function renderQuote(){ const quote = quotes[quoteIndex]; if ($('#quote-text')) $('#quote-text').textContent = `“${quote.quote}”`; if ($('#quote-name')) $('#quote-name').textContent = quote.person; if ($('#quote-label')) $('#quote-label').textContent = quote.label; if ($('#quote-count')) $('#quote-count').textContent = `0${quoteIndex+1} / 0${quotes.length}`; }
  $('#quote-prev')?.addEventListener('click', () => {quoteIndex=(quoteIndex-1+quotes.length)%quotes.length;renderQuote();});
  $('#quote-next')?.addEventListener('click', () => {quoteIndex=(quoteIndex+1)%quotes.length;renderQuote();});
  renderQuote();

  // FAQ expand/collapse; supports multiple open items.
  $$('.faq-trigger').forEach(button => button.addEventListener('click', () => {
    const item = button.closest('.faq-item'); const open = !item.classList.contains('open');
    item.classList.toggle('open', open);button.setAttribute('aria-expanded', String(open));
    const answer = $('.faq-answer', item);if (answer) answer.style.maxHeight = open ? `${answer.scrollHeight}px` : '0px';
  }));

  // Every lead action is a working frontend-only demo, clearly labelled.
  const modalHost = document.createElement('div');modalHost.className='modal-backdrop'; modalHost.id='lead-modal';
  modalHost.setAttribute('role','presentation');modalHost.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button type="button" class="modal-close" id="modal-close" aria-label="Close form">×</button>
    <span class="eyebrow on-light">YOUR NEXT CHAPTER</span><h2 class="display" id="modal-title">LET’S GET<br>STARTED.</h2>
    <p class="lead" style="font-size:13px;margin:11px 0 18px">Tell us a little about yourself. This demo will show a confirmation without sending your details anywhere.</p>
    <form id="lead-form"><input type="hidden" name="interest" id="modal-interest"><div class="field"><label for="modal-name">Your name</label><input id="modal-name" name="name" autocomplete="name" placeholder="Alex Morgan" required minlength="2"></div>
    <div class="field"><label for="modal-email">Email address</label><input id="modal-email" name="email" type="email" autocomplete="email" placeholder="alex@example.com" required></div>
    <div class="field"><label for="modal-phone">Phone number (optional)</label><input id="modal-phone" name="phone" type="tel" autocomplete="tel" placeholder="+91 98765 43210"></div>
    <button class="btn" type="submit">Send demo enquiry <span class="arrow-inline">→</span></button><p class="form-note">Demo mode: no information is transmitted or stored.</p></form></div>`;
  document.body.appendChild(modalHost);
  let previousFocus = null;
  function closeModal(){modalHost.classList.remove('open');document.body.classList.remove('modal-open');previousFocus?.focus?.();}
  function openModal(interest) {
    closeMenu();previousFocus=document.activeElement;
    $('#modal-interest').value=interest||'General enquiry';
    $('#modal-title').innerHTML = interest && interest.toLowerCase().includes('pass') ? 'YOUR PASS.<br>YOUR MOVE.' : 'LET’S GET<br>STARTED.';
    modalHost.classList.add('open');document.body.classList.add('modal-open');
    setTimeout(() => $('#modal-name')?.focus(), 70);
  }
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-open-modal]');if (!target) return;
    event.preventDefault();openModal(target.dataset.openModal || target.textContent.trim());
  });
  $('#modal-close').addEventListener('click', closeModal);
  modalHost.addEventListener('click', e => {if (e.target === modalHost) closeModal();});
  document.addEventListener('keydown',e => {if (e.key==='Escape'){closeModal();closeMenu();}if (e.key==='Tab'&&modalHost.classList.contains('open')){
    const focusable=$$('button,input,select,textarea,a[href]',modalHost).filter(el=>!el.disabled&&el.offsetParent!==null);
    if(!focusable.length)return;
    if(e.shiftKey&&document.activeElement===focusable[0]){e.preventDefault();focusable.at(-1).focus();}
    else if(!e.shiftKey&&document.activeElement===focusable.at(-1)){e.preventDefault();focusable[0].focus();}
  }});
  const toast = document.createElement('div');toast.id='demo-toast';toast.className='toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');document.body.appendChild(toast);
  let toastTimer;
  function showToast(){toast.innerHTML='<strong>✓ Demo enquiry received.</strong> No data was sent. Connect a backend or form service before launching.';toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),5200);}
  $('#lead-form').addEventListener('submit', e => {e.preventDefault();if(!e.target.reportValidity())return;e.target.reset();closeModal();showToast();});
  $('#contact-form')?.addEventListener('submit', e => {e.preventDefault();if(!e.target.reportValidity())return;e.target.reset();showToast();});
})();
