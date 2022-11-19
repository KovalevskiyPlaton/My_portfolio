const lightScroll=()=>{
    //Установка Light scroll  (мягкая прокрутка)
    const anchors = document.querySelectorAll('.nav__items > a');
    anchors.forEach(anchor=>{
        anchor.addEventListener('click', (event)=>{
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block:'start'
            })
        })
    })
}

lightScroll();







