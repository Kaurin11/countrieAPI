import React from 'react' ;

const SearchBox = ({placeholder,onChange}) => {

    return(
        <form className="search">
            <div className="search__box">
                <ion-icon size="large" name="search-circle-outline"></ion-icon>
                <input 
                    type="search"
                    className="search__input"
                    placeholder={placeholder}
                    onChange={onChange} />
            </div>
    </form>
    )
}

export default SearchBox;