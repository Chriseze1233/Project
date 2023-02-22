const navBAr = document.querySelector('.toggler');
const nav = document.querySelector('.navBar');

navBAr.addEventListener('click', () => {
    nav.classList.toggle('active')
})

