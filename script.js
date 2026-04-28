function isMobileReadmeNoAutoOpen(){return window.matchMedia && window.matchMedia("(max-width: 768px)").matches;}
const items = {
  work: folder('Work', 'C:\\Portfolio\\Work', [childFile('work-readme','README.note'), childFile('workportfolio','portfolio.html'), childFile('current-waylay-website','waylay.html'), childFile('waylay-waybackmachine','waybackmachine.html')]),
  workportfolio: { type:'external', title:'portfolio.html', address:'https://sites.google.com/view/elooi-de-buck', url:'https://sites.google.com/view/elooi-de-buck' },
  'current-waylay-website': { type:'external', title:'waylay.html', address:'https://www.waylay.io/', url:'https://www.waylay.io/' },
  'waylay-waybackmachine': { type:'external', title:'waybackmachine.html', address:'https://web.archive.org/web/20220801000000*/Waylay.io', url:'https://web.archive.org/web/20220801000000*/Waylay.io' },
  'work-readme': { type:'doc', title:'README.note', address:'C:\\Portfolio\\Work\\README.note', html:`<div class="file-preview doc-preview readme-note"><h2>README.note</h2><p>Hi, feel free to have a look at what I've been making for Waylay these last few years. The portfolio website gives a quick glance at the sort of graphics, videos, and web-projects I made. But because I like you, I'll also just let you have a look at the current Waylay website, or even explore the whole journey that has been maintaining and updating that website - via the wayback machine. Don't forget to have fun exploring!</p></div>` },
  'web-design': folder('Web Design', 'C:\\Portfolio\\Work\\Web Design', [childFile('web-project-01','portfolio-redesign.website'), childFile('web-project-02','landing-page-concept.website'), childFile('web-notes','replace-with-your-web-projects.txt')]),
  'graphic-design': folder('Graphic Design', 'C:\\Portfolio\\Work\\Graphic Design', [childFile('graphic-project-01','brand-system-placeholder.ai'), childFile('graphic-project-02','poster-series-placeholder.psd'), childFile('graphic-notes','replace-with-your-design-work.txt')]),
  'motion-design': folder('Motion Design', 'C:\\Portfolio\\Work\\Motion Design', [childFile('motion-project-01','motion-reel-placeholder.mp4'), childFile('motion-project-02','social-animation-placeholder.mov'), childFile('motion-notes','replace-with-your-motion-work.txt')]),
  freelance: folder('Freelance', 'C:\\Portfolio\\Freelance', [childFolder('web-projects','Web Projects')]),
  'web-projects': folder('Web Projects', 'C:\\Portfolio\\Freelance\\Web Projects', [childFolder('wegenweere','Wegenweere'), childFolder('avansa','Avansa')]),
  wegenweere: folder('Wegenweere', 'C:\\Portfolio\\Freelance\\Web Projects\\Wegenweere', [childFile('wegenweere-homepage','homepage.website'), childFile('wegenweere-mobile','mobile-layout.website'), childFile('wegenweere-notes','replace-with-wegenweere-assets.txt')]),
  avansa: folder('Avansa', 'C:\\Portfolio\\Freelance\\Web Projects\\Avansa', [childFile('avansa-landing','landing-page.website'), childFile('avansa-case-study','case-study-draft.txt'), childFile('avansa-notes','replace-with-avansa-assets.txt')]),
  art: folder('Art', 'C:\Portfolio\Art', [childFile('art-readme','README.note'), childFile('observational','observational.exe'), childFile('experimental','experimental.exe'), childFile('diary-donotreadthis','diary_DONOTREADTHIS.exe')]),
  tattoo: folder('Tattoo', 'C:\Portfolio\Tattoo', [childFile('tattoo-flash-01','tattoo-flash-placeholder.png'), childFile('tattoo-piece-01','tattoo-piece-placeholder.png'), childFile('tattoo-instagram','instagram-link-placeholder.url')]),
  'art-readme': { type:'doc', title:'README.note', address:'C:\Portfolio\Art\README.note', html:`<div class="file-preview doc-preview readme-note"><h2>README.note</h2><p>Hi there, you've stumbled onto my private collection of self-made artworks. This is a non-exhaustive list of drawings and free-time projects that I made, feel free to peruse.</p></div>` },
  observational: { type:'book', title:'observational.exe', address:'C:\Portfolio\Art\observational.exe', bookKey:'observational' },
  experimental: { type:'book', title:'experimental.exe', address:'C:\Portfolio\Art\experimental.exe', bookKey:'experimental' },
  'diary-donotreadthis': { type:'book', title:'diary_DONOTREADTHIS.exe', address:'C:\Portfolio\Art\diary_DONOTREADTHIS.exe', bookKey:'diary' },
  about: folder('About', 'C:\\Portfolio\\About', [childFile('curriculum-vitae','Curriculum Vitae.doc'), childFile('me','Me.png'), childFile('bio','bio.txt'), childFile('tools','tools-and-skills.txt')]),
  paint: { type:'paint', title:'Paint', address:'C:\\Portfolio\\Paint', html:`<div class="paint-app"><div class="paint-toolbar"><label>Brush <input id="paint-size" type="range" min="1" max="30" value="6"></label><label>Color <input id="paint-color" type="color" value="#000000"></label><button class="xp-action" id="paint-eraser" type="button">Eraser</button><button class="xp-action" id="paint-clear" type="button">Clear</button><button class="xp-action" id="paint-download" type="button">Save PNG</button></div><canvas id="paint-canvas" width="760" height="430" aria-label="Drawing canvas"></canvas><section class="send-drawing-panel"><div class="send-drawing-header"><strong>Send me your drawing</strong><span>Optional - share your masterpiece when you are done.</span></div><form class="send-drawing-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST"><input type="hidden" name="drawingDataUrl" id="drawing-data-url"><label>Your email, optional<input name="email" type="email" placeholder="you@example.com"></label><label>Message, optional<textarea name="message" placeholder="I drew this for you!"></textarea></label><button class="xp-action send-drawing-button" type="submit">Send my drawing</button><p class="contact-note">Replace <code>https://formspree.io/f/YOUR_FORM_ID</code> with your own form endpoint. The form includes the drawing as a PNG data URL.</p></form></section></div>` },
  'missing-skills': { type:'bsod', title:'Missing Skills', address:'C:\\Recycle Bin\\Missing Skills', html:`<div class="bsod-screen"><div class="bsod-title">Windows</div><p>A fatal exception 404 has occurred at PORTFOLIO:0000MISSING.</p><p><strong>Missing skills not found.</strong></p><p>The requested weakness could not be located. The designer may have moved it, renamed it, or replaced it with stubborn curiosity.</p><button class="bsod-back" type="button" data-close-bsod>← Back</button></div>` },
  contact: { type:'doc', title:'contact', address:'C:\\Portfolio\\contact', html:`<div class="file-preview"><h2>Contact</h2><form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST"><label>Name<input name="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea name="message" placeholder="Write your message here"></textarea></label><button class="xp-action" type="submit">Send message</button><p class="contact-note">Replace <code>https://formspree.io/f/YOUR_FORM_ID</code> with your own form endpoint.</p></form></div>` },
  'curriculum-vitae': {type:'doc', title:'Curriculum Vitae.doc', address:'C:\\Portfolio\\About\\Curriculum Vitae.doc', asset:'assets/about/curriculum-vitae.doc', html:`<div class="file-preview doc-preview"><h2>Curriculum Vitae.doc</h2><p>This is a placeholder CV preview.</p><p>Replace <code>assets/about/curriculum-vitae.doc</code> with your real CV file.</p><a class="xp-action" href="assets/about/curriculum-vitae.doc" download>Download placeholder document</a></div>`},
  me: {type:'image', title:'Me.png', address:'C:\\Portfolio\\About\\Me.png', asset:'assets/about/me.png', html:`<div class="file-preview image-preview"><img src="assets/about/me.png" alt="Placeholder portrait" /><p>Replace <code>assets/about/me.png</code> with your actual image.</p></div>`},
  'web-project-01': placeholder('portfolio-redesign.website','assets/work/web-design/portfolio-redesign.website','Placeholder for a professional web design project.'),
  'web-project-02': placeholder('landing-page-concept.website','assets/work/web-design/landing-page-concept.website','Placeholder for another web design project.'),
  'web-notes': placeholder('replace-with-your-web-projects.txt','assets/work/web-design/replace-with-your-web-projects.txt'),
  'graphic-project-01': placeholder('brand-system-placeholder.ai','assets/work/graphic-design/brand-system-placeholder.ai','Placeholder for a brand or identity project.'),
  'graphic-project-02': placeholder('poster-series-placeholder.psd','assets/work/graphic-design/poster-series-placeholder.psd','Placeholder for a graphic design project.'),
  'graphic-notes': placeholder('replace-with-your-design-work.txt','assets/work/graphic-design/replace-with-your-design-work.txt'),
  'motion-project-01': placeholder('motion-reel-placeholder.mp4','assets/work/motion-design/motion-reel-placeholder.mp4','Placeholder for a motion design video.'),
  'motion-project-02': placeholder('social-animation-placeholder.mov','assets/work/motion-design/social-animation-placeholder.mov','Placeholder for an animation or motion asset.'),
  'motion-notes': placeholder('replace-with-your-motion-work.txt','assets/work/motion-design/replace-with-your-motion-work.txt'),
  'wegenweere-homepage': placeholder('homepage.website','assets/freelance/web-projects/wegenweere/homepage.website'),
  'wegenweere-mobile': placeholder('mobile-layout.website','assets/freelance/web-projects/wegenweere/mobile-layout.website'),
  'wegenweere-notes': placeholder('replace-with-wegenweere-assets.txt','assets/freelance/web-projects/wegenweere/replace-with-wegenweere-assets.txt'),
  'avansa-landing': placeholder('landing-page.website','assets/freelance/web-projects/avansa/landing-page.website'),
  'avansa-case-study': placeholder('case-study-draft.txt','assets/freelance/web-projects/avansa/case-study-draft.txt'),
  'avansa-notes': placeholder('replace-with-avansa-assets.txt','assets/freelance/web-projects/avansa/replace-with-avansa-assets.txt'),
  'tattoo-flash-01': imagePlaceholder('tattoo-flash-placeholder.png','assets/art-tattoo/tattoo-work/tattoo-flash-placeholder.png'),
  'tattoo-piece-01': imagePlaceholder('tattoo-piece-placeholder.png','assets/art-tattoo/tattoo-work/tattoo-piece-placeholder.png'),
  'tattoo-instagram': placeholder('instagram-link-placeholder.url','assets/art-tattoo/tattoo-work/instagram-link-placeholder.url','Placeholder for an Instagram link or embed.'),
  'model-drawing-01': imagePlaceholder('model-drawing-01.png','assets/art-tattoo/drawings/model-drawings/model-drawing-01.png'),
  'model-drawing-02': imagePlaceholder('model-drawing-02.png','assets/art-tattoo/drawings/model-drawings/model-drawing-02.png'),
  'model-drawing-notes': placeholder('replace-with-model-drawings.txt','assets/art-tattoo/drawings/model-drawings/replace-with-model-drawings.txt'),
  'sketch-01': imagePlaceholder('sketchbook-page-01.png','assets/art-tattoo/drawings/sketches-experiments/sketchbook-page-01.png'),
  'sketch-02': imagePlaceholder('random-study-01.png','assets/art-tattoo/drawings/sketches-experiments/random-study-01.png'),
  'sketch-notes': placeholder('replace-with-sketches.txt','assets/art-tattoo/drawings/sketches-experiments/replace-with-sketches.txt'),
  bio: placeholder('bio.txt','assets/about/bio.txt','Write a short introduction here.'),
  tools: placeholder('tools-and-skills.txt','assets/about/tools-and-skills.txt','List your tools, skills, and services here.')
};

