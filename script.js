let first = document.querySelector(".first-page")
let second = document.querySelector(".second-page")
let third = document.querySelector(".third-page")
let Input = document.querySelector("input");

let password = "12345";

document.addEventListener("click" , function(){
    first.style.top = "-100%"
    second.style.top = 0
})
Input.addEventListener("keypress", function(event){
    if(event.key === "Enter")
    {
    if (Input.value===password)
    {
    second.style.top = "-100%"
    third.style.top = 0
    }
    else
    {
        alert("wrong password")
    }
    Input.value = ""; 
}
})

function updateTime(){
    var dateInfo = new Date();

    var hr ,
     _min = (dateInfo.getMinutes()<10)?"0"+dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds()<10)?"0"+dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours()>=12) ? "PM":"AM";

      // replace 0 with 12 at midnight, subkject 12 from hour if 13-23

      if(dateInfo.getHours()==0)
      {
        hr=12;
      }
      else if(dateInfo.getHours()>12)
      {
        hr = dateInfo.getHours()-12;
      }
      else
      hr = dateInfo.getHours();

      // current time

      var currentTime = hr + ":" + _min + ":" + sec ;

      // Print Time

      document.getElementsByClassName("hms")[0].innerHTML = currentTime;
      document.getElementsByClassName("ampm")[0].innerHTML = ampm;

       // date

      var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ], 
      
      day = dateInfo.getDate();

      // store date

      var  currentDate = dow[dateInfo.getDay()] + " , " + month[dateInfo.getMonth()] + " " +day;
      document.getElementsByClassName("date")[0].innerHTML = currentDate ;

}

// print time and date once , then update them every second

        updateTime();
        setInterval(function(){
           updateTime()
        },1000)
// var date = new Date;
// var month = date.getMonth() +1;
// var day  = date.getDate() ;
// var year = date.getFullYear() ;
// var hours = date.getHours();
// var minutes = date.getMinutes() ;

// var res = day + '/' + month + '/' + year;
// var d = date.getDay();
// switch(d){
//     case 0:
//     d ="Sunday";
//     break;
//     case 1:
//     d ="Monday";
//     break;
//     case 2:
//     d = "Tuesday";
//     break;
//     case 3:
//     d ="Wednesday";
//     break;
//     case 4:
//     d = "Thursday";
//     break;
//     case 5:
//     d ="Friday";
//     break;
//     case 6:
//     d ="Saturday";
//     break;
// }
// switch(month){
//     case 1:
//     var month = "Jnuaray";
//     break;
//     case 2:
//     var month = "Febraury";
//     break;
//     case 3:
//     var month = "March";   
//     break;
//     case 4:
//     var month = "April";   
//     break;
//     case 5:
//     var month = "May";   
//     break;
//     case 6:
//     var month = "June";   
//     break;
//     case 7:
//     console.log("July");
//     break;
//     case 8:
//     var month = "August";   
//     break;
//     case 9:
//     var month = "September";   
//     break;
//     case 10:
//     var month = "October";   
//     break;
//     case 11:
//     var month = "November";   
//     break;
//     case 12:
//     month = "December";
//     break;

// }
// console.log(day + month);
// var tim = hours +  " : "+ minutes; 


// first.textContent = tim;


// var time = d + ", " + day + " "+ month; 
// // console. log(time. getHours() + ":" + time)

// first.textContent = time;
// // document.querySelector("#t").style.fo = "Gilroy";



