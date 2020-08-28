var queryURL =  "api.nytimes.com/svc/search/v2/articlesearch.json?q= + query + &api-key=yourkey"
var query = document.getElementById("#query");
var records = document.getElementById("#records");
var startYear = document.getElementById("#start-year");
var endYear = document.getElementById("#end-year"); 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
})