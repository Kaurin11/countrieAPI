import React, { useEffect, useState } from "react";
import AllCountries from "../../components/allCountries/allCountries";
import Dropdown from "../../components/dropdown/dropdown";
import SearchBox from "../../components/searchBox/searchBox";
import { allCountriesUrl, regionUrl } from "../../constants/services/services";
import Header from "../header/header";
import "./stylee.scss";

const CountrieHome = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetchData();
  }, [region]);

  useEffect(() => {
    fetchData().then((data) => {
      if (search) {
        const searchedCountries = data.filter(({ name }) =>
          name.toLowerCase().includes(search.toLowerCase())
        );
        setCountries(searchedCountries);
      }
    });
  }, [search]);

  const fetchData = async () => {
    return new Promise(async (resolve, reject) => {
      const apiFunction =
        region === "" || region === "All" ? allCountriesUrl : regionUrl;
      try {
        const { data } = await apiFunction(region);
        setCountries(data);
        resolve(data);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const regionHandler = (e) => {
    setRegion(e.target.value.toLowerCase());
  };

  return (
    <section className="section-main">
      <Header />
      <SearchBox placeholder="Search for Country..." onChange={searchHandler} />

      <Dropdown onClick={regionHandler} />
      <div className="flex">
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
    </section>
  );
};

export default CountrieHome;
