let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function calcDays(date1,date2){
    var d1 = new Date(date1);
    var d2 = new Date(date2);

    var t1 = d1.getTime();
    var t2 = d2.getTime();

    var dateTime = 1000 * 60 * 60 * 24;
    var minusDays = Math.floor((t2-t1)/dateTime);
    return minusDays;
}
function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = year + " " + months[month];
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    var time = Date.parse(new Date());
    var lasttime = Date.parse("2021/11/25");
    var count = 0;
    var Circle = 0;
    var strDate = "";
    var strCC = "";


    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                realmonth = parseInt(selectMonth.value) + 1
                strDate = year + "/" + realmonth + "/" + date
                //console.log(strDate);
                //console.log(time < lasttime);
                //console.log(selectMonth.value)
                time = Date.parse(strDate);
                count = calcDays(lasttime,time);
                
                Circle = count % 6;
                if (Circle == -5 || Circle == 0 || Circle == 1) {
                    strCC = "甲";
                }else if (Circle == -4 || Circle == -3 || Circle == 2 || Circle == 3){
                    strCC = "乙";
                }else if (Circle == -2 || Circle == -1 || Circle == 4 || Circle == 5){
                    strCC = "丙";
                }else{
                    strCC = "NA";
                }
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date + " " + strCC);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}