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
  description:"Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages.",
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
    {title:"flukeout",
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
    {title:"Vogella tutorial",
    url:"http://www.vogella.com/tutorials/Git/article.html"},
    {title:"Github challenges",
    url:"https://try.github.io/levels/1/challenges/1"},
    {title:"Git-book",
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
    {title:"David Walsh tutorial",
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
    url:"http://gulpjs.com/"}
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
    {title:"Scotch tutorial",
    url:"https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1"}
  ]},

  {title:"protractor",
  description:"Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.",
  image:"devicon-protractor-plain",
  links: [
    {title:"Protractor tutorial",
    url:"http://www.protractortest.org/#/tutorial"}
  ]},

  {title:"composer",
  description:"Composer is an application-level package manager for the PHP programming language that provides a standard format for managing dependencies of PHP software and required libraries. Composer runs through the command line and installs dependencies (e.g. libraries) for an application. It also allows users to install PHP applications that are available on 'Packagist' which is its main repository containing available packages. ",
  image:"fa fa-braille",
  links: [
    {title:"Composer introduction",
    url:"https://getcomposer.org/doc/00-intro.md"},
    {title:"KNP University",
    url:"https://knpuniversity.com/screencast/composer"}
  ]},

  {title:"sql",
  description:"SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system. It introduces the concept of accessing many records with one single command, and it eliminates the need to specify how to reach a record, e.g.: with or without an index.",
  image:"fa fa-database",
  links: [
    {title:"w3schools",
    url:"https://www.w3schools.com/sql/default.asp"}
  ]},

  {title:"php",
  description:"PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language.PHP code may be embedded into HTML or HTML5 markup, or it can be used in combination with various web template systems, web content management systems and web frameworks.",
  image:"devicon-php-plain",
  links: [
    {title:"php.net intro",
    url:"http://php.net/manual/en/intro-whatcando.php"},
    {title:"php.net tutorial",
    url:"http://php.net/manual/en/intro-whatcando.php"},
    {title:"zend devzone",
    url:"https://devzone.zend.com/6/php-101-php-for-the-absolute-beginner/"},
    {title:"zend webinar",
    url:"http://www.zend.com/en/webinars/recorded/show-by-topic/188_php+tips+and+tricks"}
  ]},

  {title:"symfony",
  description:"Symfony is a PHP web application framework and a set of reusable PHP components/libraries. It is aimed at building robust applications in an enterprise context, and aims to give developers full control over the configuration: from the directory structure to the foreign libraries, almost everything can be customized. To match enterprise development guidelines, Symfony is bundled with additional tools to help developers test, debug and document projects.",
  image:"devicon-symfony-original",
  links: [
    {title:"KNP University",
    url:"https://knpuniversity.com/screencast/symfony"},
    {title:"Symfony tutorial",
    url:"http://symfony.com/doc/current/setup.html"}
  ]},

  {title:"silex",
  description:"Silex is a PHP microframework for PHP. It is built on the shoulders of Symfony and Pimple and also inspired by sinatra.",
  image:"fa fa-scribd",
  links: [
    {title:"Sensiolabs",
    url:"https://silex.sensiolabs.org/doc/2.0/intro.html"}
  ]},

  {title:"laravel",
  description:"Laravel is a free, open-source PHP web framework, intended for the development of web applications following the model–view–controller (MVC) architectural pattern. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.",
  image:"devicon-laravel-plain",
  links: [
    {title:"Laracast",
    url:"https://laracasts.com/series/laravel-from-scratch-2017"}
  ]},

  {title:"php unit",
  description:"PHPUnit is a unit testing framework for the PHP programming language. It is an instance of the xUnit architecture for unit testing frameworks that originated with SUnit and became popular with JUnit. It is based on the idea that developers should be able to find mistakes in their newly committed code quickly and assert that no code regression has occurred in other parts of the code base.",
  image:"devicon-php-plain",
  links: [
    {title:"Getting started",
    url:"https://phpunit.de/getting-started.html"}
  ]},

  {title:"php spec",
  description:"phpspec is a tool which can help you write clean and working PHP code using behaviour driven development or BDD. BDD is a technique derived from test-first development.",
  image:"devicon-php-plain",
  links: [
    {title:"Introduction",
    url:"http://www.phpspec.net/en/stable/manual/introduction.html"}
  ]},

  {title:"behat",
  description:"Behat is a test framework for behavior-driven development written in the PHP programming language. It is intended to aid communication between developers, clients and other stakeholders during a software development process.",
  image:"fa fa-behance",
  links: [
    {title:"Quick start",
    url:"http://behat.org/en/latest/quick_start.html"}
  ]},

  {title:"docker",
  description:"Docker is a software technology providing containers, providing an additional layer of abstraction and automation of operating-system-level virtualization on Windows and Linux. It allows independent 'containers' to run within a single Linux instance, avoiding the overhead of starting and maintaining virtual machines (VMs)",
  image:"devicon-docker-plain",
  links: [
    {title:"Getting started",
    url:"https://docs.docker.com/get-started/"}
  ]},

  {title:"vagrant",
  description:"Vagrant is an open-source software product for building and maintaining portable virtualsoftware development environments, e.g. for VirtualBox, Hyper-V, Docker, VMware, and AWS. The core idea behind it lies in the fact that the environment maintenance of virtualizations becomes increasingly difficult in a large software development project.",
  image:"fa fa-vimeo",
  links: [
    {title:"Getting started",
    url:"https://www.vagrantup.com/intro/getting-started/index.html"},
    {title:"Symfony",
    url:"http://symfony.com/doc/current/setup/homestead.html"}
  ]},

  {title:"apache",
  description:"Apache HTTP Server, colloquially called Apache, is free and open-source cross-platform web server software, released under the terms of Apache License 2.0. It supports a variety of features, many implemented as compiled modules which extend the core functionality. These can range from server-side programming language support to authentication schemes.",
  image:"devicon-apache-plain",
  links: [
    {title:"Getting started",
    url:"http://httpd.apache.org/docs/current/getting-started.html"}
  ]},

  {title:"nginx",
  description:"Nginx is a web server which can also be used as a reverse proxy, load balancer and HTTP cache. It can be deployed to serve dynamic HTTP content on the network using FastCGI, SCGI handlers for scripts, WSGI application servers or Phusion Passenger modules, and it can serve as a software load balancer.",
  image:"devicon-nginx-original",
  links: [
    {title:"Beginner's guide",
    url:"http://nginx.org/en/docs/beginners_guide.html"}
  ]},

  {title:"heroku",
  description:"Heroku is a cloud platform as a service supporting several programming languages that is used as a web application deployment model. Heroku, one of the first cloud platforms, has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.",
  image:"devicon-heroku-plain",
  links: [
    {title:"Getting started",
    url:"https://devcenter.heroku.com/articles/getting-started-with-php"}
  ]},

  {title:"s3",
  description:"Amazon S3 (Simple Storage Service) is a web service offered by Amazon Web Services. Amazon S3 provides storage through web services interfaces (REST, SOAP, and BitTorrent). According to Amazon, S3's design aims to provide scalability, high availability, and low latency at commodity costs.",
  image:"devicon-amazonwebservices-original",
  links: [
    {title:"Webhosting",
    url:"http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html"}
  ]},

  {title:"bootstrap",
  description:"Bootstrap is a free and open-source front-end web framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.",
  image:"devicon-bootstrap-plain",
  links: [
    {title:"Getting started",
    url:"http://getbootstrap.com/getting-started/"}
  ]},

  {title:"bower",
  description:"Bower is a front-end package manager built by Twitter. Also known as a Package manager for the Web, bower is used in modern open source and closed source projects to solve many recurrent issues.",
  image:"devicon-bower-plain",
  links: [
    {title:"Codementor",
    url:"https://www.codementor.io/bower/tutorial/beginner-tutorial-getting-started-bower-package-manager"}
  ]},

  {title:"less",
  description:"Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themeable and extendable.",
  image:"devicon-less-plain-wordmark",
  links: [
    {title:"Scotch tutorial",
    url:"https://scotch.io/tutorials/getting-started-with-less"}
  ]},

  {title:"nodejs",
  description:"Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser.",
  image:"devicon-nodejs-plain",
  links: [
    {title:"Risingstack",
    url:"https://blog.risingstack.com/getting-node-js-testing-and-tdd-right-node-js-at-scale/"}
  ]},

  {title:"reactjs",
  description:"In computing, React (sometimes styled React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.React allows developers to create large web-applications that use data that can change over time, without reloading the page.",
  image:"devicon-react-original",
  links: [
    {title:"Facebook tutorial",
    url:"https://facebook.github.io/react/tutorial/tutorial.html"}
  ]},

  {title:"amp",
  description:"The AMP Project is an open-source initiative aiming to make the web better for all. The project enables the creation of websites and ads that are consistently fast, beautiful and high-performing across devices and distribution platforms.",
  image:"fa fa-font",
  links: [
    {title:"Ampproject tutorial",
    url:"https://www.ampproject.org/docs/tutorials/create"}
  ]},

  {title:"http",
  description:"HTTP stands for Hypertext Transfer Protocol. It's a stateless, application-layer protocol for communicating between distributed systems, and is the foundation of the modern web. As a web developer, we all must have a strong understanding of this protocol.",
  image:"fa fa-chrome",
  links: [
    {title:"HTTP Tutorial",
    url:"https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177"}
  ]},

  {title:"scrum",
  description:"Scrum is a framework for managing software development. It is designed for teams of three to nine developers who: break their work into actions that can be completed within fixed duration cycles (called 'sprints'), track progress and re-plan in daily 15-minute stand-up meetings, and collaborate to deliver workable software every sprint.Approaches to coordinating the work of multiple scrum teams in larger organizations include Large-Scale Scrum and Scrum of Scrums, among others.",
  image:"fa fa-comments-o",
  links: [
    {title:"Scrum training",
    url:"http://scrumtrainingseries.com"}
  ]},

  {title:"typing",
  description:"TypingClub is the most effective way to learn how to type. With practicing you can be faster and faster.",
  image:"fa fa-keyboard-o",
  links: [
    {title:"TypingClub",
    url:"https://www.typingclub.com"}
  ]},

  {title:"assignments",
  description:"Under Construction",
  image:"fa fa-book",
  links: [
  ]},
]

  $scope.activeCourse = $scope.courseprops[0];

  $scope.setActive = function(course) {
  $scope.activeCourse = course
 }
}]);
