$(document).ready(function() {
      var owl = $("#corporatebannersilders");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 1],
          [768, 1],
          [992, 1],
          [1023, 1],
          [1024, 1],
          [1600, 1]
        ],
        navigation : false,
        pagination : true,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#corporatebannersilders");
      owl.owlCarousel();
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });



    $(document).ready(function() {
      var owl = $("#categoriecirclesilders");
      owl.owlCarousel({
        itemsCustom : [
          [0, 2],
          [400, 2],
          [768, 3],
          [992, 4],
          [1023, 5],
          [1024, 7],
          [1600, 7]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#categoriecirclesilders");
      owl.owlCarousel();
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });


    $(document).ready(function() {
      var owl = $("#testimonalssliders");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 1],
          [768, 2],
          [992, 3],
          [1023, 3],
          [1024, 3],
          [1600, 4]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#testimonalssliders");
      owl.owlCarousel();
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });
