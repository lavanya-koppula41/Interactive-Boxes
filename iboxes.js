document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        document.querySelectorAll('.box').forEach(b => {
            b.classList.remove('active');
            b.querySelector('input[type="radio"]').checked = false;
        });
        box.classList.add('active');
        box.querySelector('input[type="radio"]').checked = true;
    });
});
