// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Produtos from './components/Produtos';

function App() {
  let Pagina;
  const {pathname} = window.location;
  if(pathname === '/Produtos'){
    Pagina = Produtos;
  }else{
  Pagina = Home;  
  }
  return (
    <>
      <Pagina />
    </>
  )
}

export default App
