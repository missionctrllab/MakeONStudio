const fs = require('fs');
const icons = fs.readFileSync('/sessions/magical-epic-davinci/icons_v2.txt', 'utf8');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="theme-color" content="#FAFAF8">
<title>MakeON Studio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#FAFAF8;            /* warm white */
  --paper:#E8E0D4;         /* bone / greige */
  --surface:#ffffff;
  --ink:#1A1A1A;           /* black */
  --ink-2:#555552;
  --stone:#9C7249;         /* kraft brown */
  --terra:#E8350F;         /* lava red-orange */
  --sage:#556B2F;          /* olive jaguar green */
  --gold:#9C7249;          /* kraft brown */
  --indigo:#1B1464;        /* deep indigo */
  --burgundy:#6B1D2A;      /* burgundy */
  --purple:#9B8EC4;        /* panoprax purple */
  --chartreuse:#EFF512;    /* chartreuse yellow */
  --line:#1A1A1A;
  --line-soft:#D9D2C5;
  --line-blueprint:rgba(232,53,15,.18);
  --grid-major:rgba(26,26,26,.06);
  --grid-minor:rgba(26,26,26,.03);
  --safe-top:env(safe-area-inset-top,0px);
  --safe-bot:env(safe-area-inset-bottom,0px);
  --safe-left:env(safe-area-inset-left,0px);
  --safe-right:env(safe-area-inset-right,0px);
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%;width:100%;overflow:hidden;background:var(--bg);color:var(--ink);
  user-select:none;-webkit-user-select:none;-webkit-font-smoothing:antialiased;
  overscroll-behavior:none;touch-action:manipulation;}
body{font-family:'Outfit',system-ui,-apple-system,sans-serif;font-weight:400;
  display:flex;flex-direction:column;letter-spacing:-0.01em;
  padding-top:var(--safe-top);padding-bottom:var(--safe-bot);
  padding-left:var(--safe-left);padding-right:var(--safe-right);}

/* ======================== TOP BAR — DRAFTSMAN HEADER ======================== */
.top{
  height:56px;flex-shrink:0;background:var(--surface);
  border-bottom:1px solid var(--line);
  display:flex;align-items:center;justify-content:space-between;
  padding:0 20px;z-index:60;position:relative;
}
/* registration tick marks under top bar */
.top::after{content:'';position:absolute;left:0;right:0;bottom:-1px;height:1px;
  background:repeating-linear-gradient(90deg,var(--line) 0 6px,transparent 6px 12px);opacity:.0}

.logo{display:flex;align-items:center;gap:12px;min-width:0}
.logo-mark{width:28px;height:28px;flex-shrink:0;display:block}
.logo-text{font-weight:300;font-size:17px;color:var(--ink);letter-spacing:-0.02em;line-height:1;white-space:nowrap}
.logo-text b{font-weight:700}
.crumb{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--stone);
  text-transform:uppercase;font-weight:400;margin-left:14px;padding-left:14px;
  border-left:1px solid var(--line-soft);white-space:nowrap}

.top-actions{display:flex;gap:10px;align-items:center}

/* POWER toggle — IO switch */
.power-wrap{display:flex;align-items:center;gap:8px}
.power-toggle{
  width:52px;height:26px;border:1px solid var(--line);background:var(--surface);
  position:relative;cursor:pointer;transition:background .2s;border-radius:0;flex-shrink:0;
}
.power-toggle .knob{
  position:absolute;top:-1px;left:-1px;width:26px;height:28px;
  background:var(--ink);border:1px solid var(--line);transition:left .2s,background .2s;
}
.power-toggle.on{background:var(--terra)}
.power-toggle.on .knob{left:26px;background:var(--surface)}
.power-label{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--stone);font-weight:500;min-width:24px}

.ghost-btn{
  height:32px;padding:0 12px;border-radius:0;border:1px solid var(--line);
  background:transparent;color:var(--ink);font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;
  transition:background .15s,color .15s;
}
.ghost-btn:hover,.ghost-btn:active{background:var(--ink);color:var(--surface)}
.ghost-btn-accent{border-color:var(--terra);color:var(--terra)}
.ghost-btn-accent:hover,.ghost-btn-accent:active{background:var(--terra);color:var(--surface);border-color:var(--terra)}

/* save drawer */
.save-drawer{position:fixed;inset:0;background:rgba(26,26,26,.45);z-index:200;
  display:none;align-items:flex-start;justify-content:center;padding:80px 16px}
.save-drawer[aria-hidden="false"]{display:flex;animation:fadeIn .2s}
.save-drawer-panel{background:var(--surface);border:1px solid var(--ink);width:100%;
  max-width:460px;display:flex;flex-direction:column;gap:14px;padding:20px}
.save-head{display:flex;align-items:center;justify-content:space-between}
.save-title{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:3px;color:var(--ink)}
.save-row{display:flex;gap:8px;align-items:center}
.save-row input[type=text]{flex:1;height:32px;border:1px solid var(--line);padding:0 10px;
  font-family:'JetBrains Mono',monospace;font-size:11px;background:var(--bg);color:var(--ink);border-radius:0;outline:none}
.save-row input[type=text]:focus{border-color:var(--terra)}
.save-list{max-height:280px;overflow-y:auto;border-top:1px solid var(--line-soft);padding-top:10px;display:flex;flex-direction:column;gap:6px}
.save-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--line-soft);background:var(--bg)}
.save-item:hover{border-color:var(--ink)}
.save-item-name{flex:1;font-family:'Outfit',sans-serif;font-size:13px;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.save-item-meta{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--stone);letter-spacing:1px}
.save-item-btn{border:1px solid var(--line);background:transparent;padding:3px 8px;
  font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer}
.save-item-btn:hover{background:var(--ink);color:var(--surface)}
.save-item-btn.danger:hover{background:var(--terra);color:var(--surface);border-color:var(--terra)}
.save-empty{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--stone);text-align:center;padding:20px}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}

/* ======================== CANVAS — BLUEPRINT ======================== */
.canvas-wrap{flex:1;position:relative;overflow:hidden;background:var(--bg);min-height:0}
.canvas-watermark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:.10;z-index:0;width:280px;height:auto}
/* blueprint paper grid — 8px minor, 40px major */
.canvas-wrap::before{content:'';position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(to right,var(--grid-major) 1px,transparent 1px),
    linear-gradient(to bottom,var(--grid-major) 1px,transparent 1px),
    linear-gradient(to right,var(--grid-minor) 1px,transparent 1px),
    linear-gradient(to bottom,var(--grid-minor) 1px,transparent 1px);
  background-size:40px 40px,40px 40px,8px 8px,8px 8px;
}
/* corner registration marks (blueprint style) */
.canvas-wrap::after{content:'';position:absolute;inset:12px;pointer-events:none;
  background:
    /* top-left */
    linear-gradient(to right,var(--terra) 0 14px,transparent 14px) top left/14px 1px no-repeat,
    linear-gradient(to bottom,var(--terra) 0 14px,transparent 14px) top left/1px 14px no-repeat,
    /* top-right */
    linear-gradient(to left,var(--terra) 0 14px,transparent 14px) top right/14px 1px no-repeat,
    linear-gradient(to bottom,var(--terra) 0 14px,transparent 14px) top right/1px 14px no-repeat,
    /* bottom-left */
    linear-gradient(to right,var(--terra) 0 14px,transparent 14px) bottom left/14px 1px no-repeat,
    linear-gradient(to top,var(--terra) 0 14px,transparent 14px) bottom left/1px 14px no-repeat,
    /* bottom-right */
    linear-gradient(to left,var(--terra) 0 14px,transparent 14px) bottom right/14px 1px no-repeat,
    linear-gradient(to top,var(--terra) 0 14px,transparent 14px) bottom right/1px 14px no-repeat;
  opacity:.55;
}

/* canvas legend (top-left coordinate label) */
.legend{position:absolute;top:18px;left:24px;display:flex;gap:14px;align-items:center;
  font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;
  color:var(--stone);text-transform:uppercase;z-index:5;pointer-events:none}
.legend .dot{width:6px;height:6px;border:1px solid var(--terra);background:transparent}
.legend .sep{opacity:.4}
.legend .live{color:var(--terra)}
.legend .live .dot{background:var(--terra)}

/* canvas footer registration */
.stamp{position:absolute;bottom:18px;right:24px;font-family:'JetBrains Mono',monospace;
  font-size:8px;letter-spacing:2px;color:var(--stone);text-transform:uppercase;
  z-index:5;pointer-events:none;text-align:right;line-height:1.5}
.stamp b{color:var(--ink);font-weight:500}

.hint{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  text-align:center;pointer-events:none;color:var(--stone);max-width:340px;width:90%;padding:0 20px}
.hint-big{font-size:22px;font-weight:200;color:var(--ink);letter-spacing:-0.01em;margin-bottom:14px;line-height:1.3}
.hint-small{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;
  text-transform:uppercase;font-weight:400;color:var(--stone)}
.hint-small::before,.hint-small::after{content:'\u2014\u2014';margin:0 8px;color:var(--line-soft)}

/* placed parts */
.part{position:absolute;cursor:grab;z-index:10;
  display:flex;flex-direction:column;align-items:center;gap:4px;
  transition:filter .2s;touch-action:none;}
.part .icon-box{position:relative;display:flex;align-items:center;justify-content:center}
.part img{display:block;pointer-events:none}
.part .label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--stone);font-weight:400;white-space:nowrap;opacity:.7;
  background:var(--bg);padding:1px 4px;}
