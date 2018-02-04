
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var $cityElement = $("#street").val();
    var $streetElement = $("#city").val();
    // YOUR CODE GOES HERE!
    // STEP 1: COLLECT INPUT STREET AND CITY
    // STEP 2: APPEND BACK TO THE HTML PAGE THE BACKGROUND IMAGE
    //         AS A CLASS CALLED "bgimage"

    return false;
};

$('#form-container').submit(loadData);
