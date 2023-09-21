import { useState } from "react";
import { tmdbApiOptions, TMDB_MOVIE_INFO, TMDB_PERSON_INFO } from "../api"



const GetMovieList = (data, idx) => {
    const [movie, setMovie] = useState(null)

    if (data.media_type === 'person') {
        fetch(`${TMDB_PERSON_INFO}${data.id}/movie_credits`, tmdbApiOptions)
            .then(res => res.json())
            .then(json => setMovie(json.cast[idx]))
            .catch(err => console.error('error:' + err))
    }

    if (data.media_type === 'movie') {
        fetch(`${TMDB_MOVIE_INFO}${data.id}/recommendations`, tmdbApiOptions)
            .then(res => res.json())
            .then(json => setMovie(json.results[idx]))
            .catch(err => console.error('error:' + err))
    }

    return movie
}



export default GetMovieList