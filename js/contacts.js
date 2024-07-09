function init() {
    import('./header.js');
    import('./contacts.reservation-option.js');
    import('./contacts.reservation-form.js');
    import('./contacts.accordion.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});