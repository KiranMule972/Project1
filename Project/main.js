
 function GetInfo() {
    const params = new URLSearchParams(window.location.search);
    const city = params.get("city");

    const cityName = document.getElementById("cityName");
    cityName.textContent = city;

if(city){
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=dc00b2b624219191966d193d092318a9")
.then(response=>response.json())
.then(data =>{
    for(var i=0;i<5;i++){
        const dayIndex = CheckDay(i);
        document.getElementById("day"+(i+1)+"Min").innerHTML="Min:" + Number(data.list[i].main.temp_min - 265.11).toFixed(1)+"°";
        document.getElementById("day"+(i+1)+"Max").innerHTML="Max:" + Number(data.list[i].main.temp_max  -255.87).toFixed(1)+"°";
        document.getElementById("img"+(i+1)).src="https://openweathermap.org/img/wn/" +data.list[i].weather[0].icon+".png";
        }
})       
.catch(err=>alert("something went wrong"));                  
}
 }
const d=new Date();
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function CheckDay(day){
    if(day+ d.getDay()>6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}
document.addEventListener("DOMContentLoaded", function() {
for(let i=0;i<5;i++)
{
    document.getElementById("day"+(i+1)).innerHTML=weekday[CheckDay(i)];
}
 });