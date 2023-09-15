import { useState } from "react";
import { TMDB_MOVIE_INFO, TMDB_PERSON_INFO, TMDB_TVSHOW_INFO, tmdbApiOptions } from "../api"

function GetInfo(mediaId, mediaType) {

    let [info, setInfo] = useState(null)
    let TMDB_MEDIA_INFO
    switch (mediaType) {
        case 'person':
            TMDB_MEDIA_INFO = TMDB_PERSON_INFO
            break
        case 'movie':
            TMDB_MEDIA_INFO = TMDB_MOVIE_INFO
            break
        case 'tv':
            TMDB_MEDIA_INFO = TMDB_TVSHOW_INFO
            break
        default:
            console.log('!@#@#@#@!')
    }

    fetch(`${TMDB_MEDIA_INFO}${mediaId}`, tmdbApiOptions)
        .then(res => res.json())
        .then(data => setInfo(data))
        .catch(err => console.error('error:' + err));
    return info
}

export default GetInfo