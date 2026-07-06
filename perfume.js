const hamburger  = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const backdrop = document.getElementById('mobileMenuBackdrop');

if(hamburger && mobileMenu){
  hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded','true');
  });
  mobileClose.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  });
  mobileMenu.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
    });
  });
}
if(backdrop){
  backdrop.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    backdrop.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  });
}
backdrop.addEventListener('click', ()=>{
  mobileMenu.classList.remove('open');
  backdrop.classList.remove('open');
  hamburger.setAttribute('aria-expanded','false');
});


/* ─── PERFUME DATA ──────────────────────────── */
const PERFUMES = {
  'lumiere':{
    name:'Lumière', type:'Eau de Parfum', sizes:'50ml · 100ml', price:'₹4,200',
    desc:'A radiant floral heart warmed by soft musk and white cedar — luminous, effortless, made to be worn every single day.',
    notes:['Peony','White Musk','Cedar','Bergamot'],
    /* ── CHANGE THESE ──────────────────────────────────────────────────────────────
       bgColor   : gradient shown on card background (until you add a real bg image)
       bgImage   : path to your card background image  e.g. 'images/lumiere-bg.jpg'
       image     : path to product photo               e.g. 'images/lumiere.png'
       video     : path to product video               e.g. 'videos/lumiere.mp4'
       ─────────────────────────────────────────────────────────────────────────── */
    bgColor:'linear-gradient(160deg,#c8507060,#f5c4b3)',
    bgImage:'',   /* REPLACE: 'images/lumiere-bg.jpg' */
    image:'',     /* REPLACE: 'images/lumiere.png'    */
    video:'',     /* REPLACE: 'videos/lumiere.mp4'    */
    tags:['Floral','Fresh','Elegant'],
    wheelFamily:'floral',
    tagline:'"She walked in, and the room remembered her."',
    pyramid:{top:['Bergamot','Neroli','Pink Pepper'],heart:['Peony','Rose','Jasmine'],base:['White Musk','Cedar','Sandalwood']},
    pyramidNote:'Opens bright and citrusy, blooms into a lush floral heart, settles into a powdery skin-scent that lasts 8–10 hours.',
    details:[{icon:'⏱️',title:'Longevity',val:'8–10 Hours',hint:'Excellent all-day wear'},{icon:'💨',title:'Sillage',val:'Moderate',hint:'Noticeable but not overpowering'},{icon:'🌡️',title:'Best Season',val:'Spring · Summer',hint:'Ideal for warm days'},{icon:'👗',title:'Occasion',val:'Everyday · Work',hint:'Office-friendly & social'}],
    gender:['women','gift-her','unisex'],mood:['romantic','clean','fresh'],noteMatch:['floral','powdery'],
    whyText:'Your love for soft florals makes Lumière your perfect match.'
  },
  'velvet-oud':{
    name:'Velvet Oud', type:'Eau de Parfum', sizes:'50ml · 100ml', price:'₹5,800',
    desc:'Deep, smoky oud layered over warm saffron and black amber — announces your presence before you enter.',
    notes:['Oud','Saffron','Black Amber','Sandalwood'],
    bgColor:'linear-gradient(160deg,#6a3010,#c8a97a)',
    bgImage:'',image:'',video:'',
    tags:['Woody','Warm','Bold'],
    wheelFamily:'woody',
    tagline:'"He walked in, and the room went quiet."',
    pyramid:{top:['Saffron','Black Pepper','Cardamom'],heart:['Oud','Rose','Leather'],base:['Black Amber','Sandalwood','Patchouli']},
    pyramidNote:'Spicy and bold from the first spray, deepens into a rich oud-rose accord, dries to a warm ambery base.',
    details:[{icon:'⏱️',title:'Longevity',val:'12–14 Hours',hint:'Exceptional projection'},{icon:'💨',title:'Sillage',val:'Strong',hint:'Commands attention'},{icon:'🌡️',title:'Best Season',val:'Autumn · Winter',hint:'Made for cool evenings'},{icon:'👗',title:'Occasion',val:'Evening · Formal',hint:'Dinners, celebrations'}],
    gender:['men','gift-him','unisex'],mood:['bold','warm'],noteMatch:['woody','oriental','spicy'],
    whyText:'Bold, deep, and magnetic — Velvet Oud was built for someone who owns every room.'
  },
  'neroli-blanc':{
    name:'Néroli Blanc', type:'Eau de Parfum', sizes:'50ml · 100ml', price:'₹3,900',
    desc:'Sun-drenched neroli blossoms over a clean musk base — light as morning air, bright as a new beginning.',
    notes:['Neroli','Bergamot','White Musk','Green Tea'],
    bgColor:'linear-gradient(160deg,#d0e8d0,#cfc4b4)',
    bgImage:'',image:'',video:'',
    tags:['Fresh','Clean','Airy'],
    wheelFamily:'fresh',
    tagline:'"Fresh as the first hour of morning."',
    pyramid:{top:['Neroli','Bergamot','Lemon'],heart:['White Flowers','Green Tea','Lily'],base:['White Musk','Vetiver','Cedarwood']},
    pyramidNote:'A burst of sunlight at first spray, transitions to a delicate floral-tea accord, leaves a clean airy musk.',
    details:[{icon:'⏱️',title:'Longevity',val:'6–8 Hours',hint:'Light but persistent'},{icon:'💨',title:'Sillage',val:'Light',hint:'A gentle personal cloud'},{icon:'🌡️',title:'Best Season',val:'Spring · Summer',hint:'Sunshine in a bottle'},{icon:'👗',title:'Occasion',val:'Morning · Casual',hint:'Weekend, travel, everyday'}],
    gender:['women','gift-her','unisex'],mood:['fresh','clean'],noteMatch:['citrus','floral'],
    whyText:'Fresh and effortlessly clean — Néroli Blanc suits your love of light, airy fragrances.'
  },
  'ambre-rose':{
    name:'Ambre Rose', type:'Eau de Parfum', sizes:'50ml · 100ml', price:'₹4,600',
    desc:'Turkish rose absolute dissolved into warm amber and vanilla — the most romantic scent we have ever made.',
    notes:['Turkish Rose','Amber','Vanilla','Tonka Bean'],
    bgColor:'linear-gradient(160deg,#c87840,#d4a870)',
    bgImage:'',image:'',video:'',
    tags:['Oriental','Warm','Romantic'],
    wheelFamily:'oriental',
    tagline:'"Warm like a secret only lovers know."',
    pyramid:{top:['Rose','Geranium','Pink Pepper'],heart:['Amber','Benzoin','Iris'],base:['Vanilla','Tonka Bean','Musk']},
    pyramidNote:'Opens with a lush Turkish rose, transforms into a warm resinous amber heart, settles into a creamy vanilla base.',
    details:[{icon:'⏱️',title:'Longevity',val:'10–12 Hours',hint:'All day and into evening'},{icon:'💨',title:'Sillage',val:'Moderate–Strong',hint:'Warm and enveloping'},{icon:'🌡️',title:'Best Season',val:'Autumn · Spring',hint:'Transitional season fave'},{icon:'👗',title:'Occasion',val:'Date · Evening',hint:'Romantic dinners, celebrations'}],
    gender:['women','gift-her','unisex'],mood:['romantic','warm','bold'],noteMatch:['floral','oriental'],
    whyText:'Romantic and warm, Ambre Rose wraps you in the most beloved floral-oriental combination.'
  },
  'santal-doux':{
    name:'Santal Doux', type:'Eau de Parfum', sizes:'50ml · 100ml', price:'₹4,400',
    desc:'Creamy mysore sandalwood with a whisper of iris and soft violet — quiet confidence in a bottle.',
    notes:['Sandalwood','Iris','Violet','Soft Musk'],
    bgColor:'linear-gradient(160deg,#8878a8,#c8c0d8)',
    bgImage:'',image:'',video:'',
    tags:['Powdery','Woody','Elegant'],
    wheelFamily:'powdery',
    tagline:'"Noticed only by those who come close."',
    pyramid:{top:['Violet','Bergamot','Aldehydes'],heart:['Iris','Orris Root','Jasmine'],base:['Sandalwood','Soft Musk','Cashmeran']},
    pyramidNote:'A cool powdery opening of violet and iris, seamlessly to a creamy sandalwood-musk base that feels skin-like.',
    details:[{icon:'⏱️',title:'Longevity',val:'8–10 Hours',hint:'Stays close to skin'},{icon:'💨',title:'Sillage',val:'Soft',hint:'Discovered up close only'},{icon:'🌡️',title:'Best Season',val:'All Seasons',hint:'Versatile year-round'},{icon:'👗',title:'Occasion',val:'Work · Everyday',hint:'The sophisticated daily choice'}],
    gender:['women','men','unisex'],mood:['clean','warm','romantic'],noteMatch:['powdery','woody'],
    whyText:'Understated and refined — Santal Doux for those who want to be noticed without trying.'
  },
  'fleur-eternelle':{
    name:'Fleur Éternelle', type:'Eau de Parfum', sizes:'50ml · 100ml', price:'₹4,900',
    desc:'An eternal bouquet of white jasmine and gardenia, dried on warm musk — timeless, feminine, unforgettable.',
    notes:['Jasmine','Gardenia','Peach','White Musk'],
    bgColor:'linear-gradient(160deg,#c09878,#e8d4c0)',
    bgImage:'',image:'',video:'',
    tags:['Floral','Warm','Timeless'],
    wheelFamily:'floral',
    tagline:'"She left. The fragrance stayed."',
    pyramid:{top:['Peach','Mandarin','Green Notes'],heart:['Jasmine','Gardenia','Ylang Ylang'],base:['White Musk','Sandalwood','Amber']},
    pyramidNote:'Juicy peach and bright citrus open the veil, revealing an opulent white floral bouquet, grounded by warm musky base.',
    details:[{icon:'⏱️',title:'Longevity',val:'10–12 Hours',hint:'Travels with you all day'},{icon:'💨',title:'Sillage',val:'Moderate–Strong',hint:'Noticeable and remembered'},{icon:'🌡️',title:'Best Season',val:'Summer · Spring',hint:'Blooms in warm air'},{icon:'👗',title:'Occasion',val:'Special · Evening',hint:'Made for memorable moments'}],
    gender:['women','gift-her'],mood:['romantic','bold'],noteMatch:['floral','powdery','oriental'],
    whyText:'Rich white florals for someone who believes fragrance should be as memorable as you.'
  }
};

