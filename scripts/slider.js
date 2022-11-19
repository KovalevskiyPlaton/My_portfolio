//Slider => .hero-section-skills-grid <!--6 grid-->
const slider = ()=>{
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
}

slider();


