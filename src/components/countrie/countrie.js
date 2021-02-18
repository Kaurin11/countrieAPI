import React from "react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router";
import { getCountrieHomeRoute, getGenerteCountrieByLetterRoute } from "../../constants/routes/routes";
import Button from "../button/button";

const Countrie = ({
  flag,
  nativeName,
  name,
  region,
  population,
  capital,
  subregion,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  const history = useHistory();

  const goBackHandler = () => {
    history.push(getCountrieHomeRoute());
  };

  const selectCountryHandler = (border) => {
    var lowerCaseName = border.toLowerCase();
    console.log(lowerCaseName)
    history.push(getGenerteCountrieByLetterRoute(lowerCaseName));
  };


  return(
    <div>
      <div className="country-detail">
        <Button className="country-detail__btn country--btn" onClick={goBackHandler} name="&larr; BACK" />
        <div className="country-info">
          <img src={flag} alt='flag'  className="country-info__flag"/>
          <div className="country-info__content">
            <div className="country-info__name">
              <p>{name}</p>
            </div>
            <div  className="country-info__detail">
              <div  className="country-info__detail--1">
                  <p><strong>Nativ Name:</strong> {nativeName}</p>
                  <p><strong>Population: </strong>{" "}<NumberFormat value={population} displayType={"text"} thousandSeparator={true}/></p>
                  <p><strong>Region:</strong> {region}</p>
                  <p><strong>Subregion:</strong> {subregion} </p>
                  <p><strong>Capital:</strong> {capital}</p>
              </div>
              <div  className="country-info__detail--2">
                  <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                  <p><strong>Currencies:</strong> {currencies}</p>
                  <p>Languages: {languages.map((lang) => {
                          return ( <span key={lang}> {lang} </span>);})}{" "}</p>
              </div>
            </div>
                <div className="country-info__border">
                  <p>
                    <strong>Border Countrie:</strong>
                  </p>
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <span
                          onClick={() => selectCountryHandler(border)}>
                          {border}
                        </span>
                      </ul>
                    );
                  })} 
            <div/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Countrie;