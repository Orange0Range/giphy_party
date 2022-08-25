console.log("Let's get this party started!");
$('#search').on("click",findAndAppend);

async function findAndAppend(e){
    e.preventDefault();
    const key = $('#key').val();
    if(key === "") return;
    let rep = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${key}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    const gif = rep.data.data[0].images.downsized.url
    addGif(gif);
    $('#key').val("");
}


function addGif(gif){
    const gBoard = $('#giphyBoard');
    $('#giphyBoard').append(`<img src = ${gif}> </>`)
}