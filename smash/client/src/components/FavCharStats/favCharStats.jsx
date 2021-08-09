import { React } from "react";

function favCharStats(props) {

    if (props.stats.character.length > 1) {
        return (
            <div>
                <h2> Your a {props.stats.character} man. </h2>
                <img src={props.stats.portrait} alt="character portrait" />
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