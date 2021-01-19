import React from "react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router";
import { getGenerteOneCountrieRoute } from "../../constants/routes/routes";

const AllCountries = ({
  name,
  region,
  capital,
  population,
  flag,
  countries,
}) => {
  const history = useHistory();

  const oneCountriHandler = (name) => {
    var lowerCaseName = name.toLowerCase();
    history.push(getGenerteOneCountrieRoute(lowerCaseName));
  };

  return (
    <div className="card">
      <img
        className="card__flag"
        src={flag}
        alt="Flag"
        onClick={() => oneCountriHandler(name)}
      />
      <h3 className="card__name">{name}</h3>
      <div className="card__content">
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
        <p>
          <strong>Population: </strong>
          <NumberFormat
            value={population}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
        </p>
      </div>
    </div>
  );
};

export default AllCountries;
