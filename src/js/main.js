(function(window){
  $.getJSON('../../api/listings/224082884.json?include=Images,MainImage,Variations')
    .then(function(response){

    function productFactory(product){
      return {
        title: product.title,
        description: product.description,
        quantity: product.quantity,
        price: product.price,
        currency: product.currency_code,
        main_image: product.MainImage.url_570xN
      };
    }

    function shopFactory(shop){
      return {
        // Much smaller `shop` object...
      }
    }

    function dataFactory(result){
      return {
        "product": productFactory(result),
        "shop": shopFactory(result.Shop),
        // "seller": sellerFactory(result.Shop.User) // One day...
      }
    }

    // Better with `.page-header` above...
    new Vue({
      el: '.content',
      data: {
        product: productFactory(response.results[0])
      }
    });

    // Best, if `Shop` was included in the JSON data...
    new Vue({
      "el": '.container',
      "data": dataFactory(response.results[0])
    });

    // var images = new Vue({
    //   "el": '.main-image',
    //   "data": {
    //     "image": productFactory(response.results[0].MainImage[0])
    //   }
    // })
  });

  $.getJSON('../../api/shops/ClashCases.json')
    .then(function(shop){
      function shopFactory(shop){
        return {
          name: shop.shop_name,
          total_listings: shop.listing_active_count

        };
      }

      debugger;
      var details = new Vue({
        "el": '.page-header',
        "data": {
          "shop": shopFactory(shop.results[0]),
        }
      })
    });
})(window);
