import React from 'react';
import { useHistory } from 'react-router';
import { getMainViewRoute } from '../../constants/routes/routes';


const Countrie = ({flag,nativeName,name,region,population,capital, subregion, topLevelDomain,currencies,languages,borders}) => {

    const history = useHistory();

    const goBackHandler =() => {
        history.push(getMainViewRoute());
    }
    
    return(
        <section>
            <div>
                <div>
                    <img src={flag} alt="Country flag"/>
                </div>
                <div>
                <h1>{name}</h1>
                    <div>
                        <div>
                            <p><strong>Nativ Name:</strong> {nativeName}</p>
                            <p><strong>Population:</strong>  {population}</p>
                            <p><strong>Region:</strong> {region}</p>
                            <p><strong>Subregion:</strong>  {subregion}</p>
                            <p><strong>Capital:</strong>  {capital}</p>
                        </div>
                        <div>
                            <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                            <p><strong>Currencies:</strong> {currencies}</p>
                            <p ><strong>Languages:</strong>{languages.map(lang => {
                                return(
                                        <span key={lang}>{lang}</span> 
                                )
                            })} </p>  
                        </div>
                    </div>
                    <div >
                        <p><strong>Border Countrie:</strong></p>{borders.map(border => {
                            return(
                                <ul key={border}>
                                    <span>{border}</span>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
            <button onClick={goBackHandler} >Back</button>
        </section>
    )
}

export default Countrie;