/* terminal pads (+/-) — tappable connection targets */
.part .pad{position:absolute;width:22px;height:22px;border:2px solid var(--ink);border-radius:50%;
  background:var(--surface);display:flex;align-items:center;justify-content:center;
  font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;color:var(--ink);
  line-height:1;transform:translate(-50%,-50%);z-index:3;
  cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
/* invisible larger hit target around each pad for easier tapping */
.part .pad::before{content:'';position:absolute;inset:-8px;}
.part .pad.pos{color:var(--burgundy);border-color:var(--burgundy)}
.part .pad.neg{color:var(--ink)}
.part .pad.neu{color:var(--chartreuse);border-color:var(--chartreuse)}
.part .pad.ch{color:#fff;background:var(--burgundy);border-color:var(--burgundy);font-size:6px}
.part .pad.sel{background:var(--burgundy);color:var(--bg);border-color:var(--burgundy);
  box-shadow:0 0 0 3px rgba(107,29,42,.25)}
.part .pad:hover{box-shadow:0 0 0 2px rgba(26,26,26,.15)}
.part.lit .pad.pos{background:var(--burgundy);color:var(--bg)}
.part.selected{filter:none}
.part.selected::after{content:'';position:absolute;inset:-10px;
  border:1px solid var(--terra);
  background:
    linear-gradient(to right,var(--terra) 0 8px,transparent 8px) top left/8px 1px no-repeat,
    linear-gradient(to bottom,var(--terra) 0 8px,transparent 8px) top left/1px 8px no-repeat,
    linear-gradient(to left,var(--terra) 0 8px,transparent 8px) top right/8px 1px no-repeat,
    linear-gradient(to bottom,var(--terra) 0 8px,transparent 8px) top right/1px 8px no-repeat,
    linear-gradient(to right,var(--terra) 0 8px,transparent 8px) bottom left/8px 1px no-repeat,
    linear-gradient(to top,var(--terra) 0 8px,transparent 8px) bottom left/1px 8px no-repeat,
    linear-gradient(to left,var(--terra) 0 8px,transparent 8px) bottom right/8px 1px no-repeat,
    linear-gradient(to top,var(--terra) 0 8px,transparent 8px) bottom right/1px 8px no-repeat;
  pointer-events:none}
.part.selected .label{color:var(--terra);opacity:1}

.part.lit img{filter:brightness(1.4) drop-shadow(0 0 12px #FFD37A) drop-shadow(0 0 24px rgba(255,211,122,.6))}
.part.buzzing img{animation:buzz .12s linear infinite}
.part.spinning img{animation:spin .9s linear infinite}
.part.powered::after{content:'';position:absolute;inset:-6px;border:1px solid var(--terra);opacity:.5;pointer-events:none;animation:pulse 1.8s ease-in-out infinite}

@keyframes buzz{0%,100%{transform:translate(0,0)}25%{transform:translate(-1.5px,1px)}50%{transform:translate(1.5px,-1px)}75%{transform:translate(-1px,-1.5px)}}
@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{opacity:.25;transform:scale(1)}50%{opacity:.7;transform:scale(1.04)}}
@keyframes pop{from{transform:scale(0.6);opacity:0}to{transform:scale(1);opacity:1}}
.part{animation:pop .25s cubic-bezier(.4,1.4,.5,1)}

/* tape SVG layer */
.tape-layer{position:absolute;inset:0;pointer-events:none;z-index:20;overflow:visible}
.tape-layer path.tape-clickable{pointer-events:stroke;cursor:pointer}

/* sparkles */
.sparkle{position:absolute;width:3px;height:3px;background:var(--terra);
  pointer-events:none;z-index:30;
  animation:sparkle .9s ease-out forwards}
@keyframes sparkle{0%{transform:scale(0) translate(0,0);opacity:1}
  100%{transform:scale(1) translate(var(--dx),var(--dy));opacity:0}}

/* ======================== BOTTOM TRAY — IO PANEL ======================== */
.tray{
  background:var(--surface);border-top:1px solid var(--line);
  flex-shrink:0;z-index:50;position:relative;
}
.tray-header{
  display:flex;align-items:center;justify-content:space-between;
  padding:10px 20px 8px;border-bottom:1px solid var(--line-soft);
}
.tray-title{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2.5px;
  text-transform:uppercase;color:var(--stone);font-weight:500}
.tray-title b{color:var(--ink);font-weight:600}
.tray-stats{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;
  color:var(--stone);font-weight:400}
.tray-stats b{color:var(--terra);font-weight:600}

.parts-bar{
  padding:14px 20px 18px;
  display:flex;gap:32px;align-items:flex-start;
  overflow-x:auto;overflow-y:hidden;
  -webkit-overflow-scrolling:touch;
  scrollbar-width:thin;scrollbar-color:var(--line-soft) transparent;
}
.parts-bar::-webkit-scrollbar{height:4px}
.parts-bar::-webkit-scrollbar-thumb{background:var(--line-soft)}
.parts-bar::-webkit-scrollbar-track{background:transparent}

.parts-group{display:flex;flex-direction:column;gap:8px;flex-shrink:0}
.parts-group-label{
  font-family:'JetBrains Mono',monospace;
  font-size:9px;font-weight:500;color:var(--stone);letter-spacing:2.5px;text-transform:uppercase;
  display:flex;align-items:center;gap:8px;
}
.parts-group-label::before{content:'';display:block;width:18px;height:1px;background:var(--terra)}
.parts-group-label .num{font-weight:600;color:var(--terra)}
/* ── Category accent colors (brand palette) ── */
.parts-group.power .parts-group-label::before{background:var(--indigo)}
.parts-group.power .parts-group-label .num{color:var(--indigo)}
.parts-group.animators .parts-group-label::before{background:var(--terra)}
.parts-group.animators .parts-group-label .num{color:var(--terra)}
.parts-group.controls .parts-group-label::before{background:var(--sage)}
.parts-group.controls .parts-group-label .num{color:var(--sage)}
.parts-row{display:flex;gap:6px}
.part-tile{
  width:64px;height:74px;border:1px solid var(--line);background:var(--surface);
  cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;
  transition:background .15s,transform .1s,opacity .15s;
  padding:6px 4px;flex-shrink:0;border-radius:0;position:relative;
  touch-action:manipulation;
}
.part-tile:hover{background:var(--paper)}
.part-tile:active{transform:translateY(1px);background:var(--paper)}
/* category top-stripe on tiles */
.parts-group.power .part-tile{border-top:2px solid var(--indigo)}
.parts-group.animators .part-tile{border-top:2px solid var(--terra)}
.parts-group.controls .part-tile{border-top:2px solid var(--sage)}
.part-tile img{width:34px;height:34px;object-fit:contain;pointer-events:none}
.part-tile .tile-name{font-family:'JetBrains Mono',monospace;
  font-size:7.5px;font-weight:500;color:var(--ink-2);text-align:center;
  letter-spacing:0.8px;text-transform:uppercase;line-height:1.1}
.part-tile .inv-count{
  position:absolute;top:-1px;left:-1px;
  min-width:18px;height:18px;padding:0 4px;
  font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:600;color:var(--ink);
  display:flex;align-items:center;justify-content:center;
  letter-spacing:0;line-height:1;
  border:1px solid var(--line);background:var(--surface);
  border-radius:0;
}
.part-tile.empty{opacity:.3;cursor:not-allowed;pointer-events:none}
.part-tile.empty .inv-count{background:var(--ink);color:var(--surface)}

/* ======================== STATUS ======================== */
.status{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);
  background:var(--ink);color:var(--surface);
  font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;
  padding:9px 16px;font-weight:500;text-transform:uppercase;z-index:40;
  opacity:0;transition:opacity .25s;pointer-events:none;border-radius:0;}
.status.show{opacity:1}

/* ======================== MOBILE OPTIMIZATION ======================== */
@media (max-width:640px){
  body{font-size:14px}
  .top{height:44px;padding:0 10px}
  .logo-mark{width:22px;height:22px}
  .logo-text{font-size:14px}
  .crumb{margin-left:8px;padding-left:8px;font-size:7px;letter-spacing:1.5px}
  .top-actions{gap:4px}
  .power-wrap{gap:4px}
  .power-toggle{width:40px;height:22px}
  .power-toggle .knob{width:20px;height:24px}
  .power-toggle.on .knob{left:20px}
  .power-label{font-size:8px;min-width:16px}
  .ghost-btn{height:26px;padding:0 7px;font-size:8px;letter-spacing:1px}
  .ghost-btn .paths-icon{display:none}
  .ghost-btn-accent{padding:0 9px}

  .legend{top:10px;left:12px;font-size:7px;gap:8px}
  .stamp{bottom:10px;right:12px;font-size:6px;letter-spacing:1.5px}
  .canvas-wrap::after{inset:6px}

  .hint-big{font-size:16px}
  .hint-small{font-size:8px;letter-spacing:1.5px}

  /* Collapsible tray */
  .tray{max-height:44px;overflow:hidden;transition:max-height .3s ease}
  .tray.open{max-height:220px;overflow:visible}
  .tray-header{padding:8px 14px 6px;cursor:pointer}
  .tray-header::after{content:'\u25B2';font-size:8px;color:var(--stone);transition:transform .3s}
  .tray.open .tray-header::after{transform:rotate(180deg)}
  .tray-title{font-size:7px;letter-spacing:2px}
  .tray-stats{font-size:7px;letter-spacing:1px}
  .parts-bar{padding:8px 10px 12px;gap:14px}
  .parts-group{gap:4px}
  .parts-group-label{font-size:7px;letter-spacing:2px}
  .parts-group-label::before{width:10px}
  .part-tile{width:54px;height:62px;padding:4px 3px}
  .part-tile img{width:28px;height:28px}
  .part-tile .tile-name{font-size:6.5px}
  .part-tile .inv-count{min-width:15px;height:15px;font-size:8px}
  .parts-row{gap:4px}

  .part .pad{width:18px;height:18px;font-size:12px}
  .part .pad::before{inset:-10px}
  .part .label{font-size:8px}

  .save-drawer{padding:40px 10px}
  .save-drawer-panel{padding:14px}
  .status{font-size:9px;padding:7px 12px;bottom:52px}

  /* tape crossing warning toast */
  .tape-warning{bottom:52px;font-size:9px;padding:8px 14px}
}

@media (max-width:380px){
  .crumb{display:none}
  .legend{display:none}
  .ghost-btn:not(.ghost-btn-accent):not([onclick*="togglePower"]):not([onclick*="openSaves"]){display:none}
  .top{padding:0 8px}
}

@media (max-width:320px){
  .power-label{display:none}
  .part-tile{width:48px;height:56px}
  .part-tile img{width:24px;height:24px}
}

/* prevent zoom on double-tap (iOS) */
button,.part-tile,.part,.power-toggle,.ghost-btn{touch-action:manipulation}

/* Tape crossing warning */
.tape-warning{
  position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
  background:var(--terra);color:var(--surface);
  font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:1.5px;
  padding:10px 18px;font-weight:500;text-transform:uppercase;z-index:100;
  opacity:0;transition:opacity .3s;pointer-events:none;white-space:nowrap;
  box-shadow:0 4px 16px rgba(232,53,15,.3);
}
.tape-warning.show{opacity:1}
</style>
</head>
<body>

<div class="top">
  <div class="logo">
    <svg class="logo-mark" viewBox="0 0 366.08 369.09" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- MakeON Studio composite mark: M letterform + ® + paper airplane -->
      <!-- M letterform -->
      <path fill="#1A1A1A" d="M158.9,85.13h0c2.05,0,3.08,0,3.08,1.03,6.15,2.05,10.25,6.15,11.28,12.3,1.03,4.1,0,9.23,0,13.33-2.05,12.3-4.1,25.63-5.13,37.93-2.05,15.38-5.13,30.75-7.18,46.13-1.03,4.1-1.03,7.18-1.03,11.28s0,7.18,1.03,11.28c2.05,5.13,3.08,10.25,5.13,16.4,1.03,1.03,1.03,3.08,2.05,4.1,1.03,2.05,4.1,3.08,7.18,2.05h1.03c5.13-5.13,11.28-9.23,16.4-14.35,11.28-10.25,23.58-15.38,37.93-18.45,4.1-1.03,8.2-1.03,12.3,1.03,2.05,1.03,4.1,2.05,5.13,4.1,6.15,11.28,3.08,14.35-1.03,16.4-3.08,2.05-6.15,4.1-9.23,5.13-8.2,5.13-15.38,11.28-20.5,19.48-12.3,17.43-25.63,35.88-37.93,53.31-4.1,6.15-9.23,13.33-17.43,19.48h0c-7.18,4.1-9.23,15.38-12.3,23.58l-2.05,6.15c-3.08,7.18-6.15,12.3-14.35,12.3,0,0,4.1,0,2.05,0H39.98c-3.08,0-5.13-2.05-5.13-4.1v-3.08c0-1.03,1.03-1.03,1.03-2.05l6.15-16.4c-1.03-3.08-1.03-6.15-1.03-8.2-2.05-5.13-4.1-10.25-8.2-14.35-4.1-5.13-8.2-11.28-12.3-16.4-5.13-9.23-10.25-18.45-12.3-28.7-2.05-7.18-3.08-13.33-4.1-20.5-1.03-4.1-1.03-9.23-1.03-13.33,0-1.03,1.03-1.03,1.03-1.03h1.03c5.13,7.18,26.65,37.93,30.75,41.01,7.18,6.15,20.5,6.15,26.65-1.03,2.05-2.05,3.08-4.1,4.1-7.18,1.03-3.08,0-4.1,3.08-2.05,1.03,0,1.03,1.03,2.05,1.03,6.15,4.1,14.35,5.13,21.53,2.05,5.13-2.05,10.25-6.15,11.28-12.3,1.03-3.08,1.03-7.18,0-10.25-3.08-7.18-6.15-11.28-10.25-18.45-9.23-17.43-19.48-35.88-29.73-53.31-2.05-7.18-10.25-24.6-10.25-24.6,0,0-14.35-26.65-20.5-44.08-3.08-3.08-3.08-8.2-3.08-12.3,0-2.05,1.03-4.1,2.05-6.15,4.1-6.15,12.3-9.23,18.45-6.15,4.1,1.03,7.18,3.08,9.23,6.15l48.18,92.26,1.03,3.08c1.03,2.05,3.08,4.1,6.15,4.1,2.05,0,5.13-1.03,5.13-3.08,1.03-5.13,3.08-10.25,4.1-15.38,5.13-22.55,9.23-45.11,15.38-68.68,1.03-4.1,2.05-7.18,3.08-10.25,2.05-5.13,7.18-9.23,12.3-10.25h3.08Z"/>
      <path fill="#1A1A1A" d="M44.08,173.29c2.05,0,3.08,0,5.13,1.03,2.05,1.03,4.1,2.05,6.15,5.13,14.35,23.58,26.65,45.11,39.98,69.71,1.03,2.05,2.05,5.13,1.03,7.18-2.05,7.18-9.23,11.28-16.4,9.23h-1.03c-3.08-1.03-6.15-3.08-8.2-6.15,0,0-34.85-52.28-41.01-61.51-4.1-7.18-5.13-13.33,0-19.48,3.08-3.08,9.23-5.13,14.35-5.13Z"/>
      <path fill="#1A1A1A" d="M14.35,199.94c5.13,0,9.23,5.13,11.28,8.2l34.85,51.26c1.03,3.08,1.03,6.15-1.03,9.23-4.1,6.15-9.23,7.18-14.35,6.15-4.1-1.03-7.18-3.08-9.23-5.13L0,220.45h0v-5.13c0-4.1,1.03-9.23,3.08-12.3,3.08-2.05,7.18-4.1,11.28-3.08Z"/>
      <!-- Registered mark -->
      <path fill="#1A1A1A" d="M244.11,350.75c0,9.66-7.83,17.49-17.48,17.49s-17.48-7.83-17.48-17.49,7.83-17.49,17.48-17.49,17.48,7.83,17.48,17.49ZM241.21,350.74c0-8.06-6.53-14.59-14.59-14.59s-14.59,6.53-14.59,14.59,6.53,14.59,14.59,14.59,14.59-6.53,14.59-14.59Z"/>
      <path fill="#ffffff" d="M231.43,360.74c.69.06,2.68.26,2.67-.39l-.02-2.59c-.03-2.94-.5-5.34-2.61-7.21,2.14-1.42,3.07-3.64,2.38-6.22-1.45-5.36-9.48-4.12-14.11-4.12v20.36c1.04.1,2.82.05,3.36-.17l.09-8.03c2.16-.15,4.8-.5,6.48.82,1.86,1.46-.03,7.38,1.77,7.54Z"/>
      <path fill="#1A1A1A" d="M231.43,360.74c-1.8-.16.09-6.08-1.77-7.54-1.69-1.33-4.33-.98-6.48-.82l-.09,8.03c-.54.21-2.32.27-3.35.17v-20.36c4.61,0,12.64-1.24,14.09,4.12.7,2.58-.23,4.8-2.38,6.22,2.11,1.87,2.59,4.27,2.61,7.21l.02,2.59c0,.65-1.98.45-2.67.39ZM228.5,349.04c1.05-.05,2.32-2.14,2.25-3.12-.07-1.01-1.53-2.67-2.54-2.69l-5.07-.08v6.16s5.35-.28,5.35-.28Z"/>
      <!-- Paper airplane -->
      <path fill="#0B0D0E" d="M366.08,2.39c-.45,1.36-.88,2.68-1.34,3.99-8.37,24-16.74,47.99-25.1,71.99-5.72,16.41-11.42,32.82-17.14,49.22-1.95,5.58-3.69,11.26-6.01,16.67-1.59,3.7-2.85,7.51-4.31,11.25-.43,1.11-.84,2.04-2.2,2.09-1.34.04-.96-2.14-1.16-3.32-1.21-7-6.47-36.9-6.47-36.9s.12.6,0,0h0l-74.57-30.73s-5.03-1.56-4.94-1.56c.02,0,0,.06-.01.03s.55-2.18,1.69-2.86c9.23-5.54,18.27-11.44,27.68-16.63,14.11-7.78,27.46-16.9,41.56-24.66,14.84-8.17,28.89-17.73,43.68-25.93,8.27-4.59,16.22-9.73,24.45-14.36,1.02-.58,2.03-.97,3.08-.38.73.42,1.08,1.23,1.12,2.09Z"/>
      <line stroke="#231F20" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6" x1="224.65" y1="85.09" x2="260.62" y2="149.68"/>
      <line stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" x1="310.01" y1="155.69" x2="295.87" y2="163.32"/>
      <line stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" x1="260.62" y1="149.68" x2="295.87" y2="163.32"/>
      <polygon fill="#ffffff" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" points="295.86 162.68 260.61 149.04 224.63 84.46 302.33 116.75 309.99 155.05 295.86 162.68"/>
    </svg>
    <div class="logo-text">Make<b>ON</b></div>
    <div class="crumb">Studio · v1</div>
  </div>
  <div class="top-actions">
    <div class="power-wrap">
      <div class="power-toggle" id="pwrTog" onclick="togglePower()"><div class="knob"></div></div>
      <div class="power-label" id="pwrLbl">Off</div>
    </div>
    <button class="ghost-btn" onclick="openSaves()" title="Save / load">Save</button>
    <button class="ghost-btn" onclick="captureBoard()" title="Screenshot as PNG">\uD83D\uDCF7</button>
    <button class="ghost-btn" id="recordBtn" onclick="toggleRecord()" title="Record screen video">\uD83D\uDD34 Rec</button>
    <button class="ghost-btn ghost-btn-accent" onclick="sendToPaths()" title="Send to Paths (Inventure / sentient navigator)"><svg class="paths-icon" viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:14px;height:14px;vertical-align:-2px;margin-right:6px"><polygon points="96,3 54,112 8,112 1,58" fill="#0B0D0E"/><polygon points="1,58 8,112 54,112 52,90 51,75" fill="#ffffff" stroke="#0B0D0E" stroke-width="2" stroke-linejoin="round"/></svg>Paths</button>
    <button class="ghost-btn" onclick="clearAll()">Reset</button>
  </div>
</div>

<!-- Save drawer -->
<div class="save-drawer" id="saveDrawer" aria-hidden="true">
  <div class="save-drawer-panel">
    <div class="save-head">
      <div class="save-title">PROJECTS</div>
      <button class="ghost-btn" onclick="closeSaves()">Close</button>
    </div>
    <div class="save-row">
      <input type="text" id="saveName" placeholder="Project name" maxlength="40">
      <button class="ghost-btn" onclick="saveCurrent()">Save</button>
    </div>
    <div class="save-row">
      <button class="ghost-btn" onclick="exportJSON()">Export JSON</button>
      <button class="ghost-btn" onclick="importJSON()">Import JSON</button>
      <input type="file" id="importFile" accept="application/json" style="display:none">
    </div>
    <div class="save-list" id="saveList"></div>
  </div>
</div>

<div class="canvas-wrap" id="canvas">
  <img class="canvas-watermark" src="data:image/png;base64,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" alt="MakeON">
  <div class="legend" id="legend">
    <span><span class="dot"></span> CIRCUIT</span>
    <span class="sep">/</span>
    <span id="legendCount">0 PARTS</span>
    <span class="sep">/</span>
    <span id="legendConn">0 TAPES</span>
  </div>
  <div class="hint" id="hint">
    <div class="hint-big">Tap a part to begin</div>
    <div class="hint-small">tap + or \u2212 terminals to tape</div>
  </div>
  <svg class="tape-layer" id="tapes" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"></svg>
  <div class="stamp">
    <b>MAKEON \u00B7 STUDIO</b><br>
    SHEET 01/01 \u00B7 SCALE 1:1
  </div>
</div>

<div class="tray">
  <div class="tray-header">
    <div class="tray-title" style="display:flex;align-items:center;gap:8px"><img src="data:image/png;base64,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" alt="MAKEON" style="height:24px;width:auto;opacity:.85"> <b>I/O</b> \u00B7 PARTS LIBRARY</div>
    <div class="tray-stats" id="trayStats">REMAINING <b id="trayRemain">0</b></div>
  </div>
  <div class="parts-bar" id="partsBar"></div>
  <div style="padding:4px 12px 6px;font-size:7px;line-height:1.3;color:var(--grid-major);font-family:'JetBrains Mono',monospace;letter-spacing:.02em;opacity:.7;text-align:center">
    DISCLAIMER: This digital parts library is provided for educational and prototyping purposes only. Component behavior in this simulator is approximate and may not reflect real-world circuit performance. MakeON assumes no liability for designs, outcomes, or damages resulting from use of this tool.
  </div>
</div>

<div class="status" id="status"></div>
<div class="tape-warning" id="tapeWarning">\u26A0 Tapes cannot cross \u2014 use a bridge!</div>

<script>
// ============== ICONS ==============
const I = ${icons};

// ============== MATERIALS ==============
// Dimensions derived from icon content bounding boxes (max dim = 80px)
const M = {
  // ── Power ──────────────────────────────────────────────────
  powerpad:{  name:'Powerpad',         cat:'power',    icon:I.powerpad,       iconBack:I.battery, w:72,h:80,
              pads:[{x:13,y:67,pol:'-'},{x:58,y:67,pol:'+'}] },
  power_box_adaptor:{ name:'Power Box Adaptor', cat:'power', icon:I.power_box_adaptor, iconBack:I.power_box_adaptor_back, w:96,h:177,
              pads:[{x:6,y:165,pol:'+'},{x:4,y:152,pol:'-'},{x:49,y:162,pol:'+'},{x:47,y:149,pol:'-'}] },
  // ── Animators ──────────────────────────────────────────────
  glow_light:{ name:'Glow Light White', cat:'animators', icon:I.glow_light,     iconBack:I.glow_light_back,   w:80,h:76,
              pads:[{x:55,y:58,pol:'+'},{x:23,y:56,pol:'-'}] },
  glow_light_color:{ name:'Glow Light Color', cat:'animators', icon:I.glow_light, iconBack:I.glow_light_back, w:80,h:76,
              pads:[{x:55,y:58,pol:'+'},{x:23,y:56,pol:'-'}],
              colors:['orange','red','green','yellow','pink','blue','aqua','purple'] },
  buzzer:{    name:'Buzzer',           cat:'animators', icon:I.buzzer,         iconBack:I.buzzer_back,       w:66,h:80,
              pads:[{x:17,y:21,pol:'+'},{x:36,y:15,pol:'-'}] },
  motor:{     name:'Motor',            cat:'animators', icon:I.motor,          iconBack:I.motor_back,        w:80,h:66,
              pads:[{x:22,y:58,pol:'+'},{x:29,y:54,pol:'-'}] },
  sound_module_setup:{ name:'Sound Module', cat:'animators', icon:I.sound_module_setup, w:225,h:213,
              pads:[{x:92,y:12,pol:'+'},{x:138,y:93,pol:'-'},
                    {x:105,y:14,pol:'c1i'},{x:91,y:134,pol:'c1o'},
                    {x:80,y:11,pol:'c2i'},{x:67,y:132,pol:'c2o'},
                    {x:55,y:9,pol:'c3i'},{x:43,y:129,pol:'c3o'},
                    {x:29,y:7,pol:'c4i'},{x:19,y:127,pol:'c4o'},
                    {x:124,y:90,pol:'+'},{x:130,y:44,pol:'+'},
                    {x:68,y:10,pol:'+'},{x:41,y:9,pol:'+'},
                    {x:19,y:7,pol:'+'},{x:78,y:133,pol:'+'},
                    {x:55,y:130,pol:'+'},{x:31,y:129,pol:'+'},
                    {x:8,y:127,pol:'+'},{x:146,y:45,pol:'-'}] },
  // ── Controls ───────────────────────────────────────────────
  light_sensor_active_night:{ name:'Active NIGHT', cat:'controls', icon:I.light_sensor_active_night, iconBack:I.light_sensor_active_night_back, w:74,h:80,
              pads:[{x:24,y:12,pol:'+'},{x:15,y:68,pol:'+'},{x:59,y:66,pol:'-'},{x:44,y:11,pol:'-'},{x:45,y:57,pol:'in'},{x:47,y:31,pol:'out'}] },
  light_sensor:{ name:'Active DAY',  cat:'controls', icon:I.light_sensor,   w:70,h:80,
              pads:[{x:62,y:51,pol:'in'},{x:61,y:32,pol:'out'},{x:52,y:15,pol:'-'},{x:54,y:68,pol:'-'},{x:35,y:12,pol:'+'},{x:13,y:61,pol:'+'}] },
  button:{    name:'Button',           cat:'controls', icon:I.button,         iconBack:I.button_back,       w:80,h:80,
              pads:[{x:31,y:61,pol:'in'},{x:58,y:54,pol:'out'}] },
  tilt_switch_vertical:{ name:'Tilt Vertical', cat:'controls', icon:I.tilt_switch_vertical, iconBack:I.tilt_switch_vertical_back, w:40,h:80,
              pads:[{x:11,y:69,pol:'in'},{x:26,y:70,pol:'out'}] },
  lever_switch_no:{ name:'Click ON',  cat:'controls', icon:I.lever_switch,   iconBack:I.lever_switch_back, w:80,h:80,
              pads:[{x:16,y:65,pol:'in'},{x:39,y:65,pol:'out'}] },
  lever_switch_nc:{ name:'Click OFF',  cat:'controls', icon:I.lever_switch,   iconBack:I.lever_switch_back, w:80,h:80,
              pads:[{x:15,y:63,pol:'in'},{x:62,y:66,pol:'out'}] },
  magnet_sensor:{ name:'Magnet Sensor', cat:'controls', icon:I.magnet_sensor, iconBack:I.magnet_sensor_back, w:80,h:76,
              pads:[{x:25,y:54,pol:'in'},{x:51,y:57,pol:'out'}] },
  on_off_switch:{ name:'ON/OFF Switch', cat:'controls', icon:I.on_off_switch, iconBack:I.on_off_switch_back, w:78,h:80,
              pads:[{x:30,y:64,pol:'in'},{x:59,y:53,pol:'out'}] },
  tilt_switch_horizontal:{ name:'Tilt Horizontal', cat:'controls', icon:I.tilt_switch_horizontal, iconBack:I.tilt_switch_horizontal_back, w:23,h:72,
              pads:[{x:16,y:65,pol:'in'},{x:7,y:7,pol:'out'}] },
};

// ============== STATE ==============
let placed=[], conns=[], nxId=1;
let triggered=new Set();
let powerOn=false;

// ============== ROTATION / FLIP HELPERS ==============
function transformPad(pad, m, rot, flipped){
  // Returns transformed {x,y,pol} relative to part origin
  let px=pad.x, py=pad.y;
  const w=m.w, h=m.h;
  // Flip horizontally first (mirror x within original w)
  if(flipped){ px = w - px; }
  // Then rotate CW around center of original bounds
  let rx=px, ry=py;
  if(rot===90){  rx=h-py; ry=px; }
  else if(rot===180){ rx=w-px; ry=h-py; }
  else if(rot===270){ rx=py; ry=w-px; }
  return {x:rx, y:ry, pol:pad.pol};
}
function rotatedSize(m, rot){
  if(rot===90||rot===270) return {w:m.h, h:m.w};
  return {w:m.w, h:m.h};
}
function rotatePart(id){
  const p=placed.find(p=>p.id===id);
  if(!p) return;
  p.rot = ((p.rot||0)+90) % 360;
  reRenderPart(p);
  drawTape(); logEvent('rotate',{id,rot:p.rot});
}
function flipPart(id){
  const p=placed.find(p=>p.id===id);
  if(!p) return;
  p.flipped = !(p.flipped||false);
  reRenderPart(p);
  drawTape(); logEvent('flip',{id,flipped:p.flipped});
}
function reRenderPart(p){
  const old=document.querySelector('.part[data-id="'+p.id+'"]');
  if(old) old.remove();
  renderPart(p);
  refreshSelection(); simulate();
}

const INV_START = { powerpad:7, power_box_adaptor:2, glow_light:8, glow_light_color:8, buzzer:4, motor:2, sound_module_setup:1, light_sensor_active_night:2, light_sensor:2, button:4, tilt_switch_vertical:4, lever_switch_no:2, lever_switch_nc:2, magnet_sensor:2, on_off_switch:2, tilt_switch_horizontal:4 };
let inventory = Object.assign({}, INV_START);

// ============== SESSION / HISTORY ==============
const SESSION_START = Date.now();
let history = [];         // [{t, type, ...}]
let poweredAtLeastOnce = false;
let currentProjectName = '';
function logEvent(type, payload){
  history.push(Object.assign({t:Date.now()-SESSION_START, type}, payload||{}));
}

// ============== AUDIO ==============
let audioCtx=null;
function chime(freq,dur,vol=0.12){
  try{
    if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
    const o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.frequency.value=freq; o.type='sine';
    g.gain.value=0;
    g.gain.linearRampToValueAtTime(vol,audioCtx.currentTime+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001,audioCtx.currentTime+dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime+dur);
  } catch(e){}
}
function sndAdd(){ chime(660,0.12); }
function sndTape(){ chime(523,0.08); setTimeout(()=>chime(784,0.14),70); }
function sndPower(on){ if(on){chime(440,0.08); setTimeout(()=>chime(659,0.1),60); setTimeout(()=>chime(880,0.15),120);} else chime(330,0.12); }
function sndDel(){ chime(220,0.1,0.08); }

// ============== INIT ==============
function init(){
  buildPartsBar();
  setupCanvas();
  updateLegend();
  updateInventoryUI();
  setupMobileTray();
  // Recompute on rotate / resize
  window.addEventListener('resize',()=>{drawTape();});
  window.addEventListener('orientationchange',()=>{setTimeout(drawTape,200);});
}

function setupMobileTray(){
  const tray=document.querySelector('.tray');
  const header=document.querySelector('.tray-header');
  if(!tray||!header) return;
  // Start open on desktop, collapsed on mobile
  if(window.innerWidth<=640){
    tray.classList.remove('open');
  } else {
    tray.classList.add('open');
  }
  header.addEventListener('click',()=>{
    if(window.innerWidth>640) return; // only toggle on mobile
    tray.classList.toggle('open');
  });
  // Auto-collapse after placing a part on mobile
  window._collapseTrayMobile=function(){
    if(window.innerWidth<=640) tray.classList.remove('open');
  };
}

function buildPartsBar(){
  const bar=document.getElementById('partsBar');
  bar.innerHTML='';
  const groups=[
    { cat:'power',     label:'Power',     num:'01', types:['powerpad','power_box_adaptor'] },
    { cat:'animators', label:'Animators', num:'02', types:['glow_light','glow_light_color','buzzer','motor','sound_module_setup'] },
    { cat:'controls',  label:'Controls',  num:'03', types:['light_sensor_active_night','light_sensor','button','tilt_switch_vertical','lever_switch_no','lever_switch_nc','magnet_sensor','on_off_switch','tilt_switch_horizontal'] },
  ];
  groups.forEach(g=>{
    const grp=document.createElement('div');
    grp.className='parts-group '+g.cat;
    grp.innerHTML='<div class="parts-group-label"><span class="num">'+g.num+'</span> '+g.label+'</div><div class="parts-row"></div>';
    bar.appendChild(grp);
    const row=grp.querySelector('.parts-row');
    g.types.forEach(t=>{
      const m=M[t]; if(!m) return;
      const tile=document.createElement('div');
      tile.className='part-tile';
      tile.dataset.type=t;
      tile.innerHTML=
        '<div class="inv-count" data-count-for="'+t+'">'+(inventory[t]||0)+'</div>'+
        '<img src="'+m.icon+'">'+
        '<div class="tile-name">'+m.name+'</div>';
      tile.onclick=()=>addPart(t);
      row.appendChild(tile);
    });
  });
}

function setupCanvas(){
  const cv=document.getElementById('canvas');
  cv.addEventListener('click',e=>{
    if(e.target===cv || e.target.classList.contains('hint') || e.target.tagName==='svg' || e.target.tagName==='SVG'){
      if(selectedPad){ selectedPad=null; refreshSelection(); showStatus(''); }
    }
  });
  // Prevent iOS pinch-zoom on canvas
  cv.addEventListener('gesturestart',e=>e.preventDefault());
}

// ============== ADD PARTS ==============
function addPart(type){
  if((inventory[type]||0)<=0){ chime(220,0.08,0.08); return; }
  const m=M[type];
  const cv=document.getElementById('canvas');
  const r=cv.getBoundingClientRect();
  const isMobile=r.width<640;
  const spread=isMobile?80:120;
  const x=r.width/2-m.w/2+(Math.random()*spread-spread/2);
  const y=r.height/2-m.h/2+(Math.random()*spread-spread/2);
  const part={id:nxId++,type,x:Math.max(20,Math.min(r.width-m.w-20,x)),y:Math.max(20,Math.min(r.height-m.h-20,y))};
  placed.push(part);
  inventory[type]--;
  updateInventoryUI();
  document.getElementById('hint').style.display='none';
  renderPart(part);
  sndAdd();
  updateLegend();
  simulate();
  logEvent('add',{id:part.id,type,x:part.x,y:part.y});
  if(window._collapseTrayMobile) window._collapseTrayMobile();
}

function updateInventoryUI(){
  let total=0;
  Object.keys(inventory).forEach(t=>{
    total+=inventory[t];
    const badge=document.querySelector('[data-count-for="'+t+'"]');
    if(badge) badge.textContent=inventory[t];
    const tile=document.querySelector('.part-tile[data-type="'+t+'"]');
    if(tile) tile.classList.toggle('empty',inventory[t]<=0);
  });
  const tr=document.getElementById('trayRemain');
  if(tr) tr.textContent=total;
}

function updateLegend(){
  const lc=document.getElementById('legendCount');
  const ln=document.getElementById('legendConn');
  if(lc) lc.textContent=String(placed.length).padStart(2,'0')+' PARTS';
  if(ln) ln.textContent=String(conns.length).padStart(2,'0')+' TAPES';
  const lg=document.getElementById('legend');
  if(lg) lg.classList.toggle('live',powerOn);
}

function renderPart(p){
  const m=M[p.type];
  const rot=p.rot||0;
  const flipped=p.flipped||false;
  const sz=rotatedSize(m, rot);
  const el=document.createElement('div');
  el.className='part';
  el.style.left=p.x+'px'; el.style.top=p.y+'px';
  el.dataset.id=p.id; el.dataset.type=p.type;

  // Transform pads to account for rotation + flip
  const tPads=(m.pads||[]).map(pad=>transformPad(pad, m, rot, flipped));
  const padsHtml=tPads.map((tp,i)=>{
    const isNeutral = tp.pol==='in'||tp.pol==='out';
    const isCh = /^c\di|^c\do/.test(tp.pol);
    const cls = tp.pol==='+'?'pos': tp.pol==='-'?'neg': isCh?'ch':'neu';
    const sym = tp.pol==='+'?'+': tp.pol==='-'?'\u2212': isCh?(tp.pol[1]+(tp.pol[2]==='i'?'IN':'OUT')): tp.pol==='in'?'IN':'OUT';
    return '<div class="pad '+cls+'" data-pol="'+tp.pol+'" data-pad-idx="'+i+'" style="left:'+tp.x+'px;top:'+tp.y+'px;">'+sym+'</div>';
  }).join('');

  // CSS transform for image rotation + flip
  let imgTransform='';
  if(rot||flipped){
    const parts=[];
    if(flipped) parts.push('scaleX(-1)');
    if(rot) parts.push('rotate('+rot+'deg)');
    imgTransform=parts.join(' ');
  }
  const imgStyle='width:'+m.w+'px;height:'+m.h+'px;'+(imgTransform?'transform:'+imgTransform+';':'');

  el.innerHTML=
    '<div class="icon-box" style="width:'+sz.w+'px;height:'+sz.h+'px;position:relative;overflow:visible;">'+
      '<img src="'+m.icon+'" style="'+imgStyle+'position:absolute;left:'+((sz.w-m.w)/2)+'px;top:'+((sz.h-m.h)/2)+'px;">'+
      padsHtml+
    '</div>'+
    '<div class="label">'+m.name+(flipped?' \u21C4':'')+'</div>';

  // PADS
  el.querySelectorAll('.pad').forEach(padEl=>{
    const pol=padEl.dataset.pol;
    padEl.addEventListener('pointerdown',e=>{ e.stopPropagation(); });
    padEl.addEventListener('click',e=>{
      e.stopPropagation();
      handlePadTap(p.id, pol);
    });
  });

  // Double-tap to ROTATE
  let lastTap=0;
  el.addEventListener('click',e=>{
    e.stopPropagation();
    if(el._justDragged){ el._justDragged=false; return; }
    const now=Date.now();
    if(now-lastTap < 350){
      // Double tap → rotate
      rotatePart(p.id);
      chime(660,0.06);
      lastTap=0;
      return;
    }
    lastTap=now;
    // Delay single-tap to differentiate from double
    setTimeout(()=>{
      if(lastTap!==0 && Date.now()-lastTap>=340){
        handlePartBodyTap(p.id);
        lastTap=0;
      }
    },360);
  });

  // Drag + long-press (delete) + right-click (flip)
  el.addEventListener('pointerdown',e=>{
    if(e.button && e.button!==0){
      // Right-click → flip
      if(e.button===2){ e.preventDefault(); e.stopPropagation(); flipPart(p.id); chime(440,0.06); }
      return;
    }
    e.stopPropagation();
    startDrag(e,p,el);
  });
  el.addEventListener('contextmenu',e=>e.preventDefault());

  document.getElementById('canvas').appendChild(el);
}

function startDrag(e,p,el){
  const pid=e.pointerId;
  const sx=e.clientX, sy=e.clientY, ox=p.x, oy=p.y;
  let didMove=false;
  try{ el.setPointerCapture(pid); }catch(_){}
  const longPress=setTimeout(()=>{
    if(!didMove){
      el._justDragged=true;
      setTimeout(()=>{ el._justDragged=false; },500);
      cleanup();
      deletePart(p.id);
    }
  },650);

  const mv=ev=>{
    if(ev.pointerId!==pid) return;
    const dx=ev.clientX-sx, dy=ev.clientY-sy;
    if(!didMove && (Math.abs(dx)>4||Math.abs(dy)>4)){
      didMove=true;
      clearTimeout(longPress);
    }
    if(didMove){
      p.x=ox+dx; p.y=oy+dy;
      el.style.left=p.x+'px'; el.style.top=p.y+'px';
      drawTape();
    }
  };
  const up=ev=>{
    if(ev.pointerId!==pid) return;
    cleanup();
    if(didMove){
      el._justDragged=true;
      setTimeout(()=>{ el._justDragged=false; },500);
      logEvent('move',{id:p.id,x:p.x,y:p.y});
    }
    // No drag -> synthetic click follows and calls handlePartTap.
  };
  function cleanup(){
    clearTimeout(longPress);
    try{ el.releasePointerCapture(pid); }catch(_){}
    el.removeEventListener('pointermove',mv);
    el.removeEventListener('pointerup',up);
    el.removeEventListener('pointercancel',up);
  }
  el.addEventListener('pointermove',mv);
  el.addEventListener('pointerup',up);
  el.addEventListener('pointercancel',up);
}

// ============== TAP-TO-TAPE (pad to pad) ==============
// selectedPad = {id, pol} or null
let selectedPad=null;

function handlePadTap(id, pol){
  if(!selectedPad){
    selectedPad={id, pol};
    refreshSelection();
    showStatus('\u2192 Tap another pad to connect tape');
    chime(pol==='+'?660:440, 0.05);
    return;
  }
  if(selectedPad.id===id && selectedPad.pol===pol){
    selectedPad=null; refreshSelection(); showStatus('');
    return;
  }
  const a=selectedPad, b={id, pol};
  const dup=conns.find(c=>
    (c.a===a.id && c.aPad===a.pol && c.b===b.id && c.bPad===b.pol) ||
    (c.a===b.id && c.aPad===b.pol && c.b===a.id && c.bPad===a.pol)
  );
  if(!dup){
    conns.push({a:a.id, aPad:a.pol, b:b.id, bPad:b.pol});
    sndTape();
    sparkleAtPads(a,b);
    const fmtPol = p => p==='+'?'+':p==='-'?'\u2212':/^c\d/.test(p)?(p[1]+(p[2]==='i'?'IN':'OUT')):p.toUpperCase();
    showStatus('Taped '+fmtPol(a.pol)+' \u2192 '+fmtPol(b.pol));
    logEvent('tape',{a:a.id, aPad:a.pol, b:b.id, bPad:b.pol});
  } else {
    showStatus('Already taped');
  }
  selectedPad=null; refreshSelection(); drawTape();
  updateLegend();
  simulate();
}

// Tap the body of a part (not a pad):
//  - if sensor and powered: toggle trigger state
//  - otherwise: clear any pending pad selection
function handlePartBodyTap(id){
  const p=placed.find(p=>p.id===id);
  if(p && powerOn && M[p.type] && M[p.type].cat==='controls'){
    if(triggered.has(id)) triggered.delete(id); else triggered.add(id);
    chime(triggered.has(id)?880:523,0.08);
    simulate();
    return;
  }
  if(selectedPad){
    selectedPad=null; refreshSelection(); showStatus('');
  } else {
    showStatus('Tap + or \u2212 to tape');
  }
}

function refreshSelection(){
  document.querySelectorAll('.part .pad').forEach(pd=>{
    const partEl=pd.closest('.part');
    const pid=partEl?+partEl.dataset.id:null;
    const match = selectedPad && pid===selectedPad.id && pd.dataset.pol===selectedPad.pol;
    pd.classList.toggle('sel', !!match);
  });
  document.querySelectorAll('.part').forEach(el=>{
    const match = selectedPad && +el.dataset.id===selectedPad.id;
    el.classList.toggle('selected', !!match);
  });
}

// ============== TAPE ==============
function drawTape(){
  const svg=document.getElementById('tapes');
  while(svg.firstChild) svg.removeChild(svg.firstChild);

  conns.forEach((c,i)=>{
    const f = c.aPad ? padPos(c.a, c.aPad) : partCenter(c.a);
    const t = c.bPad ? padPos(c.b, c.bPad) : partCenter(c.b);
    if(!f||!t) return;
    const bend=c.bend||{x:(f.x+t.x)/2,y:(f.y+t.y)/2};
    const d='M '+f.x+' '+f.y+' L '+bend.x+' '+f.y+' L '+bend.x+' '+bend.y+' L '+t.x+' '+bend.y+' L '+t.x+' '+t.y;

    // --- Space Tape (5mm wide, dark gunmetal with green-silver sheen) ---
    // 1) shadow under the tape
    addPath(svg,d,'rgba(20,20,20,.18)',14,1,'butt');
    // 2) dark gunmetal base (5mm = 10px at 2px/mm)
    addPath(svg,d,'#4A4E50',10,1,'butt');
    // 3) darker edge shading
    addPath(svg,d,'rgba(30,35,30,.45)',10,1,'butt');
    // 4) subtle green-silver metallic sheen down center
    addPath(svg,d,'rgba(160,175,165,.55)',3,.9,'butt');
    // 5) bright center highlight
    addPath(svg,d,'rgba(200,210,200,.3)',1,.85,'butt');

    // 6) invisible fat hit-target for click/long-press
    const hit=addPath(svg,d,'rgba(0,0,0,0.001)',20,1,'butt');
    hit.classList.add('tape-clickable');
    hit.dataset.idx=i; hit.dataset.a=c.a; hit.dataset.b=c.b;
    hit.addEventListener('dblclick',()=>deleteConn(i));
    let lpTimer, lpStart;
    hit.addEventListener('pointerdown',e=>{
      lpStart={x:e.clientX,y:e.clientY};
      lpTimer=setTimeout(()=>deleteConn(i),600);
    });
    hit.addEventListener('pointerup',()=>clearTimeout(lpTimer));
    hit.addEventListener('pointercancel',()=>clearTimeout(lpTimer));
    hit.addEventListener('pointermove',e=>{
      if(!lpStart) return;
      if(Math.abs(e.clientX-lpStart.x)>4||Math.abs(e.clientY-lpStart.y)>4) clearTimeout(lpTimer);
    });

    // 7) endpoint pads (8mm = 16px, tape centered on pad)
    addSquare(svg,f.x,f.y,'#3A3E40');
    addSquare(svg,t.x,t.y,'#3A3E40');

    // 7) draggable bend handle — pick me up to re-route the tape
    addBendHandle(svg, c, i, bend);
  });
  // Check for tape crossings after drawing
  checkTapeCrossings();
}

// ============== TAPE CROSSING DETECTION ==============
function segIntersects(ax1,ay1,ax2,ay2,bx1,by1,bx2,by2){
  // Returns true if segment (ax1,ay1)-(ax2,ay2) crosses (bx1,by1)-(bx2,by2)
  const d=(bx2-bx1)*(ay1-ay2)-(ax1-ax2)*(by2-by1);
  if(Math.abs(d)<0.001) return false;
  const t=((bx1-ax1)*(ay1-ay2)-(ax1-ax2)*(by1-ay1))/d;
  const u=((bx2-bx1)*(by1-ay1)-(bx1-ax1)*(by2-by1))/d;
  return t>0.01 && t<0.99 && u>0.01 && u<0.99;
}
function tapeSegments(c){
  const f = c.aPad ? padPos(c.a, c.aPad) : partCenter(c.a);
  const t = c.bPad ? padPos(c.b, c.bPad) : partCenter(c.b);
  if(!f||!t) return [];
  const bend=c.bend||{x:(f.x+t.x)/2,y:(f.y+t.y)/2};
  const pts=[f,{x:bend.x,y:f.y},{x:bend.x,y:bend.y},{x:t.x,y:bend.y},t];
  const segs=[];
  for(let i=0;i<pts.length-1;i++){
    const a=pts[i], b=pts[i+1];
    if(Math.abs(a.x-b.x)>0.5||Math.abs(a.y-b.y)>0.5){
      segs.push([a.x,a.y,b.x,b.y]);
    }
  }
  return segs;
}
let _crossingTimeout=null;
function checkTapeCrossings(){
  if(conns.length<2) return;
  let hasCrossing=false;
  for(let i=0;i<conns.length && !hasCrossing;i++){
    const segsA=tapeSegments(conns[i]);
    for(let j=i+1;j<conns.length && !hasCrossing;j++){
      const segsB=tapeSegments(conns[j]);
      for(const sa of segsA){
        for(const sb of segsB){
          if(segIntersects(sa[0],sa[1],sa[2],sa[3],sb[0],sb[1],sb[2],sb[3])){
            hasCrossing=true; break;
          }
        }
        if(hasCrossing) break;
      }
    }
  }
  const warn=document.getElementById('tapeWarning');
  if(!warn) return;
  if(hasCrossing){
    warn.classList.add('show');
    clearTimeout(_crossingTimeout);
    _crossingTimeout=setTimeout(()=>warn.classList.remove('show'),4000);
  } else {
    warn.classList.remove('show');
    clearTimeout(_crossingTimeout);
  }
}

function addBendHandle(svg, conn, idx, bend){
  const g=document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('class','bend-handle');
  g.setAttribute('transform','translate('+bend.x+','+bend.y+')');
  // outer ring (drag affordance) — terracotta so it reads as UI, not silver tape
  const ring=document.createElementNS('http://www.w3.org/2000/svg','circle');
  ring.setAttribute('r',7); ring.setAttribute('fill','#FAFAF8');
  ring.setAttribute('stroke','#E8350F'); ring.setAttribute('stroke-width',1.25);
  // inner dot
  const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
  dot.setAttribute('r',2.5); dot.setAttribute('fill','#E8350F');
  g.appendChild(ring); g.appendChild(dot);
  g.style.cursor='move';
  g.style.pointerEvents='all';
  svg.appendChild(g);

  g.addEventListener('pointerdown',e=>{
    e.stopPropagation();
    const pid=e.pointerId;
    try{ g.setPointerCapture(pid); }catch(_){}
    const cv=document.getElementById('canvas');
    const r=cv.getBoundingClientRect();
    const mv=(ev)=>{
      if(ev.pointerId!==pid) return;
      conn.bend = {
        x: Math.max(10, Math.min(r.width-10, ev.clientX - r.left)),
        y: Math.max(10, Math.min(r.height-10, ev.clientY - r.top))
      };
      drawTape();
    };
    const up=(ev)=>{
      if(ev.pointerId!==pid) return;
      try{ g.releasePointerCapture(pid); }catch(_){}
      g.removeEventListener('pointermove',mv);
      g.removeEventListener('pointerup',up);
      g.removeEventListener('pointercancel',up);
      logEvent('bend',{idx, x:conn.bend.x, y:conn.bend.y});
    };
    g.addEventListener('pointermove',mv);
    g.addEventListener('pointerup',up);
    g.addEventListener('pointercancel',up);
  });
}

function addPath(svg,d,stroke,w,op,cap){
  const p=document.createElementNS('http://www.w3.org/2000/svg','path');
  p.setAttribute('d',d); p.setAttribute('stroke',stroke); p.setAttribute('stroke-width',w);
  p.setAttribute('fill','none'); p.setAttribute('opacity',op);
  p.setAttribute('stroke-linecap',cap||'square'); p.setAttribute('stroke-linejoin','miter');
  svg.appendChild(p); return p;
}

function addDot(svg,x,y,color){
  const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
  c.setAttribute('cx',x); c.setAttribute('cy',y); c.setAttribute('r',2.5);
  c.setAttribute('fill',color);
  c.setAttribute('pointer-events','none');
  svg.appendChild(c);
  return c;
}

function addSquare(svg,x,y,color){
  // 8mm pad = 16px at 2px/mm, but visually 12px looks good
  const sz=12;
  const r=document.createElementNS('http://www.w3.org/2000/svg','rect');
  r.setAttribute('x',x-sz/2); r.setAttribute('y',y-sz/2);
  r.setAttribute('width',sz); r.setAttribute('height',sz);
  r.setAttribute('fill',color);
  r.setAttribute('pointer-events','none');
  svg.appendChild(r);
  return r;
}

function partCenter(id){
  const p=placed.find(p=>p.id===id);
  if(!p) return null;
  const m=M[p.type];
  const sz=rotatedSize(m, p.rot||0);
  return {x:p.x+sz.w/2,y:p.y+sz.h/2};
}

function padPos(id, pol){
  const p=placed.find(p=>p.id===id);
  if(!p) return null;
  const m=M[p.type];
  const pad=(m.pads||[]).find(pd=>pd.pol===pol);
  if(!pad) return partCenter(id);
  const tp=transformPad(pad, m, p.rot||0, p.flipped||false);
  return {x:p.x+tp.x, y:p.y+tp.y};
}

// ============== DELETE ==============
function deletePart(id){
  const el=document.querySelector('.part[data-id="'+id+'"]');
  const part=placed.find(p=>p.id===id);
  if(el) el.remove();
  if(part && inventory[part.type]!==undefined) inventory[part.type]++;
  placed=placed.filter(p=>p.id!==id);
  conns=conns.filter(c=>c.a!==id&&c.b!==id);
  triggered.delete(id);
  if(selectedPad && selectedPad.id===id) selectedPad=null;
  updateInventoryUI();
  sndDel(); drawTape(); updateLegend(); simulate();
  logEvent('delete_part',{id});
  if(!placed.length) document.getElementById('hint').style.display='';
}

function deleteConn(i){ const c=conns[i]; conns.splice(i,1); sndDel(); drawTape(); updateLegend(); simulate(); if(c) logEvent('delete_tape',{a:c.a,aPad:c.aPad,b:c.b,bPad:c.bPad}); }

function clearAll(){
  if(!placed.length && !conns.length) { return; }
  placed=[]; conns=[]; triggered.clear(); selectedPad=null;
  inventory=Object.assign({},INV_START);
  updateInventoryUI();
  document.querySelectorAll('.part').forEach(e=>e.remove());
  drawTape();
  updateLegend();
  document.getElementById('hint').style.display='';
  showStatus('');
  sndDel();
}

// ============== POWER + SIMULATION ==============
function togglePower(){
  powerOn=!powerOn;
  if(powerOn) poweredAtLeastOnce=true;
  document.getElementById('pwrTog').classList.toggle('on',powerOn);
  document.getElementById('pwrLbl').textContent=powerOn?'On':'Off';
  sndPower(powerOn);
  updateLegend();
  simulate();
  logEvent('power',{on:powerOn});
}

function simulate(){
  const energized=new Set();
  if(powerOn){
    const sources=placed.filter(p=>p.type==='powerpad'||p.type==='power_box_adaptor').map(p=>p.id);
    if(sources.length){
      const adj=new Map();
      conns.forEach(c=>{
        if(!adj.has(c.a)) adj.set(c.a,[]);
        if(!adj.has(c.b)) adj.set(c.b,[]);
        adj.get(c.a).push(c.b); adj.get(c.b).push(c.a);
      });
      const visited=new Set(), q=[...sources];
      sources.forEach(s=>{ visited.add(s); energized.add(s); });
      while(q.length){
        const cur=q.shift();
        const neighbors=adj.get(cur)||[];
        for(const n of neighbors){
          if(visited.has(n)) continue;
          const np=placed.find(p=>p.id===n);
          if(!np) continue;
          if(M[np.type]&&M[np.type].cat==='controls'){
            // NC (normally closed) passes current unless triggered
            // NO (normally open) and all other controls block unless triggered
            const isNC = np.type==='lever_switch_nc';
            const blocked = isNC ? triggered.has(n) : !triggered.has(n);
            if(blocked){ visited.add(n); continue; }
          }
          visited.add(n); energized.add(n); q.push(n);
        }
      }
    }
  }

  document.querySelectorAll('.part').forEach(el=>{
    el.classList.remove('lit','buzzing','spinning','powered');
    const id=+el.dataset.id;
    if(!energized.has(id)) return;
    const t=el.dataset.type;
    if(t==='glow_light') el.classList.add('lit');
    else if(t==='buzzer'||t==='sound_module_setup') el.classList.add('buzzing','powered');
    else if(t==='motor') el.classList.add('spinning','powered');
    else el.classList.add('powered');
  });

  const newlyLit=placed.filter(p=>energized.has(p.id)&&M[p.type]&&M[p.type].cat==='animators');
  if(newlyLit.length && !window._wasLit){
    window._wasLit=true;
    newlyLit.forEach(p=>sparkleAt(p.x+M[p.type].w/2,p.y+M[p.type].h/2,8));
    chime(523,0.1); setTimeout(()=>chime(659,0.12),70); setTimeout(()=>chime(784,0.18),140);
  } else if(!newlyLit.length){
    window._wasLit=false;
  }
}

// ============== SPARKLES ==============
function sparkleAt(x,y,count=6){
  const cv=document.getElementById('canvas');
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.className='sparkle';
    const angle=(Math.PI*2*i)/count;
    const dist=30+Math.random()*20;
    s.style.left=x+'px'; s.style.top=y+'px';
    s.style.setProperty('--dx',Math.cos(angle)*dist+'px');
    s.style.setProperty('--dy',Math.sin(angle)*dist+'px');
    cv.appendChild(s);
    setTimeout(()=>s.remove(),950);
  }
}
function sparkleAtPads(a,b){
  const fa=padPos(a.id,a.pol), fb=padPos(b.id,b.pol);
  if(!fa||!fb) return;
  sparkleAt((fa.x+fb.x)/2,(fa.y+fb.y)/2,6);
}

// ============== STATUS ==============
let statusTimer;
function showStatus(msg){
  const s=document.getElementById('status');
  if(!msg){ s.classList.remove('show'); return; }
  s.textContent=msg;
  s.classList.add('show');
  clearTimeout(statusTimer);
  statusTimer=setTimeout(()=>s.classList.remove('show'),1800);
}

// ============== SAVE / LOAD / EXPORT / COMPASS ==============
const STORE_KEY='makeon_studio_projects';
const getProjects=()=>{ try{ return JSON.parse(localStorage.getItem(STORE_KEY)||'[]'); }catch(e){ return []; } };
const putProjects=(arr)=>{ try{ localStorage.setItem(STORE_KEY,JSON.stringify(arr)); }catch(e){} };

function buildSnapshot(){
  return {
    v:1,
    app:'MakeON Studio',
    name: currentProjectName || '',
    ts: Date.now(),
    session: {
      startedAt: SESSION_START,
      durationMs: Date.now()-SESSION_START,
      poweredAtLeastOnce
    },
    circuit:{
      placed: placed.map(p=>({id:p.id,type:p.type,x:Math.round(p.x),y:Math.round(p.y)})),
      conns: conns.map(c=>({a:c.a,b:c.b,aPad:c.aPad,bPad:c.bPad})),
      triggered: Array.from(triggered),
      powerOn
    },
    inventory: Object.assign({},inventory),
    metadata:{
      partCount: placed.length,
      tapeCount: conns.length,
      uniqueTypes: Array.from(new Set(placed.map(p=>p.type))),
      powered: powerOn,
      completed: poweredAtLeastOnce && conns.length>0
    },
    history: history.slice()
  };
}

async function buildThumbnail(maxSide){
  // Render current canvas to PNG (SVG + parts -> canvas)
  const cv=document.getElementById('canvas');
  const r=cv.getBoundingClientRect();
  const W=r.width, H=r.height;
  const scale=Math.min((maxSide||420)/Math.max(W,H),1);
  const cw=Math.round(W*scale), ch=Math.round(H*scale);
  const c=document.createElement('canvas'); c.width=cw; c.height=ch;
  const ctx=c.getContext('2d');
  ctx.fillStyle='#FAFAF8'; ctx.fillRect(0,0,cw,ch);
  // grid
  ctx.strokeStyle='rgba(26,26,26,.08)'; ctx.lineWidth=1;
  for(let x=0;x<cw;x+=40*scale){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,ch); ctx.stroke(); }
  for(let y=0;y<ch;y+=40*scale){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(cw,y); ctx.stroke(); }
  // tapes — silver style
  conns.forEach(c2=>{
    const f = c2.aPad ? padPos(c2.a,c2.aPad) : partCenter(c2.a);
    const t = c2.bPad ? padPos(c2.b,c2.bPad) : partCenter(c2.b);
    if(!f||!t) return;
    const bend=c2.bend||{x:(f.x+t.x)/2,y:(f.y+t.y)/2};
    const pts=[[f.x,f.y],[bend.x,f.y],[bend.x,bend.y],[t.x,bend.y],[t.x,t.y]];
    const stroke=(color,width)=>{
      ctx.strokeStyle=color; ctx.lineWidth=width*scale; ctx.lineCap='butt'; ctx.lineJoin='miter';
      ctx.beginPath(); ctx.moveTo(pts[0][0]*scale,pts[0][1]*scale);
      for(let i=1;i<pts.length;i++) ctx.lineTo(pts[i][0]*scale,pts[i][1]*scale);
      ctx.stroke();
    };
    stroke('rgba(20,20,20,.18)',14);
    stroke('#4A4E50',10);
    stroke('rgba(30,35,30,.45)',10);
    stroke('rgba(160,175,165,.55)',3);
    [f,t].forEach(pt=>{ ctx.fillStyle='#3A3E40'; ctx.fillRect((pt.x-6)*scale,(pt.y-6)*scale,12*scale,12*scale); });
  });
  // parts — draw labeled rectangles (lightweight; we skip images to avoid async)
  placed.forEach(p=>{
    const m=M[p.type];
    const rot=p.rot||0; const flipped=p.flipped||false;
    const sz=rotatedSize(m, rot);
    const x=p.x*scale, y=p.y*scale, w=sz.w*scale, h=sz.h*scale;
    ctx.fillStyle='#ffffff'; ctx.fillRect(x,y,w,h);
    ctx.strokeStyle='#1A1A1A'; ctx.lineWidth=1; ctx.strokeRect(x,y,w,h);
    ctx.fillStyle='#1A1A1A';
    ctx.font='bold '+Math.max(8,10*scale)+'px JetBrains Mono, monospace';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(m.name.toUpperCase(),x+w/2,y+h/2);
    // pads — use transformed positions
    (m.pads||[]).forEach(pad=>{
      const tp=transformPad(pad, m, rot, flipped);
      const px=x+tp.x*scale, py=y+tp.y*scale;
      const isNeu=tp.pol==='in'||tp.pol==='out';
      const isCh=/^c\di|^c\do/.test(tp.pol);
      ctx.fillStyle=tp.pol==='+'?'#6B1D2A': tp.pol==='-'?'#1A1A1A': isCh?'#6B1D2A':'#EFF512';
      ctx.beginPath(); ctx.arc(px,py,(isNeu||isCh?5:3)*scale,0,Math.PI*2); ctx.fill();
      if(isNeu){ctx.fillStyle='#000';ctx.font='bold '+(6*scale)+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(tp.pol.toUpperCase(),px,py);}
      if(isCh){ctx.fillStyle='#fff';ctx.font='bold '+(5*scale)+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(tp.pol[1]+(tp.pol[2]==='i'?'IN':'OUT'),px,py);}
    });
  });
  return c.toDataURL('image/png');
}

