import { React, useState } from "react";
import Modal from "react-modal";

function CreateIronMan(){
    
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
            required/>
            <h3>How Many Brawlers on a Squad?</h3>
            <input
            id="brawlwers"
            type="number"
            min="2"
            required/>
            <br />
            <br />
            <button
            onClick={modalToggle}
            >Go Smashing</button>
        </Modal>
        <button
        onClick={modalToggle}>Create</button>
        </div>
    )
}

export default CreateIronMan;