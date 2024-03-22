/* ============================= toggle icon navbar ===================================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/* ============================= scroll section active link ===================================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    /* ============================= sticky navbar ===================================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ============================= remove toggle icon and navbar ===================================== */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

/* ============================= scroll reveal ===================================== */
ScrollReveal({ 
    distance: '100px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });      // Issue
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

 /* ============================= typed js ===================================== */
 const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Backend Developer', 'Nodejs Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 })












/*
    What are the changes to perform in this portfolio.

========= Home =================
1. Hi logo emoji after Hi all,
2. Make paragraphs word little bigger & space between lines as it is in other portfolio.


============= About ===============
1. Below what I do, logo of Javascript, Nodejs, Expressjs, npm, sql- databse will come in one line. 
2. Below all logo, the space between pointers lines should be less. (there will be 5 to 6 lines coming there) 

============= Education ===========
1. Logo of college, below that Collage name, below that BE fullform below that time duration i.e. August 2018 - July 2022
And this all should be coming from left side as in other portfolio.

========== Work Experience ===========
Only 2 box, in 1st box Stonehaus Realty logo image below that Company Name below that two specifying details about project and then website link. 
          , in 2st box Revenue Share logo image like (Revenue Share) below that Company Name below that two specifying details about project and then website link. 

========= Latest Projects ===========
3 boxs, in 1st ecommerce logo with button of code.
        in 2nd sockets logo with button of code and link.
        in 3rd video stream logo with button of code.

=========== Contact ================
Need to remove this contact form and do below stuff.
Create contact like Reach out to me atlast in other portfolio not exactly same but have some changes.        

*/