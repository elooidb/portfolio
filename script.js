const folders = {
  work: {
    title: 'work',
    address: 'C:\\Portfolio\\work',
    items: [
      { type: 'folder', label: 'website', href: '#website' },
      { type: 'folder', label: 'graphic design', href: '#graphic-design' }
    ]
  },
  freelance: {
    title: 'freelance',
    address: 'C:\\Portfolio\\freelance',
    items: [
      { type: 'folder', label: 'wegenweere', href: '#wegenweere' },
      { type: 'folder', label: 'avansa', href: '#avansa' }
    ]
  },
  'passion-projects': {
    title: 'passions projects',
    address: 'C:\\Portfolio\\passions-projects',
    items: [
      { type: 'folder', label: 'drawings', href: '#drawings' }
    ]
  }
};

const template = document.querySelector('#folder-template');
const desktop = document.querySelector('.desktop');
const taskbar = document.querySelector('#taskbar-programs');
let zIndex = 20;
const openWindows = new Map();

document.querySelectorAll('[data-folder]').forEach(button => {
  button.addEventListener('dblclick', () => openFolder(button.dataset.folder));
  button.addEventListener('click', () => {
    clearSelections();
    button.classList.add('selected');
  });
});

document.querySelectorAll('.desktop-icon.document').forEach(link => {
  link.addEventListener('click', event => {
    clearSelections();
    link.classList.add('selected');
  });
});

desktop.addEventListener('click', event => {
  if (event.target === desktop) clearSelections();
});

function clearSelections() {
  document.querySelectorAll('.desktop-icon.selected').forEach(el => el.classList.remove('selected'));
}

function openFolder(id) {
  const data = folders[id];
  if (!data) return;

  if (openWindows.has(id)) {
    focusWindow(openWindows.get(id).windowEl);
    return;
  }

  const clone = template.content.firstElementChild.cloneNode(true);
  clone.dataset.folderWindow = id;
  clone.style.left = `${150 + openWindows.size * 28}px`;
  clone.style.top = `${62 + openWindows.size * 24}px`;
  clone.querySelector('.window-title span:last-child').textContent = data.title;
  clone.querySelector('.address-bar span').textContent = data.address;

  const content = clone.querySelector('.window-content');
  data.items.forEach(item => content.appendChild(createWindowItem(item)));

  const close = clone.querySelector('.close');
  close.addEventListener('click', () => closeWindow(id));
  clone.addEventListener('mousedown', () => focusWindow(clone));
  makeDraggable(clone, clone.querySelector('.window-titlebar'));

  desktop.appendChild(clone);
  const taskButton = document.createElement('button');
  taskButton.className = 'taskbar-item';
  taskButton.textContent = data.title;
  taskButton.addEventListener('click', () => focusWindow(clone));
  taskbar.appendChild(taskButton);

  openWindows.set(id, { windowEl: clone, taskButton });
  focusWindow(clone);
}

function closeWindow(id) {
  const entry = openWindows.get(id);
  if (!entry) return;
  entry.windowEl.remove();
  entry.taskButton.remove();
  openWindows.delete(id);
}

function createWindowItem(item) {
  const link = document.createElement('a');
  link.className = `desktop-icon ${item.type === 'folder' ? 'folder' : 'document'}`;
  link.href = item.href || '#';
  link.innerHTML = `<span class="icon-art ${item.type === 'folder' ? 'folder-art' : 'doc-art'}"></span><span class="label">${item.label}</span>`;
  link.addEventListener('click', event => {
    if (item.href?.startsWith('#')) event.preventDefault();
    document.querySelectorAll('.window-content .desktop-icon.selected').forEach(el => el.classList.remove('selected'));
    link.classList.add('selected');
  });
  return link;
}

function focusWindow(windowEl) {
  windowEl.style.zIndex = ++zIndex;
}

function makeDraggable(windowEl, handle) {
  let startX = 0, startY = 0, initialLeft = 0, initialTop = 0, dragging = false;
  handle.addEventListener('mousedown', event => {
    if (event.target.closest('.window-controls')) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    initialLeft = windowEl.offsetLeft;
    initialTop = windowEl.offsetTop;
    focusWindow(windowEl);
    document.body.style.cursor = 'move';
  });
  window.addEventListener('mousemove', event => {
    if (!dragging) return;
    windowEl.style.left = `${Math.max(0, initialLeft + event.clientX - startX)}px`;
    windowEl.style.top = `${Math.max(0, initialTop + event.clientY - startY)}px`;
  });
  window.addEventListener('mouseup', () => {
    dragging = false;
    document.body.style.cursor = '';
  });
}

function updateClock() {
  const now = new Date();
  document.querySelector('#clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 1000);