// ============== CAPTURE (Miro-style PNG export) ==============
async function captureBoard(){
  if(!placed.length){ showStatus('Nothing to capture'); return; }
  showStatus('Capturing\u2026');
  try{
    const dataUrl=await buildThumbnail(2400); // high-res
    const a=document.createElement('a');
    const stamp=new Date().toISOString().slice(0,16).replace(/[:T-]/g,'');
    a.download='makeon-board-'+stamp+'.png';
    a.href=dataUrl;
    document.body.appendChild(a); a.click(); a.remove();
    showStatus('Captured');
    logEvent('capture',{parts:placed.length,tapes:conns.length});
  }catch(e){
    showStatus('Capture failed');
  }
}

// ============== SCREEN RECORD ==============
let _recorder=null, _recChunks=[];
async function toggleRecord(){
  const btn=document.getElementById('recordBtn');
  if(_recorder && _recorder.state==='recording'){
    _recorder.stop(); btn.textContent='\uD83D\uDD34 Rec'; btn.style.color='';
    showStatus('Saving recording\u2026'); return;
  }
  try{
    const canvas=document.getElementById('canvas');
    const stream=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:'browser'},audio:false});
    _recChunks=[];
    _recorder=new MediaRecorder(stream,{mimeType:'video/webm'});
    _recorder.ondataavailable=e=>{ if(e.data.size>0) _recChunks.push(e.data); };
    _recorder.onstop=()=>{
      stream.getTracks().forEach(t=>t.stop());
      const blob=new Blob(_recChunks,{type:'video/webm'});
      const a=document.createElement('a');
      const stamp=new Date().toISOString().slice(0,16).replace(/[:T-]/g,'');
      a.download='makeon-rec-'+stamp+'.webm';
      a.href=URL.createObjectURL(blob);
      document.body.appendChild(a); a.click(); a.remove();
      showStatus('Recording saved');
      btn.textContent='\uD83D\uDD34 Rec'; btn.style.color='';
    };
    _recorder.start();
    btn.textContent='\u23F9 Stop'; btn.style.color='var(--lava)';
    showStatus('Recording\u2026');
  }catch(e){
    showStatus('Recording cancelled');
  }
}

