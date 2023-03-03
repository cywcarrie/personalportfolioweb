//Intro animation
var typed = new Typed(".input",{
    strings:["Carrie Chen.","Freelancer.","Kaggle Master.",
    "Translator.","Volunteer Translator."],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
});


//Menu
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
}
);

let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}

//Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
})
