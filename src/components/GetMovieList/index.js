import { useState } from "react";
import { tmdbApiOptions } from "../api"


const GetMovieList = (data) => {

    //se a entrada for um filme, procura filmes parecidos
    const similar = (movieId) => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar`, tmdbApiOptions)
            .then(res => res.json())
            .then(json => {
                json.results.forEach(movie => {
                    if (list.length < 5) {
                        list.push(movie)
                    }
                })
            })
            .catch(err => console.error('error:' + err));
    }

    const collection = (collectionId, originalId) => {
        fetch(`https://api.themoviedb.org/3/collection/${collectionId}`, tmdbApiOptions)
            .then(res => res.json())
            .then(json => json.parts.forEach(movie => {
                if (movie.id !== originalId) {
                    list.push(movie)
                }
            })
            )
            .catch(err => console.error('error:' + err));
    }

    const MovieDetails = (movieId) => {
        let [collectionId, setCollectionId] = useState(null)
        fetch(`https://api.themoviedb.org/3/movie/${movieId}`, tmdbApiOptions)
            .then(res => res.json())
            .then(json => setCollectionId(json.belongs_to_collection.id))
            .catch(err => console.error('error:' + err));

        return collectionId
    }

    //se a entrada for uma pessoa, pega os known_for e os que estiver em cast
    const credited = (personId) => {
        fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits`, tmdbApiOptions)
            .then(res => res.json())
            .then(json => {
                json.cast.forEach(movie => {
                    if (list.length < 5) {
                        list.push(movie)
                    }
                })
            })
            .catch(err => console.error('error:' + err));
    }


    let list = []

    if (data.media_type === 'person') {
        data.known_for.forEach(movie => list.push(movie))
        if (list.length < 5) {
            credited(data.id)
        }
    } else {
        const collectionId = MovieDetails(data.id)
        collection(collectionId, data.id)
        similar(data.id)

    }

    return list
}


export default GetMovieList