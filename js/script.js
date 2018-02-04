
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
    var googleViewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address +'';
    $body.append(
      '<img class ="bgimg" src="' + googleViewURL + '">"');


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
        'api-key': "d7cb30577300448dbaee5c6fec97599b",
        'q': cityElement
      });

    $.getJSON(url, function(data){
      console.log(data['response']['docs'][0]['web_url']);
      // $.each(data, function(key, val){
      //   articles.push("<li id =")
      // })
    });
    return false;
    };

    // NYT article request




$('#form-container').submit(loadData);
