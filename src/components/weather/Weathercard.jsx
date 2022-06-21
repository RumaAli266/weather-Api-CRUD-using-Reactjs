import React, { useEffect, useState } from 'react';


const Weathercard = ({tempInfo}) => {
    const [weatherState, setWeatheState] = React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case "Clouds": 
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze": 
                    setWeatheState("wi-fog");
                    break;
                case "Clear": 
                    setWeatheState("wi-day-sunny");
                    break;
                default:
                    setWeatheState("wi-day-sunny");

                    break;
            }
        }
    }, [weathermood]);

    //converting seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
         <article className='widget'>
      <div className='weatherIcon'>
          <i className={`wi ${weatherState}`}></i>
      </div><br/>

      <div className="center-part">
          <div >
              <span>{temp}&deg; </span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>{weathermood}   </div>
            <div className='place'>{name}, {country}</div>
         </div>

        <div className='date'>{new Date().toLocaleString()}</div>

      </div>
      <br/><br/>
      {/* our 4column section */}
      
      <div className="flex-container" >
          <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>

                    <p className='extra-info-leftside'>
                            {timeStr} PM <br/>
                            sunset
                    </p>

                </div>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>

                    <p className='extra-info-leftside'>
                            {humidity} <br/>
                            Humidity
                    </p>

                </div>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>

                    <p className='extra-info-leftside'>
                            {pressure} <br/>
                            Pressure
                    </p>

                </div>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>

                    <p className='extra-info-leftside'>
                            {speed} <br/>
                            Speed
                    </p>

                </div>


          </div>
      </div>
  </article>
    </>
  )
}

export default Weathercard;