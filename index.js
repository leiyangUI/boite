//recuperer tous les btn
//lien entre Btn et hover
//btnReset reset all actions

// const btnR = document.getElementById("rougeB");
// const btnV = document.getElementById("vertB");
// const btnB = document.getElementById("bleuB");

// const hoverR = document.getElementById("rougeC");
// const hoverV = document.getElementById("vertC");
// const hoverB = document.getElementById("bleuC");

const resetBtn = document.querySelector("button");

// click = !click;
// btn.addEventListener('mousedown', () => {
//     btn.style.transform = "scale(.9)"
// })
// btn.addEventListener('mouseup', () => {
//     btn.style.transform = "scale(1)"
// })
document.getElementById("rougeB").addEventListener("click", function () {
  document.getElementById("rougeC").style.background = "rgb(248, 223, 223)";
});
document.getElementById("vertB").addEventListener("click", function () {
  document.getElementById("vertC").style.background = "rgb(208, 249, 208)";
});
document.getElementById("bleuB").addEventListener("click", function () {
  document.getElementById("bleuC").style.background = "rgb(231, 231, 248)";
});

function reset() {
  reset = "";
}
resetBtn.removeEventListener("mouseup", reset);
// btnR.addEventListener("click", function () {
//   alert("Hello btnR!");
//   document.getElementById("rougeC").addEventListener("click", function())
// btnR.addEventListener('click', function() => {
// alert("hello red !");
//     btnR.innerHTML = `Nombre de clics : ${event.detail}`;

//   hoverR.id.toggle("rougeC:hover");
//   hoverV.id.toggle("vertC:hover");
//   hoverB.id.toggle("bleuC:hover");
// });

// let check = false;
// check.onclick = function () {
//     check = !check;
//     if(check == true){
//         btnR.style. = "rougeC:hover"
//     }
// }

// function reset()
