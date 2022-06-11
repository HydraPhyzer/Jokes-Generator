// import fetch from 'node-fetch';

function GenerateJoke()
{
    let Button=document.getElementById('Btn');
    let HeaderObj=
    {
        method:'GET',
        headers:
        {
            Accept:'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com' , HeaderObj)
    .then((Response)=>
    {
        return Response.json();
    })
    .then((Data)=>
    {
        document.getElementById('Joke').innerHTML=Data.joke;
    })
    .catch((err)=>
    {
        document.getElementById('Joke').innerHTML="Error Occured 😢";
    })
}
GenerateJoke();