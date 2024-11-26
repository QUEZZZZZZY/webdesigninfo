document.getElementById('back-to-welcome').addEventListener('click', () => {
    window.location.href = 'index.html'; // Переход на главную страницу
});

document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', () => {
        const sectionKey = node.dataset.section;
        window.location.href = `section.html?section=${sectionKey}`; // Переход на страницу соответствующего раздела
    });
});
