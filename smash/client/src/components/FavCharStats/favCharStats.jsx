import { React } from "react";
import "./favCharStats.css";

function FavCharStats(props) {
    // component that will display if a character was selected from Favorite character component 
    if (props.stats.character.length > 1) {
        console.log(props.stats,"props.stats")
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