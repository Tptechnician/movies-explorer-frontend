import React, { useEffect } from 'react';
import './Popup.css';

function Popup({ title, isOpen, onTogglePopup }) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  function handleClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      onTogglePopup();
    }
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      onTogglePopup();
    }
  }
  return (
    <div onClick={handleClickClose} className={`${isOpen ? 'popup popup_open' : 'popup'}`}>
      <div className='popup__content'>
        <button className='popup__close' type='button' onClick={onTogglePopup}></button>
        <h3 className='popup__title'>{title}</h3>
      </div>
    </div>
  );
}

export default Popup;
