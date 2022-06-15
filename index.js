const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');



// Show Menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})


// Hide Menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Change Theme

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');
})
