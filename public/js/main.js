const submitbtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
   
    
    if (cityVal == "") {
        city_name.innerText = `Please write city name before Search`;
        datahide.classList.add('data_hide');
    
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=bd2f607c98401e47ee9115ade2a64771`

            const response =  await fetch(url);
            const data = await response.json();
            
            // console.log(response);


            // -----------------------------------------------
            // const objdata = JSON.parse(data);
            // const arrdata = [objdata];
            // console.log(arrdata);
        // ------------------------------------------------------

            const arrData = [data];



            // console.log(arrData);

            cityName.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = ((arrData[0].main.temp)-(273)).toFixed(2);
            temp_status.innerText = arrData[0].weather[0].main;
            console.log(temp_real_val);
 
            const tempMood = arrData[0].weather[0].main;
            console.log(arrData[0].weather[0].main);


        //  condition to check sunny or cloudy  
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-cloud-sun' style ='color:#eccc68'></i>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style ='color:#f1f2f6'></i>";
            }
            else if (tempMood == "rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-drizzle' style ='color:#a4b0be'></i>";
            }
            else  {
                temp_status.innerHTML = "<i class='fas fa-sun' style ='color:#f1f2f6'></i>";
            }
            
            datahide.classList.remove('data_hide');


        } catch {
            city_name.innerText = `Please Enter correct city name before Search`;
        }
    }


}

submitbtn.addEventListener('click', getInfo);



//  date and time section  ------------------

 
const curDay = document.getElementById("day");
const curDate = document.getElementById("today_date");

const getcurrentday = () =>{

    var weekday = [
        "sunday",
        "monday",
        "Tuestday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

//   console.log(weekday[3]);
    let currenttime = new Date();
   
    let day = weekday[currenttime.getDay()];
    return day;


}
const getcurrenttime = () =>{

var months = [
            
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "June",
         "July",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",

];

 var now  = new Date();
 var month = months[now.getMonth()];
 console.log(month);
console.log(months[3]);
 var date =  now.getDate();
 
 
 
 return `${date}-${month}`;
 };

curDay.innerHTML = getcurrentday();
curDate.innerHTML = getcurrenttime();
 