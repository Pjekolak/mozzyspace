/* =============================================
   CSS — Discord & Minecraft Portfolio
   ============================================= */
:root {
  --bg:          #121212;
  --bg-2:        #181a1e;
  --bg-3:        #1e2025;
  --surface-1:   #222528;
  --surface-2:   #2a2d34;
  --surface-3:   #32363f;
  --border:      rgba(255,255,255,0.07);
  --border-md:   rgba(255,255,255,0.11);
  --text-1:      #e8e6e1;
  --text-2:      #a8a5a0;
  --text-3:      #6a6762;
  --text-4:      #424040;
  --accent:      #c8c4bc;
  --discord:     #5865F2;
  --discord-dim: rgba(88,101,242,0.15);
  --discord-glow:rgba(88,101,242,0.25);
  --mc:          #5ba85a;
  --mc-dim:      rgba(91,168,90,0.14);
  --mc-glow:     rgba(91,168,90,0.22);
  --font-sans:   'Inter', system-ui, sans-serif;
  --font-mono:   'JetBrains Mono', 'Fira Code', monospace;
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --section-pad: clamp(64px, 8vw, 112px);
  --container:   1100px;
  --radius:      8px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--bg); color: var(--text-1);
  font-family: var(--font-sans); font-weight: 400; line-height: 1.65;
  overflow-x: hidden; cursor: none; -webkit-font-smoothing: antialiased;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { cursor: none; border: none; background: none; font-family: inherit; }
input, textarea, select { font-family: var(--font-sans); }
.mono     { font-family: var(--font-mono); font-size: .88em; }
.mono-dim { font-family: var(--font-mono); color: var(--text-1); }


body {
  --sb-track-color: #121212;
  --sb-thumb-color: #e8e6e1;
  --sb-size: 6px;
}

body::-webkit-scrollbar {
  width: var(--sb-size)
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 1px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 1px;
  
}

@supports not selector(::-webkit-scrollbar) {
  body {
    scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}

/* CURSOR */
.cursor, .cursor-follower {
  position: fixed; border-radius: 50%; pointer-events: none; z-index: 9999;
  transform: translate(-50%,-50%);
}
.cursor { width: 7px; height: 7px; background: var(--text-1); }
.cursor-follower {
  width: 34px; height: 34px; border: 1px solid rgba(200,196,188,.28);
  transition: width .35s var(--ease-out), height .35s var(--ease-out);
}
.cursor-follower.expand { width: 50px; height: 50px; border-color: rgba(200,196,188,.15); }
@media (hover:none) {
  .cursor, .cursor-follower { display: none; }
  body, button { cursor: auto; } a, button { cursor: pointer; }
}

/* LAYOUT */
.container { max-width: var(--container); margin: 0 auto; padding: 0 clamp(16px,5vw,52px); }
.section { padding: var(--section-pad) 0; border-top: 1px solid var(--border); }
.section-label {
  display: flex; align-items: center; gap: 10px;
  font-size: .72rem; letter-spacing: .14em; text-transform: uppercase;
  color: var(--text-3); margin-bottom: 32px;
}
.section-label .mono { color: var(--text-3); letter-spacing: 0; }
.section-title {
  font-size: clamp(1.9rem, 4.5vw, 3.2rem); font-weight: 700;
  line-height: 1.08; letter-spacing: -.03em; color: var(--text-1); margin-bottom: 48px;
}

/* REVEAL */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s var(--ease-out), transform .7s var(--ease-out); }
.reveal.visible { opacity: 1; transform: none; }

/* =============================================
   BUTTONS — text ALWAYS visible
   ============================================= */
.btn {
  display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px;
  font-family: var(--font-sans); font-size: .82rem; font-weight: 500;
  letter-spacing: .03em; border-radius: var(--radius); white-space: nowrap;
  transition: background-color .22s, border-color .22s, color .22s, box-shadow .22s, transform .2s;
}
.btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .22s var(--ease-out); }
.btn:hover svg { transform: translateX(3px); }
.btn--lg { padding: 13px 28px; font-size: .86rem; }
.btn--full { width: 100%; justify-content: center; }
.btn--sm { padding: 8px 16px; font-size: .76rem; }

