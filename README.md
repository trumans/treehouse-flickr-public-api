
Call the Flickr API to retrieve the last 20 photos matching a search term.

This combines the UIs from two exercises from Unit 5's AJAX Basics course that calls the Flickr API photos_public.gne. One calls it using text from a button for the search term. The other called the same API using user input from a form.

App can run locally from a browser.

A listener for the form submit button creates a query string from the user input for the http GET. Another listener for the button outside the form uses the button text for the http GET query string. Both listeners call a function which executes the http GET and parses the response into HTML which displays the photo thumbnames into a grid.
When the search term is submitted the input field and submit button are disabled during the Flickr request. They are re-enabled after the response.
If the search returns no photos an error message is displayed.

Uses jQuery

Uses AJAX
- query string is built with serialize() user input or selected button text 
- processes JSON formated request with jQuery.getJSON
- cross-domain http GET
