import React, { useEffect, useState } from "react";
import AllCountries from "../../components/allCountries/allCountries";
import Dropdown from "../../components/dropdown/dropdown";
import SearchBox from "../../components/searchBox/searchBox";
import { allCountriesUrl, regionUrl } from "../../constants/services/services";
import Header from "../header/header";
import "./stylee.scss";

const CountrieHome = () => {
  const [allCOuntries, setAllCOuntries] = useState([]);
    const [regionCountries, setRegionCountries] = useState([]);
    const [useRegion, setUseRegion] = useState(false);

    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('All');

    const [countries , setCountries] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetchCountry();
    }, []);

    useEffect(() => {
        doFilterCountries();
    },[search]);

    useEffect(() => {
        if (!region || region === 'All'){
            setUseRegion(false)
        }else{
            fetchRegionCountries();
        }
    },[region]);

    useEffect(() => {
        doFilterCountries();
    },[regionCountries, useRegion]);


    const fetchCountry = async () => {
        try{
            const{data} = await allCountriesUrl();
            setAllCOuntries(data);
            setCountries(data);
            setLoader(false);
        }catch(err){
            console.log(err)
        }
    }

    const fetchRegionCountries = async () => {
        try{
            const{data} = await regionUrl(region.toLowerCase());
            setRegionCountries(data);
            setUseRegion(true);
        }catch(err){
            console.log(err)
        }
    }

    const doFilterCountries = () => {
        const countriesForUse = useRegion ? regionCountries : allCOuntries;
        if(!search){
            setCountries(countriesForUse)
        }else{
            const listForFilter = countriesForUse;
            const searchCountries = listForFilter.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))
            setCountries(searchCountries);
        }

     }

  return (
      <div>
        <Header />
        <div className="search">
          <SearchBox value={search} placeholder="Search for Country..."  onChange={({target : {value}}) => setSearch(value)} />
          <Dropdown value={region} onChange={event => { setRegion(event.target.value)}} />
        </div>
        <div>
          {loader ? (
          <div className="loader"></div>
            ) : (
          <div className="countries">
              {countries.map((countrie) => {
                return (
                  <AllCountries
                    key={countrie.name}
                    name={countrie.name}
                    capital={countrie.capital}
                    region={countrie.region}
                    population={countrie.population}
                    flag={countrie.flag}
                  />
                );
              })}
          </div>
        )}
        </div>
      </div>
  );
};

export default CountrieHome;
