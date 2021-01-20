import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useHistory, useRouteMatch } from "react-router";
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
        <div key={borderCountry.flag + borderCountry.name} className="country">
          <div className="row">
            <h1>
              <button className="country--btn" onClick={goHomeHandler}>
                <ion-icon name="arrow-back-outline"></ion-icon>HOME
              </button>
            </h1>
            <div className="col-1-of-2 country-centar-flag">
              <img className="country__flag" src={borderCountry.flag}></img>
            </div>
            <div className="col-1-of-2 country__content">
              <h1 className="u-margin-bottom-small">{borderCountry.name}</h1>
              <div className="row">
                <div className="col-1-of-2">
                  <p>
                    <strong>Nativ Name:</strong>
                    {borderCountry.nativeName}
                  </p>
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
                <div className="col-1-of-2">
                  <p className="country__content--domain">
                    <strong>Top Level Domain:</strong>{" "}
                    {borderCountry.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {borderCountry.currencies.map((cur) => cur.name)}
                  </p>
                  <p className="country--lang">
                    <strong>Languages:</strong>
                    {borderCountry.languages.map((lang) => {
                      return (
                        <span
                          className="country__content--lang-box"
                          key={lang.name}
                        >
                          {lang.name}
                        </span>
                      );
                    })}{" "}
                  </p>
                </div>
              </div>
              <div className="country__content--border">
                <p>
                  <strong>Border Countrie:</strong>
                </p>
                {borderCountry.borders.map((border) => {
                  return (
                    <ul key={border}>
                      <span
                        onClick={() => selectCountryHandler(border)}
                        className="country__content--border-box"
                      >
                        <p>{border}</p>
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
