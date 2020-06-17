var API_URL;
var getInputValue = "";
var giphyAPI_url = "https://api.giphy.com/v1/gifs/search?q=";
var giphyAPI_key = "&api_key=0OBXJDQAUmPWs9DiNSHujXbpy0Vo9h5R&limit=";
var getSearchNumber = "";
var searchItem = "";

const gifResults = document.querySelector( '.gifResults');
const giphy_search_results = document.querySelector('.row');


function toJSON (response) {
    return response.json();
};


function processResponse (content) {
    let markup = '';
    for (const gif of content.data) {

        let giphyURL = gif.url;
        let giphyImageURL = gif.images.fixed_width.url;
        let giphyAltText = gif.title;

        markup = markup + `
            <div class="giphyBox col l3 m4 s6">
                <a href="${giphyURL}" target="_blank"> <img src="${giphyImageURL}" alt="${giphyAltText}"/></a>
            </div>
        `;
    }
    js_container.innerHTML = markup;
}

function displaySearch() {
    if (getInputValue.includes("%20")) {
        var searchItemDecoded = getInputValue.split("%20").join(" ");
        giphy_search_results.innerHTML = `
        <h2>${getSearchNumber} ${searchItemDecoded} Awesome Giphs!</h2>
    `;
    } else {
        giphy_search_results.innerHTML = `
        <h2>${getSearchNumber} ${getInputValue} Awesome Giphs!</h2>
    `;
    }
} 


/*function displaySearch() {
    if (getInputValue.includes("%20")) {
        var searchItemDecoded = getInputValue.replaceAll("%20", " ");
        console.log(searchItemDecoded);
        js_display_search.innerHTML = `
        <h2> Here are your <u>${getSearchNum} ${searchItemDecoded}</u> giphs. Enjoy!</h2>
    `;
    } else {
        js_display_search.innerHTML = `
        <h2> Here are your <u>${getSearchNum} ${getInputValue}</u> giphs. Enjoy!</h2>
    `;
    }
}*/


function errorHandling() {
    giphy_search_results.innerHTML= `
        Sorry! Your search could not be completed at this time.
    `;

    js_container.innerHTML = `
        Please check your network connection and try again.
    `;
}

document.querySelector('.search-form').addEventListener('submit', inputLength);



function inputLength() {
    getInputValue = encodeURIComponent(document.querySelector('#search').value.trim());
    getSearchNumber = document.querySelector('#searchNumber').value.trim();
    if (getInputValue.length===0) {
        event.preventDefault();
        alert("Please enter a search.")
    } else if (getSearchNumber.length===0) {
        event.preventDefault();
        alert("Please enter a number")
    } else {
        returnGiphs();
    }
}

function returnGiphs() {
    event.preventDefault();
    API_URL = giphyAPI_url + getInputValue + giphyAPI_key + getSearchNumber;
    displaySearch();
    fetch( API_URL )
        .then( toJSON )
        .then( processResponse )
        .catch( errorHandling );
    document.querySelector("#search").value="";
    document.querySelector("#searchNumber").value="";
}

$(document).function()