function openSaves(){
  renderSaveList();
  document.getElementById('saveName').value = currentProjectName || '';
  document.getElementById('saveDrawer').setAttribute('aria-hidden','false');
}
function closeSaves(){ document.getElementById('saveDrawer').setAttribute('aria-hidden','true'); }

function renderSaveList(){
  const list=document.getElementById('saveList');
  const projects=getProjects().sort((a,b)=>b.ts-a.ts);
  if(!projects.length){ list.innerHTML='<div class="save-empty">No saved projects yet</div>'; return; }
  list.innerHTML=projects.map(p=>{
    const d=new Date(p.ts); const ds=d.toLocaleDateString()+' '+d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    return '<div class="save-item">'+
      '<div class="save-item-name">'+(p.name||'(untitled)')+'</div>'+
      '<div class="save-item-meta">'+(p.metadata?p.metadata.partCount+'p \u00B7 '+p.metadata.tapeCount+'t':'')+'</div>'+
      '<button class="save-item-btn" onclick="loadProject(\\''+p.id+'\\')">Load</button>'+
      '<button class="save-item-btn danger" onclick="deleteProject(\\''+p.id+'\\')">Del</button>'+
    '</div>';
  }).join('');
}

function saveCurrent(){
  const name=(document.getElementById('saveName').value||'').trim();
  if(!name){ showStatus('Name required'); return; }
  currentProjectName=name;
  const snap=buildSnapshot();
  snap.id='p_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6);
  const list=getProjects().filter(p=>p.name!==name);
  list.push(snap);
  putProjects(list);
  showStatus('Saved "'+name+'"');
  renderSaveList();
  logEvent('save',{name});
}

