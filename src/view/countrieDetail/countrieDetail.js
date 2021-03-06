import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import Button from "../../components/button/button";
import Countrie from "../../components/countrie/countrie";
import { getCountrieHomeRoute } from "../../constants/routes/routes";
import { oneCountrieUrl } from "../../constants/services/services";
import Header from "../header/header";

const CountrieDetail = () => {
  const [countrieInfo, setCountrieInfo] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { name } = match.params;
    try {
      const { data } = await oneCountrieUrl(name);
      setCountrieInfo(data);
      console.log(countrieInfo);
    } catch (err) {
      console.log(err);
    }
  };

  const goBackHandler = () => {
    history.push(getCountrieHomeRoute());
  };

  return (
    <section>
      <Header />
        {countrieInfo.map((countrie) => {
            return ( 
              <Countrie
                key={countrie.name}
                name={countrie.name}
                flag={countrie.flag}
                nativeName={countrie.nativeName}
                population={countrie.population}
                region={countrie.region}
                subregion={countrie.subregion}
                capital={countrie.capital}
                topLevelDomain={countrie.topLevelDomain}
                borders={countrie.borders}
                currencies={countrie.currencies.map((curr) => curr.name)}
                languages={countrie.languages.map((lang) => lang.name)}
              />
            );
          })}
      
    </section>
  );
};

export default CountrieDetail;