.btn--primary { background: var(--text-1); color: var(--bg); border: 1px solid var(--text-1); }
.btn--primary:hover { background: #fff; color: var(--bg); border-color: #fff; box-shadow: 0 0 24px rgba(232,230,225,.18); transform: translateY(-1px); }

.btn--ghost { background: transparent; color: var(--text-2); border: 1px solid var(--border-md); }
.btn--ghost:hover { background: var(--surface-1); color: var(--text-1); border-color: var(--surface-3); transform: translateY(-1px); }

.btn--outline { background: transparent; color: var(--text-2); border: 1px solid var(--border-md); }
.btn--outline:hover { background: var(--surface-1); color: var(--text-1); border-color: var(--surface-3); transform: translateY(-1px); }

.btn--discord { background: var(--discord); color: #fff; border: 1px solid var(--discord); }
.btn--discord:hover { background: #6872f5; color: #fff; border-color: #6872f5; box-shadow: 0 0 28px var(--discord-glow); transform: translateY(-1px); }

.btn--discord-sm {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 16px; font-size: .76rem; font-weight: 500;
  background: var(--discord); color: #fff; border: 1px solid var(--discord); border-radius: var(--radius);
  transition: background-color .22s, box-shadow .22s, transform .2s;
}
.btn--discord-sm:hover { background: #6872f5; box-shadow: 0 0 18px var(--discord-glow); transform: translateY(-1px); }

.btn--mc-sm {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 16px; font-size: .76rem; font-weight: 500;
  background: var(--mc); color: #fff; border: 1px solid var(--mc); border-radius: var(--radius);
  transition: background-color .22s, box-shadow .22s, transform .2s;
}
.btn--mc-sm:hover { background: #6abf69; box-shadow: 0 0 16px var(--mc-glow); transform: translateY(-1px); }

/* =============================================
   NAV
   ============================================= */
.nav {
  position: fixed; inset: 0 0 auto; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px clamp(16px,5vw,52px);
  border-bottom: 1px solid transparent;
  transition: padding .4s var(--ease-out), background .4s, backdrop-filter .4s, border-color .4s;
}
.nav.scrolled {
  padding-top: 12px; padding-bottom: 12px;
  background: rgba(18,18,18,.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-bottom-color: var(--border);
}
.nav__logo { font-size: 1rem; font-weight: 700; color: var(--text-3); transition: opacity .2s; }
.nav__logo:hover { opacity: .7; }
.nav__links { display: flex; gap: 32px; }
.nav__links a {
  font-size: .8rem; font-weight: 400; letter-spacing: .07em;
  color: var(--text-3); transition: color .22s; position: relative;
}
.nav__links a::after {
  content: ''; position: absolute; bottom: -3px; left: 0;
  width: 0; height: 1px; background: var(--text-1); transition: width .28s var(--ease-out);
}
.nav__links a:hover { color: var(--text-1); }
.nav__links a:hover::after { width: 100%; }
.nav__cta--discord {
  display: inline-flex; align-items: center; gap: 7px; padding: 8px 18px;
  background: var(--discord); color: #fff; border: 1px solid var(--discord); border-radius: var(--radius);
  font-size: .78rem; font-weight: 500; letter-spacing: .03em;
  transition: background-color .22s, box-shadow .22s, transform .2s;
}
.nav__cta--discord:hover { background: #6872f5; box-shadow: 0 0 20px var(--discord-glow); transform: translateY(-1px); }
.nav__cta-icon { width: 15px; height: 15px; }
.nav__toggle { display: none; flex-direction: column; gap: 5px; padding: 6px; }
.nav__toggle span { display: block; width: 22px; height: 1.5px; background: var(--text-2); transition: transform .3s, opacity .3s, width .3s; }
.nav__toggle.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav__toggle.open span:nth-child(2) { opacity: 0; width: 0; }
.nav__toggle.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* MOBILE MENU */
.mobile-menu {
  position: fixed; inset: 0; z-index: 199; background: var(--bg);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px;
  opacity: 0; pointer-events: none; transition: opacity .35s var(--ease-out);
}
.mobile-menu.open { opacity: 1; pointer-events: all; }
.mobile-menu ul { display: flex; flex-direction: column; gap: 20px; text-align: center; }
.mobile-link { font-size: clamp(1.5rem,6vw,2.2rem); font-weight: 700; color: var(--text-3); letter-spacing: -.02em; transition: color .2s; }
.mobile-link:hover { color: var(--text-1); }
.mobile-cta {
  display: inline-flex; align-items: center; gap: 10px; padding: 13px 32px;
  background: var(--discord); color: #fff; border-radius: var(--radius);
  font-size: 1rem; font-weight: 600; transition: background-color .22s;
}
.mobile-cta:hover { background: #6872f5; }

/* =============================================
   HERO
   ============================================= */
.hero {
  min-height: 100svh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; padding: 110px clamp(16px,5vw,52px) 80px;
}
.hero__bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.hero__grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%);
}
.hero__orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
.hero__orb--1 {
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(88,101,242,.14) 0%, transparent 70%);
  top: -120px; right: -80px; animation: orbFloat1 14s ease-in-out infinite;
}
.hero__orb--2 {
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(91,168,90,.10) 0%, transparent 70%);
  bottom: 40px; left: -80px; animation: orbFloat2 18s ease-in-out infinite;
}
@keyframes orbFloat1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,24px)} }
@keyframes orbFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(24px,-16px)} }

