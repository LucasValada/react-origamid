import React from 'react'


const App = () => {
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao('Obrigado por comprar');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

// const App = () => {
// const [comentarios, setComentarios] = React.useState([])
// const [input, setInput] = React.useState('')
// const inputElement = React.useRef();

//   // const video = React.useRef();

//   // React.useEffect(()=>{
//   //   console.log(video.current) //tem que usar o current para que ele seja mutavel/modificavel 
//   // }, [video])
//   function handleClick (){
//     setComentarios([...comentarios, input])
//     setInput('')
//     inputElement.current.focus()
//   }
//   return (
//    <div>
//    <ul>
//     {comentarios.map ((comentario) => 
//     <li key={comentario}>{comentario}</li>
//     )}
//    </ul>
//       {/* <video ref={video} /> */}
//       <input type="text" ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/>
//       <button onClick={handleClick}>Enviar</button>
//    </div>
//   )
// }

export default App
