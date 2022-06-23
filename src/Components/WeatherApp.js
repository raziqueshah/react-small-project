import React, { useEffect, useState } from 'react';
import '../Components/WeatherApp.css';

function WeatherApp() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        
        const fetchApi = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b75dff6cf8e693682cdc8e969d14cadf`
            const response = await fetch(url);
            
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    },[setSearch])
  return (
    <>
      <div className='box'>
          <div className='inputData'>
        <input type="search" className='inputData input' value={search} onChange={ (event)=>{
            setSearch(event.target.value)
        } } />
        
      </div>

      {
          !city ? (
              <p className='errorMsg'>No Data Found</p>
          ) :(
              <div>
            <div className='info'>
        <h2 className='location'>
        <i className="fas fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'>
        {city.temp}Cel
        </h1>
        <h3 className='tempmin_max'> Min : {city.temp_min}Cel | Max : {city.temp_max}Cel </h3>
      </div>

      <div className='wave1'></div>
      <div className='wave2'></div>
      <div className='wave3'></div>
      </div>
          )
      }

      </div>
    </>
  )
}

export default WeatherApp;