.hero__content { position: relative; z-index: 1; max-width: 760px; text-align: center; display: flex; flex-direction: column; align-items: center; }
.hero__tags { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 28px; }
.hero__tag {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: .72rem; font-weight: 500; letter-spacing: .08em; text-transform: uppercase;
  padding: 6px 14px; border-radius: 100px; border: 1px solid;
}
.hero__tag svg { width: 13px; height: 13px; }
.hero__tag--discord { color: #7c89f5; background: var(--discord-dim); border-color: rgba(88,101,242,.3); }
.hero__tag--mc { color: #7cc97b; background: var(--mc-dim); border-color: rgba(91,168,90,.28); }

.hero__title { font-size: clamp(3.6rem,9vw,7.5rem); font-weight: 800; line-height: .92; letter-spacing: -.04em; color: var(--text-1); margin-bottom: 24px; }
.hero__title-dim { color: var(--text-3); }
.hero__sub { font-size: clamp(.92rem,2vw,1.06rem); color: var(--text-2); line-height: 1.72; max-width: 460px; margin-bottom: 24px; font-weight: 300; }
.hero__code {
  font-family: var(--font-mono); font-size: clamp(.7rem,1.4vw,.82rem);
  background: var(--bg-3); border: 1px solid var(--border); border-left: 3px solid var(--discord);
  padding: 12px 18px; border-radius: var(--radius); color: var(--text-3);
  margin-bottom: 32px; text-align: left; max-width: 500px; width: 100%;
}
.c-kw { color: #7c89f5; } .c-var { color: #82aaff; } .c-op { color: var(--text-3); }
.c-fn { color: #c3e88d; } .c-str { color: #82aaff; } .c-num { color: #7cc97b; }
.hero__actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.hero__scroll { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; z-index: 1; }
.hero__scroll-track { width: 1px; height: 42px; background: var(--surface-2); overflow: hidden; }
.hero__scroll-thumb { width: 1px; height: 20px; background: var(--text-3); animation: scrollDown 2s ease-in-out infinite; }
@keyframes scrollDown { 0%{transform:translateY(-100%)} 100%{transform:translateY(200%)} }
.hero__scroll span { font-family: var(--font-mono); font-size: .58rem; letter-spacing: .18em; text-transform: uppercase; color: var(--text-4); }

/* =============================================
   ABOUT
   ============================================= */
.about__grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: start; }
.about__text .section-title { margin-bottom: 20px; }
.about__desc { font-size: .93rem; color: var(--text-2); line-height: 1.78; margin-bottom: 16px; }
.about__badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
.badge { padding: 5px 13px; font-family: var(--font-mono); font-size: .7rem; color: var(--text-3); border: 1px solid var(--border); border-radius: 100px; background: var(--bg-3); transition: border-color .22s, color .22s, background .22s; }
.badge:hover { border-color: var(--surface-3); color: var(--text-1); background: var(--surface-1); }
.badge--discord { color: #7c89f5; border-color: rgba(88,101,242,.28); background: var(--discord-dim); }
.badge--discord:hover { background: rgba(88,101,242,.22); border-color: rgba(88,101,242,.5); color: #a5aef8; }
.badge--mc { color: #7cc97b; border-color: rgba(91,168,90,.26); background: var(--mc-dim); }
.badge--mc:hover { background: rgba(91,168,90,.2); border-color: rgba(91,168,90,.45); color: #9ed99d; }

.about__right { display: flex; flex-direction: column; align-items: center; gap: 36px; }
.about__avatar { position: relative; width: 170px; height: 170px; }
.about__avatar-img { width: 100%; height: 100%; background: var(--bg-3); border: 1px solid var(--border); border-radius: 50%; overflow: hidden; display: flex; align-items: flex-end; justify-content: center; }
.about__avatar-img svg { width: 130px; }
.about__avatar-glow { position: absolute; inset: -14px; border-radius: 50%; background: radial-gradient(circle, rgba(88,101,242,.08) 0%, transparent 70%); animation: avatarGlow 4s ease-in-out infinite; }
@keyframes avatarGlow { 0%,100%{opacity:.5} 50%{opacity:1} }
.about__stats { display: flex; align-items: center; gap: 20px; padding: 18px 24px; background: var(--bg-3); border: 1px solid var(--border); border-radius: var(--radius); width: 100%; justify-content: center; }
.stat { text-align: center; }
.stat__num { display: block; font-size: 1.7rem; font-weight: 700; letter-spacing: -.04em; color: var(--text-1); line-height: 1; }
.stat__label { display: block; font-size: .68rem; color: var(--text-3); margin-top: 4px; letter-spacing: .07em; text-transform: uppercase; }
.stat__sep { width: 1px; height: 32px; background: var(--border); }

/* =============================================
   PROJECTS
   ============================================= */
.projects { background: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%); }
.projects__header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 0; }
.projects__header .section-title { margin-bottom: 8px; }
.projects__header-right { display: flex; align-items: flex-start; padding-top: 4px; flex-shrink: 0; }
.projects__sub { font-size: .88rem; color: var(--text-3); max-width: 380px; line-height: 1.7; margin-bottom: 44px; }

.featured-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; margin-bottom: 32px; }
.feat-card--wide { grid-column: 1 / -1; }

.feat-card {
  background: var(--bg-3); border: 1px solid var(--border); border-radius: 12px;
  overflow: hidden; display: flex; flex-direction: column; position: relative;
  transition: border-color .28s, box-shadow .28s, transform .28s var(--ease-out);
}
.feat-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,.02) 0%, transparent 60%); pointer-events: none; }
.feat-card:hover { border-color: var(--surface-3); box-shadow: 0 10px 40px rgba(0,0,0,.3), 0 0 0 1px var(--surface-2); transform: translateY(-3px); }

.feat-card__thumb { width: 100%; aspect-ratio: 16/7; overflow: hidden; background: var(--bg-2); flex-shrink: 0; display: flex; align-items: stretch; }
.feat-card--wide .feat-card__thumb { aspect-ratio: 21/6; }
.feat-card__thumb--discord { border-bottom: 1px solid rgba(88,101,242,.2); }
.feat-card__thumb--mc { border-bottom: 1px solid rgba(91,168,90,.18); }

/* THUMBNAIL MOCKUPS */
.thumb-mockup { width: 100%; height: 100%; display: flex; font-family: var(--font-mono); font-size: .65rem; overflow: hidden; }
.thumb-mockup--wide { gap: 16px; padding: 16px; align-items: flex-start; }
.tm__sidebar { width: 56px; background: #1a1c20; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px 0; }
.tm__server-icon { width: 36px; height: 36px; border-radius: 50%; background: var(--discord-dim); border: 1px solid rgba(88,101,242,.3); }
.tm__server-icon--sm { width: 28px; height: 28px; background: var(--surface-1); border: 1px solid var(--border); }
.tm__channels { width: 150px; background: #1e2025; flex-shrink: 0; padding: 12px 8px; display: flex; flex-direction: column; gap: 3px; }
.tm__ch-header { font-size: .56rem; letter-spacing: .1em; text-transform: uppercase; color: var(--text-4); padding: 4px 6px; }
.tm__ch { padding: 4px 8px; border-radius: 4px; color: var(--text-3); }
.tm__ch.active { background: rgba(88,101,242,.15); color: var(--text-2); }
.tm__chat { flex: 1; padding: 12px; display: flex; flex-direction: column; gap: 8px; overflow: hidden; }
.tm__msg { display: flex; align-items: flex-start; gap: 8px; color: var(--text-2); font-size: .68rem; }
.tm__role { font-size: .58rem; padding: 1px 6px; border-radius: 3px; font-weight: 600; white-space: nowrap; }
.tm__role--bot { background: rgba(88,101,242,.25); color: #7c89f5; }
.tm__role--mod { background: rgba(91,168,90,.2); color: #7cc97b; }
.tm__msg--embed { flex-direction: column; gap: 2px; }
.tm__embed-bar { width: 3px; height: 30px; background: var(--discord); border-radius: 2px; float: left; margin-right: 8px; }
.tm__embed-content { margin-left: 11px; color: var(--text-2); }
.tm__console { flex: 1; display: flex; flex-direction: column; }
.tm__console-bar { display: flex; align-items: center; gap: 6px; padding: 8px 12px; background: #1a1c20; border-bottom: 1px solid var(--border); flex-shrink: 0; }
.tm__dot { width: 10px; height: 10px; border-radius: 50%; }
.tm__dot--r { background: #ff5f57; } .tm__dot--y { background: #febc2e; } .tm__dot--g { background: #28c840; }
.tm__console-title { margin-left: 4px; color: var(--text-4); font-size: .65rem; }
.tm__log { padding: 3px 14px; font-size: .65rem; color: var(--text-3); }
.tm__log:first-child { padding-top: 10px; }
.tm__bot-card { flex: 1; background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px; padding: 14px; display: flex; flex-direction: column; gap: 12px; }
.tm__bot-header { display: flex; align-items: center; gap: 10px; }
.tm__bot-avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--discord-dim); border: 1px solid rgba(88,101,242,.35); flex-shrink: 0; }
.tm__bot-name { font-size: .78rem; font-weight: 600; color: var(--text-1); display: flex; align-items: center; gap: 6px; }
.tm__badge-bot { font-size: .54rem; padding: 1px 5px; background: var(--discord); color: #fff; border-radius: 3px; }
.tm__bot-status { font-size: .62rem; color: #7cc97b; margin-top: 2px; }
.tm__cmd-list { display: flex; flex-direction: column; gap: 5px; }
.tm__cmd { font-size: .66rem; color: var(--text-3); }
.tm__bot-stats { display: flex; gap: 14px; align-items: flex-start; background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px; padding: 14px; flex-direction: column; justify-content: center; }
.tm__stat-item { text-align: center; }
.tm__stat-num { display: block; font-size: 1.3rem; font-weight: 700; color: var(--text-1); letter-spacing: -.02em; }
.tm__stat-label { display: block; font-size: .6rem; color: var(--text-3); margin-top: 2px; text-transform: uppercase; letter-spacing: .07em; }

.feat-card__body { flex: 1; padding: 22px 22px 14px; display: flex; flex-direction: column; gap: 9px; }
.feat-card__meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.feat-card__cat { font-family: var(--font-mono); font-size: .65rem; letter-spacing: .1em; text-transform: uppercase; padding: 3px 10px; background: var(--surface-1); border: 1px solid var(--border); border-radius: 4px; color: var(--text-3); }
.feat-card__cat--discord { color: #7c89f5; background: var(--discord-dim); border-color: rgba(88,101,242,.28); }
.feat-card__cat--mc { color: #7cc97b; background: var(--mc-dim); border-color: rgba(91,168,90,.26); }
.feat-card__price { font-family: var(--font-mono); font-size: .82rem; font-weight: 600; color: var(--text-1); }
.feat-card__title { font-size: 1.15rem; font-weight: 600; color: var(--text-1); letter-spacing: -.02em; line-height: 1.2; }
.feat-card__desc { font-size: .83rem; color: var(--text-3); line-height: 1.65; }
.feat-card__tech { display: flex; flex-wrap: wrap; gap: 5px; }
.feat-card__tech span { font-family: var(--font-mono); font-size: .64rem; color: var(--text-3); padding: 2px 8px; background: var(--surface-1); border: 1px solid var(--border); border-radius: 4px; }
.feat-card__footer { display: flex; gap: 8px; padding: 14px 22px 18px; border-top: 1px solid var(--border); }

/* CTA BANNER */
.projects__cta { margin-top: 12px; }
.projects__cta-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
  padding: 24px 32px; background: var(--bg-3); border: 1px solid var(--border);
  border-radius: 12px; border-left: 3px solid var(--discord);
}
.projects__cta-text { display: flex; flex-direction: column; gap: 4px; }
.projects__cta-label { font-size: .68rem; color: var(--text-3); }
.projects__cta-text p { font-size: .9rem; color: var(--text-2); }

/* =============================================
   MODAL
   ============================================= */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.72); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 500; display: flex; align-items: flex-end; justify-content: center; opacity: 0; pointer-events: none; transition: opacity .35s var(--ease-out); }
.modal-overlay.open { opacity: 1; pointer-events: all; }
.modal { background: var(--bg-2); border: 1px solid var(--border-md); border-bottom: none; border-radius: 16px 16px 0 0; width: 100%; max-width: 1080px; max-height: 88vh; overflow-y: auto; padding: 32px 36px 48px; transform: translateY(40px); transition: transform .4s var(--ease-out); }
.modal-overlay.open .modal { transform: none; }
.modal::-webkit-scrollbar { width: 4px; }
.modal::-webkit-scrollbar-track { background: transparent; }
.modal::-webkit-scrollbar-thumb { background: var(--surface-2); border-radius: 2px; }
.modal__header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 24px; }
.modal__title { font-size: 1.4rem; font-weight: 700; color: var(--text-1); letter-spacing: -.02em; }
.modal__sub { font-size: .83rem; color: var(--text-3); margin-top: 4px; }
.modal__close { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); border-radius: 8px; color: var(--text-3); flex-shrink: 0; transition: background .22s, color .22s, border-color .22s; }
.modal__close svg { width: 16px; height: 16px; }
.modal__close:hover { background: var(--surface-1); color: var(--text-1); border-color: var(--surface-3); }
.modal__filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
.filter-btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 18px; font-size: .76rem; font-weight: 500; color: var(--text-3); background: var(--bg-3); border: 1px solid var(--border); border-radius: 100px; transition: background .22s, color .22s, border-color .22s; }
.filter-btn:hover { background: var(--surface-1); color: var(--text-1); border-color: var(--surface-3); }
.filter-btn.active { background: var(--text-1); color: var(--bg); border-color: var(--text-1); }
.filter-btn--discord.active { background: var(--discord); color: #fff; border-color: var(--discord); }
.filter-btn--mc.active { background: var(--mc); color: #fff; border-color: var(--mc); }
.modal__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap: 14px; }

.modal-card { background: var(--bg-3); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; transition: border-color .25s, transform .25s var(--ease-out), box-shadow .25s; }
.modal-card:hover { border-color: var(--surface-3); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.28); }
.modal-card__thumb { aspect-ratio: 16/7; overflow: hidden; background: var(--bg-2); display: flex; align-items: center; justify-content: center; }
.modal-card__body { flex: 1; padding: 16px 16px 10px; display: flex; flex-direction: column; gap: 7px; }
.modal-card__meta { display: flex; align-items: center; justify-content: space-between; }
.modal-card__cat { font-family: var(--font-mono); font-size: .6rem; letter-spacing: .1em; color: var(--text-3); text-transform: uppercase; }
.modal-card__cat--discord { color: #7c89f5; }
.modal-card__cat--mc { color: #7cc97b; }
.modal-card__price { font-family: var(--font-mono); font-size: .8rem; font-weight: 600; color: var(--text-1); }
.modal-card__title { font-size: .98rem; font-weight: 600; color: var(--text-1); letter-spacing: -.01em; }
.modal-card__desc { font-size: .78rem; color: var(--text-3); line-height: 1.6; }
.modal-card__tech { display: flex; flex-wrap: wrap; gap: 4px; }
.modal-card__tech span { font-family: var(--font-mono); font-size: .6rem; color: var(--text-3); padding: 2px 7px; background: var(--surface-1); border: 1px solid var(--border); border-radius: 3px; }
.modal-card__footer { display: flex; gap: 7px; padding: 10px 16px 14px; border-top: 1px solid var(--border); }

/* =============================================
   SKILLS
   ============================================= */
.skills__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 44px; }
.skills__group-title { display: flex; align-items: center; gap: 8px; font-size: .7rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--text-3); margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.skills__group-title svg { width: 14px; height: 14px; }
.skills__group--discord .skills__group-title { color: #7c89f5; border-bottom-color: rgba(88,101,242,.25); }
.skills__group--mc .skills__group-title { color: #7cc97b; border-bottom-color: rgba(91,168,90,.22); }
.skill-row { display: grid; grid-template-columns: 1fr auto; grid-template-rows: auto auto; gap: 6px 10px; margin-bottom: 18px; align-items: center; }
.skill-row__name { font-size: .83rem; color: var(--text-2); }
.skill-row__pct { font-family: var(--font-mono); font-size: .7rem; color: var(--text-3); }
.skill-row__bar { grid-column: 1 / 3; height: 2px; background: var(--surface-2); border-radius: 2px; overflow: hidden; }
.skill-row__fill { height: 100%; width: 0; border-radius: 2px; background: linear-gradient(90deg, var(--surface-3), var(--accent)); transition: width 1.1s var(--ease-out); }
.skill-row__fill--discord { background: linear-gradient(90deg, rgba(88,101,242,.4), var(--discord)); }
.skill-row__fill--mc { background: linear-gradient(90deg, rgba(91,168,90,.4), var(--mc)); }

/* =============================================
   FOOTER
   ============================================= */
.footer { border-top: 1px solid var(--border); padding: 28px 0; }
.footer__inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.footer__logo { font-size: .95rem; font-weight: 700; color: var(--text-3); }
.footer__copy { font-size: .76rem; color: var(--text-4); }
.footer__discord { display: inline-flex; align-items: center; gap: 7px; font-size: .76rem; color: #7c89f5; transition: color .22s; }
.footer__discord:hover { color: #a5aef8; }

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 960px) {
  .nav__links, .nav__cta--discord { display: none; }
  .nav__toggle { display: flex; }
  .about__grid { grid-template-columns: 1fr; gap: 44px; }
  .about__right { flex-direction: row; align-items: flex-start; justify-content: center; }
  .featured-grid { grid-template-columns: 1fr; }
  .feat-card--wide { grid-column: 1; }
  .feat-card--wide .feat-card__thumb { aspect-ratio: 16/7; }
  .skills__grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .modal { padding: 24px 20px 40px; }
}
@media (max-width: 640px) {
  :root { --section-pad: 52px; }
  .hero__title { font-size: clamp(2.8rem,13vw,4rem); }
  .hero__code { font-size: .66rem; overflow-x: auto; }
  .hero__actions { flex-direction: column; align-items: stretch; }
  .hero__actions .btn { justify-content: center; }
  .about__right { flex-direction: column; align-items: center; }
  .about__stats { gap: 14px; padding: 14px; }
  .projects__header { flex-direction: column; gap: 16px; }
  .projects__header-right { width: 100%; }
  .projects__header-right .btn { width: 100%; justify-content: center; }
  .projects__cta-inner { flex-direction: column; align-items: stretch; text-align: center; }
  .projects__cta-inner .btn { justify-content: center; }
  .skills__grid { grid-template-columns: 1fr; gap: 32px; }
  .modal { padding: 20px 14px 36px; max-height: 92vh; }
  .modal__grid { grid-template-columns: 1fr; }
  .footer__inner { justify-content: center; text-align: center; }
}

/* ─── AVATAR PHOTO (podmiana SVG → img) ─────────────────────── */
.about__avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
  display: block;
}

/* ─── COMBO CARD (pakiet MC + Discord) ──────────────────────── */
.feat-card__thumb--combo {
  border-bottom: 1px solid rgba(88,101,242,.15);
  background: linear-gradient(135deg, rgba(88,101,242,.06) 0%, rgba(91,168,90,.06) 100%);
}

.feat-card__cat--combo {
  color: #a78bfa;
  background: rgba(167,139,250,.12);
  border-color: rgba(167,139,250,.28);
  font-family: var(--font-mono);
  font-size: .65rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 3px 10px;
  border: 1px solid;
  border-radius: 4px;
}

.tm__bot-avatar--combo {
  background: linear-gradient(135deg, var(--discord-dim) 0%, var(--mc-dim) 100%);
  border: 1px solid rgba(167,139,250,.35) !important;
}

.tm__badge-combo {
  font-size: .54rem;
  padding: 1px 5px;
  background: linear-gradient(90deg, var(--discord) 0%, var(--mc) 100%);
  color: #fff;
  border-radius: 3px;
  letter-spacing: .05em;
}

/* =============================================
   SEKCJA OPINIE — reviews
   ============================================= */

/* Nagłówek sekcji z nawigacją */
.reviews__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.reviews__header .section-title {
  margin-bottom: 0;
}

/* Przyciski nawigacyjne */
.reviews__nav {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-top: 6px;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.rev-nav-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-md);
  border-radius: var(--radius);
  color: var(--text-3);
  background: var(--bg-3);
  transition: background .22s, color .22s, border-color .22s, transform .2s;
  flex-shrink: 0;
}
.rev-nav-btn svg {
  width: 18px;
  height: 18px;
}
.rev-nav-btn:hover {
  background: var(--surface-1);
  color: var(--text-1);
  border-color: var(--surface-3);
  transform: translateY(-1px);
}
.rev-nav-btn:active {
  transform: scale(.95);
}

/* Track wrapper — viewport-wide, overflow hidden */
.reviews__track-wrap {
  margin-top: 44px;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  padding: 8px 0 16px;
}
.reviews__track-wrap:active {
  cursor: grabbing;
}

/* Flex track — each slide = 100% of wrapper width, no gap */
.reviews__track {
  display: flex;
  gap: 0;
  will-change: transform;
  /* transition applied inline by JS */
}

/* Review card — exactly 1 per view: 100% wrapper width */
.rev-card {
  flex: 0 0 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 4px clamp(16px, 5vw, 52px) 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* The visible glass card box — max-width for readability */
.rev-card__inner {
  width: 100%;
  max-width: 680px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 32px 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  overflow: hidden;
  transition: border-color .28s, box-shadow .28s;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.rev-card__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.025) 0%, transparent 55%);
  pointer-events: none;
  border-radius: 14px;
}
.rev-card__inner:hover {
  border-color: var(--surface-3);
  box-shadow: 0 8px 36px rgba(0,0,0,.28), 0 0 0 1px var(--surface-2);
}

/* Top row: avatar + user info */
.rev-card__top {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* Avatar */
.rev-card__avatar-wrap {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid var(--border-md);
  background: var(--surface-1);
}
.rev-card__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Nick + platform badge */
.rev-card__user {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.rev-card__nick {
  font-size: .95rem;
  font-weight: 600;
  color: var(--text-1);
  letter-spacing: -.01em;
  line-height: 1;
}
.rev-card__platform {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: .62rem;
  letter-spacing: .09em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid;
  width: fit-content;
}
.rev-card__platform--discord {
  color: #7c89f5;
  background: var(--discord-dim);
  border-color: rgba(88,101,242,.28);
}
.rev-card__platform--mc {
  color: #7cc97b;
  background: var(--mc-dim);
  border-color: rgba(91,168,90,.26);
}

/* Stars */
.rev-card__stars {
  font-size: .92rem;
  color: #f59e0b;
  letter-spacing: .1em;
  line-height: 1;
}

/* Review text */
.rev-card__text {
  font-size: .86rem;
  color: var(--text-2);
  line-height: 1.72;
  font-style: italic;
}

/* Dots indicator */
.reviews__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
  padding: 0 clamp(16px, 5vw, 52px);
}
.rev-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--surface-3);
  border: none;
  transition: background .25s, transform .25s, width .3s cubic-bezier(0.16,1,0.3,1);
  flex-shrink: 0;
}
.rev-dot.active {
  background: var(--text-2);
  width: 22px;
  border-radius: 3px;
}

/* Responsive */
@media (max-width: 640px) {
  .rev-card {
    padding: 4px 16px 4px;
  }
  .rev-card__inner {
    padding: 22px 20px 20px;
  }
  .reviews__nav {
    gap: 8px;
  }
  .rev-nav-btn {
    width: 36px;
    height: 36px;
  }
}
