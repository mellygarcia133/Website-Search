//using getData() to fetch giphy API for string given by use,
function getData(giphyAPI) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${giphyAPI}&api_key=0OBXJDQAUmPWs9DiNSHujXbpy0Vo9h5R&limit=`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            showResult(result);
        })
}

//Showing fetched result giph:
function showResult(result) {
    //taking the array of data to access multiple giphs:
    const dataArray = result.data;
    console.log(dataArray);

    dataArray.forEach(data => {
        let giphImage = document.createElement('img');
        giphImage.src = data.images.preview_webp.url;
        document.querySelector('.giphyResults').appendChild(giphImage);
    });
    
    search
}

document.querySelector('.searchbtn').addEventListener('click', () => {
    let inputString = document.querySelector('input').value;
    console.log(inputString);

    //passing user input to getData,
    if (inputString)
        getData(inputString);
    else
       alert('Please enter some text!');

})