function folder(title,address,items){return{type:'folder',title,address,items};}
function childFolder(id,label){return{type:'folder',id,label};}
function childFile(id,label){return{type:'file',id,label};}
function placeholder(title,asset,description='Placeholder file for this folder.'){return{type:'doc',title,address:`C:\\Portfolio\\${title}`,asset,html:`<div class="file-preview doc-preview"><h2>${title}</h2><p>${description}</p><p>Replace <code>${asset}</code> with your own file, or add more items in <code>script.js</code>.</p><a class="xp-action" href="${asset}" download>Download placeholder</a></div>`};}
function imagePlaceholder(title,asset){return{type:'image',title,address:`C:\\Portfolio\\${title}`,asset,html:`<div class="file-preview image-preview"><img src="${asset}" alt="${title} placeholder" /><p>Replace <code>${asset}</code> with your own image.</p></div>`};}


const artBooks = {
  "observational": {
    "title": "Observational.exe",
    "intro": "A small book of observational drawings and studies.",
    "chapters": [
      {
        "title": "Figure Studies",
        "pages": [
          {
            "title": "Observational Study 01",
            "type": "image",
            "src": "assets/art/observational-01.svg",
            "caption": "Placeholder figure/object study."
          },
          {
            "title": "Observational Study 02",
            "type": "image",
            "src": "assets/art/observational-02.svg",
            "caption": "Replace this with your own PNG, JPG, SVG, GIF, or MP4."
          }
        ]
      },
      {
        "title": "Details",
        "pages": [
          {
            "title": "Observational Study 03",
            "type": "image",
            "src": "assets/art/observational-03.svg",
            "caption": "A second chapter for smaller observations."
          }
        ]
      }
    ]
  },
  "experimental": {
    "title": "Experimental.exe",
    "intro": "Sketches, loose visual experiments, motion tests, and free-time projects.",
    "chapters": [
      {
        "title": "Color Experiments",
        "pages": [
          {
            "title": "Experimental Piece 01",
            "type": "image",
            "src": "assets/art/experimental-01.svg",
            "caption": "Replace this with your own artwork file."
          },
          {
            "title": "Experimental Piece 02",
            "type": "image",
            "src": "assets/art/experimental-02.svg",
            "caption": "Placeholder for a graphic/abstract piece."
          }
        ]
      },
      {
        "title": "Motion / Play",
        "pages": [
          {
            "title": "Experimental Piece 03",
            "type": "image",
            "src": "assets/art/experimental-03.svg",
            "caption": "Can be swapped for MP4 by changing type to video."
          }
        ]
      }
    ]
  },
  "diary": {
    "title": "diary_DONOTREADTHIS.exe",
    "intro": "Definitely do not read this private-ish visual diary.",
    "chapters": [
      {
        "title": "Private Pages",
        "pages": [
          {
            "title": "Diary Page 01",
            "type": "image",
            "src": "assets/art/diary-01.svg",
            "caption": "A personal sketch placeholder."
          },
          {
            "title": "Diary Page 02",
            "type": "image",
            "src": "assets/art/diary-02.svg",
            "caption": "Replace with diary-style artwork."
          }
        ]
      },
      {
        "title": "Tiny Secrets",
        "pages": [
          {
            "title": "Diary Page 03",
            "type": "image",
            "src": "assets/art/diary-03.svg",
            "caption": "A hidden-feeling page for experiments or notes."
          }
        ]
      }
    ]
  }
};

