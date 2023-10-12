document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        content.classList.toggle('active');
    });
});
