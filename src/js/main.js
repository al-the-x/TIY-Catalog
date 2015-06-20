(function(window){


  $.getJSON('../../api/listings/224082884.json')
    .then(function(response){

    function productFactory(result){
      return {
        title: result.title,
        description: result.description,
        quantity: result.quantity,
        price: result.price,
        currency: result.currency_code,
        main_image: result.MainImage.url_570xN
      };
    }

    var details = new Vue({
      "el": '.container',
      "data": {
        "product": productFactory(response.results[0]),
      }
    })

    // var images = new Vue({
    //   "el": '.main-image',
    //   "data": {
    //     "image": productFactory(response.results[0].MainImage[0])
    //   }
    // })
  });
})(window);