const template=document.querySelector('#window-template');
const desktop=document.querySelector('.desktop');
const desktopIcons=document.querySelector('.desktop-icons');
const taskbar=document.querySelector('#taskbar-programs');
const startButton=document.querySelector('#start-button');
const startMenu=document.querySelector('#start-menu');
let zIndex=20;
const openWindows=new Map();

let audioContext;
function playSound(name){
  try{
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    osc.type = name === 'error' ? 'square' : 'sine';
    if(name === 'click'){ osc.frequency.setValueAtTime(880, now); gain.gain.setValueAtTime(0.05, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055); }
    else if(name === 'open'){ osc.frequency.setValueAtTime(520, now); osc.frequency.exponentialRampToValueAtTime(920, now + 0.16); gain.gain.setValueAtTime(0.045, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16); }
    else { osc.frequency.setValueAtTime(190, now); osc.frequency.setValueAtTime(120, now + 0.22); gain.gain.setValueAtTime(0.08, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45); }
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(now); osc.stop(now + (name === 'error' ? 0.45 : 0.18));
  }catch{}
}

layoutDesktopIcons();
enableDesktopIconDragging();

function layoutDesktopIcons(){
  const order=['work','freelance','art','tattoo','about','paint','missing-skills'];
  const icons=[...desktopIcons.querySelectorAll(':scope > .desktop-icon')];
  icons.sort((a,b)=>order.indexOf(a.dataset.open)-order.indexOf(b.dataset.open));
  icons.forEach(icon=>desktopIcons.appendChild(icon));

  const layoutVersion='free-placement-two-column-v4';
  if(localStorage.getItem('xpDesktopLayoutVersion')!==layoutVersion){
    localStorage.removeItem('xpDesktopIconPositions');
    localStorage.setItem('xpDesktopLayoutVersion',layoutVersion);
  }

  const saved=JSON.parse(localStorage.getItem('xpDesktopIconPositions')||'{}');
  const gridX=118, gridY=104, left=0, top=0;
  icons.forEach((icon,index)=>{
    const id=icon.dataset.open;
    let pos=saved[id];
    if(!pos){
      const col=index%2;
      const row=Math.floor(index/2);
      pos={left:left+col*gridX,top:top+row*gridY};
    }
    const clamped=clampDesktopIconPosition(icon,pos.left,pos.top);
    icon.style.left=`${clamped.left}px`;
    icon.style.top=`${clamped.top}px`;
  });
}

