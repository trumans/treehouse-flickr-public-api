
Call the Flickr API to retrieve the last 20 photos matching a search term.

Combination of two exercises from public API course. One called the Flickr API using text from the button. The other called the same API using user input from a form. This app combined UI elements from both.

App can run locally from a browser.

Select a button containing a search term, or enter a search term.
Disables input and submit button during flickr request. Re-enables them afterward.
Displays message if search term returns no photos.

Uses AJAX
- query string is built with serialize() user input or selected button text 
- processes JSON formated request with jQuery.getJSON
- cross-domain http GET