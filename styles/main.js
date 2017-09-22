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
  description:"Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web.[2] Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages.",
  image:"devicon-html5-plain",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/html/default.asp"}
  ]},

  {title:"css",
  description:"learn all about styling",
  image:"devicon-css3-plain",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/html/default.asp"},

    {title:"w3schools",
    url:"https://www.w3schools.com/html/default.asp"}
  ]},

  {title:"colors",
  description:"test3",
  image:"fa fa-paint-brush"},

  {title:"icons",
  description:"test4",
  image:"fa fa-info-circle"},

  {title:"svg",
  description:"",
  image:"devicon-devicon-plain"},

  {title:"javascript",
  description:"get familiar with javascript coding",
  image:"devicon-javascript-plain"},

  {title:"json",
  description:"",
  image:"devicon-javascript-plain"},

  {title:"jquery",
  description:"",
  image:"devicon-jquery-plain"},

  {title:"github",
  description:"",
  image:"devicon-github-plain"},

  {title:"git",
  description:"",
  image:"devicon-git-plain"},

  {title:"npm",
  description:"",
  image:"fa fa-cube"},

  {title:"es6",
  description:"",
  image:"fa fa-bolt"},

  {title:"typescript",
  description:"",
  image:"devicon-typescript-plain"},

  {title:"gulp",
  description:"",
  image:"devicon-gulp-plain"},

  {title:"angularjs",
  description:"make your website dynamic with Angular",
  image:"devicon-angularjs-plain"},

  {title:"karma",
  description:"",
  image:"fa fa-fire"},

  {title:"protractor",
  description:"",
  image:"devicon-protractor-plain"},

  {title:"composer",
  description:"",
  image:"fa fa-braille"},

  {title:"sql",
  description:"",
  image:"fa fa-database"},

  {title:"php",
  description:"ready for the next step?",
  image:"devicon-php-plain"},

  {title:"symfony",
  description:"build a whole symfony website, let's do this!",
  image:"devicon-symfony-original"},

  {title:"silex",
  description:"",
  image:"fa fa-scribd"},

  {title:"laravel",
  description:"",
  image:"devicon-laravel-plain"},

  {title:"php unit",
  description:"",
  image:"devicon-php-plain"},

  {title:"php spec",
  description:"",
  image:"devicon-php-plain"},

  {title:"behat",
  description:"",
  image:"fa fa-behance"},

  {title:"docker",
  description:"",
  image:"devicon-docker-plain"},

  {title:"vagrant",
  description:"",
  image:"fa fa-vimeo"},

  {title:"apache",
  description:"",
  image:"devicon-apache-plain"},

  {title:"nginx",
  description:"",
  image:"devicon-nginx-original"},

  {title:"heroku",
  description:"",
  image:"devicon-heroku-plain"},

  {title:"s3",
  description:"",
  image:"devicon-amazonwebservices-original"},

  {title:"bootstrap",
  description:"",
  image:"devicon-bootstrap-plain"},

  {title:"bower",
  description:"",
  image:"devicon-bower-plain"},

  {title:"less",
  description:"",
  image:"devicon-less-plain-wordmark"},

  {title:"nodejs",
  description:"",
  image:"devicon-nodejs-plain"},

  {title:"reactjs",
  description:"",
  image:"devicon-react-original"},

  {title:"amp",
  description:"",
  image:"fa fa-font"},

  {title:"http",
  description:"",
  image:"fa fa-chrome"},

  {title:"scrum",
  description:"",
  image:"fa fa-comments-o"},

  {title:"typing",
  description:"",
  image:"fa fa-keyboard-o"},

  {title:"assignments",
  description:"",
  image:"fa fa-book"}]

  $scope.activeCourse = $scope.courseprops[0];

  $scope.setActive = function(course) {
  $scope.activeCourse = course
 }
}]);
