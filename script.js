// !! Dragos Matteo 5.06.2021 Folio

// const navbar =  document.querySelector('.navbar');
// let sticky = navbar.getBoundingClientRect().height;

// // !! Sticky navigation
// const navbarScroll = () => {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky')
//   } else {
//     navbar.classList.remove('sticky');
//   }
// };

// window.onscroll = navbarScroll;

// !! Modal 

const modal = document.querySelector('#simpleModal');
const closeBtn = document.querySelector('.closeBtn');
const modalBtn = document.querySelector('#contact')

// !!  Lisen for click 
modalBtn.addEventListener('click', openModal());

// !! Lisen for close click
closeBtn.addEventListener('click', closesModal());

// !! Lisen for outside click 
window.addEventListener('click', clickOutsite());

// !! Function to open modal 
const openModal = function(){
  modal.style.display = 'block';
}

// !! Function to close modal 
const closeModal = function(){
  modal.style.display = 'none';
}

const clickOutsite = function(e){
    if (e.target == modal) 
    modal.style.display = 'none';
}
