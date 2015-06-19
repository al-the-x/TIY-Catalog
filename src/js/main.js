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
      function productFactory(result){
        return { // FIXME: use `lodash.pick` instead?
          title: result.title,
          description: result.description,
          quantity: result.quantity,
          main_image_url: result.MainImage.url_570xN,
          price: result.price
        };
      }

      debugger;

      // $('.item-title').text(product.title); // via jQuery
      new Vue({
        "el": '.item-detail',
        "data": {
          "product": productFactory(response.results[0])
        }
      })
    })
})(window);
// Goodby from main.js!
