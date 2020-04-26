/*
B1RS5p7asXPvdPTAcWn3P68X89QWUKaM
*/
let wordAPI = "https://random-word-api.herokuapp.com/word?number=1";
let gifAPI ="https://api.giphy.com/v1/gifs/search?&api_key=B1RS5p7asXPvdPTAcWn3P68X89QWUKaM&q=";
function setup()
{
    let promiseAll = [wordGIF(), wordGIF(), wordGIF()];
    noCanvas();
    Promise.all(promiseAll).
    then(results => {
        console.log(results.length);
        for (let i=0;i < results.length;i++)
        {
            console.log(i);
            console.log(results[i].word);
            createElement('h1', results[i].word);
            createImg(results[i].img); 
        }
    }).
    catch(err=>console.error(err));
    
}

async function wordGIF()
{
    let response1 = await fetch(wordAPI);
    let json = await response1.json();
    let response2 = await fetch(gifAPI + json);
    let json2 = await response2.json();
    let img_url = json2.data[0].images.original.url;
    return {
        word : json,
        img : img_url
    }
} 