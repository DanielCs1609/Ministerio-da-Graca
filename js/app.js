const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});
