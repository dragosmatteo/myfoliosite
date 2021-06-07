// !! Dragos Matteo 5.06.2021 Folio

const navbar =  document.querySelector('.navbar');
let sticky = navbar.getBoundingClientRect().height;


// !! Sticky navigation
const navbarScroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = navbarScroll;
