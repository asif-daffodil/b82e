(function($) {

    "use strict";

    $(document).ready(function(){  
      //  Header sticky
      const headerSticky = function() {
          const header = document.querySelector('#header');
          if (!header) return;      
          const trigHeight = 1;

          window.addEventListener('scroll', function () {
              let tj = window.scrollY;

              if (tj > trigHeight) {
                  header.classList.add('sticky');
              } else {
                  header.classList.remove('sticky');
              }
          });
      };

      $(".youtube").colorbox({
          iframe: true,
          innerWidth: 960,
          innerHeight: 585
      });       

      // document ready
      $(document).ready(function () {
          headerSticky();
          initSlider();
        }); // document ready   

     }); // End of a document
    

      var initSlider = function () {

        var swiper = new Swiper(".product-swiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
              nextEl: '.icon-caret-arrow.right-side',
              prevEl: '.icon-caret-arrow.left-side',
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              580: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1299: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            },
          });

          var swiper = new Swiper(".review-swiper", {
            spaceBetween: 30,
            navigation: {
              nextEl: '.icon-arrow.right-side',
              prevEl: '.icon-arrow.left-side',
            },
          });
    
      };

      // window load
        $(window).load(function() {
          $(".preloader").fadeOut("slow");
        })


      // Product Quantity
        var initProductQty = function(){
          $('.product-qty').each(function(){
    
            var $el_product = $(this);
            var quantity = 0;
    
            $el_product.find('.quantity-right-plus').click(function(e){
                e.preventDefault();
                var quantity = parseInt($el_product.find('#quantity').val());
                $el_product.find('#quantity').val(quantity + 1);
            });
    
            $el_product.find('.quantity-left-minus').click(function(e){
                e.preventDefault();
                var quantity = parseInt($el_product.find('#quantity').val());
                if(quantity>0){
                  $el_product.find('#quantity').val(quantity - 1);
                }
            });
    
          });    
        }


      // document ready
        $(document).ready(function () {
          initSlider();
          initProductQty();
      }); // document ready
        
})(jQuery);
