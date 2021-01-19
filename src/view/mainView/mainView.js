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
        if (search) {
            const searched = countries.filter(country => {
                return country.name.toLowerCase().includes(search.toLowerCase())
             })

             setCountries(searched)
        }
    }, [search]);

    useEffect(() => {
        if(search === ''){
            fetchData();
        }
    },[]);

    const fetchData = () => {
        if (region === '' || region === 'All') {
            getData();
        } else {
            getRegionCountrie()
        }
    }

    const getData = async() => {
        try{
            const {data} = await allCountriesUrl();
            setCountries(data);
            console.log(data);
        }catch(err){
            console.log(err)
        }
    }

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }


    const regionHandler = (e) => {
        setRegion(e.target.value.toLowerCase())
        console.log(region)
    }

    const getRegionCountrie =async() => {
        try{
            const{data} = await regionUrl(region);
            setCountries(data);
            console.log(data)
        }catch(err){
            console.log(err);
        }
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