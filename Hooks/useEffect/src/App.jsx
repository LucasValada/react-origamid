import React from 'react'
import Produto from './Produto'


const App = () => {
// const [contar, setContar] = React.useState(0)
// const [dados, setDados] = React.useState(null)
const [ativo, setAtivo] = React.useState(false)

// React.useEffect(() =>{
//   fetch('https://ranekapi.origamid.dev/json/api/produto/notebook').then(response => response.json()).then(json => setDados(json))
// }, [])

  // React.useEffect(() =>{
  //   console.log("executou")
  // }, [])
  
  // React.useEffect(() =>{
  //   document.title = 'Total ' + ativo;
  // }, [ativo])


  return (
    <div>
    <button onClick={() => setAtivo(!ativo)}>Clique</button>
    {ativo && <Produto />}
    {/* {dados && <div>
    <h1>{dados.nome}</h1>
    <p>{dados.preco}</p>
    </div>} */}
        {/* <button onClick={() => setAtivo(ativo + 1)}>{ativo}</button> */}
    </div>
  )
}

export default App
