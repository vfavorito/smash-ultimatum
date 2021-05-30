import { React, useContext } from "react";
import UserContext from "../../utils/UserContext"

function MainDashboard(){
    const { name, portrait } = useContext(UserContext);
    return(
        <div>
        <h1>Main Dashboard</h1>
        <h2>{name}</h2>
        <img alt="portrait" src={portrait}></img>
        </div>
    )
}
export default MainDashboard;