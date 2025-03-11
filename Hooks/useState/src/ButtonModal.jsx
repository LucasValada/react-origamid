import React from 'react';

const ButtonModal = ({ setModal }) => {
  function handleClickk(){
    setModal ((ativo) => !ativo)
  }
  return <button onClick={handleClickk}>Abrir Modal</button>;
};

export default ButtonModal;
