//EVENTO INIZIALE
document.getElementById("start").addEventListener('click', function(){
    //CREAZIONE NUMERI RANDOM
    const pcNum = ((Math.random() * 5) +1).toFixed(0)
    const userNum = ((Math.random() *5)+1).toFixed(0)
    console.log(userNum, pcNum);

    let msg = "AHAHAH Ho vinto di nuovo!!"
    //CONTROLLO NUM >
    if (userNum > pcNum){
        msg = "Questa volta hai vinto tu!!"
    } else if (userNum === pcNum){
        msg = "Pareggio... Giochiamo di nuovo?"
    }
    console.log(msg);
})

