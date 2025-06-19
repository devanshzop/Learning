import React from 'react'

const Search = ({ searchterm, setSearchTerm }) => {

    return (
        <div className='search'>
            <div>
                <img src='search.svg'></img>
                <input type='text'
                    placeholder='Enter The Movie Name'
                    value={searchterm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
            </div>
        </div>
    )
}

export default Search
