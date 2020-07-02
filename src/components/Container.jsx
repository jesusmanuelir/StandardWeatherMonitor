import React from 'react';


const Container = ({city,country,temp,weather}) => {

    return(
        <main >

            <div className="location-box">
                <p className="location">{city}, {country}</p>
                <p className="date">Monday 7 00 PM</p>
            </div>
            <div className="weather-icon-box">
                <i class="wu wu-white wu-128 wu-clear"></i>
            </div>
            <div className="weather-temp-box">
                <p className="temp">{Math.round(temp)} °c</p>
                <p className="weather">{weather}</p>
            </div>
            
        </main>
    );

    
}

export default Container;