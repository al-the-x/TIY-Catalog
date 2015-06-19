(function(window){


  $.getJSON('../../api/listings/224082884.json')
    .then(function(response){

    function productFactory(result){
      return {
        title: result.title,
        description: result.description,
        quantity: result.quantity,
        price: result.price
      };
    }

    new Vue({
      el: '.item-title',
      "data": {
        product: productFactory(response.results[0]),
      }
    })
  });
})(window);
