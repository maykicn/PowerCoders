const weatherResult = document.getElementById("weather");
const countyOption = document.getElementById('country')
const citySelect = document.getElementById('city')
var countryOfWeahter;
var cityOfWeahter;
var lat;
var lon;


window.onload = async () => {

     //to get name of the country
     let sehirler = await (await fetch('https://countriesnow.space/api/v0.1/countries')).json();
     
     //create all country for options 

     for(const nameOfCountry of sehirler.data){
        const country = document.createElement('option');
        country.value = nameOfCountry.iso3;
        country.text = nameOfCountry.iso3;
        countyOption.appendChild(country)
     }
 
    
}


 //selected counntry and city from country dropdownlists
  countyOption.addEventListener('change', async ()=>{
    let sehirler = await (await fetch('https://countriesnow.space/api/v0.1/countries')).json();

    //getting from country selected value from country dropdownlist
    var value = countyOption.options[countyOption.selectedIndex].value;
    countryOfWeahter = value;
    

    //getting cities according to selected value from country dropdownlist
    for (let index = 0; index < sehirler.data.length; index++) {
        if (value == sehirler.data[index].iso3){
            for(city of sehirler.data[index].cities ){
                cityOfWeahter = city;
                const cityOptions = document.createElement('option');
                cityOptions.value = city;
                cityOptions.text = city;
                citySelect.appendChild(cityOptions)

            }

        }
        
    }

    
  })

  citySelect.addEventListener('change',async ()=>{

    var value = citySelect.options[citySelect.selectedIndex].value;
    cityOfWeahter = value;

    let result = await (await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityOfWeahter},${countryOfWeahter}&limit=1&appid=3de1bbb1b94e972a8699a03868e73d3d`)).json();
    lat = result[0].lat;
    lon = result[0].lon;
    let weather = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3de1bbb1b94e972a8699a03868e73d3d`)).json();
    weatherResult.innerText = `Country:${countryOfWeahter} , city: ${cityOfWeahter}, lat: ${lat}, lon:${lon}, weather: ${weather.weather[0].description}`;

    

  })
 
