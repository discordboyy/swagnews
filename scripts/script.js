document.querySelectorAll('#giperurl').forEach(container => {
    container.addEventListener('click', () => {
        const link = container.dataset.link;
        if (link) {
            window.open(link, '_blank');
        }
    });
});
