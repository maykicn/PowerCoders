const cities = document.getElementById("cities");
var lat;
var lon;


window.onload = async () => {


     // to get city

     let sehirler = await (await fetch('https://countriesnow.space/api/v0.1/countries')).json();
     console.log(`sehirler.data[0].iso3 ${sehirler.data[0].iso3}`)
 
 
 
     // for (const country of sehirler.data) {
 
     //     console.log(country)
     //     for (const city of country.cities) {
 
     //         console.log(city)
             
     //     }
     //     console.log('!!!!!!control!!!!')
         
     // }
 



    // to get lat and lon value
    let result = await (await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Paris,FRA&limit=1&appid=3de1bbb1b94e972a8699a03868e73d3d')).json();
    console.log(result[0])
    lat = result[0].lat;
    lon = result[0].lon;
    console.log(`London sehrinin lat degeri: ${lat}, lon degeri: ${lon}`)
    cities.innerText =`Paris sehrinin lat degeri: ${lat}, lon degeri: ${lon}`;




    // to get weather
    // let weather = await (await fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.8588897&lon=2.3200410217200766&appid=3de1bbb1b94e972a8699a03868e73d3d')).json();
    let weather = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3de1bbb1b94e972a8699a03868e73d3d`)).json();

    console.log(weather.weather[0].description)






   
    
    
}