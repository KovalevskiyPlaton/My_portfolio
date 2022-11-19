//Timer => .hero-section-timer-grid"> <!--5 grid-->
//Определение переменных времени
const timer =()=>{
    const countTime =()=>{
        const currentDate = new Date();
        const deadline = new Date('2023-05-31')
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
}

timer();
