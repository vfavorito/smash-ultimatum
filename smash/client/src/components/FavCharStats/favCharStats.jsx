import { React } from "react";
import "./favCharStats.css"

function favCharStats(props) {

    if (props.stats.character.length > 1) {
        return (
            <div id="charCard">
                <h2 id="charText">{props.stats.quote}</h2>
                <img id="charImg" src={props.stats.portrait} alt="character portrait" />
            </div>
        )
    }
    else {
        return (
            <div />
        )
    }
}
export default favCharStats;