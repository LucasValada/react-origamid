import React from 'react'
import Produtos from './Produtos';

const Home = ({cor, fonte}) => {

  return (
    <header>
    <nav>
       <a cor={{color: 'white'}} fonte={{fontSize: '12px',}} href='/Home'><li>Home</li></a>
       <a cor={{color: 'white'}} href='/Produtos'><li>Produtos</li></a>
       </nav>
    </header>
  )
}

export default Home
