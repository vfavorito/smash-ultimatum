import { React } from "react";
import "./favCharStats.css";

function FavCharStats(props) {
    // component that will display if a character was selected from Favorite character component 
    if (props.stats.character.length > 1) {
        console.log(props.stats,"props.stats")
        return (
            <div id="charCard">
                <h4>{props.stats.quote}</h4>
                <img id="charImg" src={props.stats.portrait} alt="character portrait" />
                <h5>Wins: {props.stats.stats.wins}</h5>
                <h5>Loses: {props.stats.stats.losses}</h5>
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