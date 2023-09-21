import './index.css'
import GetInfo from '../GetInfo/GetInfo'

const SearchResult = ({ data }) => {
    const info = { ...GetInfo(data.id, data.media_type) }
    const genreList = []
    
    if (info.genres) {
        info.genres.forEach(genre => genreList.push(genre.name));
    }
    
    return (
        <div className='box'>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path || data.profile_path}`} alt={`${data.poster_path ? 'movie poster' : 'actor photo'}`} />
            <div className='top'>
                <h1 className='name'>{data.name || data.title}</h1>
                <h3 className='description'>{info.tagline || data.known_for_department}</h3>
                <h4 className='genre-list'>{genreList.join(' - ')}</h4>
                <p className='history'>{info.overview || info.biography}</p>
            </div>
        </div>
    )
}

export default SearchResult