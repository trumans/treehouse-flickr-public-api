// Wrap script in a ready method to execute after html is loaded
$(document).ready( function() { 

  // Form to input search term
  $('form').submit( function(event) {
    event.preventDefault();  // supress page reload at form submit
    var tags = $('form').serialize();
    var searchField = $('#search');
    var searchButton = $('#submit');

    // during flickr request: clear old photos, disable elements
    $('#photos').html('<ul></ul>');
    searchButton.prop('disabled', true);
    searchButton.val('searching...');
    searchField.prop('disabled', true);
    // reset fixed-text buttons
    $('button').removeClass('selected');

    get_flickr_photos(searchField.val(), tags)
    
    // reenable elements
    searchButton.prop('disabled', false);
    searchButton.val('Search');
    searchField.prop('disabled', false);
  }); // end form button handler


  // Fixed text buttons
  $('button').click( function() {
    // update button styling
    $('button').removeClass('selected');
    $(this).addClass('selected');
    // reset other input field
    $('#search').val('');
    
    get_flickr_photos($(this).text(), `tags=${$(this).text()}`);

  }); // end fixed button handler

});  // end ready

function reset_fields() {

}

function get_flickr_photos(search_term, tags) {
      // set parameters for API call
    let flickrPublicFeed = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    //   flickerFilters and filterFiltersObj are functionaly the same.
    let flickrFilters = tags + '&format=json';
    let flickrFiltersObj = {
      tags: search_term,
      format: 'json'
    };
    //   build the html from the flickr response.
    function displayPhotos(response) {
      let h;
      if ( response.items.length ) {
        h = '<ul>';
        $.each(response.items, function(idx, photo) {
          h += '<li class="grid-25 tablet-grid-50">';
          h +=   `<a href="${photo.link}" class="image">`;
          h +=     `<img src="${photo.media.m}">`;
          h +=   '</a>';
          h += '</li>';
        }); // each
        h += '</ul>';
      } else {
        h = `<h2 class="error">No photos found for ${$('#search').val()}</h2>`;
      }
      $('#photos').html(h);
    }  // end displayPhotos
    
    $.getJSON(flickrPublicFeed , flickrFilters, displayPhotos);
}