function clampDesktopIconPosition(icon,left,top){
  const maxLeft=Math.max(0,desktopIcons.clientWidth-icon.offsetWidth);
  const maxTop=Math.max(0,desktopIcons.clientHeight-icon.offsetHeight);
  return {
    left:Math.min(maxLeft,Math.max(0,left)),
    top:Math.min(maxTop,Math.max(0,top))
  };
}

function saveDesktopIconPosition(icon){
  const pos=clampDesktopIconPosition(icon,icon.offsetLeft,icon.offsetTop);
  icon.style.left=`${pos.left}px`;
  icon.style.top=`${pos.top}px`;
  const saved=JSON.parse(localStorage.getItem('xpDesktopIconPositions')||'{}');
  saved[icon.dataset.open]={left:pos.left,top:pos.top};
  localStorage.setItem('xpDesktopIconPositions',JSON.stringify(saved));
}

function enableDesktopIconDragging(){
  desktopIcons.querySelectorAll(':scope > .desktop-icon').forEach(icon=>{
    if(icon.dataset.dragReady==='true')return;
    icon.dataset.dragReady='true';
    let startX=0,startY=0,initialLeft=0,initialTop=0,moved=false,dragging=false;

    icon.addEventListener('pointerdown',event=>{
      if(event.button!==0)return;
      dragging=true;
      moved=false;
      startX=event.clientX;
      startY=event.clientY;
      initialLeft=icon.offsetLeft;
      initialTop=icon.offsetTop;
      icon.setPointerCapture(event.pointerId);
      clearSelections();
      icon.classList.add('selected');
    });

    icon.addEventListener('pointermove',event=>{
      if(!dragging)return;
      const dx=event.clientX-startX,dy=event.clientY-startY;
      if(Math.abs(dx)+Math.abs(dy)>4)moved=true;
      if(!moved)return;
      icon.classList.add('dragging');
      const pos=clampDesktopIconPosition(icon,initialLeft+dx,initialTop+dy);
      icon.style.left=`${pos.left}px`;
      icon.style.top=`${pos.top}px`;
      event.preventDefault();
    });

    icon.addEventListener('pointerup',event=>{
      if(!dragging)return;
      dragging=false;
      icon.classList.remove('dragging');
      try{icon.releasePointerCapture(event.pointerId);}catch{}
      if(moved){
        saveDesktopIconPosition(icon);
      }else{
        playSound('click');
        openItem(icon.dataset.open);
      }
    });

    icon.addEventListener('pointercancel',event=>{
      dragging=false;
      icon.classList.remove('dragging');
      try{icon.releasePointerCapture(event.pointerId);}catch{}
    });
  });
}

window.addEventListener('resize',()=>{
  desktopIcons.querySelectorAll(':scope > .desktop-icon').forEach(icon=>saveDesktopIconPosition(icon));
});

document.querySelectorAll('.start-contact-button,[data-open]').forEach(button=>{if(button.closest('.desktop-icons'))return;button.addEventListener('click',()=>{playSound('click');openItem(button.dataset.open);});});
desktop.addEventListener('click',event=>{if(event.target===desktop)clearSelections();});
startButton.addEventListener('click',event=>{playSound('click');event.stopPropagation();const open=startMenu.classList.toggle('open');startButton.setAttribute('aria-expanded',open?'true':'false');});
document.addEventListener('click',event=>{if(!event.target.closest('.start-menu')&&!event.target.closest('.start-button')){startMenu.classList.remove('open');startButton.setAttribute('aria-expanded','false');}});
function clearSelections(){document.querySelectorAll('.desktop-icon.selected').forEach(el=>el.classList.remove('selected'));}

function iconMiniClass(type){return type==='folder'?'mini-folder':type==='image'?'mini-image':type==='paint'?'mini-paint':type==='bsod'?'mini-recycle':type==='book'?'mini-doc':(type==='external'||type==='ie')?'mini-html':'mini-doc';}


function isMobileReadmeMode(){
  return window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
}

function openItem(id){
  const data=items[id];
  if(!data)return;
  startMenu.classList.remove('open');
  startButton.setAttribute('aria-expanded','false');
  if(data.type==='bsod'){
    openBsod(data);
    return;
  }
  if(data.type==='external'){
    openExternalFile(data);
    return;
  }
  if(openWindows.has(id)){
    const entry=openWindows.get(id);
    entry.windowEl.classList.remove('minimized');
    focusWindow(entry.windowEl);
    return;
  }
  const clone=template.content.firstElementChild.cloneNode(true);
  clone.dataset.windowId=id;
  clone.classList.add(`${data.type}-window`);
  clone.style.left=`${150+openWindows.size*28}px`;
  clone.style.top=`${62+openWindows.size*24}px`;
  clone.querySelector('.window-title span:last-child').textContent=data.title;
  clone.querySelector('.address-bar span').textContent=data.address;
  clone.querySelector('.mini-icon').classList.add(iconMiniClass(data.type));
  const content=clone.querySelector('.window-content');
  if(data.type==='folder'){
    content.classList.add('folder-view');
    data.items.forEach(item=>content.appendChild(createWindowItem(item)));
  }else{
    content.classList.add('file-view');
    content.innerHTML=data.html;
  }
  clone.querySelector('.back-button').addEventListener('click',()=>{playSound('click');closeWindow(id);});
  clone.querySelectorAll('[data-close-window]').forEach(button=>button.addEventListener('click',()=>{playSound('click');closeWindow(id);}));
  clone.querySelector('.close').addEventListener('click',()=>{playSound('click');closeWindow(id);});
  clone.querySelector('.minimize').addEventListener('click',()=>{playSound('click');minimizeWindow(id);});
  clone.querySelector('.maximize').addEventListener('click',()=>{playSound('click');toggleMaximize(id);});
  clone.addEventListener('mousedown',()=>focusWindow(clone));
  makeDraggable(clone,clone.querySelector('.window-titlebar'));
  makeResizable(clone);
  desktop.appendChild(clone);
  const taskButton=document.createElement('button');
  taskButton.className='taskbar-item';
  taskButton.innerHTML=`<span class="task-icon ${iconMiniClass(data.type)}"></span><span>${data.title}</span>`;
  taskButton.addEventListener('click',()=>{
    playSound('click');
    const isActive=taskButton.classList.contains('active')&&!clone.classList.contains('minimized');
    if(isActive){clone.classList.add('minimized');taskButton.classList.remove('active');return;}
    clone.classList.remove('minimized');
    focusWindow(clone);
  });
  taskbar.appendChild(taskButton);
  openWindows.set(id,{windowEl:clone,taskButton});
  focusWindow(clone);
  playSound('open');
  if(data.type==='paint')initPaintApp(clone);
  if(data.type==='book')initBookApp(clone, data.bookKey);
  if(id==='art' && !isMobileReadmeMode()){
    window.setTimeout(() => { if (!isMobileReadmeNoAutoOpen()) openItem("art-readme"); }, 250);
  }
  if(id==='work' && !isMobileReadmeMode()){
    window.setTimeout(() => { if (!isMobileReadmeNoAutoOpen()) openItem("work-readme"); }, 250);
  }
}
function openExternalFile(data){
  playSound('open');
  let dialog=document.querySelector('#external-opening-dialog');
  if(!dialog){
    dialog=document.createElement('div');
    dialog.id='external-opening-dialog';
    dialog.className='external-opening-dialog';
    dialog.setAttribute('role','status');
    dialog.setAttribute('aria-live','polite');
    document.body.appendChild(dialog);
  }
  dialog.innerHTML=`<div class="external-opening-title"><span class="mini-icon mini-html"></span> Opening file</div><div class="external-opening-body"><strong>${data.title}</strong><span>Launching your default browser...</span><div class="opening-progress"><span></span></div></div>`;
  dialog.classList.add('visible');
  window.setTimeout(()=>{
    window.open(data.url || data.address, '_blank', 'noopener');
    dialog.classList.remove('visible');
  }, 450);
}

