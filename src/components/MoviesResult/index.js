import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import GetMovieList from "../GetMovieList"

const MovieResult = ({ data }) => {
    const movieList = GetMovieList(data)
    console.log(movieList)

    return <>
        <label className="movieTitle">Movie Title</label>
        <Accordion allowZeroExpanded>

            {/* map your array here */}
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Hello
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

                </AccordionItemPanel>
            </AccordionItem>
            {/* map your array here */}
        </Accordion >
    </>
}

export default MovieResult