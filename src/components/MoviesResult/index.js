/* eslint-disable array-callback-return */
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading } from "react-accessible-accordion"
import GetMovieList from "../GetMovieList"
import './index.css'

const MovieResult = ({ data }) => {
    let movieList = []
    if (data.media_type === 'person') {
        for (let i = 0; i < 5; i++) {
            let movie = { ...GetMovieList(data, i) }
            movieList.push(movie)
        }
    } else if (data.media_type === 'movie') {
        for (let i = 0; i < 5; i++) {
            let movie = { ...GetMovieList(data, i) }
            movieList.push(movie)
        }
    }

    return (<>
        <div className="recommendations">
            <label className="recommendations-title">Recommendations</label>
            <Accordion allowZeroExpanded>
                {movieList.map((movie, idx) =>
                    <AccordionItem key={idx} >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="movie-item">
                                    <img className="small-poster" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="movie poster" />
                                    <div className="movie-info">
                                        <h1 className="movie-title">{movie.title}</h1>
                                        <h3 className="movie-release-date">{movie.release_date}</h3>
                                        <p className="movie-overview">{movie.overview}</p>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                    </AccordionItem>
                )}
            </Accordion >
        </div>

    </>)
}

export default MovieResult