function openBsod(data){
  let overlay=document.querySelector('#bsod-overlay');
  if(!overlay){
    overlay=document.createElement('section');
    overlay.id='bsod-overlay';
    overlay.className='bsod-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label','Missing Skills error screen');
    document.body.appendChild(overlay);
  }
  overlay.innerHTML=data.html;
  document.body.classList.add('bsod-active');
  overlay.classList.remove('leaving');
  overlay.classList.add('visible');
  const backButton=overlay.querySelector('[data-close-bsod]');
  if(backButton){
    backButton.focus();
    backButton.addEventListener('click',()=>{playSound('click');closeBsod();});
  }
  playSound('error');
}

function closeBsod(){
  const overlay=document.querySelector('#bsod-overlay');
  if(!overlay)return;
  overlay.classList.add('leaving');
  setTimeout(()=>{
    overlay.classList.remove('visible','leaving');
    overlay.innerHTML='';
    document.body.classList.remove('bsod-active');
  },180);
}

function closeWindow(id){const entry=openWindows.get(id);if(!entry)return;entry.windowEl.remove();entry.taskButton.remove();openWindows.delete(id);}
function minimizeWindow(id){const entry=openWindows.get(id);if(!entry)return;entry.windowEl.classList.add('minimized');entry.taskButton.classList.remove('active');}
function toggleMaximize(id){const entry=openWindows.get(id);if(!entry)return;const win=entry.windowEl;if(win.classList.contains('maximized')){win.classList.remove('maximized');win.querySelector('.maximize').textContent='□';}else{win.classList.remove('minimized');win.classList.add('maximized');win.querySelector('.maximize').textContent='❐';focusWindow(win);}}
function createWindowItem(item){const button=document.createElement('button');const isReadme=item.label==='README.note'||String(item.id).includes('readme');button.className=`desktop-icon icon-only-item ${item.type==='folder'?'folder':'document'} ${isReadme?'readme-important':''}`;button.dataset.name=item.label;button.innerHTML=`<span class="icon-art ${item.type==='folder'?'folder-art':fileIconClass(item.id)}"></span><span class="label">${item.label}</span>`;button.addEventListener('click',()=>{document.querySelectorAll('.window-content .desktop-icon.selected').forEach(el=>el.classList.remove('selected'));button.classList.add('selected');playSound('click');openItem(item.id);});return button;}
function thumbnailClass(id,type){const data=items[id]||{};if(type==='folder')return 'folder-thumb';if(data.type==='image')return 'image-thumb';if((data.title||'').match(/mp4|mov/i))return 'video-thumb';if(data.type==='ie'||data.type==='external'||(data.title||'').match(/html/i))return 'web-thumb';if((data.title||'').match(/website/i))return 'web-thumb';return 'doc-thumb';}
function thumbnailContent(id,type){const data=items[id]||{};if(type==='folder')return '<span class="thumb-folder-tab"></span><span class="thumb-folder-page"></span>';if(data.type==='image'&&data.asset)return `<img src="${data.asset}" alt="">`;if((data.title||'').match(/mp4|mov/i))return '<span class="play-triangle">▶</span>';if((data.title||'').match(/website/i))return '<span class="browser-bar"></span><span class="browser-block"></span>';return '<span class="doc-lines"></span>'}
function fileIconClass(id){const type=items[id]?.type;if(type==='image')return'image-art';if(type==='book')return'exe-art';if(type==='ie'||type==='external')return'html-art';return'doc-art';}
function focusWindow(windowEl){windowEl.classList.remove('minimized');windowEl.style.zIndex=++zIndex;openWindows.forEach(entry=>{const active=entry.windowEl===windowEl;entry.taskButton.classList.toggle('active',active);entry.windowEl.classList.toggle('inactive',!active);});}
function makeDraggable(windowEl,handle){let startX=0,startY=0,initialLeft=0,initialTop=0,dragging=false;handle.addEventListener('mousedown',event=>{if(event.target.closest('.window-controls')||windowEl.classList.contains('maximized'))return;dragging=true;startX=event.clientX;startY=event.clientY;initialLeft=windowEl.offsetLeft;initialTop=windowEl.offsetTop;focusWindow(windowEl);document.body.style.cursor='move';});window.addEventListener('mousemove',event=>{if(!dragging)return;const maxLeft=Math.max(0,window.innerWidth-120);const maxTop=Math.max(0,window.innerHeight-80);windowEl.style.left=`${Math.min(maxLeft,Math.max(0,initialLeft+event.clientX-startX))}px`;windowEl.style.top=`${Math.min(maxTop,Math.max(0,initialTop+event.clientY-startY))}px`;});window.addEventListener('mouseup',()=>{dragging=false;document.body.style.cursor='';});}
function makeResizable(windowEl){const handle=windowEl.querySelector('.resize-handle');if(!handle)return;let sx=0,sy=0,sw=0,sh=0,resizing=false;handle.addEventListener('mousedown',e=>{if(windowEl.classList.contains('maximized'))return;resizing=true;sx=e.clientX;sy=e.clientY;sw=windowEl.offsetWidth;sh=windowEl.offsetHeight;focusWindow(windowEl);document.body.style.cursor='nwse-resize';e.preventDefault();});window.addEventListener('mousemove',e=>{if(!resizing)return;windowEl.style.width=`${Math.max(360,sw+e.clientX-sx)}px`;windowEl.style.height=`${Math.max(260,sh+e.clientY-sy)}px`;});window.addEventListener('mouseup',()=>{resizing=false;document.body.style.cursor='';});}
function initPaintApp(win){const canvas=win.querySelector('#paint-canvas');const ctx=canvas.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,canvas.width,canvas.height);let drawing=false,eraser=false;const color=win.querySelector('#paint-color');const size=win.querySelector('#paint-size');function pos(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*(canvas.width/r.width),y:(e.clientY-r.top)*(canvas.height/r.height)};}canvas.addEventListener('pointerdown',e=>{drawing=true;canvas.setPointerCapture(e.pointerId);const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});canvas.addEventListener('pointermove',e=>{if(!drawing)return;const p=pos(e);ctx.lineWidth=size.value;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle=eraser?'white':color.value;ctx.lineTo(p.x,p.y);ctx.stroke();});canvas.addEventListener('pointerup',e=>{drawing=false;try{canvas.releasePointerCapture(e.pointerId);}catch{}});win.querySelector('#paint-eraser').addEventListener('click',e=>{eraser=!eraser;e.currentTarget.classList.toggle('active',eraser);});win.querySelector('#paint-clear').addEventListener('click',()=>{ctx.fillStyle='white';ctx.fillRect(0,0,canvas.width,canvas.height);});win.querySelector('#paint-download').addEventListener('click',()=>{const a=document.createElement('a');a.href=canvas.toDataURL('image/png');a.download='visitor-drawing.png';a.click();});win.querySelector('.send-drawing-form').addEventListener('submit',()=>{win.querySelector('#drawing-data-url').value=canvas.toDataURL('image/png');});}

