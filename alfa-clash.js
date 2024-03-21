
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