
function setActiveCarouselItem(a){$(a).find(".carousel-item:first").addClass("active")}function initTestimonialsCarousel(a){a=$(a);var b=a.attr("ID")+"-carousel";a.find(".carousel").attr("id",b);a.find(".carousel-controls a").attr("href","#"+b);a.find(".carousel-indicators li").attr("data-target","#"+b);setActiveCarouselItem(a)}var isBuilder=$("html").hasClass("is-builder");
isBuilder?$(document).on("add.cards",function(a){$(a.target).hasClass("testimonials-slider")&&initTestimonialsCarousel(a.target)}).on("changeParameter.cards",function(a,b,c){"testimonialsSlides"===b&&0==$(a.target).find(".carousel-item.active").length&&setActiveCarouselItem(a.target)}):void 0===window.initTestimonialsPlugin&&(window.initTestimonialsPlugin=!0,$(".testimonials-slider").each(function(){initTestimonialsCarousel(this)}));


