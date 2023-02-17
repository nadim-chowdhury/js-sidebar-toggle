let btn = document.getElementById('btn');
let sidebar = document.getElementById('sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-close');
})