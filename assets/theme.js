// Shared Tailwind (CDN) theme: Salimboji navy brand with an indigo accent.
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
            colors: {
                navy: { 50: '#eef1f8', 100: '#dde3f0', 200: '#c0c8d6', 500: '#4a5e8a', 700: '#2a406a', 800: '#1a2e5e', 900: '#111f42' },
                accent: { 50: '#eef2ff', 500: '#4f46e5', 600: '#4338ca' },
            },
        },
    },
};
