import React from 'react';

const Container = ({city,country,temp,weather, icon}) => {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
      }

    const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const tempF = Math.round(temp);
    const tempM = 22;

    
    return(
        <div>
            <div className={(tempF > tempM) ? 'location-box' : 'location-box-cold'}>
                <p className={(tempF > tempM) ? 'location' : 'location-cold'}>{city}, {country}</p>
                <p className={(tempF > tempM) ? 'date' : 'date-cold'}>{dateBuilder(new Date())}</p>
            </div>
            <div className="weather-icon-box">
                <img src={urlIcon} />
            </div>
            <div className="weather-temp-box">
                <p className={(tempF > tempM) ? 'temp' : 'temp-cold'}>{tempF} °c</p>
                <p className={(tempF > tempM) ? 'weather' : 'weather-cold'}>{weather}</p>
            </div>
        </div>
    );

    
}

export default Container;