/* CARD_IDS is now read from HTML cards — see initCarousel below */


/* ── bestseller badge CSS (injected here so it always works) ── */
(function(){
  const st = document.createElement('style');
  st.textContent = `
    .bestseller-badge{
      position:absolute; top:-11px; left:50%; transform:translateX(-50%);
      background:#1a1014; color:#f0ebe4;
      font-size:9px; font-weight:500; letter-spacing:0.14em;
      text-transform:uppercase; padding:4px 14px;
      border-radius:20px; white-space:nowrap; z-index:5;
      border:1px solid rgba(200,160,96,0.4);
    }
  `;
  document.head.appendChild(st);
})();

/* ═══════════════════════════════════════════════
   3D CAROUSEL ENGINE
   Reads cards already written in HTML — no injection
═══════════════════════════════════════════════ */
const stage   = document.getElementById('carouselStage');
const dotsEl  = document.getElementById('cDots');
/* read CARD_IDS from the HTML cards order */
const CARD_IDS = Array.from(
  stage.querySelectorAll('.perf-card-3d:not([data-clone])')
).map(c => c.dataset.id);
const N = CARD_IDS.length;
let   current = 0;
let   isAnimating = false;
let   autoTimer = null;

/* ── init: read cards from HTML, build dots, attach events ── */
function initCarousel(){
  /* cards are already in HTML — just query them */
  const cards = Array.from(stage.querySelectorAll('.perf-card-3d'));

  /* build dots */
  cards.forEach((_,i)=>{
    const d = document.createElement('button');
    d.className = 'c-dot' + (i===0?' active':'');
    d.setAttribute('aria-label', `Go to perfume ${i+1}`);
    d.addEventListener('click',()=>goTo(i));
    dotsEl.appendChild(d);
  });

  layoutCards();

  /* arrow buttons */
  document.getElementById('cLeft').addEventListener('click', prev);
  document.getElementById('cRight').addEventListener('click', next);

  /* keyboard */
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft') prev();
    if(e.key==='ArrowRight') next();
  });

  /* touch swipe */
  let ts=0;
  stage.addEventListener('touchstart',e=>{ ts=e.touches[0].clientX; },{passive:true});
  stage.addEventListener('touchend',e=>{
    const dx=ts-e.changedTouches[0].clientX;
    if(Math.abs(dx)>40){ dx>0?next():prev(); }
  });

  /* mouse drag */
  let ms=0;
  stage.addEventListener('mousedown',e=>{ ms=e.clientX; });
  stage.addEventListener('mouseup',e=>{
    const dx=ms-e.clientX;
    if(Math.abs(dx)>40){ dx>0?next():prev(); }
  });

  /* click: center card opens expand, side card navigates */
  stage.addEventListener('click', e=>{
    const card = e.target.closest('.perf-card-3d');
    if(!card) return;
    const clickedIdx = CARD_IDS.indexOf(card.dataset.id);
    if(clickedIdx === current){
      if(card.classList.contains('active-open')){ closeExpand(); }
      else { openExpand(card.dataset.id); }
    } else {
      goTo(clickedIdx);
    }
  });
  stage.addEventListener('keydown',e=>{
    const card=e.target.closest('.perf-card-3d');
    if(!card) return;
    if(e.key==='Enter'||e.key===' '){ e.preventDefault(); card.click(); }
  });

  startAuto();
  stage.addEventListener('mouseenter', stopAuto);
  stage.addEventListener('mouseleave', startAuto);
}

