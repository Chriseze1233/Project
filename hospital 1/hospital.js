const night = document.querySelector('.nightModeCover');
// const navOpen = document.querySelector('#open');
const srchBar = document.querySelector('.searchBar');
const flaotingIcons = document.querySelector('.socialNav');
const navOpen = document.querySelector('#open');
const navClose = document.querySelector('#close');
const navBar = document.querySelector(".navListMain");

night.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    night.querySelector('#nignt').toggle(night.style.background = 'yellow');
    night.querySelector('#day').classList.toggle('active:disabled');
    // alert('hello');
});

srchBar.addEventListener('click', () => {
    // alert('hello');
    // srchBar.querySelector('.searchInputTop').classlist.toggle('searchInputTop');
    srchBar.querySelector('.searchInputTop').style.display = 'block';
});

window.addEventListener('scroll', () => {
    let scroll_Y = window.scrollY;
    if(scroll_Y > 500) {
        flaotingIcons.classList.add('active');
        console.log(flaotingIcons)
    }
    else {
       flaotingIcons.classList.remove('active')
    }
});

navOpen.addEventListener('click', () => {
    navBar.style.left = 0 + 'px';
});

navClose.addEventListener('click', () => {
    navBar.style.left = -1000 + 'px';
});
