function getNumberOfDays(start, end){
    const date1 = new Date(start);
    const date2 = new Date(end);

//One day in milliseconds
    const oneDay = 24 * 60 * 60 * 1000;

// Calculating the time difference between two dates
    const diffInTime = date1.getTime() - date2.getTime();

// Calculating the numbers of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

console.log(getNumberOfDays("1 / 2 / 2021", "3 / 1 / 2021"));

// let firstDate = document.querySelector('.date_1');
// let secondtDate = document.querySelector('.date_2');
// firstDate.addEventListener('click', function(){
//     console.log(firstDate);
// });

let now = new Date();
let year = now.getFullYear();
console.log(year);

let month = now.getMonth();
console.log(month);

let day = now.getDate();
console.log(day);

console.log(now);