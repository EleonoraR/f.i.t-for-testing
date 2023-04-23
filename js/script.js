//Ella heloMessage and btn event listener added
let helloMessage = "Hello beautiful females in tech";
let btn = document.getElementById("click-btn");
function pressBtn(){
    alert(helloMessage);
}
 btn.addEventListener("click", pressBtn);
