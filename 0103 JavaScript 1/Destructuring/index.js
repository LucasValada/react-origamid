// function handleMouseMove(event){
//     const { clientX, clientY, target } = event;

//     // const clientX = event.clientX;
//     // const clientY = event.clientY;
//     console.log(clientX, clientY, target);
// }

// document.documentElement.addEventListener("mousemove", handleMouseMove);

function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY);
}
document.documentElement.addEventListener("mousemove", handleMouseMove);