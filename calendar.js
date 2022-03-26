// Выводим выбранные даты
document.querySelector('.button').addEventListener('click', function(){
    let dateStart = document.querySelector('.start_date').value;
    let dateEnd = document.querySelector('.end_date').value;
    dateStart =Date.parse(dateStart);
    dateEnd =Date.parse(dateEnd);

    let out = document.querySelector('.out');
    let out_2 = document.querySelector('.out_2');
    let out_3 = document.querySelector('.out_3');

    let count = 0;
    for(let i = dateStart; i <= dateEnd; i = i + 24*60*60*1000){
        // out.innerHTML = new Date(i).toISOString().substring(0, 10) + '<br>';
        let arg = [new Date(i).toISOString().substring(0, 10)];
        arg = [...arg];
        out.innerHTML += arg;
        console.log(arg[0]); //Почему ты лять не выводишь 1 элемент???
        count ++;
        let trueCount = count -1;
        out_2.innerHTML = trueCount;
        out_3.innerHTML = trueCount * 2000 + "р";
        }
    });