/* ── 360° circular arc layout ──────────────────────────
   Cards sit on an invisible circle. The "current" card
   sits at angle 0 (front-center). Each step moves a
   card ANGLE_STEP degrees around the circle.
   We use pure CSS 3D:  rotateY → translateZ  which
   places each card on the circumference, then rotateY
   back so the card face stays toward the viewer.
─────────────────────────────────────────────────────── */
function layoutCards(){
  const cards   = Array.from(stage.querySelectorAll('.perf-card-3d'));
  const total   = cards.length;
  const RADIUS  = 440;          // circle radius in px — bigger = wider spread
  const ANGLE_STEP = 360 / total; // degrees between cards

  cards.forEach((card, i) => {
    // how many steps from current (shortest path around circle)
    let offset = i - current;
    // wrap to keep offset in range [-N/2, N/2] for shortest arc
    if(offset >  total/2) offset -= total;
    if(offset < -total/2) offset += total;

    const angleDeg = offset * ANGLE_STEP;   // degrees on circle
    const angleRad = angleDeg * Math.PI / 180;

    // position on circle: translate forward, rotate around Y
    // translateX for slight X offset at large angles, translateZ for depth
    const tx  = Math.sin(angleRad) * RADIUS;
    const tz  = Math.cos(angleRad) * RADIUS - RADIUS; // depth: 0 at front, negative further back

    // face the card toward the viewer (counter-rotate)
    const ry  = -angleDeg * 0.5;    // 0.5 = partial face-toward-viewer (feels natural)

    // visibility: cards behind the "equator" (abs angle > 90) fade out
    const absAngle = Math.abs(angleDeg);
    const visible  = absAngle <= 160;
    const opacity  = visible
      ? absAngle === 0 ? 1
      : absAngle < 60  ? 0.82 - absAngle/160
      : 0.35 - absAngle/480
      : 0;

    const scale = offset === 0 ? 1
      : Math.abs(offset) === 1 ? 0.84
      : Math.abs(offset) === 2 ? 0.70
      : 0.58;

    // z-index: front card on top
    const zIdx = visible ? Math.round(100 - Math.abs(offset) * 15) : -1;

    card.style.transform = `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`;
    card.style.opacity   = Math.max(0, opacity).toFixed(2);
    card.style.zIndex    = zIdx;
    card.style.filter    = offset === 0 ? 'none' : `brightness(${Math.max(0.5, 1 - Math.abs(offset)*0.14)})`;
    card.style.pointerEvents = visible ? 'auto' : 'none';
  });

  // update dots
  dotsEl.querySelectorAll('.c-dot').forEach((d,i)=>d.classList.toggle('active',i===current));
}

