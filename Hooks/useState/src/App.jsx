import React, { useState } from "react";
import ButtonModal from "./ButtonModal";

// const App = () => {
//   const ativo = true;

//   return (
//     <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
//   );
// };
// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);

//   return (
//     <button onClick={() => setAtivo(!ativo)}>
//       {ativo ? 'Botão Ativo' : 'Botão Inativo'}
//     </button>
//   );
// };
// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);
//   // É a mesma coisa que:
//   // const ativoArray = React.useState(true);
//   // const ativo = ativoArray[0];
//   // const setAtivo = ativoArray[1];

//   return (
//     <button onClick={() => setAtivo(!ativo)}>
//       {ativo ? 'Botão Ativo' : 'Botão Inativo'}
//     </button>
//   );
// };

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const [ativo, setAtivo] = React.useState(false);
//   const [dados, setDados] = React.useState({ nome: '', idade: '' });

//   return <div></div>;
// };

// const [items, setItems] = React.useState('Ativo');

// function handleClick (){
//   setItems('outro')
// }
{
  /* <ButtonModal /> */
}
{
  /* <p>{items}</p>
    <button onClick={handleClick}>Clique</button> */
}
const App = () => {
  const [contar, setContar]= React.useState(1);
  const [items, setItems]= React.useState(['Item 1']);
  function contador (){
    setContar (contar + 1)
    setItems([...items, 'Item ' + (contar + 1)])
  }
  return (
    <div>
    {items.map((item)=> (
      <li key={item}>{item}</li>
    ))

    }
  <button onClick={contador}>{contar}</button>
    </div>
  );
};

export default App;
