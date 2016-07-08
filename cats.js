$(function() {

  $('.summon-cats').click(function() {
    $.ajax({
    url: "http://bitkittens.herokuapp.com/cats.json",
    method: "get",
    data: {number: 5},
    dataType: "json"
  }).done(function(responseData) {

    //This each loop will iterate through the number of objects selected in the cats array from the JSON data,
    // then perform the function of generating list items that represent each of the cats' names.

    $('ul').html('');
    $(responseData.cats).each(function(i, cat){
      console.log('doing each');
      console.log(arguments);
      $('ul').append('<li>' + responseData.cats[i]["name"] + '</li>');
    })

    //This each loop iterates through the objects and for each div id that puts a cat photo on the screen
    //selects the cat in order and adds the cat's name as an alt
    
    $('.cat-box').html('');
    $(responseData.cats).each(function(i, cat){

      $('<img>').attr('src', responseData.cats[i]["photo"]).attr('alt', 'Photo of ' + responseData.cats[i]["name"])
      .appendTo('#cat'+i);
    })

    });
  });
});
