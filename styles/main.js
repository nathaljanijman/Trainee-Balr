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
  description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pagesand user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media.",
  image:"devicon-css3-plain",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/css/default.asp"},

    {title:"Github",
    url:"http://flukeout.github.io/ "}
  ]},

  {title:"colors",
  description:"Color is the characteristic of human visual perception described through color categories, with names such as red, blue, yellow, green, orange, or purple. In HTML, colors can be specified using predefined color names, RGB, HEX, HSL, RGBA, and HSLA values.",
  image:"fa fa-paint-brush",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/colors/default.asp"}
  ]},

  {title:"icons",
  description:"An icon is a pictogram or ideogram displayed on a computer screen in order to help the user navigate a computer system or mobile device. The icon itself is a quickly comprehensible symbol of a software tool, function, or a data file, accessible on the system and is more like a traffic sign than a detailed illustration of the actual entity it represents.",
  image:"fa fa-info-circle",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/icons/default.asp"}
  ]},

  {title:"svg",
  description:"Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensionalgraphics with support for interactivity and animation. SVG images and their behaviors are defined in XML text files. This means that they can be searched, indexed, scripted, and compressed. As XML files, SVG images can be created and edited with any text editor, as well as with drawing software.",
  image:"devicon-devicon-plain",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/graphics/svg_intro.asp"}
  ]},

  {title:"javascript",
  description:"JavaScript, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games.",
  image:"devicon-javascript-plain",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/js/default.asp"}
  ]},

  {title:"json",
  description:"JavaScript Object Notation, or JSON, is an open-standardfile format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format used for asynchronous browser/server communication, including as a replacement for XML in some AJAX-style systems.",
  image:"devicon-javascript-plain",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/js/js_json_intro.asp"}
  ]},

  {title:"jquery",
  description:"jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. Its syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications.",
  image:"devicon-jquery-plain",
  links: [
    {title:"w3schools",
    url:"https://learn.jquery.com/"},
    {title:"codecademy",
    url:"https://www.codecademy.com/learn/jquery/"}
  ]},

  {title:"github",
  description:"GitHub is a web-based Git or version control repository and Internet hosting service. It is mostly used for code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.",
  image:"devicon-github-plain",
  links: [
    {title:"github",
    url:"https://guides.github.com/activities/hello-world/"}
  ]},

  {title:"git",
  description:"Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.",
  image:"devicon-git-plain",
  links: [
    {title:"Vogella",
    url:"http://www.vogella.com/tutorials/Git/article.html"},
    {title:"Github",
    url:"https://try.github.io/levels/1/challenges/1"},
    {title:"Git",
    url:"https://git-scm.com/book/"}

  ]},

  {title:"npm",
  description:"npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.",
  image:"fa fa-cube",
  links: [
    {title:"NPMJS",
    url:"https://docs.npmjs.com/getting-started/what-is-npm"}
  ]},

  {title:"es6",
  description:"ECMAScript (ES) is a scripting language specification standardized by ECMAScript International. It is used by applications to enable client-side scripting. Languages like JavaScript, Jscript and ActionScript are governed by this specification. This tutorial introduces you to ES6 implementation in JavaScript.",
  image:"fa fa-bolt",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"typescript",
  description:"TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and compiles to JavaScript.",
  image:"devicon-typescript-plain",
  links: [
    {title:"typescript",
    url:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"},
    {title:"tutorialzine",
    url:"https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes"},

  ]},

  {title:"gulp",
  description:"gulp.js is an open-source JavaScript toolkit that uses a code-over-configuration approach to define its tasks and relies on its small, single-purposed plugins to carry them out. It is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development like minification, concatenation, cache busting, unit testing, linting, optimization etc.",
  image:"devicon-gulp-plain",
  links: [
    {title:"Gulp",
    url:"http://gulpjs.com/"},
    {title:"typescriptlang",
    url:"https://www.typescriptlang.org/docs/handbook/gulp.html/"},
  ]},

  {title:"angularjs",
  description:"AngularJS is a JavaScript-based open-source front-end web application framework It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.",
  image:"devicon-angularjs-plain",
  links: [
    {title:"codeschool",
    url:"https://www.codeschool.com/courses/shaping-up-with-angularjs"},
    {title:"angular",
    url:"https://angular.io/guide/quickstart"},
  ]},

  {title:"karma",
  description:"Karma is an information integration tool that enables users to quickly and easily integrate data from a variety of data sources including databases, spreadsheets, delimited text files, XML, JSON, KML and Web APIs. Users integrate information by modeling it according to an ontology of their choice using a graphical user interface that automates much of the process.",
  image:"fa fa-fire",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"protractor",
  description:"",
  image:"devicon-protractor-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"composer",
  description:"",
  image:"fa fa-braille",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"sql",
  description:"",
  image:"fa fa-database",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"php",
  description:"ready for the next step?",
  image:"devicon-php-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"symfony",
  description:"build a whole symfony website, let's do this!",
  image:"devicon-symfony-original",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"silex",
  description:"",
  image:"fa fa-scribd",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"laravel",
  description:"",
  image:"devicon-laravel-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"php unit",
  description:"",
  image:"devicon-php-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"php spec",
  description:"",
  image:"devicon-php-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"behat",
  description:"",
  image:"fa fa-behance",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"docker",
  description:"",
  image:"devicon-docker-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"vagrant",
  description:"",
  image:"fa fa-vimeo",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"apache",
  description:"",
  image:"devicon-apache-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"nginx",
  description:"",
  image:"devicon-nginx-original",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"heroku",
  description:"",
  image:"devicon-heroku-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"s3",
  description:"",
  image:"devicon-amazonwebservices-original",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"bootstrap",
  description:"",
  image:"devicon-bootstrap-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"bower",
  description:"",
  image:"devicon-bower-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"less",
  description:"",
  image:"devicon-less-plain-wordmark",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"nodejs",
  description:"",
  image:"devicon-nodejs-plain",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"reactjs",
  description:"",
  image:"devicon-react-original",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"amp",
  description:"",
  image:"fa fa-font",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"http",
  description:"",
  image:"fa fa-chrome",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"scrum",
  description:"",
  image:"fa fa-comments-o",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"typing",
  description:"",
  image:"fa fa-keyboard-o",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},

  {title:"assignments",
  description:"",
  image:"fa fa-book",
  links: [
    {title:"David Walsh",
    url:"https://davidwalsh.name/es6-generators"}
  ]},
]

  $scope.activeCourse = $scope.courseprops[0];

  $scope.setActive = function(course) {
  $scope.activeCourse = course
 }
}]);
