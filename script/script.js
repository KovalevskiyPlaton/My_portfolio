//Slider => .hero-section-skills-grid <!--6 grid-->
const sliderLine = document.querySelector('.slider-line'),
      prevButton = document.querySelector('.button-prev'),
      nextButton = document.querySelector('.button-next'),
      dots = document.querySelectorAll('.dot');

let position = 0, //будут передаваться новые значения left - для сладйер лайна
    dotIndex =0   //сохранение индекс определенного слайда для последующего смены индикации


//functions

//1) nexTbutton

const nextSlide =()=>{
    if(position<(dots.length-1)*400){
        position += 400       //размер слайда
        dotIndex++
          }else{
            position=0;
            dotIndex=0
    }
    sliderLine.style.left = -position+'px';
    thsSlide(dotIndex);
}

const prevSlide =()=>{
    if(position>0){
        position -= 400       //размер слайда
        dotIndex--;
    }else{
        position=(dots.length-1)*400;
        dotIndex=(dots.length-1)
    }
    sliderLine.style.left = -position+'px';
    thsSlide(dotIndex);
}
const thsSlide = (index)=>{
    for (let dot of dots){
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}
//EventListeners

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)

//+dots => addEventListener

dots.forEach((dot, index)=>{
    dot.addEventListener('click', ()=>{
        position=400*index
        sliderLine.style.left=-position+'px';
        dotIndex=index;
        thsSlide(dotIndex)
    })
})

//dots.addEventListener add activeClass

setInterval(()=>{
    nextSlide();
}, 3000)



//Timer => .hero-section-timer-grid"> <!--5 grid-->


//Определение переменных времени

const countTime =()=>{
    const currentDate = new Date();
    const deadline = new Date('2023-05-01')
    const resultDate = Math.abs(Date.parse(deadline)-Date.parse(currentDate));
    const years = Math.floor(resultDate/(1000*60*60*24*30*12));
    const months = Math.floor(resultDate/(1000*60*60*24*30))%12;
    const days=Math.floor(resultDate/(1000*60*60*24)%30);
    const hours =Math.floor(resultDate/(1000*60*60)%24);
    const minutes = Math.floor(resultDate/(1000*60)%60);
    const seconds = Math.floor(resultDate/1000)%60;
    document.querySelector('.t_years').innerHTML= years;
    document.querySelector('.t_months').innerHTML= months;
    document.querySelector('.t_days').innerHTML= days;
    document.querySelector('.t_hours').innerHTML= addZero(hours);
    document.querySelector('.t_minutes').innerHTML= addZero(minutes);
    document.querySelector('.t_seconds').innerHTML = addZero(seconds);

}

setInterval(countTime, 1000)

function addZero(num){
    if (num>=0 && num<10){        //добавление 0 если значение ровно целому (пример: будет -  20 минут, 06 часов, а не  20 минут, 6 часов ... )
        return `0${num}`;
    }else{
        return num;
    }
}
countTime();

//Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');


function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) =>{
    if(e.target===modal){
        closeModal();
    }

    document.addEventListener('keydown', (e)=>{
        if (e.code == 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });
});
//Установка работы модального окна (срабатывает через определенное  время);
const modalTimerId = setTimeout(openModal,100);

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






