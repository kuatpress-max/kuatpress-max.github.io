/* =========================================================
   Johan Ku 古又文 — 互動
   1. 頁首捲動狀態
   2. 手機目錄
   3. 左側毛線軌道（進度 + 目前章節）
   4. 捲動淡入
   5. 針目 V 字線條（記憶點，依容器尺寸生成）
   ========================================================= */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. 頁首捲動狀態 ─────────────────────────────── */
  var hdr = document.getElementById('hdr');

  /* ── 2. 手機目錄 ─────────────────────────────────── */
  var menuBtn = document.getElementById('menuBtn');
  var menuPanel = document.getElementById('menuPanel');

  function closeMenu() {
    if (!menuBtn || !menuPanel) return;
    menuPanel.hidden = true;
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn && menuPanel) {
    menuBtn.addEventListener('click', function () {
      var open = menuPanel.hidden;
      menuPanel.hidden = !open;
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menuPanel.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 980) closeMenu();
    });
  }

  /* ── 2-0. 剪報：點縮圖看大圖 ─────────────────────── */
  var clipBtns = document.querySelectorAll('.clip-btn');

  if (clipBtns.length) {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.hidden = true;
    box.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="關閉大圖">×</button><img alt="">';
    document.body.appendChild(box);

    var boxImg = box.querySelector('img');
    var lastFocus = null;

    function closeBox() {
      box.hidden = true;
      boxImg.removeAttribute('src');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }

    Array.prototype.forEach.call(clipBtns, function (btn) {
      var thumb = btn.querySelector('img');
      btn.setAttribute('aria-label', '放大檢視：' + (thumb ? thumb.alt : '剪報'));

      btn.addEventListener('click', function () {
        lastFocus = btn;
        boxImg.src = btn.dataset.full;
        boxImg.alt = thumb ? thumb.alt : '';
        box.hidden = false;
        document.body.style.overflow = 'hidden';
        box.querySelector('.lightbox-close').focus();
      });
    });

    box.addEventListener('click', function (e) {
      // 點大圖以外的地方就關掉
      if (e.target !== boxImg) closeBox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) closeBox();
    });
  }

  /* ── 2-1. 熱門影片：點封面就地換成播放器 ─────────── */
  /* 一開始只載入封面圖，點下去才把 YouTube 播放器放進來，頁面才不會一開始就被拖慢。 */
  Array.prototype.forEach.call(document.querySelectorAll('.vid'), function (btn) {
    var id = btn.dataset.yt;
    var title = (btn.querySelector('.vid-title') || {}).textContent || '影片';
    if (!id) return;

    btn.setAttribute('aria-label', '播放影片：' + title);

    btn.addEventListener('click', function () {
      if (btn.dataset.playing) return;
      btn.dataset.playing = '1';

      var media = btn.querySelector('.vid-media');
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      frame.title = title;
      frame.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; web-share';
      frame.allowFullscreen = true;

      media.innerHTML = '';
      media.appendChild(frame);
    });
  });

  /* ── 3. 軌道進度與目前章節 ───────────────────────── */
  var railFill = document.getElementById('railFill');
  var dots = Array.prototype.slice.call(document.querySelectorAll('.rail-dot'));
  var sections = dots
    .map(function (d) { return document.getElementById(d.dataset.sec); })
    .filter(Boolean);

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (hdr) hdr.classList.toggle('stuck', y > 24);

    if (railFill) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      railFill.style.setProperty('--p', max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    }

    if (sections.length) {
      var line = y + window.innerHeight * 0.38;
      var active = 0;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= line) active = i;
      }
      dots.forEach(function (d, i) { d.classList.toggle('on', i === active); });
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });

  /* ── 4. 捲動淡入 ─────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  }

  /* ── 5. 針目 V 字線條 ────────────────────────────── */
  /* 一件針織品是一條連續的線；這裡把下針的 V 字重複成一片織面。 */
  var SVG_NS = 'http://www.w3.org/2000/svg';

  var KNIT = {
    hero:  { w: 30, h: 19 },
    plate: { w: 20, h: 13 }
  };

  function drawKnit(box) {
    var spec = KNIT[box.dataset.knit] || KNIT.plate;
    var rect = box.getBoundingClientRect();
    var W = Math.ceil(rect.width);
    var H = Math.ceil(rect.height);
    if (W < 8 || H < 8) return;

    var cols = Math.ceil(W / spec.w) + 1;
    var rows = Math.ceil(H / spec.h) + 1;
    var d = '';

    for (var r = 0; r < rows; r++) {
      var top = r * spec.h;
      for (var c = 0; c < cols; c++) {
        var x = c * spec.w;
        // 一個 V：左上 → 底部中心 → 右上，圓角轉折讓它像毛線而不是折線
        d += 'M' + x + ' ' + top +
             'Q' + (x + spec.w / 2) + ' ' + (top + spec.h * 1.15) +
             ' ' + (x + spec.w) + ' ' + top + ' ';
      }
    }

    var svg = box.querySelector('svg');
    if (!svg) {
      svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('aria-hidden', 'true');
      svg.appendChild(document.createElementNS(SVG_NS, 'path'));
      box.appendChild(svg);
    }
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.querySelector('path').setAttribute('d', d.trim());
  }

  var knits = Array.prototype.slice.call(document.querySelectorAll('.knit'));

  function drawAllKnits() { knits.forEach(drawKnit); }

  drawAllKnits();

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawAllKnits, 160);
  });

  // 字體載入後尺寸可能改變，重畫一次
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(drawAllKnits);
  }

  onScroll();
})();
