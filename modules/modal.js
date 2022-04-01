export default function initModal(){

const openModalBtn = document.querySelector('.modal-btn');

const containerModal = document.querySelector('.container-modal');

const closeModalBtn = document.querySelector('.close-modal-btn')

openModalBtn.addEventListener('click', handleModal);

closeModalBtn.addEventListener('click', handleModal);

containerModal.addEventListener('click', handleClickContainerModal)

function handleModal(){

    containerModal.classList.toggle('active');

}

function handleClickContainerModal(event) {
    if (event.target === this){
        handleModal();
    } 
}

}