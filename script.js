let mobileMenu = document.querySelector('.mobile-navigation');
let hamburger = document.getElementById('hamburger');
let cross = document.getElementById('close');

function handleClick(){
    mobileMenu.style.display =  'flex';
    hamburger.style.display =  'none';
    cross.style.display = 'block';
}

function closeMenu() {
    mobileMenu.style.display =  'none';
    hamburger.style.display =  'block';
    cross.style.display = 'none';
}