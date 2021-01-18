import React from 'react';
import { useHistory } from 'react-router';
import { getGenerteOneCountrieRoute } from '../../constants/routes/routes';


const AllCountries = ({name, region, capital, population, flag, countries}) => {
    
    const history = useHistory();

    

    const oneCountriHandler = (name) => {
        var lowerCaseName = name.toLowerCase();
        history.push(getGenerteOneCountrieRoute(lowerCaseName));
    }

    return(
        <div>
            <img src={flag} alt='Flag' onClick={() => oneCountriHandler(name)}/>
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