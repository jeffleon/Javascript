/*
B1RS5p7asXPvdPTAcWn3P68X89QWUKaM
*/
let wordAPI = "https://random-word-api.herokuapp.com/word?number=1";
let gifAPI ="https://api.giphy.com/v1/gifs/search?&api_key=B1RS5p7asXPvdPTAcWn3P68X89QWUKaM&q=";
function setup(){
    noCanvas();
    setInterval(() => {
        fetch(wordAPI)
    .then(response => {
        return response.json();
    })
    .then(json =>{
        //createElement('h1', json);
        document.getElementById("hi").textContent = json; 
        return fetch(gifAPI + json);   
    })
    .then(response=>{
        return response.json();
    })
    .then(json=> {
        var imagen = document.getElementById("imagen");
        imagen.setAttribute("src",json.data[0].images.original.url);
        //createImg(json.data[0].images.original.url);
    }).catch(err => console.log(err));
    console.log("am in");    
    }, 5000);
    
}
