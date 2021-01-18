import React from 'react' ;

const SearchBox = ({placeholder,onChange}) => {

    return(
        <form >
            <input 
                type="search"
                placeholder={placeholder}
                onChange={onChange} />
                
        </form>
    )
}

export default SearchBox;