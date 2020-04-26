/*
B1RS5p7asXPvdPTAcWn3P68X89QWUKaM
*/
let wordAPI = "https://random-word-api.herokuapp.com/word?number=1";
let gifAPI ="https://api.giphy.com/v1/gifs/search?&api_key=B1RS5p7asXPvdPTAcWn3P68X89QWUKaM&q=";
function setup(){
    noCanvas();
    fetch(wordAPI)
    .then(response => {
        return response.json();
    })
    .then(json =>{
        createElement('h1', json); 
        return fetch(gifAPI + json);   
    })
    .then(response=>{
        return response.json();
    })
    .then(json=> {
        createImg(json.data[0].images.original.url);
    })
    .catch(err => console.log(err));
    console.log("am in");
}
