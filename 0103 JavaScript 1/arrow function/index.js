// const upperName = function (name){
//     return name.toUpperCase()
// }

// const upperName = (name) =>{
//     return name.toUpperCase();
// }

// const upperLast = lastName => lastName.toUpperCase();
// const countLetters = word => word.length;


// console.log(upperLast('Valadão'), upperName('Lucas'))

class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active";
    }
    addActiveEvent(){
        this.menuElement.addEventListener("click", event =>{
            event.target.classList.add(this,this.activeClass);
        });
    }
}
const menu = new Menu(".principal");
menu.addActiveEvent();
console.log(menu);