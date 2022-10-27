const verClima=async()=>{
    let apiK="36b27f94872564d5b45bdc52cc89c2e7";
    let divF=document.querySelector("#f");
    if(navigator.geolocation){
        var success = async function(position){
        var latitud = position.coords.latitude,
            longitud = position.coords.longitude;
            console.log("Latitud:"+latitud+", Longitud"+ longitud)
       let URL=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiK}&units=metric&lang=es`;
            console.log(URL);
const api= await fetch(URL);
const data= await api.json();
console.log(data);
const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
divF.innerHTML=`
<img src="${urlIcon}">
<h1>${data.name},${data.sys.country}</h1>
<h1>${data.weather[0].description.toUpperCase()}</h1>
<h1>Tem.${data.main.temp}</h1>
<h1>Tem. Min.${data.main.temp_min}</h1>
<h1>Tem. Max${data.main.temp_max}</h1>
<h1>Presión At.${data.main.pressure}hPa</h1>
<h1>Humedad.${data.main.humidity}%</h1>
<h1>V. Viento.${data.wind.speed}Km/hr</h1>
`;
    }
        navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        });
        }
}