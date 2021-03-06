import { React } from "react";
import CharData from "../../utils/SmashCharacters.json";
import "./favoriteCharacter.css";

function FavoriteCharacter(props) {

    // displays a full roster of all the characters in the charData json file and on click updates the current character selected state
    return (
        <div id="charSelectWrapper">
            <h2>Character Select:</h2>
            <div className="charSelectContainer" >
                {CharData.characters.map(character => {
                    return (
                        <div className="charCard"
                            key={character.id}
                            onClick={() => props.themeChanger(character.name, character.portrait, character.quote)}>
                            <img alt={character.name}
                                src={character.portrait}
                                className="charPic" />
                            <p className="charText">{character.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FavoriteCharacter;