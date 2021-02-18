import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useHistory, useRouteMatch } from "react-router";
import Button from "../../components/button/button";
import {
  getGenerteCountrieByLetterRoute,
  getCountrieHomeRoute,
} from "../../constants/routes/routes";
import { borderCountriUrl } from "../../constants/services/services";
import Header from "../header/header";

const BorderCountrie = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [borderCountry, setBorderCountry] = useState(null);
  const [newCountry, setNewCoutry] = useState(false);

  useEffect(() => {
    fetchNewData();
  }, [newCountry]);

  const selectCountryHandler = (border) => {
    var lowerCaseName = border.toLowerCase();
    history.push(getGenerteCountrieByLetterRoute(lowerCaseName));
    setNewCoutry(true);
  };

  const fetchNewData = async () => {
    return new Promise(async (resolve, reject) => {
      const { code } = match.params;
      try {
        const { data } = await borderCountriUrl(code);
        setBorderCountry(data);
        resolve(data);
        setNewCoutry(false);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  };

  const goHomeHandler = async () => {
    history.push(getCountrieHomeRoute());
  };

  return (
    <div>
      <Header />
      {borderCountry && (
        <div key={borderCountry.flag + borderCountry.name} className="country-detail">
        <Button className="country-detail__btn country--btn" onClick={goHomeHandler} name="&larr; HOME" />
            <div className="country-info">
              <img className="country-info__flag" alt="flag" src={borderCountry.flag}></img>
              <div className="country-info__content">
                <div className="country-info__name"><p>{borderCountry.name}</p></div>
                <div className="country-info__detail">
                  <div className="country-info__detail--1">
                    <p><strong>Nativ Name:</strong>{borderCountry.nativeName}</p>
                    <p>
                      <strong>Population: </strong>{" "}
                      <NumberFormat
                        value={borderCountry.population}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                    <p>
                      <strong>Region:</strong> {borderCountry.region}
                    </p>
                    <p>
                      <strong>Subregion:</strong> {borderCountry.subregion}
                    </p>
                    <p>
                      <strong>Capital:</strong> {borderCountry.capital}
                    </p>
                  </div>
                  <div className="country-info__detail--2">
                    <p>
                      <strong>Top Level Domain:</strong>{" "}
                      {borderCountry.topLevelDomain}
                    </p>
                    <p>
                      <strong>Currencies:</strong>{" "}
                      {borderCountry.currencies.map((cur) => cur.name)}
                    </p>
                    <p>
                      <strong>Languages:</strong>
                      {borderCountry.languages.map((lang) => {
                        return (<span key={lang.name}>{lang.name}</span>);})}{" "}</p>
                  </div>
                </div>
                <div className="country-info__border">
                  <strong>Border Countrie:</strong>
                  {borderCountry.borders.map((border) => {
                    return (
                      <ul key={border}>
                        <span  onClick={() => selectCountryHandler(border)}>
                          <p className="country-info__border--box">{border}</p>
                        </span>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default BorderCountrie;
