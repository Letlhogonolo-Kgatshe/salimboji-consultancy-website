# Salimboji Consultancy: Online Healthcare Website

![HTML](https://img.shields.io/badge/HTML5-E34F26) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E)

Website for **Salimboji Consultancy**, a practice offering online doctor consultations (WhatsApp video or Zoom) and medication delivered to the patient's door.

**Live:** https://letlhogonolo-kgatshe.github.io/salimboji-consultancy-website/

![Salimboji Consultancy homepage](docs/screenshot.jpg)

## Pages

| Page | What it offers |
|---|---|
| **Home** (`index.html`) | Book and Order calls to action on load, an "open now" badge, the 3-step journey, services, what to expect, when *not* to use online care, and opening hours |
| **Services** (`services.html`) | Six services, each with a direct booking link; conditions that suit online care; emergency red flags and helplines |
| **Book a consultation** (`book.html`) | A 3-step flow (service and call type → day and time → details) with a progress bar, inline validation, a review screen, and sending via WhatsApp or email; includes an add-to-calendar (.ics) file |
| **Order medication** (`medication.html`) | Order form with prescription options, sent via WhatsApp or email, and instructions for sending the prescription photo |
| **Contact & FAQ** (`contact.html`) | Phone, WhatsApp, email and address, opening hours, a contact form and 7 FAQs |

Every page has an emergency notice (10177 / 112) and, on phones, a sticky **Call · WhatsApp · Book** bar.

## Design decisions

Based on healthcare website UX research: patients want the fewest steps between landing and booking, contact options visible without scrolling, a clear confirmation, and honest guidance on what can and can't be treated online.

- **No server-side health data.** The site is static, so booking and order requests go to the practice through WhatsApp or email. Nothing sensitive is stored in a database or lost in a form that sends nowhere (POPIA).
- **No invented testimonials.** The previous template reviews were removed. Add real, consented patient reviews when available.

## ⚠️ Before going live: add the practice's real details

All contact details live in one place: **`assets/config.js`**. Set `phoneDisplay`, `phoneTel`, `whatsapp`, `email`, `address`, `hours`/`open` and `slots`. The previous site used US placeholder details (+1 555…, New York), so the phone, WhatsApp and address are left clearly marked until confirmed. Until a WhatsApp number is added, all requests are sent by email.

## Tech

Static HTML with **Tailwind CSS** (CDN) and vanilla JavaScript. Shared header, footer and mobile action bar come from `assets/site.js`; the theme is in `assets/theme.js` and `assets/site.css`. It has no build step.

```bash
npx http-server .
```

---

Freelance client project (2025, redesigned 2026) by **Letlhogonolo Kgatshe**.
