import { React, useState, useContext } from "react";
import Modal from "react-modal";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";

function CreateIronMan(){

    const { name, portrait } = useContext(UserContext);
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalToggle = () => {
        if(modalIsOpen === true){
            setModalIsOpen(false);
        }
        else{
            setModalIsOpen(true);
        }
    }

    const customStyles = {
        content : {
          top:"50%",
          left:"50%",
          right:"auto",
          bottom:"auto",
          marginRight:"-50%",
          transform:"translate(-50%, -50%)",
          backgroundColor:"burlywood"
        }
    };

    const [arenaState, setArenaState] = useState({
        competitors:"",
        brawlers:"",
    });

    const launchArena = () => {
        const bigCode = Date.now().toString();
        const lobbyCode = bigCode.substring(bigCode.length - 6)
        const arenaData={
            competitors:arenaState.competitors,
            brawlers:arenaState.brawlers,
            lobbyCode:lobbyCode.substring(lobbyCode.length - 6),
            participants:name
            }
        API.saveArena(arenaData,lobbyCode);
    }
    
    const handleInputChange = (event) => {
        if(event.target.id === "competitors"){
            setArenaState({...arenaState, competitors:event.target.value})
            console.log(arenaState)
            console.log(event)
        }
        else{
            setArenaState({...arenaState, brawlers:event.target.value})
            console.log(arenaState)
        }
    }
    return(
        <div id="createIronMan">
        <h2> Create an Iron Man</h2>
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Modal">
            <button
            onClick={modalToggle}>Close
            </button>
            <br />
            <h2>Create Your Arena</h2>
            <br />
            <h3>How Many Competitors in your Arena?</h3>
            <input
            id="competitors"
            type="number"
            min="2"
            onChange={handleInputChange}
            required/>
            <h3>How Many Brawlers on a Squad?</h3>
            <input
            id="brawlwers"
            type="number"
            min="2"
            onChange={handleInputChange}
            required/>
            <br />
            <br />
            <button
            onClick={launchArena}
            >Go Smashing</button>
        </Modal>
        <button
        onClick={modalToggle}>Create</button>
        </div>
    )
}

export default CreateIronMan;