import React, { Component,useState ,useEffect} from 'react'
import WeatherIcon from '/Users/shivanitayal/Desktop/React/src/mild.png';
import SunnyIcon from '/Users/shivanitayal/Desktop/React/src/sunny.png';
import ColdIcon from '/Users/shivanitayal/Desktop/React/src/cloudy.jpeg';

console.log(process.env.REACT_APP_WEATHER_API_KEY)
const API_KEY = "27e03021a9e547fa99899912f2dceddd"

const Town =()=> {

       
    const [weather, setWeather] = useState({});
    
    useEffect(() => {
        const cityname="Delhi";
        const weatherURL =
        `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&APPID=${API_KEY}`;

        



        fetch(weatherURL)
.then(res => res.json())
.then(result => {
   // setQuery("");
    setWeather(result);
    console.log(result);
})

    },[]);
    
        return(
            <div>
                <h1>I live in Punjab,India </h1>
                 <p>It is located in northwestern part of India.Punjab is famous for it's religious diversity and Gold Temple is the pilgrimage site here! </p>
                 <img alt="Punjab" width={125} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnX3_VXLxR0g3BD8xBTAGKK1kP2umf5vU0uw&usqp=CAU" />

                {weather?.main?.temp} C
                {(() => {
                  
        if (weather?.main?.temp >=20) {
          return (
            <img src={SunnyIcon}/>
          )
        } else if (weather?.main?.temp > 10 && weather?.main?.temp <20 ) {
          return (
            <img src={WeatherIcon}/>
          )
        } else {
          return (
            <img src={ColdIcon}/>
          )
        }
      })()}

                
            </div>
        )

    }


export default Town;

