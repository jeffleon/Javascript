/*
B1RS5p7asXPvdPTAcWn3P68X89QWUKaM
*/
let wordAPI = "https://random-word-api.herokuapp.com/word?number=1";
let gifAPI ="https://api.giphy.com/v1/gifs/search?&api_key=B1RS5p7asXPvdPTAcWn3P68X89QWUKaM&q=";
function setup(){
    noCanvas();
    delay(1000)
    .then(()=> createP('hello'))
    .catch((err)=>console.error(err));
}
function delay(time){
    return new Promise((resolve, reject)=>{
        if (isNaN(time)){
            reject(new Error('delay requires a valid number'));
        }
        setTimeout(resolve,time);
    });
}