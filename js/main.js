// Main JavaScript execution layer for Chiyamiko Maiba Portfolio
document.addEventListener('DOMContentLoaded', () => {
    console.log("[SYSTEM] Local fullscreen layout initialized.");
    initScrollReveal();
});

// Scroll-Driven Intersection System
function initScrollReveal() {
    const targets = document.querySelectorAll('.scroll-reveal');
    
    const configurationOptions = {
        root: null, 
        threshold: 0.02, 
        rootMargin: "0px 0px -10px 0px" 
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop re-triggering for stability
            }
        });
    }, configurationOptions);

    targets.forEach(item => {
        intersectionObserver.observe(item);
    });
}
