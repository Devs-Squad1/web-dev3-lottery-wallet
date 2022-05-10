$(document).ready(function () {
    
  $('#mobile-menu-active').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: '.mobile-menu'
  });
 
     /*slider-active*/
     $('.slider-active').slick({
         infinite: true,
         autoplay: true,
         arrows: false,
         slidesToShow: 1,
         slidesToScroll: 1,
  
   
     })
 
     
 
     /* testimonial-active*/
     $('.testimonial-active').slick({
         infinite: true,
         autoplay: true,
         arrows: false,
         dots: true,
         slidesToShow: 1,
         slidesToScroll: 1,
 
 
     })
 
     /*brand-active*/
     $('.brand-active').slick({
         infinite: true,
         autoplay: true,
         arrows: false,
         dots: false,
         slidesToShow: 5,
         slidesToScroll: 1,
         responsive: [
     {
       breakpoint: 991,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 1,
        
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 576,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
 });
 
   
  
  
     /*counterUp*/
     $('.counter').counterUp({
         delay: 10,
         time: 1000
     });
     
     function basicmap() {
         // Basic options for a simple Google Map
         // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
         var mapOptions = {
             // How zoomed in you want the map to start at (always required)
             zoom: 11,
             scrollwheel: false,
             // The latitude and longitude to center the map (always required)
             center: new google.maps.LatLng(40.6700, -73.9400), // New York
             // This is where you would paste any style found on Snazzy Maps.
             styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
         };
         // Get the HTML DOM element that will contain your map 
         // We are using a div with id="map" seen below in the <body>
         var mapElement = document.getElementById('contact-map');
 
         // Create the Google Map using our element and options defined above
         var map = new google.maps.Map(mapElement, mapOptions);
 
         // Let's also add a marker while we're at it
         var marker = new google.maps.Marker({
             position: new google.maps.LatLng(40.6700, -73.9400),
             map: map,
             title: 'Cryptox'
         });
     }
     if ($('#contact-map').length != 0) {
         google.maps.event.addDomListener(window, 'load', basicmap);
     }
     
     
     })

     $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    
 
// Set the date we are counting down to
var countdownDate = new Date("March 22, 2022 23:59:00").getTime();

var x = setInterval(function(){

    // Get today's date and time
    var nowDT = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countdownDate - nowDT;

    // Time calculations for days, hours, munutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000* 60)) / 1000);

    // Output the result
    document.querySelector(".days h3").innerHTML = days;
    document.querySelector(".hours h3").innerHTML = hours;
    document.querySelector(".minutes h3").innerHTML = minutes;
    document.querySelector(".seconds h3").innerHTML = seconds;

    // If the countdown is over, write some text
    if(distance < 0){
        clearInterval(x);
        document.querySelector(".countdown-timer").style.display = 'none';
        document.querySelector(".cs-content h1").innerHTML = 'Welcome';
    }

}, 1000);