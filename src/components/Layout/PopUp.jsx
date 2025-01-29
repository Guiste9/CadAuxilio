import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

function Popup({title,message,buttonlabel,redirectTo}) {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do pop-up
  const navigate = useNavigate()

  const togglePopup = (event) => {
    event.default()
    setIsOpen(!isOpen); // Alterna entre abrir e fechar o pop-up
    };
    
    const handleRedirect = () => {
        setIsOpen(false)
        navigate(redirectTo)
    }

  return (
    <div>
      {/* Botão para abrir o pop-up */}
        <Link to ="#" onClick={togglePopup}>{buttonlabel}</Link>

      {/* Pop-up */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{title}</h2>
            <p>{message}</p>
            <button onClick={handleRedirect} >
              ir para {buttonlabel}
            </button>
            <button onClick={togglePopup}>fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
