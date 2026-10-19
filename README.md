# FORGE Athletics — Premium Gym Website Demo (Edition 2)

A premium, responsive, **6-page static gym website** in an **Obsidian / Burnished Gold / Bone** editorial design system built with plain HTML, CSS, and JavaScript. No npm, React, build step, database, or API keys required.

> **DEMO BRAND:** FORGE Athletics is fictional. Coach identities, testimonials, prices, business contact details, opening hours, and statistics are sample content for demonstration. The footer has the requested "Designed & developed by XYZ COMPANY" credit.

## How to run

### Windows
1. Extract `forge-gym-website.zip`.
2. Open the extracted `forge-gym` folder.
3. Double-click `start-windows.bat` (requires Python 3), or open Command Prompt in the folder and run:

   ```bat
   py -3 -m http.server 5500
   ```

4. Open **http://localhost:5500** in Chrome, Edge, or Firefox.

### macOS / Linux
1. Extract the ZIP and open Terminal in the extracted `forge-gym` folder.
2. Run:

   ```bash
   python3 -m http.server 5500
   ```

   Or run `bash start-mac-linux.sh`.

3. Open **http://localhost:5500** in your browser.

**To stop the server:** press `Ctrl + C` in the terminal.

You can also open `index.html` directly in a browser; a local web server is recommended for a consistent preview and when deploying the site.

## Website pages

| Page | File | What's included |
|---|---|---|
| Home | `index.html` | Cinematic hero, gold ticker, editorial typography, immersive program gallery, photo feature, interactive schedule, coaches, testimonials, premium pricing and conversion CTA |
| About | `about.html` | Gym story, values, equipment gallery |
| Programs | `programs.html` | Four training programs, interactive weekly class schedule |
| Coaches | `coaches.html` | Coach showcase, training approach |
| Membership | `membership.html` | Three pricing tiers, monthly/annual pricing toggle, comparison chart, FAQs |
| Contact | `contact.html` | Enquiry form, studio hours, contact details, demo location area |

## Features you can demonstrate

- Responsive desktop/tablet/mobile design and hamburger navigation.
- Cinematic entrance animations, staggered scroll reveals, hover photo zoom, moving brand ticker, and scroll progress indicator.
- Seven-day interactive class schedule. "Book a spot" opens a demo enquiry modal.
- Monthly/annual membership billing switch with dynamically recalculated prices.
- Rotating testimonial controls and expandable membership FAQ.
- Working front-end form validation, enquiry modal, and success toast.
- Keyboard-friendly navigation, Esc modal dismissal, focus management, meaningful alternative image text, and reduced-motion support.
- Attractive custom footer including the `XYZ COMPANY` design/development credit.

## Important: forms, photos, and internet

**Forms are demo-only.** They validate input and display a success confirmation, but **they do not transmit, email, save, book, or charge anything**. To use the website for a real gym, connect an API, form provider, booking software, and payment system.

**Real workout photography is loaded online from [Unsplash](https://unsplash.com).** Fonts are loaded from [Google Fonts](https://fonts.google.com). **An internet connection is required for photos and the custom web fonts to appear.** The HTML, CSS, JS, and fallback styling are in the ZIP. The page layout still works if the external content is unavailable.

Unsplash images are made available for free commercial and non-commercial use under the [Unsplash License](https://unsplash.com/license). Attribution is appreciated but not required. The photos are for illustration and do not necessarily depict the named fictional coaches or the fictional gym. Before launching a real commercial gym website, review applicable usage rights, including any recognizable people or brands in the photos.

### Image sources used (Unsplash photo IDs)

- `photo-1517836357463-d25dfeac3438` — gym deadlift / hero
- `photo-1534438327276-14e5300c3a48` — gym dumbbell rack
- `photo-1581009146145-b5ef050c2e1e` — weights training
- `photo-1574680096145-d05b474e2155` — strength session
- `photo-1598971639058-fab3c3109a00` — push-up conditioning
- `photo-1518611012118-696072aa579a` — mobility / movement group
- `photo-1571019614242-c5c5dee9f50b` — personal coaching
- `photo-1540497077202-7c8a3999166f` — gym facility
- `photo-1526506118085-60ce8714f8c5` — pull-up training
- `photo-1576678927484-cc907957088c` — dumbbells
- `photo-1583454110551-21f2fa2afe61` — gym weights

Direct photo page pattern: `https://unsplash.com/photos/[photo-slug]` or `https://images.unsplash.com/[photo-id]`.

## Project layout

```text
forge-gym/
├── index.html                # Completely redesigned editorial homepage
├── about.html
├── programs.html
├── coaches.html
├── membership.html
├── contact.html
├── assets/
│   ├── css/style.css
│   ├── css/premium.css       # Version 2 colors, design, sections and responsive rules
│   ├── js/main.js
│   └── icons/favicon.svg
├── start-mac-linux.sh
├── start-windows.bat
└── README.md
```

## Customize

- **Brand and company credit:** update the `FORGE` and `XYZ COMPANY` strings in `assets/js/main.js`, and brand text in HTML.
- **Colors:** customize `--ink`, `--cream`, `--gold`, and `--lime` in `assets/css/premium.css`. This premium stylesheet loads *after* the base styles.
- **Programs, content and pricing:** edit the individual HTML pages. JavaScript demo prices are based on `data-monthly` attributes on pricing cards.
- **Schedule:** change the `weekly` data inside `assets/js/main.js`.
- **Photo URLs:** replace Unsplash URLs in the HTML and CSS with your own licensed gym photos, or download permitted photos and update URLs to local `assets/images/` references.
- **Contact details / studio location:** change placeholders in `assets/js/main.js` and `contact.html`.
- **Footer:** the company attribution block is in `assets/js/main.js` under `footer.innerHTML`.

All six HTML pages are ready to edit directly; there is no generator or build step in the release ZIP.

## Deploy as a static site

Upload the contents of this folder (not necessarily the outer folder itself) to any static host, such as Netlify, Cloudflare Pages, Vercel static deployment, GitHub Pages, or standard shared hosting. No server-side application is required for the demo.

## Version 2 premium redesign

- New warm burnished gold, rich charcoal, and bone-ivory color system throughout all pages.
- Entire homepage rebuilt with ten carefully art-directed sections and mixed athletic/serif typography.
- Stronger image-led layouts and oversized headings on desktop; tailored section stacking and controls for mobile.
- More polished footer credit, buttons, pricing, schedule, and focus states.
- Photographs are Unsplash-hosted; the browser needs internet access to load them.
