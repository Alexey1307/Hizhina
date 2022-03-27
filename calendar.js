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

    const startDateRender = new Date(dateStart).toISOString().substring(0, 10);
    const endDateRender = new Date(dateEnd).toISOString().substring(0, 10);

    out.innerHTML = new Date(startDateRender).toISOString().substring(0, 10) + ' - ' +
        new Date(endDateRender).toISOString().substring(0, 10);
    // out_2.innerHTML = new Date(endDateRender).toISOString().substring(0,10);


    for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
        let arr = [new Date(i).toISOString().substring(0, 10)];
        count++;
        let trueCount = count - 1;
        out_2.innerHTML = `${trueCount}`;
        out_3.innerHTML = trueCount * 2000 + "р";
    }
    });