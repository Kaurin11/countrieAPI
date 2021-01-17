import React, { useEffect, useState } from 'react';
import AllCountries from '../../components/allCountries.js/allCountries';
import { allCountriesUrl } from '../../constants/services/services';

const MainView = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        try{
            const {data} = await allCountriesUrl();
            setCountries(data);
            console.log(data);
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            {countries.map((countrie) => {
                        return(
                            <AllCountries
                                key={countrie.name} 
                                name={countrie.name}
                                capital={countrie.capital}
                                region={countrie.region}
                                population={countrie.population}
                                flag={countrie.flag}
                                />
                        )})}
        </div>
    )
}

export default MainView;