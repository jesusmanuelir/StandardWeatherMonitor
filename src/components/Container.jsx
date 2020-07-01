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
        </main>
    );

    
}

export default Container;