function initBookApp(win, bookKey){
  const book=artBooks[bookKey];
  if(!book)return;
  let pages=[];
  book.chapters.forEach((chapter, chapterIndex)=>{
    chapter.pages.forEach((page, pageIndex)=>pages.push({...page, chapter:chapter.title, chapterIndex, pageIndex}));
  });
  const content=win.querySelector('.window-content');
  content.classList.remove('file-view');
  content.classList.add('book-app-content');
  content.innerHTML=`<div class="book-app"><aside class="book-legend"><h3>${book.title}</h3><p>${book.intro}</p><div class="book-chapters">${book.chapters.map((chapter,index)=>`<button type="button" data-chapter="${index}"><strong>${chapter.title}</strong><span>${chapter.pages.length} page${chapter.pages.length===1?'':'s'}</span></button>`).join('')}</div></aside><section class="book-page-wrap"><div class="book-page"></div><div class="book-controls"><button type="button" data-prev>← Previous</button><span data-count></span><button type="button" data-next>Next →</button></div></section></div>`;
  const app=content.querySelector('.book-app');
  const pageEl=content.querySelector('.book-page');
  const countEl=content.querySelector('[data-count]');
  function escapeHtml(value){return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');}
  function renderPage(index){
    index=Math.max(0,Math.min(pages.length-1,index));
    app.dataset.page=index;
    const page=pages[index];
    const media=page.type==='video'?`<video controls playsinline src="${escapeHtml(page.src)}"></video>`:`<img src="${escapeHtml(page.src)}" alt="${escapeHtml(page.title)}">`;
    pageEl.innerHTML=`<div class="book-page-paper"><div class="book-media">${media}</div><div class="book-caption"><strong>${escapeHtml(page.title)}</strong><div class="book-chapter-label">${escapeHtml(page.chapter)}</div><p>${escapeHtml(page.caption||'')}</p></div></div>`;
    countEl.textContent=`${index+1} / ${pages.length}`;
  }
  content.querySelector('[data-prev]').addEventListener('click',()=>renderPage(Number(app.dataset.page||0)-1));
  content.querySelector('[data-next]').addEventListener('click',()=>renderPage(Number(app.dataset.page||0)+1));
  content.querySelectorAll('[data-chapter]').forEach(btn=>btn.addEventListener('click',()=>{
    const chapterIndex=Number(btn.dataset.chapter);
    const first=pages.findIndex(page=>page.chapterIndex===chapterIndex);
    renderPage(first>=0?first:0);
  }));
  renderPage(0);
}

function updateClock(){document.querySelector('#clock').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});} updateClock();setInterval(updateClock,1000);



