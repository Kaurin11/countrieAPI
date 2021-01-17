import React from 'react';


const AllCountries = ({name, region, capital, population, flag, countries}) => {
    
    return(
        <div>
            <img src={flag} alt='Flag' />
            <h3>{name}</h3>
            <div> 
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>Population:</strong> {population}</p>
            </div>
        </div>
    )

}

export default AllCountries;