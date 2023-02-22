const header = document.querySelector(".header");
const toTop = document.querySelector('.toTop');
const nav = document.querySelector('.nav')
const navOpen = document.querySelector('.navOpen');
const navClose = document.querySelector('.navClose');
const faqCont = document.querySelectorAll('.faq_cont');
const about_cont = document.querySelector('.aboutTextCont'); 
const about_btns = document.querySelectorAll('.about-btn');
const about_txt = document.querySelectorAll('.about_text');
const faq_conts = document.querySelectorAll('.faq_cont');

window.addEventListener('scroll',  () => {
    let scroll_y = window.scrollY;
    if(scroll_y  > 100) {
        header.classList.add('scrollEffect');
        nav.classList.add('scrollEffect');
        toTop.style.display = 'block';
    }
    else {
        header.classList.remove('scrollEffect');
        nav.classList.remove('scrollEffect');
        toTop.style.display = 'none';
    }
    // console.log(toTop);
    
})

navOpen.addEventListener("click", () => {
    nav.classList.add('show');
})

navClose.addEventListener("click", () => {
    nav.classList.remove('show');
})

// for(i = 0; i < faqCont.length; i++) {
//     faqCont[i].addEventListener('click', () => {
//         this.classList.toggle('active');
//     })
// };

about_cont.addEventListener("click", (e) => {
    let targetd = e.target.dataset.id;
    if(targetd) {
        about_btns.forEach((about_btn) => {
            about_btn.classList.remove('active');
            e.target.classList.add('active');
        })
        about_txt.forEach((about_text) => {
            about_text.classList.remove('active')
        })
        element_clicked = document.getElementById(targetd);
        element_clicked.classList.add('active');
    }
console.log(about_cont);
})




// about_cont.addEventListener('click', (e) => {
//     let target = e.target.dataset.id;
//     if(target) {
//         about_btns.forEach((btn_slide) => {
//             btn_slide.classList.remove('active');
//             e.target.classList.add('active');
//         })

//         about_txt.forEach((img_slide) => {
//             img_slide.classList.remove('active');
//         })
//         element_slide = document.getElementById(target);
//         element_slide.classList.add('active');
//     }
// })


faq_conts.forEach((faq_cont) => {
    let faq_btn = faq_cont.querySelector('.question');
    let faq_ans = faq_cont.querySelector('.answer');
    faq_btn.addEventListener('click', () => {
        faq_btn.classList.toggle('active');
        faq_ans.classList.toggle('active');
    })

})