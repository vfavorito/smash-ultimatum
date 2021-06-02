import { React } from "react";
import CharData from "../../utils/SmashCharacters.json";
import "./favoriteCharacter.css"

function FavoriteCharacter(){
    console.log(CharData.characters)
    return(
        <div>
        <h2>Favorite Character</h2>
        <div className="container">
        {CharData.characters.map(character => {
            return(
            <div className="charCard" key={character.id}>
            <img alt={character.name} src={character.portrait} className="charPic" />
            <p className="charText">{character.name}</p>
            </div>
            )
        })}
        </div>
        </div>
    )
}

export default FavoriteCharacter;