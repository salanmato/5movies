/* eslint-disable array-callback-return */
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import GetMovieList from "../GetMovieList"
import './index.css' 

const MovieResult = ({ data }) => {
    let movieLis = []
    console.log(data)

    if (data.media_type === 'person') {
        for (let i = 0; i < 5; i++) {
            let movie = { ...GetMovieList(data, i) }
            movieLis.push(movie)
        }
    } else if (data.media_type === 'movie') {
        for (let i = 0; i < 5; i++) {
            let movie = { ...GetMovieList(data, i) }
            movieLis.push(movie)
        }
    }
    movieLis.forEach(movie => console.log(movie.title))

    return (<>
        <label className="movieTitle">Recommendations</label>

        <Accordion allowZeroExpanded>
            {movieLis.map(movie =>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="movie">
                                <img className="small-poster" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="movie poster"/>
                                {movie.title}
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>                    </AccordionItemPanel>
                </AccordionItem>
            )}
        </Accordion >

    </>)
}

export default MovieResult