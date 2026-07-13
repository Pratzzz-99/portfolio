document.addEventListener('DOMContentLoaded', () => {
    // Scroll animation for skill cards and other elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Prepare and observe skill cards
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        // Staggered animation
        card.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
        observer.observe(card);
    });

    // Prepare and observe section titles
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'all 0.6s ease-out';
        observer.observe(title);
    });

    // Prepare and observe contact box
    const contactBox = document.querySelector('.contact-box');
    if (contactBox) {
        contactBox.style.opacity = '0';
        contactBox.style.transform = 'scale(0.95)';
        contactBox.style.transition = 'all 0.6s ease-out';
        observer.observe(contactBox);
    }
});
