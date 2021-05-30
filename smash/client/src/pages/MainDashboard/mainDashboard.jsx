import { React, useContext } from "react";
import UserContext from "../../utils/UserContext";
import FriendsList from "../../components/FriendsList/friendsList";
import NavBar from "../../components/NavBar/navBar";
import TournamentInvites from "../../components/TournamentInvites/tournamentInvites";
import IronManInvites from "../../components/IronManInvites/ironManInvites";
import FavoriteCharacter from "../../components/FavoriteCharacter/favoriteCharacter";
import UserStats from "../../components/UserStats/userStats";
function MainDashboard(){
    const { name, portrait } = useContext(UserContext);
    return(
        <div>
        <h1>Main Dashboard</h1>
        <h2>{name}</h2>
        <img alt="portrait" src={portrait}></img>
        <NavBar />
        <FavoriteCharacter />
        <FriendsList />
        <TournamentInvites />
        <IronManInvites />
        <UserStats />
        </div>
    )
}
export default MainDashboard;