// Salimboji shared layout: header, mobile menu, emergency notice, footer,
// sticky mobile action bar (Call / WhatsApp / Book) and helpers.
(function () {
    'use strict';
    const C = window.CLINIC;
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // Contact channels: fall back gracefully while real details are pending.
    const hasPhone = Boolean(C.phoneTel), hasWa = Boolean(C.whatsapp);
    const telHref = hasPhone ? `tel:${C.phoneTel}` : 'contact.html';
    const waHref = (text = '') => hasWa ? `https://wa.me/${C.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : `mailto:${C.email}${text ? `?subject=${encodeURIComponent('Enquiry')}&body=${encodeURIComponent(text)}` : ''}`;
    // Practice time (Johannesburg) and whether we're open, from CLINIC.open.
    const saNow = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' }));
    const isOpenNow = () => { const n = saNow(), h = C.open[n.getDay()]; const t = n.getHours() + n.getMinutes() / 60; return Boolean(h) && t >= h[0] && t < h[1]; };
    window.SC = { $, $$, esc, telHref, waHref, hasPhone, hasWa, saNow, isOpenNow };

    const PAGES = [['index.html', 'Home'], ['services.html', 'Services'], ['book.html', 'Book a consultation'], ['medication.html', 'Order medication'], ['contact.html', 'Contact & FAQ']];
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    const notice = document.createElement('div');
    notice.className = 'bg-rose-50 text-rose-800 text-xs sm:text-sm';
    notice.innerHTML = `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2"><span aria-hidden="true">🚑</span><span>${esc(C.emergency)}</span></div>`;

    const header = document.createElement('header');
    header.className = 'sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200';
    header.innerHTML = `
        <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] bg-navy-800 text-white px-4 py-2 rounded-lg">Skip to content</a>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <a href="index.html" class="flex items-center gap-2.5" aria-label="${esc(C.name)} home">
                <span class="w-9 h-9 rounded-xl bg-navy-800 text-white grid place-items-center font-bold" aria-hidden="true">S</span>
                <span class="font-bold text-navy-900 text-lg leading-tight">Salimboji<span class="block text-[11px] font-medium text-slate-500 -mt-0.5">Consultancy</span></span>
            </a>
            <nav class="hidden lg:flex items-center gap-1 text-sm font-medium" aria-label="Main">
                ${PAGES.map(([h, l]) => `<a href="${h}" class="px-3 py-2 rounded-lg ${h === here ? 'text-navy-800 bg-navy-50 font-semibold' : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'}"${h === here ? ' aria-current="page"' : ''}>${l}</a>`).join('')}
            </nav>
            <div class="hidden lg:flex items-center gap-2">
                <a href="${telHref}" class="px-3 py-2 rounded-lg text-sm font-semibold text-navy-800 hover:bg-navy-50">📞 ${hasPhone ? esc(C.phoneDisplay) : 'Call us'}</a>
                <a href="book.html" class="btn-primary !py-2.5 text-sm">Book now</a>
            </div>
            <button id="menu-btn" class="lg:hidden w-11 h-11 grid place-items-center rounded-xl text-navy-900 hover:bg-slate-100" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
            </button>
        </div>
        <nav id="mobile-menu" class="lg:hidden hidden border-t border-slate-200 bg-white" aria-label="Mobile">
            <div class="px-4 py-3 grid gap-1">${PAGES.map(([h, l]) => `<a href="${h}" class="px-3 py-3 rounded-lg ${h === here ? 'bg-navy-50 text-navy-800 font-semibold' : 'hover:bg-slate-50'}">${l}</a>`).join('')}</div>
        </nav>`;
    document.body.prepend(header);
    document.body.prepend(notice);
    $('#menu-btn').addEventListener('click', (e) => {
        const open = $('#mobile-menu').classList.toggle('hidden') === false;
        e.currentTarget.setAttribute('aria-expanded', open);
    });

    // Sticky action bar on phones: the three things patients most want.
    const bar = document.createElement('nav');
    bar.className = 'lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 grid grid-cols-3 text-xs font-semibold text-navy-800';
    bar.setAttribute('aria-label', 'Quick actions');
    bar.innerHTML = `
        <a href="${telHref}" class="py-2.5 flex flex-col items-center gap-0.5 hover:bg-slate-50"><span class="text-lg" aria-hidden="true">📞</span>Call</a>
        <a href="${waHref('Hi Salimboji, I would like to make an enquiry.')}" target="_blank" rel="noopener" class="py-2.5 flex flex-col items-center gap-0.5 hover:bg-slate-50"><span class="text-lg" aria-hidden="true">💬</span>${hasWa ? 'WhatsApp' : 'Message'}</a>
        <a href="book.html" class="py-2.5 flex flex-col items-center gap-0.5 bg-navy-800 text-white"><span class="text-lg" aria-hidden="true">📅</span>Book now</a>`;
    document.body.appendChild(bar);
    document.body.classList.add('pb-16', 'lg:pb-0');

    const footer = document.createElement('footer');
    footer.className = 'bg-navy-900 text-slate-300 mt-4';
    footer.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div><p class="font-bold text-white text-lg">${esc(C.name)}</p><p class="mt-2">Accessible healthcare through online consultations and medication delivery.</p></div>
            <div><p class="font-semibold text-white">Care</p><ul class="mt-3 space-y-2">
                <li><a class="hover:text-white" href="services.html">All services</a></li><li><a class="hover:text-white" href="book.html">Book a consultation</a></li>
                <li><a class="hover:text-white" href="medication.html">Order medication</a></li><li><a class="hover:text-white" href="contact.html#faq">FAQ</a></li></ul></div>
            <div><p class="font-semibold text-white">Opening hours</p><ul class="mt-3 space-y-1.5">${C.hours.map(([d, h]) => `<li class="flex justify-between gap-4"><span>${esc(d)}</span><span class="text-white">${esc(h)}</span></li>`).join('')}</ul></div>
            <div><p class="font-semibold text-white">Contact</p><ul class="mt-3 space-y-2">
                <li><a class="hover:text-white" href="${telHref}">📞 ${esc(C.phoneDisplay)}</a></li><li><a class="hover:text-white" href="mailto:${esc(C.email)}">✉️ ${esc(C.email)}</a></li><li>📍 ${esc(C.address)}</li></ul></div>
        </div>
        <div class="border-t border-white/10"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs flex flex-col sm:flex-row justify-between gap-2">
            <p>© ${new Date().getFullYear()} ${esc(C.name)}. Your personal and health information is handled in line with POPIA.</p>
            <p>Online consultations do not replace emergency care.</p></div></div>`;
    document.body.appendChild(footer);
})();
