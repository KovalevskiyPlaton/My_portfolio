const Modal=()=>{
    //Modal
 const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'),
        outSideModal = document.querySelector('.dm-cell');



    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        clearInterval(modalTimerId);

    }

    modalTrigger.addEventListener('click', openModal);

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        //document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) =>{
        if(e.target===modal||e.target==outSideModal){
            closeModal();
        }

        document.addEventListener('keydown', (e)=>{
            if (e.code == 'Escape' && modal.classList.contains('show')){
                closeModal();
            }
        });
    });
//Установка работы модального окна (срабатывает через определенное  время);
    const modalTimerId = setTimeout(openModal,5000);
}
Modal();









