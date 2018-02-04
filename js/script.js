
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var cityElement = $("#street").val();
    var streetElement = $("#city").val();
    var address = streetElement + ', ' + cityElement;
    var googleViewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address +'';
    $body.append(
      '<img class ="bgimg" src="' + googleViewURL + '">"');
    return false;
};

$('#form-container').submit(loadData);
