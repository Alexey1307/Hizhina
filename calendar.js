// Выводим выбранные даты
document.querySelector('.button').onclick = function(){
    let dateStart = document.querySelector('.start_date').value;
    let dateEnd = document.querySelector('.end_date').value;
    dateStart =Date.parse(dateStart);
    dateEnd =Date.parse(dateEnd);

    let out = document.querySelector('.out');
    let out_2 = document.querySelector('.out_2');

    let count = 0;
    for(let i = dateStart; i <= dateEnd; i = i + 24*60*60*1000){
        out.innerHTML += new Date(i).toISOString().substring(0, 10) + 
        '<br>';
        count ++;
        out_2.innerHTML = count;
        console.log(count);
        }
    };

// let count = 0;

// for (let i = 0; i < 27; i++) {
//     // console.log(i);
//     count++;
// }

// console.log(count);




// function calc () {
//     let dateStart = document.querySelector('.start_date').value;
//     let dateEnd = document.querySelector('.end_date').value;
//     // dateStart = Date.parse(dateStart);
//     // dateEnd =Date.parse(dateEnd);
//     const oneDay = 24 * 60 * 60 * 1000;
//     // Calculating the time difference between two dates
//     let a = dateStart.getTime();
//     let b = dateEnd.getTime()
//     const diffInTime = a - b;
//     // Calculating the numbers of days between two dates
//     const diffInDays = Math.round(diffInTime / oneDay);
//     let out = document.querySelector('.out');
//     return diffInDays;

// }