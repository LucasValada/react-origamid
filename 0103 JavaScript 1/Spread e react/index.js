// function showList (empresa, ...clients){
//     console.log(empresa)
//     console.log(clients)
// }

// showList("Origamid", "Lucas", "Valadao", 23) rest

//spread
 
// const numeros = [1, 2, 4, 6, 7, 10, 12, 45, 23, 4566, 123154, 123123];
// console.log(Math.max(...numeros));


// const items = Array.from(document.querySelectorAll("li"));


// items.forEach(item =>{
//     console.log(item);
// })

// const items = document.querySelectorAll("li");


// [...items].map(item =>{
//     console.log(item);
// // })
// console.log(items);


// const carro = {cor: "Azul", portas:4, ano:2024 };

// const cloneCarro = {...carro, turbo:true};

class Transporte{
    constructor(){
        this.terrestre = true;
    }
    andar(){
        console.log("andou")
    }
}

class Carro extends Transporte{
    constructor(cor, portas){
        super();
        this.cor = cor;
        this.portas = portas;
    }
}

const carro = new Carro ("vermelho", 6)
const cloneCarro = {...carro}
console.log(carro);
console.log(cloneCarro);