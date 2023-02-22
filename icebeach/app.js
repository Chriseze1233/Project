const toggle = document.querySelector('.nightMode');
const Nav = document.querySelector('.nav_listCont');
const navBar = document.querySelector('.navBar');
const slideNavs = document.querySelectorAll('.navSlide span');
const hero = document.querySelector('.hero');
const img_slides = document.querySelectorAll('.imgSliders');
const btn_slides = document.querySelectorAll('.clickBtn');
var count = 0;
const imgSlides = document.querySelectorAll('.imgSliders');
// const toggler = document.querySelector('.nightMode');

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active');
    document.body.classList.toggle('darkMode')
})

navBar.addEventListener('click', () => {
    Nav.classList.toggle('active')
})

hero.addEventListener('click', (e) => {
    let target = e.target.dataset.id;
    if(target) {
        btn_slides.forEach((btn_slide) => {
            btn_slide.classList.remove('active');
            e.target.classList.add('active');
        })

        img_slides.forEach((img_slide) => {
            img_slide.classList.remove('active');
        })
        element_slide = document.getElementById(target);
        element_slide.classList.add('active');
    }
})
// function imgSlide() {
//         if(count > imgSlides.length - 1) {
//             count = 0;
//             console.log(imgSlide(count));
//         }
//         else {
//             count ++;
//             imgSlides[count].style.display = "block";
//             console.log(count)
//             // console.log(imgSlide(count));
//         }
//             setTimeout("imgSlide()", 3000);
// }

window.onload = imgSlide;

// function slideImg() {
//     // count = e;
//     if(e > imgSlides.length) {
//         count = 1;
//     }
//     for(1 = 0;i < imgSlides;i++) {
        
//     //     if(imgSlides[count] > 0) {
//     //         count++;
//             imgSlides[i].style.display = 'none';
//             slideNavs[i].style.backgroundColor = 'var(--background-2)';
//     //     }
//     }
// }

// slideNavs.forEach((slideNav) => {
//     slideNav.addEventListener('click', (e) => {
//         count = e
//     })
// })

