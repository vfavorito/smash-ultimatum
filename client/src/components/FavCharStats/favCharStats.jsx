import { React } from "react";
import "./favCharStats.css";

function FavCharStats(props) {
    // component that will display if a character was selected from Favorite character component 
    if (props.stats.character.length > 1) {
        console.log(props.stats,"props.stats")
        return (
            <div id="charCard">
                <h3>{props.stats.quote}</h3>
                <img id="charImg" src={props.stats.portrait} alt="character portrait" />
                <h4>Wins: {props.stats.stats.wins}</h4>
                <h4>Loses: {props.stats.stats.losses}</h4>
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