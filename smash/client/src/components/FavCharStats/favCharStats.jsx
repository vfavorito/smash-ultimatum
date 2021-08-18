import { React } from "react";
import "./favCharStats.css";

function FavCharStats(props) {

    if (props.stats.character.length > 1) {
        return (
            <div id="charCard">
                <h2 >{props.stats.quote}</h2>
                <img id="charImg" src={props.stats.portrait} alt="character portrait" />
                <h3>Wins: {props.stats.stats.wins}</h3>
                <h3>Loses: {props.stats.stats.losses}</h3>
            </div>
        )
    }
    else {
        return (
            <div />
        )
    }
}
export default FavCharStats;