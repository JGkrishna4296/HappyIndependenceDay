var Name=window.prompt("Enter Your Name");


setTimeout(function() {
    wish();
}, 1000);

function wish(){
    a1=document.getElementsByClassName("d2")[0];
    a1.innerHTML=" <br>TO "+Name.toLocaleUpperCase();
    start();
}

 // start

 const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop

// const stop = () => {
//     setTimeout(function() {
//         confetti.stop()
//     }, 12000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
// };

