function hidegetelemantid(elmantid){
    const elmant = document.getElementById(elmantid)
    elmant.classList.add('hidden');

     }


function showgetelemantid(elmantid){
    const elmant = document.getElementById(elmantid);
    elmant.classList.remove('hidden')
}

function setBackgroundColor(elmantid){
    const elmant = document.getElementById(elmantid);
    elmant.classList.add('bg-amber-500');
    
}


function getArandomNumber(){
    const alfabatstring = ('abcdefghijklmnopqrstvwxyz');
    const alfabats = alfabatstring.split('');
    //console.log(alfabats);


    const alfabatRandom = Math.random() * 25;
    const index = Math.round(alfabatRandom);
    const alfabat = alfabats[index];
    return alfabat;
}