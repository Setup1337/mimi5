document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message-card');

    messages.forEach((card) => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.2s';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
