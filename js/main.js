const btnToggleNavMobile = document.querySelector('.content-button-nav-mobile');
const Modal = document.querySelector('.modal-nav-mobile');

btnToggleNavMobile.addEventListener('click', () => {
    if(!Modal.classList.contains('toggle-modal')){
        Modal.classList.add('toggle-modal');
        btnToggleNavMobile.children[0].src = '/assets/icon-close.svg';
    }else {
        Modal.classList.remove('toggle-modal');
        btnToggleNavMobile.children[0].src = '/assets/icon-hamburger.svg';
    }
})