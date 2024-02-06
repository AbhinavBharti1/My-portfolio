let menuIcon = document.getElementById('menu-icon'); // Corrected selector
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Corrected class name
    navbar.classList.toggle('active');
}

// The rest of your JavaScript code remains unchanged



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    console.log('Scrolling!');
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); 
}