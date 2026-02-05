const socialData = [
    { selector: '.email-link', url: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}` },
    { selector: '.ig-link', url: import.meta.env.VITE_IG_SOCIAL },
    { selector: '.fb-link', url: import.meta.env.VITE_FB_SOCIAL },
    { selector: '.ln-link', url: import.meta.env.VITE_LN_SOCIAL },
];

document.addEventListener('DOMContentLoaded', () => {
    socialData.forEach(({ selector, url }) => {
        document.querySelectorAll(selector).forEach(link => {
            link.href = url;
        });
    });
});