/* XP hover tooltips + right-click Properties dialogs */
window.XP_ITEM_METADATA = Object.assign({}, window.XP_ITEM_METADATA || {}, {
  "Work": {
    "type": "File folder",
    "description": "Waylay work, portfolio highlights, current website, and website archive.",
    "contains": "portfolio.html, waylay.html, waybackmachine.html, README.note"
  },
  "Freelance": {
    "type": "File folder",
    "description": "Freelance web projects and client work.",
    "contains": "Web Projects, Wegenweere, Avansa"
  },
  "Art & Tattoo": {
    "type": "File folder",
    "description": "Tattoo work and drawing archive.",
    "contains": "Tattoo Work, Drawings"
  },
  "About": {
    "type": "File folder",
    "description": "Bio, CV, portrait, and personal info.",
    "contains": "Curriculum Vitae.doc, Me.png, bio.txt"
  },
  "Missing Skills": {
    "type": "Recycle Bin",
    "description": "Definitely not hiding any missing skills. Opens a dramatic blue screen.",
    "contains": "0 items"
  },
  "MS Paint": {
    "type": "Application",
    "description": "Draw something and optionally send it to Elooi.",
    "contains": "Canvas, send form, save PNG"
  },
  "portfolio.html": {
    "type": "HTML Document",
    "description": "Quick visual portfolio overview of graphics, videos, and web projects.",
    "opens": "https://sites.google.com/view/elooi-de-buck"
  },
  "waylay.html": {
    "type": "HTML Document",
    "description": "Opens the current Waylay website in a new tab.",
    "opens": "https://www.waylay.io/"
  },
  "waybackmachine.html": {
    "type": "HTML Document",
    "description": "Opens the Wayback Machine archive for Waylay.io.",
    "opens": "https://web.archive.org/web/20220801000000*/Waylay.io"
  },
  "README.note": {
    "type": "Note",
    "description": "Intro note that opens automatically when the Work folder is opened.",
    "contains": "Message about Waylay work and exploration links."
  },
  "Curriculum Vitae.doc": {
    "type": "Microsoft Word Document",
    "description": "Replace this placeholder with Elooi De Buck\u2019s CV.",
    "contains": "CV placeholder"
  },
  "Me.png": {
    "type": "PNG image",
    "description": "Replace this placeholder with a portrait or profile image.",
    "contains": "Image placeholder"
  },
  "bio.txt": {
    "type": "Text Document",
    "description": "Short bio placeholder for Elooi De Buck.",
    "contains": "Bio placeholder"
  }
});