function goTo(idx, animate=true){
  if(isAnimating && animate) return;
  isAnimating = true;
  current = ((idx % N) + N) % N;
  layoutCards();
  setTimeout(()=>{ isAnimating=false; }, 600);
}

function next(){ goTo(current+1); }
function prev(){ goTo(current-1); }

/* ── expand media: show video or static image ── */
function populateExpandMedia(id){
  const p = PERFUMES[id];
  const vid = document.getElementById('expandVideo');
  const fallback = document.getElementById('expandFallback');
  const bottleShape = document.getElementById('expandBottleShape');

  /*
    ★ TO ADD A VIDEO for the expand panel:
      Set video:'img/lumiere.mp4' in PERFUMES data in JS
      OR hardcode: if(id==='lumiere'){ vid.src='img/lumiere.mp4'; }
  */
  if(p.video){
    vid.src=p.video; vid.load(); vid.play().catch(()=>{});
    vid.classList.add('active'); fallback.style.display='none';
  } else {
    vid.pause(); vid.src=''; vid.classList.remove('active');
    fallback.style.display='flex';
    bottleShape.style.background=p.bgColor;
  }
}

function startAuto(){ autoTimer = setInterval(next, 4000); }
function stopAuto(){  clearInterval(autoTimer); }

initCarousel();


