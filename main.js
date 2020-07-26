//using getData() to fetch giphy API
function getData() {
    var giphy_api = $('#search').val();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${giphy_api}&api_key=0OBXJDQAUmPWs9DiNSHujXbpy0Vo9h5R&limit=`)
        .then(response => response.json())
        .then(result => {
            console.log(result.data);
            showResult(result.data);
        })
}

//Showing fetched result giph:
function showResult(result) {
    //taking the array of data to access multiple giphs:
    const dataArray = result;
    console.log(dataArray);

    dataArray.forEach(data => {
        let giphImage = document.createElement('img');
        giphImage.src = data.images.downsized_large.url;
        document.querySelector('.giphyResults').appendChild(giphImage);
        $(giphImage).css("align-items", "space-between")
    });
    
    
}

