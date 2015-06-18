// Hello from main.js!
(function(){
  // Using the `route` alias for `/api` defined in `gulpfile.js`...
  // FIXME: Make this URL look like the one we used to fetch the data from the API.
  $.getJSON('/api/listings/113244585.json?api_key=REDACTED&includes=Blah,Blah,Blah')
    .then(function(response){
      /**
       * Make the raw JSON `data` from the API responses
       * easier to work with in the view.
       *
       * @param {Object} data from JSON
       * @return {Object} extracted from `data`
       */
      function productFactory (data){
        return {
          title: data.title,
          description: data.description,
          quantity: data.quantity,
          // main_image_url: // ???
        };
      }

      var product = productFactory(response.results[0]);
    })
})(window);
// Goodby from main.js!
