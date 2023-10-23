//EVENTO INIZIALE
document.getElementById("start").addEventListener('click', function(){
    //CREAZIONE NUMERI RANDOM
    const pcNum = ((Math.random() * 5) +1).toFixed(0)
    const userNum = ((Math.random() *5)+1).toFixed(0)
    console.log(userNum, pcNum);

    let msg = "AHAHAH Ho vinto di nuovo!!"
    let msgB = "Oh no ho perso"
    //CONTROLLO NUM >
    if (userNum > pcNum){
        msgB = "Questa volta ho vinto io!!"
        msg = "Tutta fortuna..."
    } else if (userNum === pcNum){
        msg = "Pareggio... Giochiamo di nuovo?"
        msgB = msg
    }
    console.log(msg);
    document.getElementById("msg").innerHTML = msg
    document.getElementById("msgB").innerHTML = msgB
    document.getElementById("user-num").innerHTML = userNum
    document.getElementById("pc-num").innerHTML = pcNum
})

