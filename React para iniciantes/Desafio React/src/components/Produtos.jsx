import React from "react";
import App from "../App";
import Home from "./Home";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <div>
      <Home />
    
      {produtos
        .filter((produtos) => produtos.nome)
        .map((produtos) => (
          <section key={produtos}>
            <h2>Produtos</h2>
            <p key={produtos.nome}>{produtos.nome}</p>
            <p key={produtos.propriedades}>{produtos.propriedades}</p>
          </section>
        ))}
    </div>
  );
};

export default Produtos;
