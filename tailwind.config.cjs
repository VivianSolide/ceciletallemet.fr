module.exports = {
    mode: 'jit',
    content: [
        "./public/**/*.html",
        "./src/**/*.{astro,js,svelte,ts}",
    ],
    safelist: [
        'bg-blue-900',
        'bg-blue-700',
        'bg-blue-500',
        'bg-blue-300',
    ]
};