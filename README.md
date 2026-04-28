# XP Portfolio Website

A static GitHub Pages-ready portfolio inspired by a Windows XP desktop.

## What is included

- Draggable desktop icons with saved positions in localStorage
- XP-style folder/file windows
- Thumbnail-style folder views
- Real taskbar window buttons for open/minimized windows
- Window focus, minimize, maximize, close, drag, and resize behavior
- Start/contact menu
- Contact form placeholder
- MS Paint-style drawing app with download + send options

## Replace the background

Replace this file:

`assets/background.jpg`

Then in `styles.css`, change the `--desktop-background` variable to:

```css
--desktop-background: url('assets/background.jpg');
```

The current default is a CSS-generated XP-inspired hill/sky background so the site works immediately.

## Replace placeholder work

Most placeholder content is mapped in `script.js` inside the `items` object. Replace files in the matching `assets/...` folders, then update labels/paths in `script.js` if needed.

## Forms and drawing submissions

The contact form and Paint drawing form currently use this placeholder endpoint:

`https://formspree.io/f/YOUR_FORM_ID`

Create a Formspree, Netlify Forms, Basin, Getform, or similar static-form endpoint and replace that URL in `script.js`.

For drawings, the form sends a hidden field called `drawingDataUrl` containing the canvas as a PNG data URL. For very complex drawings, some services may reject the payload if it is too large. The Paint app also includes a **Save PNG** button so visitors can download their drawing.

## Replace icons easily

All desktop/window icons now live in:

`assets/icons/`

Current files:

- `folder.svg`
- `document.svg`
- `image.svg`
- `paint.svg`
- `recycle-bin.svg`

The easiest option is to replace those files with your own icons using the same filenames. SVG works best, but PNG/JPG also works if you update the paths in the icon variables at the bottom of `styles.css`:

```css
--icon-folder:url('assets/icons/folder.svg');
--icon-document:url('assets/icons/document.svg');
--icon-image:url('assets/icons/image.svg');
--icon-paint:url('assets/icons/paint.svg');
--icon-recycle:url('assets/icons/recycle-bin.svg');
```

## Missing Skills recycle bin

The desktop now includes a **Missing Skills** recycle-bin icon. Opening it shows a Windows-style blue screen with the message “Missing skills not found.” The blue-screen **Back** button closes the window and returns visitors to the desktop. The regular Explorer-style **Back** button also closes any open window.

## Sounds
Interaction sounds are generated in `script.js` with the browser Web Audio API:
- click sound for button/icon clicks
- open sound when a normal window opens
- error sound for the full-screen Missing Skills blue screen

Browsers may only play sounds after the visitor has interacted with the page, which is normal.

## Missing Skills blue screen
The `Missing Skills` recycle bin opens as a full-screen blue-screen error. The Back button closes it and returns to the desktop.

## Missing Skills blue screen
The `Missing Skills` desktop icon is intentionally not opened through the window system. It triggers a full-page BSOD overlay in `script.js` via `openBsod()` and returns with `closeBsod()`.

## Latest update

- Replaced the desktop Work folder with `workportfolio.html`.
- `workportfolio.html` opens `https://sites.google.com/view/elooi-de-buck` in a new browser tab by default.
- Added a small Windows XP-style “Opening file...” dialog before the new tab launches.
- Removed the old iframe/Internet Explorer embed code because Google Sites blocks embedded frames.
- Added `assets/icons/html.svg`; replace this file to change the desktop HTML-file icon.
- Replaced placeholder name text with **Elooi De Buck**.


## Work folder shortcuts

The desktop `Work` item is a folder again. It contains:

- `README.note` — automatically opens when the Work folder is opened.
- `workportfolio.html` — opens `https://sites.google.com/view/elooi-de-buck` in a new tab.
- `current_waylay_website.html` — opens `https://www.waylay.io/` in a new tab.
- `waylay_waybackmachine.html` — opens the Waylay Wayback Machine archive in a new tab.

The matching placeholder files live in `assets/work/` so you can replace or edit them later.


## Custom icon files

The file-type icons live in `assets/icons/` and are designed in a Windows XP-inspired pixel style.

- `html.svg` — generic HTML document
- `note.svg` — README / note document
- `link.svg` — generic web shortcut
- `browser.svg` — current website / browser shortcut
- `archive.svg` — Wayback Machine / archive shortcut

To replace any icon, keep the same filename and swap the SVG or image file.


## Tooltips and Properties dialogs

Hover over desktop icons or files to see an XP-style tooltip.

Right-click any desktop icon or file/folder item to open a Windows XP-inspired Properties dialog.

You can edit descriptions and metadata in `script.js` under `window.XP_ITEM_METADATA`.


## Sound tray fix

The sound toggle is now inserted directly next to the date/time tray area. If the original taskbar clock cannot be detected, the site creates a small fallback tray at the bottom-right with the sound icon and a clock.


## Art / Tattoo desktop split

The visible desktop icon `Art & Tattoo` has been replaced with two desktop folders: `Art` and `Tattoo`. Opening `Art` auto-opens `README.note`. The three Art `.exe` files open book-style artwork browsers. Replace placeholder artwork files in `assets/art/` and edit `const artBooks` in `script.js` to point to PNG/JPG/SVG/GIF or MP4 files. For MP4 pages, set `type` to `video`.


## Minimal artwork book viewer update

The Art `.exe` files now open a simplified two-page book viewer.

- First spread: chapter legend with clickable chapter links
- Following spreads: two artwork pages at a time
- Previous / Next buttons browse the whole book

On mobile, the Art `README.note` no longer auto-opens. Instead, it blinks inside the folder so users can still tell it is important.


## Rollback note

This version rolls back to the state before the uploaded drawings were integrated.

Folder icons have also been normalized so all folders use:

`assets/icons/folder.svg`


## Freeform desktop icons

Desktop icons still start in the intended two-column layout, but users can now drag them anywhere on the desktop.

Icon positions are saved in `localStorage`, so the layout persists in the same browser.


## Art viewer functionality removed

This package keeps the Art folder and its placeholder files, but removes the old book/minimal art viewer functionality and related media assets.

Current Art folder files:

- `README.note`
- `observational.exe`
- `experimental.exe`
- `diary_DONOTREADTHIS.exe`

The `.exe` files are placeholders for a future Art system.


## Folder icons only

Folder windows now display file-type icons only. Thumbnail/preview images inside folders have been removed or overridden.


## Folder icon-only fix

The folder item renderer `createWindowItem()` now outputs only the actual file/folder icon and label. It no longer generates thumbnail preview markup.


## Mobile README pulse update

On mobile, README files now use a softer pulse animation instead of a hard blink. The pulse stops after the README is tapped/opened once, with state saved in localStorage.


## Mobile README auto-open fix

The core folder auto-open logic now checks `isMobileReadmeMode()` before opening Work or Art README notes. README items also get `data-name="README.note"` and `readme-important` directly from `createWindowItem()`, so the mobile pulse consistently applies.


## Deep mobile README auto-open fix

All direct README auto-open calls are now guarded on mobile, and a runtime interceptor suppresses non-user-initiated README opens on mobile while still allowing README files to open when tapped.
See `README_AUTOOPEN_DIAGNOSTICS.txt` for the scanned README/openItem references.
