const App = () =>{
    function handleClick (event){
        alert ('Comprou' + event.target.innerText)
    }
}

return(
    <div>
        <button oncClick={handleClick}>Camisa</button>
        <button oncClick={handleClick}>Calça</button>
    </div>
)