/* ═══════════════════════════════════════════════
   EXPAND PANEL (Flipkart style)
═══════════════════════════════════════════════ */
const expandPanel  = document.getElementById('expand-panel');
const expandClose  = document.getElementById('expandClose');
 
let   activeId     = null;
let   scrollCloseOk= false; // kept for compatibility — logic now uses IntersectionObserver

function openExpand(id){
  const p = PERFUMES[id];
  if(!p) return;
  activeId = id;
  stopAuto();

  // mark card
  stage.querySelectorAll('.perf-card-3d').forEach(c=>{
    c.classList.toggle('active-open', c.dataset.id===id);
  });

  // slide 1
  document.getElementById('expEyebrow').textContent = p.type;
  document.getElementById('expName').textContent    = p.name;
  document.getElementById('expSubtype').textContent = p.sizes;
  document.getElementById('expDesc').textContent    = p.desc;
  document.getElementById('expPrice').textContent   = p.price;
  document.getElementById('expNotes').innerHTML     = p.notes.map(n=>`<span class="note-tag">${n}</span>`).join('');

  // slide 2
  document.getElementById('pyrTop').innerHTML   = p.pyramid.top.map(n=>`<span class="pyramid-tag">${n}</span>`).join('');
  document.getElementById('pyrHeart').innerHTML = p.pyramid.heart.map(n=>`<span class="pyramid-tag">${n}</span>`).join('');
  document.getElementById('pyrBase').innerHTML  = p.pyramid.base.map(n=>`<span class="pyramid-tag">${n}</span>`).join('');
  document.getElementById('pyrNote').textContent= p.pyramidNote;

  // slide 3
  document.getElementById('detailGrid').innerHTML = p.details.map(d=>`
    <div class="detail-item">
      <div class="detail-icon">${d.icon}</div>
      <p class="detail-title">${d.title}</p>
      <p class="detail-val">${d.val}</p>
      <p class="detail-hint">${d.hint}</p>
    </div>`).join('');

 
  // reset features scroll
  

  expandPanel.classList.add('open');
  setTimeout(()=>{
    featSlideH = document.querySelector('.feature-slide').offsetHeight;
    expandPanel.scrollIntoView({behavior:'smooth',block:'nearest'});
  }, 60);
}

function closeExpand(){
  expandPanel.classList.remove('open');
  stage.querySelectorAll('.perf-card-3d').forEach(c=>c.classList.remove('active-open'));
  activeId=null;
  startAuto();
}


expandClose.addEventListener('click', closeExpand);

const fragranceFinder = document.getElementById('fragrance-finder');
const wheelObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      // close only if panel is open AND wheel is >50% visible
      if(entry.isIntersecting && entry.intersectionRatio >= 0.50 && activeId !== null){
        closeExpand();
      }
    });
  },
  { threshold: 0.50 }
);
wheelObserver.observe(fragranceFinder);

/* ── Smart close: only when wheel section is 50%+ visible ──
   Scroll up/down freely to read the expand panel.
   Panel hides only when you've scrolled far enough to reach
   the wheel section (= you're done with this product).
─────────────────────────────────────────────────────────── */



/* ═══════════════════════════════════════════════
   fragrance finder
═══════════════════════════════════════════════ */


