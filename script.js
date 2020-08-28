var queryURL =  "api.nytimes.com/svc/search/v2/articlesearch.json?q= + query + &api-key=yourkey"
var query = document.getElementById() 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
})