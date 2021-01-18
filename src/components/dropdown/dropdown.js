import React from 'react';

const Dropdown = ({onClick}) => {

    return(
        <form>
            <select onClick={onClick}>
                <option value=''>All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}

export default Dropdown;