(function(){
  var track  = document.getElementById('ffTrack');
  var stage  = document.getElementById('ffStage');
  var dotsEl = document.getElementById('ffDots');
 
  /* ════════════════════════════════════════════════════════
     THE BUG: with only 6 cards, on wide screens the whole
     track is NARROWER than (or equal to) the visible stage.
     That makes  maxScroll = track.scrollWidth - stage.clientWidth
     zero or negative — so `pos >= maxScroll` is true on the
     very first frame, pos keeps resetting to 0, and nothing
     ever visibly moves.
 
     THE FIX: clone the entire card set once and append it
     to the same track. Now the track is always at least 2×
     the stage width, so maxScroll is always positive. We
     loop back to 0 only after scrolling past exactly ONE
     full set's width (halfDistance) — the clone seamlessly
     continues the pattern, so the loop is invisible.
  ════════════════════════════════════════════════════════ */
 
  var originalWraps = Array.from(track.querySelectorAll('.ff-card-wrap'));
  originalWraps.forEach(function(wrap){
    var clone = wrap.cloneNode(true);
     clone.classList.add('ff-clone');
    track.appendChild(clone);
  });
 
  /* re-query AFTER cloning so listeners attach to every card, original + clone */
  var cards = Array.from(track.querySelectorAll('.ff-card'));
  var wraps = originalWraps; /* dots only reflect the original 6, not the clones */
 
  /* ── continuous gentle drift ── */
  var pos = 0, speed = 0.35, raf = null, paused = false, dragging = false;
  var halfDistance = 0;
 
  function measure(){
    /* width of ONE full set = half of the doubled track */
    halfDistance = track.scrollWidth / 2;
  }
  measure();
  window.addEventListener('resize', measure);
 
  function loop(){
    if(!paused && !dragging){
      pos += speed;
      if(pos >= halfDistance) pos -= halfDistance;   /* seamless wrap, no visible jump */
      track.style.transform = 'translateX(-' + pos + 'px)';
    }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);
 
  /* pause drift on hover (desktop nicety) */
  stage.addEventListener('mouseenter', function(){ paused = true; });
  stage.addEventListener('mouseleave', function(){ if(!flippedWrap) paused = false; });
 
  /* ── arrows ── */
  document.getElementById('ffLeft').addEventListener('click', function(){
    pos -= 184;
    if(pos < 0) pos += halfDistance;
    track.style.transition = 'transform .4s ease';
    track.style.transform  = 'translateX(-' + pos + 'px)';
    setTimeout(function(){ track.style.transition=''; }, 420);
  });
  document.getElementById('ffRight').addEventListener('click', function(){
    pos += 184;
    if(pos >= halfDistance) pos -= halfDistance;
    track.style.transition = 'transform .4s ease';
    track.style.transform  = 'translateX(-' + pos + 'px)';
    setTimeout(function(){ track.style.transition=''; }, 420);
  });
 
  /* ── flip interaction: click pauses drift + flips, click again resumes ── */
  var flippedWrap = null;

 
  cards.forEach(function(card){
    card.addEventListener('click', function(){
      var wrap = card.closest('.ff-card-wrap');

      if(flippedWrap && flippedWrap !== wrap){
        flippedWrap.classList.remove('flipped');
      }
      wrap.classList.toggle('flipped');
      flippedWrap = wrap.classList.contains('flipped') ? wrap : null;
      paused = !!flippedWrap;   /* drift stops while any card is flipped */
    });
  });
 
  /* ── drag to scroll (also pauses drift while dragging) ── */
  var startX = 0, startPos = 0;
  stage.addEventListener('mousedown', function(e){ dragging = true; startX = e.clientX; startPos = pos; });
  window.addEventListener('mousemove', function(e){
    if(!dragging) return;
    var next = startPos - (e.clientX - startX);
    next = ((next % halfDistance) + halfDistance) % halfDistance;
    pos = next;
    track.style.transform = 'translateX(-' + pos + 'px)';
  });
  window.addEventListener('mouseup', function(){ dragging = false; });
 
  /* ── dots (one per ORIGINAL card only) ── */
  wraps.forEach(function(_, i){
    var d = document.createElement('button');
    d.className = 'ff-dot' + (i===0?' active':'');
    d.addEventListener('click', function(){
      pos = i * 184;
      track.style.transition = 'transform .4s ease';
      track.style.transform  = 'translateX(-' + pos + 'px)';
      setTimeout(function(){ track.style.transition=''; }, 420);
    });
    dotsEl.appendChild(d);
  });
})();
/* ═══════════════════════════════════════════════
   QUIZ
═══════════════════════════════════════════════ */
const quizModal    = document.getElementById('quiz-modal');
const progressFill = document.getElementById('quizProgress');
let   quizAnswers  = {};
 
function openQuiz(){ quizModal.classList.add('open'); document.body.style.overflow='hidden'; resetQuiz(); }
function closeQuiz(){ quizModal.classList.remove('open'); document.body.style.overflow=''; }
 
document.getElementById('openQuizBtn').addEventListener('click', openQuiz);
document.getElementById('closeQuizBtn').addEventListener('click', closeQuiz);
quizModal.addEventListener('click',e=>{ if(e.target===quizModal) closeQuiz(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&quizModal.classList.contains('open')) closeQuiz(); });
 
