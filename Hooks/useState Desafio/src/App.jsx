import React from 'react';
import Produto from './components/Produto';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {
  
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

async function meuClique(event){
  setCarregando(true);
  const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
  );
  const json = await response.json();
  setDados(json);
  setCarregando(false);
}

  return (
   <section>
    <button onClick={meuClique}>smartphone</button>
      <button onClick={meuClique}>tablet</button>
      <button onClick={meuClique}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
   </section>
  )
}

export default App
