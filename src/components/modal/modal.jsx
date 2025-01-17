import React, {useState} from "react";
import "./modal.css";

export default function Modal() {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => setShowModal(!showModal)

    return(
        <div className="modal-container">
            <button className="secondary" onClick={toggleModal}>?</button>
            {showModal && (
                <div className="modal-background" onClick={toggleModal}>
                    <div className="modal-content">
                        <div className="modal-button">
                            <button className="secondary" onClick={toggleModal}>X</button>
                        </div>
                        <div className="modal-texts">
                            <h2>THE CAT MEME BUTTON</h2>
                            <h3>es un proyecto creado para practicar React.js y CSS.</h3>
                            <p>Es de código abierto y puedes verlo en el <a href="https://github.com/juanexplosions/the-cat-meme-button">repositorio de GitHub.</a></p>
                            <p>Creado por <a href="https://www.instagram.com/juanexplosions/">@juanexplosions</a>. <br />
                            Content creator & web developer</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}