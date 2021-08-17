import { React } from "react";
import "./favCharStats.css"

function favCharStats(props) {

    if (props.stats.character.length > 1) {
        return (
            <div id="charCard">
                <h2 >{props.stats.quote}</h2>
                <img id="charImg" src={props.stats.portrait} alt="character portrait" />
                <h3>Wins:</h3>
                <h3>Loses:</h3>
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