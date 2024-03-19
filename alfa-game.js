function hidegetelemantid(elmantid){
    const elmant = document.getElementById(elmantid)
    elmant.classList.add('hidden');

     }


function showgetelemantid(elmantid){
    const elmant = document.getElementById(elmantid);
    elmant.classList.remove('hidden')
}