document.querySelectorAll('.quiz-opt').forEach(opt=>{
  opt.addEventListener('click',()=>{
    const step=opt.closest('.quiz-step');
    step.querySelectorAll('.quiz-opt').forEach(o=>o.classList.remove('selected'));
    opt.classList.add('selected');
    const nb=step.querySelector('.quiz-btn-next');
    if(nb) nb.disabled=false;
    quizAnswers[parseInt(step.dataset.step)]=opt.dataset.val;
  });
});
document.querySelectorAll('.quiz-btn-next').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(btn.dataset.next==='result'){ showResults(); return; }
    goToStep(parseInt(btn.dataset.next));
  });
});
document.querySelectorAll('.quiz-btn-back').forEach(btn=>{
  btn.addEventListener('click',()=>goToStep(parseInt(btn.dataset.prev)));
});
function goToStep(n){
  document.querySelectorAll('.quiz-step').forEach(s=>s.classList.remove('active'));
  const t=document.querySelector(`.quiz-step[data-step="${n}"]`);
  if(t){t.classList.add('active'); progressFill.style.width=(n/5*100)+'%';}
}
function getResults(ans){
  const scores={};
  Object.keys(PERFUMES).forEach(id=>scores[id]=0);
  Object.entries(PERFUMES).forEach(([id,p])=>{
    if(p.gender.includes(ans[1]))scores[id]+=3;
    if(p.mood.includes(ans[2]))scores[id]+=3;
    if(ans[3]==='evening'||ans[3]==='occasion'){if(['velvet-oud','ambre-rose','fleur-eternelle'].includes(id))scores[id]+=3;}
    else{if(['lumiere','neroli-blanc','santal-doux'].includes(id))scores[id]+=3;}
    if(p.noteMatch.includes(ans[4]))scores[id]+=3;   // was +4 — now matches others
    if(ans[5]==='garden'&&p.noteMatch.includes('floral'))scores[id]+=3;
    if(ans[5]==='owned'&&p.mood.includes('bold'))scores[id]+=3;
    if(ans[5]==='magnetic'&&p.mood.includes('warm'))scores[id]+=3;
    if(ans[5]==='sharp'&&p.mood.includes('clean'))scores[id]+=3;
  });
  return Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id])=>id);
}
function showResults(){
  const ids=getResults(quizAnswers);
  document.getElementById('resultCards').innerHTML=ids.map(id=>{
    const p=PERFUMES[id];
    return `<div class="result-card">
      <img src="${PERFUME_IMAGES[id]}" alt="${p.name}" style="width:70px;height:100px;object-fit:cover;border-radius:6px;margin:0 auto 12px;display:block;box-shadow:0 8px 20px rgba(0,0,0,0.4)">
      <p class="result-name">${p.name}</p>
      <p class="result-why">${p.whyText}</p>
      <a href="shop.html#${id}" class="result-link">Explore →</a>
    </div>`;
  }).join('');
  document.getElementById('resultSub').textContent='Based on your choices, these three scents were made for you.';
  document.querySelectorAll('.quiz-step').forEach(s=>s.classList.remove('active'));
  document.getElementById('quiz-result').classList.add('active');
  progressFill.style.width='100%';
}
function resetQuiz(){
  quizAnswers={};
  document.getElementById('quiz-result').classList.remove('active');
  document.querySelectorAll('.quiz-step').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.quiz-opt').forEach(o=>o.classList.remove('selected'));
  document.querySelectorAll('.quiz-btn-next').forEach(b=>b.disabled=true);
  document.querySelector('.quiz-step[data-step="1"]').classList.add('active');
  progressFill.style.width='20%';
}
document.getElementById('retakeBtn').addEventListener('click', resetQuiz);
 
window.closeQuiz=closeQuiz;
window.openFromResult=function(id){
  setTimeout(()=>{
    const idx=CARD_IDS.indexOf(id);
    goTo(idx);
    setTimeout(()=>openExpand(id),500);
  },300);
};

