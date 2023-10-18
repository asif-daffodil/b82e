(function($) {

    "use strict";

        $(document).ready(function() {   

            window.addEventListener("load", (event) => {
                //isotope
             $('.isotope-container').isotope({
               // options
               itemSelector: '.item',
               layoutMode: 'masonry'
               });
       
               
       
               // Initialize Isotope
               var $container = $('.isotope-container').isotope({
                   // options
                   itemSelector: '.item',
                   layoutMode: 'masonry'
               });
       
               $(document).ready(function() {
                   //active button
               $('.filter-button').click(function() {
                   $('.filter-button').removeClass('active');
                   $(this).addClass('active');
                   });
               });
               
               // Filter items on button click
               $('.filter-button').click(function() {
               var filterValue = $(this).attr('data-filter');
               if (filterValue === '*') {
               // Show all items
               $container.isotope({ filter: '*' });
               } else {
               // Show filtered items
               $container.isotope({ filter: filterValue });
               }
               });
       
             });


             var swiper = new Swiper(".team-swiper", {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                navigation: {
                  nextEl: ".icon-arrow-right",
                  prevEl: ".icon-arrow-left",
                },
                breakpoints: {
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1299: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                },
              });

              var swiper = new Swiper(".review-swiper", {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                breakpoints: {
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1299: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                },
              });
              
              AOS.init({
                duration: 2500,
            })

            // init jarallax parallax
            var initJarallax = function() {
              jarallax(document.querySelectorAll(".jarallax"));

              jarallax(document.querySelectorAll(".jarallax-img"), {
                keepImg: true,
              });
            }
            
            initJarallax();

                                  

        }); // End of a document


    })(jQuery);