script.js:2:   work: folder('Work', 'C:\\Portfolio\\Work', [childFile('work-readme','README.note'), childFile('workportfolio','portfolio.html'), childFile('current-waylay-website','waylay.html'), childFile('waylay-waybackmachine','waybackmachine.html')]),
script.js:6:   'work-readme': { type:'doc', title:'README.note', address:'C:\\Portfolio\\Work\\README.note', html:`<div class="file-preview doc-preview readme-note"><h2>README.note</h2><p>Hi, feel free to have a look at what I've been making for Waylay these last few years. The portfolio website gives a quick glance at the sort of graphics, videos, and web-projects I made. But because I like you, I'll also just let you have a look at the current Waylay website, or even explore the whole journey that has been maintaining and updating that website - via the wayback machine. Don't forget to have fun exploring!</p></div>` },
script.js:14:   art: folder('Art', 'C:\Portfolio\Art', [childFile('art-readme','README.note'), childFile('observational','observational.exe'), childFile('experimental','experimental.exe'), childFile('diary-donotreadthis','diary_DONOTREADTHIS.exe')]),
script.js:16:   'art-readme': { type:'doc', title:'README.note', address:'C:\Portfolio\Art\README.note', html:`<div class="file-preview doc-preview readme-note"><h2>README.note</h2><p>Hi there, you've stumbled onto my private collection of self-made artworks. This is a non-exhaustive list of drawings and free-time projects that I made, feel free to peruse.</p></div>` },
script.js:279:         openItem(icon.dataset.open);
script.js:295: document.querySelectorAll('.start-contact-button,[data-open]').forEach(button=>{if(button.closest('.desktop-icons'))return;button.addEventListener('click',()=>{playSound('click');openItem(button.dataset.open);});});
script.js:308: function openItem(id){
script.js:369:     window.setTimeout(()=>openItem('art-readme'), 250);
script.js:372:     window.setTimeout(()=>openItem('work-readme'), 250);
script.js:388:   window.setTimeout(()=>{
script.js:421:   setTimeout(()=>{
script.js:431: function createWindowItem(item){const button=document.createElement('button');const isReadme=item.label==='README.note'||String(item.id).includes('readme');button.className=`desktop-icon icon-only-item ${item.type==='folder'?'folder':'document'} ${isReadme?'readme-important':''}`;button.dataset.name=item.label;button.innerHTML=`<span class="icon-art ${item.type==='folder'?'folder-art':fileIconClass(item.id)}"></span><span class="label">${item.label}</span>`;button.addEventListener('click',()=>{document.querySelectorAll('.window-content .desktop-icon.selected').forEach(el=>el.classList.remove('selected'));button.classList.add('selected');playSound('click');openItem(item.id);});return button;}
script.js:482:     "contains": "portfolio.html, waylay.html, waybackmachine.html, README.note"
script.js:524:   "README.note": {
script.js:563:     if (lower.includes("readme") || lower.endsWith(".note") || lower.endsWith(".txt")) return "assets/icons/note.svg";
script.js:737: document.querySelectorAll('[data-name="README.note"]').forEach(el=>{
script.js:738:   el.classList.add('readme-important');
script.js:743: /* Mobile README pulse: stop after first interaction */
script.js:745:   const STORAGE_KEY = "elooi-xp-readme-seen-v1";
script.js:761:     seen[name || "README.note"] = true;
script.js:768:     return name.includes("README.note") || name.toLowerCase().includes("readme");
script.js:774:     scope.querySelectorAll('[data-name="README.note"], .folder-item, .desktop-icon').forEach(el => {
script.js:776:       el.classList.add("readme-important");
script.js:777:       if (seen["README.note"] || seen[(el.dataset && el.dataset.name) || "README.note"]) {
script.js:778:         el.classList.add("readme-seen");
script.js:784:     const el = target && target.closest ? target.closest('[data-name="README.note"], .folder-item, .desktop-icon') : null;
script.js:786:     setSeen((el.dataset && el.dataset.name) || "README.note");
script.js:787:     el.classList.add("readme-seen");
script.js:793:     // Keep catching README items created later when folders open.
script.js:804:   // Stop pulsing as soon as user taps/clicks/double-clicks the README on mobile.
script.js:811:   // Also stop pulsing when the README opener function runs.
script.js:812:   const originalOpenArtReadme = window.openArtReadme;
script.js:813:   window.openArtReadme = function () {
script.js:814:     setSeen("README.note");
