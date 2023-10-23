
const dataMail = ["asd", "olga@gmail.com", "luca@gmail.com","loris@gmail.com", "mimmo@gmail.com","XxnomexX@gmail.com", "giacomo@gmail.com"]
document.getElementById("invia").addEventListener("click", function(){

//Raccolta dati
let container = document.querySelector(".container")
const userMailInp = document.getElementById("mail");
const userMail = userMailInp.value

let control =""
let verifica = false
let msgOutp = "Email errata!!"
let bgAnsw = "red" 


for (let i = 0; i < dataMail.length; i++){
    control = dataMail[i]
    verifica = (control === userMail);
    console.log(verifica);
    console.log(control);
    
    if (verifica){
        console.log('uguali');
        msgOutp = "Bentornato!!"
        bgAnsw = "green"
    }
    
}


console.log(msgOutp);
document.getElementById("msg-outp").innerHTML = msgOutp;
container.classList.add(bgAnsw);
})





