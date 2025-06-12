document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for fade-in animations
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible on screen)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible to prevent re-animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each section
    sections.forEach(section => {
        observer.observe(section);
    });

});