/* ═══════════════════════════════════════════════
   REVIEWS SLIDER
═══════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════
   REVIEWS SLIDER — dynamic cards-per-view, single row
═══════════════════════════════════════════════ */
(function(){
  const stage  = document.getElementById('reviewsStage');
  const track  = document.getElementById('reviewsTrack');
  const cards  = Array.from(track.querySelectorAll('.review-card'));
  const dotsEl = document.getElementById('reviewsDots');
  const leftBtn  = document.getElementById('reviewsLeft');
  const rightBtn = document.getElementById('reviewsRight');

  let cardsPerView = 5;
  let totalPages   = 1;
  let current      = 0;
  const gap = 18; // must match CSS .reviews-track gap

  function getCardsPerView(){
    const w = window.innerWidth;
    if(w <= 520)  return 2;
    if(w <= 768)  return 3;
    if(w <= 1024) return 4;
    if(w <= 1400) return 5;
    return 6;
  }

  function layout(){
    cardsPerView = getCardsPerView();
    totalPages   = Math.ceil(cards.length / cardsPerView);
    current      = Math.min(current, totalPages - 1);

    const stageWidth = stage.clientWidth;
    const cardWidth  = (stageWidth - gap * (cardsPerView - 1)) / cardsPerView;

    cards.forEach(card=>{
      card.style.width = cardWidth + 'px';
    });

    buildDots();
    goTo(current, false);
  }

  function buildDots(){
    dotsEl.innerHTML = '';
    for(let i=0; i<totalPages; i++){
      const d = document.createElement('button');
      d.className = 'reviews-dot' + (i===current ? ' active' : '');
      d.addEventListener('click', ()=> goTo(i));
      dotsEl.appendChild(d);
    }
  }

  function goTo(idx, animate=true){
    current = ((idx % totalPages) + totalPages) % totalPages;
    const cardWidth = cards[0].offsetWidth;
    const offset = current * cardsPerView * (cardWidth + gap);

    track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none';
    track.style.transform  = `translateX(-${offset}px)`;

    dotsEl.querySelectorAll('.reviews-dot').forEach((d,i)=> d.classList.toggle('active', i===current));
  }

  leftBtn.addEventListener('click',  ()=> goTo(current - 1));
  rightBtn.addEventListener('click', ()=> goTo(current + 1));

  window.addEventListener('resize', layout);
  layout(); // initial run
})();


(function(){
  const searchBtns = document.querySelectorAll('[aria-label="Search"]');
  let box = document.createElement('div');
  box.style.cssText = 'display:none;position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#0f2436;border:1px solid #c8a060;border-radius:12px;padding:16px;z-index:2000;width:min(400px,90vw)';
  box.innerHTML = `<input id="searchInput" placeholder="Search perfumes, notes..." style="width:100%;padding:10px;background:#0a1420;border:1px solid rgba(255,255,255,0.15);color:#f0ebe4;border-radius:6px"><div id="searchResults" style="margin-top:10px;max-height:300px;overflow:auto"></div>`;
  document.body.appendChild(box);

  searchBtns.forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      box.style.display = box.style.display==='none' ? 'block' : 'none';
      document.getElementById('searchInput').focus();
    });
  });

  document.addEventListener('input', e=>{
    if(e.target.id!=='searchInput') return;
    const q = e.target.value.toLowerCase();
    const results = Object.entries(PERFUMES).filter(([id,p])=>
      p.name.toLowerCase().includes(q) ||
      p.notes.some(n=>n.toLowerCase().includes(q)) ||
      p.tags.some(t=>t.toLowerCase().includes(q))
    );
    document.getElementById('searchResults').innerHTML = results.map(([id,p])=>
      `<div style="padding:8px;cursor:pointer;color:#f0ebe4;border-bottom:1px solid rgba(255,255,255,0.1)" onclick="window.location.href='index.html#collection'; setTimeout(()=>openFromResult('${id}'),400)">${p.name} — ${p.notes.join(', ')}</div>`
    ).join('') || '<p style="color:rgba(255,255,255,0.5);font-size:12px">No matches</p>';
  });
})();

window.cartItems = [];
function addToCart(id, name){
  window.cartItems.push({id, name});
  document.querySelectorAll('[aria-label="Cart"]').forEach(c=> c.innerHTML = c.innerHTML.replace(/Cart \(\d+\)/, `Cart (${window.cartItems.length})`));
}
document.querySelectorAll('[aria-label="Cart"]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    alert(window.cartItems.length ? 'In cart:\n' + window.cartItems.map(i=>i.name).join('\n') + '\n\nProceed to buy (checkout page not yet built).' : 'Cart is empty.');
  });
});

/* ─── IMAGE MAP — mirrors shop.html card images exactly ─── */
const PERFUME_IMAGES = {
  'velvet-oud':      'img2/1.jpg',
  'neroli-blanc':    'img2/2.jpg',
  'lumiere':         'img2/3.jpg',
  'ambre-rose':      'img2/4.jpg',
  'santal-doux':     'img2/5.jpg',
  'fleur-eternelle': 'img2/6.jpg'
};











 
