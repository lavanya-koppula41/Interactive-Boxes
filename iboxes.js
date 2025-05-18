document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        // Deselect all
        document.querySelectorAll('.box').forEach(b => {
            b.classList.remove('active');
            b.querySelector('input[type="radio"]').checked = false;
        });

        // Select current
        box.classList.add('active');
        box.querySelector('input[type="radio"]').checked = true;
    });
});
