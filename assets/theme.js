// Shared Tailwind (CDN) theme: Salimboji navy brand with a blue accent.
tailwind.config = {
    future: { hoverOnlyWhenSupported: true },
    theme: {
        extend: {
            fontFamily: { sans: ['var(--font)', 'system-ui', 'sans-serif'], mono: ['"Geist Mono"', 'ui-monospace', 'monospace'] },
            colors: {
                navy: { 50: '#eef1f8', 100: '#dde3f0', 200: '#c0c8d6', 500: '#4a5e8a', 700: '#2a406a', 800: '#1a2e5e', 900: '#111f42' },
                accent: { 50: '#eff4ff', 500: '#1d4ed8', 600: '#1e40af' },
            },
        },
    },
};
