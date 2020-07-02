import React from 'react';


const Container = () => {

    return(
        <main >
            <div className="search-box">
                <input
                    type        = "text"
                    className   = "search"
                    placeholder = "Search city ..."

                />
            </div>
            <div className="location-box">
                <p className="location">Orlando</p>
                <p className="date">Monday 7 00 PM</p>
            </div>
            <div className="weather-icon-box">
                <i class="wu wu-white wu-128 wu-clear"></i>
            </div>
            <div className="weather-temp-box">
                <p className="temp">22 °c</p>
                <p className="weather">Clouds</p>
            </div>
            
        </main>
    );

    
}

export default Container;