(function(window){


  $.getJSON('../../api/listings/224082884.json')
    .then(function(response){

    function productFactory(result){
      return {
        title: result.title,
        description: result.description,
        quantity: result.quantity,
        price: result.price,
        currency:result.currency_code
      };
    }

    new Vue({
      el: '.product-basics',
      "data": {
        product: productFactory(response.results[0]),
      }
    })
  });
})(window);
