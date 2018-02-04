function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // Google street view Request
    var cityElement = $("#city").val();
    var streetElement = $("#street").val();
    var address = streetElement + ', ' + cityElement;
    var googleViewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append(
        '<img class ="bgimg" src="' + googleViewURL + '">"');
    // NYT API request for articles
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "d7cb30577300448dbaee5c6fec97599b",
        'q': cityElement
    });

    $.getJSON(url, function(data) {
        var articles = data['response']['docs'];
        var list_of_articles = [];
        for (var i = 0; i < articles.length; i++) {
            list_of_articles.push(
                "<li class='article'> <a href='" +
                articles[i]["web_url"] + "'> '" +
                articles[i]["snippet"] + "'</a>'"
            );
        };
        $nytElem.append(list_of_articles);
    }).error(function() {
        $nytElem.append("<h1> New York Times failed to load! </h1>");
    });
    return false;
};


$('#form-container').submit(loadData);
