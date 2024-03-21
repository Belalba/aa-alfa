
function handPreesButton(event){
   const playerPrees = event.key;
   console.log('player preesed', playerPrees);
   

   const playerPreesButton = document.getElementById('curret-text');
   const player = playerPreesButton.innerText;
   console.log(player,playerPrees);

      }

    document.addEventListener('keyup', handPreesButton )


function countinuePlay(){
   const alfabat = getArandomNumber();
   console.log(alfabat);

   const currentText = document.getElementById('curret-text');
   currentText.innerText=alfabat;
   setBackgroundColor(alfabat);
}
    





function play(){
    hidegetelemantid('home-play');
    showgetelemantid('play-ground');
    countinuePlay();
}