function loadProject(id){
  const p=getProjects().find(x=>x.id===id);
  if(!p) return;
  clearAll();
  currentProjectName=p.name||'';
  (p.circuit.placed||[]).forEach(pp=>{
    placed.push({id:pp.id,type:pp.type,x:pp.x,y:pp.y});
    if(inventory[pp.type]>0) inventory[pp.type]--;
    if(nxId<=pp.id) nxId=pp.id+1;
    renderPart(placed[placed.length-1]);
  });
  conns=(p.circuit.conns||[]).map(c=>({a:c.a,b:c.b,aPad:c.aPad||'+',bPad:c.bPad||'-'}));
  triggered=new Set(p.circuit.triggered||[]);
  updateInventoryUI(); drawTape(); updateLegend(); simulate();
  if(placed.length) document.getElementById('hint').style.display='none';
  closeSaves();
  showStatus('Loaded "'+p.name+'"');
}

function deleteProject(id){
  putProjects(getProjects().filter(p=>p.id!==id));
  renderSaveList();
}

async function exportJSON(){
  const snap=buildSnapshot();
  try{ snap.thumbnail=await buildThumbnail(480); }catch(e){}
  const blob=new Blob([JSON.stringify(snap,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  const safeName=(currentProjectName||'makeon-circuit').replace(/[^a-z0-9_-]+/gi,'_');
  a.href=url; a.download=safeName+'.json';
  document.body.appendChild(a); a.click();
  setTimeout(()=>{ URL.revokeObjectURL(url); a.remove(); },100);
  showStatus('Exported JSON');
}

function importJSON(){
  const inp=document.getElementById('importFile');
  inp.onchange=(ev)=>{
    const f=ev.target.files && ev.target.files[0]; if(!f) return;
    const r=new FileReader();
    r.onload=()=>{
      try{
        const snap=JSON.parse(r.result);
        if(!snap || !snap.circuit) throw new Error('Invalid');
        // treat imported snapshot like a loaded project
        loadProjectFromSnap(snap);
        showStatus('Imported "'+(snap.name||'circuit')+'"');
      }catch(e){ showStatus('Import failed'); }
    };
    r.readAsText(f);
    inp.value='';
  };
  inp.click();
}
function loadProjectFromSnap(p){
  clearAll();
  currentProjectName=p.name||'';
  (p.circuit.placed||[]).forEach(pp=>{
    placed.push({id:pp.id,type:pp.type,x:pp.x,y:pp.y});
    if(inventory[pp.type]>0) inventory[pp.type]--;
    if(nxId<=pp.id) nxId=pp.id+1;
    renderPart(placed[placed.length-1]);
  });
  conns=(p.circuit.conns||[]).map(c=>({a:c.a,b:c.b,aPad:c.aPad||'+',bPad:c.bPad||'-'}));
  triggered=new Set(p.circuit.triggered||[]);
  updateInventoryUI(); drawTape(); updateLegend(); simulate();
  if(placed.length) document.getElementById('hint').style.display='none';
  closeSaves();
}

async function sendToPaths(){
  const snap=buildSnapshot();
  try{ snap.thumbnail=await buildThumbnail(480); }catch(e){}
  // 1) postMessage to parent (iframe embed case — Paths app hosting Studio)
  let delivered=false;
  try{
    if(window.parent && window.parent!==window){
      window.parent.postMessage({type:'makeon:studio:save',payload:snap},'*');
      delivered=true;
    }
  }catch(e){}
  // 2) opener case (popup from Paths)
  try{
    if(window.opener){
      window.opener.postMessage({type:'makeon:studio:save',payload:snap},'*');
      delivered=true;
    }
  }catch(e){}
  // 3) store locally in a "paths_outbox" so Paths (Inventure / sentient navigator) can read on next visit
  try{
    const outbox=JSON.parse(localStorage.getItem('paths_outbox')||'[]');
    snap.id=snap.id||('p_'+Date.now().toString(36));
    outbox.push(snap);
    localStorage.setItem('paths_outbox',JSON.stringify(outbox.slice(-20)));
  }catch(e){}
  // 4) also offer a JSON download as a fallback (if standalone)
  if(!delivered){ await exportJSON(); }
  showStatus(delivered?'Sent to Paths':'Exported for Paths');
  logEvent('send_paths',{delivered});
}

init();
</script>
</body>
</html>`;

// Single source of truth
fs.writeFileSync('/sessions/magical-epic-davinci/MakeON-Studio.html', html);

// Only 3 canonical deploy targets:
// 1. User preview on Desktop
// 2. panoprax.com deploy bundle (auth-gated version filename: panoprax-studio.html)
// 3. Afterhours Craft Shopify host
const DESKTOP = '/sessions/magical-epic-davinci/mnt/Desktop/MakeON-Studio.html';
const PANOPRAX = '/sessions/magical-epic-davinci/mnt/PANOPRAX/05 Deploy & Packages/deploy/panoprax-studio.html';
const SHOPIFY = '/sessions/magical-epic-davinci/mnt/Desktop/Afterhours-Craft-Shopify/makeon-studio.html';

fs.writeFileSync(DESKTOP, html);
fs.writeFileSync(SHOPIFY, html);

// panoprax-studio.html needs auth gate + crumb injection
const authGate = `<head>
<script>
(function(){
  try{
    var s = localStorage.getItem('panoprax_session');
    if(!s){ window.location.replace('panoprax-app.html?next=studio&reason=auth'); }
  }catch(e){}
})();
</script>
<meta charset="UTF-8">`;
let panopraxHtml = html.replace('<head>\n<meta charset="UTF-8">', authGate);
const oldCrumb = '<div class="logo-text">Make<b>ON</b></div>\n    <div class="crumb">Studio \u00B7 v1</div>';
const newCrumb = [
  '<a href="index.html" class="logo-text" style="text-decoration:none;color:inherit;display:inline-flex;align-items:center;gap:6px;" aria-label="Back to Panoprax">',
  '<span style="font-family:\\\'JetBrains Mono\\\',monospace;font-size:11px;color:#A8998A;letter-spacing:1.5px">&larr;</span>',
  '<span>Make<b>ON</b></span></a>\n    <div class="crumb">Panoprax &middot; Studio</div>'
].join('');
panopraxHtml = panopraxHtml.replace(oldCrumb, newCrumb);
fs.writeFileSync(PANOPRAX, panopraxHtml);

console.log('Built', html.length, 'bytes');
console.log('Deployed to:');
console.log(' -', DESKTOP);
console.log(' -', PANOPRAX, '(auth-gated)');
console.log(' -', SHOPIFY);
