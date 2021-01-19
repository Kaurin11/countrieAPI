import React, { useEffect, useState } from 'react';
import AllCountries from '../../components/allCountries/allCountries';
import Dropdown from '../../components/dropdown/dropdown';
import SearchBox from '../../components/searchBox/searchBox';
import { allCountriesUrl, regionUrl } from '../../constants/services/services';
import Header from '../header/header';
import './stylee.scss';

const MainView = () => {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        fetchData();
    }, [region]);

    useEffect(() => {
        fetchData().then(() => {
          if (search) {
            const searchedCountries = countries.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()));
            console.log('kako')
            console.log(countries)
            setCountries(searchedCountries)
          }
        })
    }, [search]);

    const fetchData =async () => {
        if (region === '' || region === 'All') {
            const {data} = await allCountriesUrl();
            setCountries(data);
        } else {
            const{data} = await regionUrl(region);
            setCountries(data);
        }
    }

    //aa

    // const getData = async() => {
    //     try{
    //         const {data} = await allCountriesUrl();
    //         setCountries(data);
    //         console.log(data);
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    // const getRegionCountrie =async() => {
    //     try{
    //         const{data} = await regionUrl(region);
    //         setCountries(data);
    //         console.log(data)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const regionHandler = (e) => {
        setRegion(e.target.value.toLowerCase())
        console.log(region)
    }

    return(
    
        <section className="section-main">
            <Header />
            <SearchBox 
                placeholder="Search for Country..."
                onChange={searchHandler} />
                
            <Dropdown onClick={regionHandler}/>
            <div className="flex">
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
        </section>
    )
}

export default MainView;