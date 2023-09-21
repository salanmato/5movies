import { AsyncPaginate } from "react-select-async-paginate"
import { useState } from "react"
import { TMDB_API_URL, tmdbApiOptions } from "../api"

const Search = ({ onSearchChange }) => {

    const [search, setSeach] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(`${TMDB_API_URL}?query=${inputValue}&include_adult=false&language=en-US`, tmdbApiOptions) 
            .then(res => res.json())
            .then(res => {
                return {
                    options: res.results.map((word) => {
                        return {
                            value: `${JSON.stringify(word)}`, // o que retorna
                            label: `${word && (word.name || word.title)}`, // o que tá na barra de pesquisa
                        }
                    })
                }
            })
            .catch(err => console.error('error:' + err));
    }

    const handleOnChange = (searchData) => {
        setSeach(searchData)
        onSearchChange(searchData)
    }

    // Custom styles
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            border: '2px solid grey',
            boxShadow: state.isFocused ? '0 0 0 2px grey' : null,
            marginTop: '50px',
            height: '50px',
            fontSize: '24px',
            
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'grey' : null,
            color: state.isFocused ? 'white' : null,
            outline: state.isFocused ? 'grey' : null,
            border: state.isFocused ? 'grey' : null,
        }),
    }

    return (
        <div className="search-container">
            <AsyncPaginate
                placeholder="Write a person, movie o tv show name"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
                styles={customStyles}
            />
        </div>
    )
}

export default Search