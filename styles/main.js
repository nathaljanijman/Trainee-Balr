$(document).ready(function() {
  $('.carousel-inner').addClass('zoom');
});

$(document).ready(function() {
$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(".wrapper, .sidebar-wrapper, body").toggleClass("active");
  });
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $('.balr').animate({'opacity':'1', 'margin-top':'0', 'margin-bottom':'30px'},1000);
                $('.courses').delay(500).animate({'opacity':'1', 'margin-top':'0', 'margin-bottom':'30px'},1000);
                $('.github').delay(1000).animate({'opacity':'1', 'margin-top':'0', 'margin-bottom':'30px'},1000);
            }
        });
    });
});
var courses = angular.module("coursesApp",[])

courses.controller("coursesController", ['$scope', function($scope){

$scope.courseprops = [
  {title:"html",
  description:"learn the basics of the core html language"},

  {title:"css",
  description:"learn all about styling"},

  {title:"colors",
  description:""},

  {title:"icons",
  description:""},

  {title:"svg",
  description:""},

  {title:"javascript",
  description:"get familiar with javascript coding"},

  {title:"json",
  description:""},

  {title:"jquery",
  description:""},

  {title:"github",
  description:""},

  {title:"git",
  description:""},

  {title:"npm",
  description:""},

  {title:"es6",
  description:""},

  {title:"typescript",
  description:""},

  {title:"gulp",
  description:""},

  {title:"angularjs",
  description:"make your website dynamic with Angular"},

  {title:"karma",
  description:""},

  {title:"protractor",
  description:""},

  {title:"composer",
  description:""},

  {title:"sql",
  description:""},

  {title:"php",
  description:"ready for the next step?"},

  {title:"symfony",
  description:"build a whole symfony website, let's do this!"},

  {title:"silex",
  description:""},

  {title:"laravel",
  description:""},

  {title:"php unit",
  description:""},

  {title:"php spec",
  description:""},

  {title:"behat",
  description:""},

  {title:"docker",
  description:""},

  {title:"vegrant",
  description:""},

  {title:"apache",
  description:""},

  {title:"nginx",
  description:""},

  {title:"heroku",
  description:""},

  {title:"s3",
  description:""},

  {title:"bootstrap",
  description:""},

  {title:"bower",
  description:""},

  {title:"less",
  description:""},

  {title:"nodejs",
  description:""},

  {title:"reactjs",
  description:""},

  {title:"amp",
  description:""},

  {title:"http",
  description:""},

  {title:"scrum",
  description:""},

  {title:"typing",
  description:""},

  {title:"assignments",
  description:""}
]}]);
