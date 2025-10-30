document.addEventListener('DOMContentLoaded', function() {
    const footerIcons = document.querySelectorAll('.footer__social .footer__social-link .footer__social-icon');
    if (!footerIcons.length) return;

    const hoverMap = {
        'Telegram': 'images/tg.svg',
        'VK': 'images/vk.svg',
        'Instagram': 'images/m.svg'
    };

    footerIcons.forEach(function(img) {
        const originalSrc = img.getAttribute('src');
        const alt = img.getAttribute('alt') || '';
        const hoverSrc = hoverMap[alt] || originalSrc;

        img.addEventListener('mouseenter', function() {
            if (hoverSrc) img.setAttribute('src', hoverSrc);
        });
        img.addEventListener('mouseleave', function() {
            img.setAttribute('src', originalSrc);
        });

        img.addEventListener('touchstart', function() {
            if (hoverSrc) img.setAttribute('src', hoverSrc);
        }, { passive: true });
        img.addEventListener('touchend', function() {
            img.setAttribute('src', originalSrc);
        });
    });
});


