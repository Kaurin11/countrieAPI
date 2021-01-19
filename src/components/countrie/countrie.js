import React from 'react';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router';
import { getGenerteOneCountrieRoute, getMainViewRoute } from '../../constants/routes/routes';

const Countrie = ({flag,nativeName,name,region,population,capital, subregion, topLevelDomain,currencies,languages,borders}) => {

    const history = useHistory();

    const selectCountryHandler = (borders) => {
        var lowerCaseName = borders.toLowerCase();
        history.push(getGenerteOneCountrieRoute(lowerCaseName))
    };

    const goBackHandler =() => {
        history.push(getMainViewRoute());
    }

    //onClick={() => selectCountryHandler(borders[0])

    return(
        <section className="country">
            <div className="row">
                <h1><button className="country--btn" onClick={goBackHandler} ><ion-icon name="arrow-back-outline"></ion-icon>Back</button></h1>
                <div className="col-1-of-2 country-centar-flag">
                    <img className="country__flag" src={flag} alt="Country flag"/>
                </div>
                <div className="col-1-of-2 country__content">
                <h1 className="u-margin-bottom-small">{name}</h1>
                    <div className="row">
                        <div className="col-1-of-2">
                            <p><strong>Nativ Name:</strong> {nativeName}</p>
                            <p><strong>Population: </strong> <NumberFormat value={population} displayType={'text'} thousandSeparator={true} /></p>
                            <p><strong>Region:</strong> {region}</p>
                            <p><strong>Subregion:</strong>  {subregion}</p>
                            <p><strong>Capital:</strong>  {capital}</p>
                        </div>
                        <div className="col-1-of-2">
                            <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                            <p><strong>Currencies:</strong> {currencies}</p>
                            <p className="country--lang"><strong>Languages:</strong>{languages.map(lang => {
                                return(
                                        <span className="country__content--lang-box" key={lang}>{lang}</span> 
                                )
                            })} </p>  
                        </div>
                    </div>
                    <div className="country__content--border">
                        <p><strong>Border Countrie:</strong></p>{borders.map(border => {
                            return(
                                <ul key={border}>
                                    <span className="country__content--border-box">{border}</span>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Countrie;