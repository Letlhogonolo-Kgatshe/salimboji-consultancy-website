// ─────────────────────────────────────────────────────────────────────
// Salimboji Consultancy: practice details used across every page.
// ⚠️ Replace the placeholder values below with the practice's real details.
//    The original site used US template details (+1 555…, New York),
//    so these are left clearly marked until confirmed.
// ─────────────────────────────────────────────────────────────────────
window.CLINIC = {
    name: 'Salimboji Consultancy',
    tagline: 'Online doctor consultations and medication delivered to your door',
    phoneDisplay: '[Practice phone number]',
    phoneTel: '',                 // e.g. '+27110000000' (digits only, used for tap-to-call)
    whatsapp: '',                 // e.g. '27820000000' (international format, no +), used for wa.me links
    email: 'contact@salimboji.com',
    address: '[Practice address]',
    hours: [
        ['Monday – Friday', '08:00 – 20:00'],
        ['Saturday', '09:00 – 17:00'],
        ['Sunday & public holidays', 'Closed'],
    ],
    // Opening times in hours, by weekday (0 = Sunday). Keep in sync with `hours` above.
    open: { 1: [8, 20], 2: [8, 20], 3: [8, 20], 4: [8, 20], 5: [8, 20], 6: [9, 17] },
    slots: ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
    emergency: 'In a medical emergency, call 10177 (ambulance) or 112 from a cellphone. Do not wait for an online consultation.',
};
