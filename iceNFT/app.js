const faq_cont = document.querySelectorAll('.questArea');

faq_cont.forEach((faq) => {
    let faq_btn = faq.querySelector('.questionBtn');
    faq_btn.addEventListener('click',() => {
        faq.classList.toggle('active')
    })
})