(function () {
  function getItemName(el) {
    if (!el) return "Item";
    return (
      el.dataset.name ||
      el.dataset.title ||
      el.getAttribute("aria-label") ||
      (el.querySelector && (el.querySelector(".icon-label, span, .file-name, .item-name") || {}).textContent) ||
      el.textContent ||
      "Item"
    ).trim();
  }

  function getItemIcon(el, name) {
    const img = el && el.querySelector ? el.querySelector("img") : null;
    if (img && img.getAttribute("src")) return img.getAttribute("src");
    const lower = (name || "").toLowerCase();
    if (lower.includes("readme") || lower.endsWith(".note") || lower.endsWith(".txt")) return "assets/icons/note.svg";
    if (lower.includes("wayback")) return "assets/icons/archive.svg";
    if (lower.includes("waylay")) return "assets/icons/browser.svg";
    if (lower.endsWith(".html")) return "assets/icons/html.svg";
    if (lower.includes("missing skills")) return "assets/icons/recycle-bin.svg";
    if (lower.includes("paint")) return "assets/icons/paint.svg";
    return "assets/icons/folder.svg";
  }

  function getMeta(name) {
    if (window.XP_ITEM_METADATA[name]) return window.XP_ITEM_METADATA[name];
    const lower = name.toLowerCase();
    if (lower.endsWith(".html")) return { type: "HTML Document", description: "Opens a website in a new tab." };
    if (lower.endsWith(".note") || lower.endsWith(".txt")) return { type: "Text Document", description: "A replaceable note placeholder." };
    if (lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return { type: "Image", description: "A replaceable image placeholder." };
    if (lower.endsWith(".doc") || lower.endsWith(".docx")) return { type: "Word Document", description: "A replaceable document placeholder." };
    return { type: "File folder", description: "Open this item to view its contents." };
  }

  function ensureTooltip() {
    let tip = document.querySelector(".xp-tooltip");
    if (!tip) {
      tip = document.createElement("div");
      tip.className = "xp-tooltip";
      document.body.appendChild(tip);
    }
    return tip;
  }

  function eligibleIcon(el) {
    return el && el.closest && el.closest(".desktop-icon, .folder-item, .file-item, .icon, [data-xp-item]");
  }

  document.addEventListener("mouseover", function (event) {
    const item = eligibleIcon(event.target);
    if (!item || window.matchMedia("(max-width: 640px)").matches) return;
    const name = getItemName(item);
    const data = getMeta(name);
    const tip = ensureTooltip();
    tip.innerHTML = "<strong>" + escapeHtml(name) + "</strong><br>" + escapeHtml(data.description || data.type || "Portfolio item");
    tip.style.display = "block";
  });

  document.addEventListener("mousemove", function (event) {
    const tip = document.querySelector(".xp-tooltip");
    if (!tip || tip.style.display === "none") return;
    const pad = 14;
    let x = event.clientX + pad;
    let y = event.clientY + pad;
    const rect = tip.getBoundingClientRect();
    if (x + rect.width > window.innerWidth - 8) x = event.clientX - rect.width - pad;
    if (y + rect.height > window.innerHeight - 8) y = event.clientY - rect.height - pad;
    tip.style.left = Math.max(8, x) + "px";
    tip.style.top = Math.max(8, y) + "px";
  });

  document.addEventListener("mouseout", function (event) {
    if (!eligibleIcon(event.target)) return;
    const tip = document.querySelector(".xp-tooltip");
    if (tip) tip.style.display = "none";
  });

  document.addEventListener("contextmenu", function (event) {
    const item = eligibleIcon(event.target);
    if (!item) return;
    event.preventDefault();
    const name = getItemName(item);
    showXPProperties(name, getItemIcon(item, name));
  });

  window.showXPProperties = function (name, icon) {
    closeXPProperties();
    const data = getMeta(name);
    const dialog = document.createElement("div");
    dialog.className = "properties-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-label", name + " Properties");

    const rows = [
      ["Type:", data.type || "Portfolio item"],
      ["Description:", data.description || "No description available."],
      data.contains ? ["Contains:", data.contains] : null,
      data.opens ? ["Opens:", data.opens] : null,
      ["Location:", "Elooi De Buck Portfolio Desktop"]
    ].filter(Boolean);

    dialog.innerHTML = `
      <div class="properties-titlebar">
        <span>${escapeHtml(name)} Properties</span>
        <button class="properties-close" type="button" aria-label="Close">×</button>
      </div>
      <div class="properties-body">
        <div class="properties-header">
          <img src="${escapeAttr(icon)}" alt="">
          <div class="properties-name">${escapeHtml(name)}</div>
        </div>
        ${rows.map(row => `
          <div class="properties-row">
            <div class="properties-label">${escapeHtml(row[0])}</div>
            <div>${escapeHtml(row[1])}</div>
          </div>
        `).join("")}
        <div class="properties-actions">
          <button type="button" class="properties-ok">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
    dialog.querySelector(".properties-close").addEventListener("click", closeXPProperties);
    dialog.querySelector(".properties-ok").addEventListener("click", closeXPProperties);
  };

  window.closeXPProperties = function () {
    document.querySelectorAll(".properties-dialog").forEach(el => el.remove());
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }
})();

/* Robust sound tray toggle + fallback XP clock */
window.soundEnabled = (typeof window.soundEnabled === "boolean") ? window.soundEnabled : true;

window.toggleSound = function () {
  window.soundEnabled = !window.soundEnabled;
  const icon = document.getElementById("soundToggle");
  if (icon) {
    icon.src = window.soundEnabled ? "assets/icons/sound-on.svg" : "assets/icons/sound-off.svg";
    icon.alt = window.soundEnabled ? "Sound on" : "Sound off";
    icon.title = window.soundEnabled ? "Sound on" : "Sound off";
  }
};

function updateXPTrayClock() {
  const clock = document.getElementById("xp-clock");
  if (!clock) return;
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("soundToggle");
  if (icon) {
    icon.style.display = "inline-block";
    icon.src = window.soundEnabled ? "assets/icons/sound-on.svg" : "assets/icons/sound-off.svg";
  }
  updateXPTrayClock();
  setInterval(updateXPTrayClock, 30000);
});






/* Art viewer functionality removed: placeholder handler */
window.openArtPlaceholder = function (name) {
  if (typeof openFileViewer === "function") {
    openFileViewer(name || "Artwork placeholder", "Artwork viewer placeholder. A new Art system will be added later.");
  } else {
    alert((name || "Artwork placeholder") + "\n\nArtwork viewer placeholder. A new Art system will be added later.");
  }
};

document.querySelectorAll('[data-name="README.note"]').forEach(el=>{
  el.classList.add('readme-important');
});



/* Mobile README pulse: stop after first interaction */
(function () {
  const STORAGE_KEY = "elooi-xp-readme-seen-v1";

  function isMobile() {
    return window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
  }

  function getSeen() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function setSeen(name) {
    const seen = getSeen();
    seen[name || "README.note"] = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
  }

  function isReadmeElement(el) {
    if (!el) return false;
    const name = (el.dataset && el.dataset.name) || el.textContent || "";
    return name.includes("README.note") || name.toLowerCase().includes("readme");
  }

  function applyReadmePulseState(root) {
    const seen = getSeen();
    const scope = root || document;
    scope.querySelectorAll('[data-name="README.note"], .folder-item, .desktop-icon').forEach(el => {
      if (!isReadmeElement(el)) return;
      el.classList.add("readme-important");
      if (seen["README.note"] || seen[(el.dataset && el.dataset.name) || "README.note"]) {
        el.classList.add("readme-seen");
      }
    });
  }

  function markReadmeSeen(target) {
    const el = target && target.closest ? target.closest('[data-name="README.note"], .folder-item, .desktop-icon') : null;
    if (!el || !isReadmeElement(el)) return;
    setSeen((el.dataset && el.dataset.name) || "README.note");
    el.classList.add("readme-seen");
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyReadmePulseState();

    // Keep catching README items created later when folders open.
    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) applyReadmePulseState(node);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });

  // Stop pulsing as soon as user taps/clicks/double-clicks the README on mobile.
  ["pointerdown", "click", "dblclick"].forEach(eventName => {
    document.addEventListener(eventName, event => {
      if (isMobile()) markReadmeSeen(event.target);
    }, true);
  });

  // Also stop pulsing when the README opener function runs.
  const originalOpenArtReadme = window.openArtReadme;
  window.openArtReadme = function () {
    setSeen("README.note");
    applyReadmePulseState();
    if (typeof originalOpenArtReadme === "function") {
      return originalOpenArtReadme.apply(this, arguments);
    }
  };
})();


/* README_MOBILE_AUTOOPEN_INTERCEPTOR_V2
   Prevent README files from auto-opening on mobile, while allowing user taps/clicks. */
(function(){
  if (window.__readmeMobileInterceptorInstalled) return;
  window.__readmeMobileInterceptorInstalled = true;

  let userGestureUntil = 0;
  ["pointerdown","touchstart","mousedown","keydown","click","dblclick"].forEach(evt => {
    document.addEventListener(evt, () => { userGestureUntil = Date.now() + 900; }, true);
  });

  function isMobile(){
    return window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
  }

  function isReadmeId(id){
    return String(id || "").toLowerCase().includes("readme");
  }

  function install(){
    if (typeof window.openItem !== "function" || window.openItem.__readmeMobileWrapped) return false;
    const originalOpenItem = window.openItem;
    window.openItem = function(id){
      const userInitiated = Date.now() < userGestureUntil;
      if (isMobile() && isReadmeId(id) && !userInitiated) {
        return null;
      }
      return originalOpenItem.apply(this, arguments);
    };
    window.openItem.__readmeMobileWrapped = true;
    return true;
  }

  install();
  const interval = setInterval(() => {
    if (install()) clearInterval(interval);
  }, 50);
  setTimeout(() => clearInterval(interval), 3000);
})();
