angular.module("search-page", ["stub-data", "trainings-block", "select", "params-block"]).controller("searchPage",
  function($scope, trainings, $routeParams, $location) {
    $scope.searchParams = $routeParams.q || "";
    $scope.trainings = trainings;
    $scope.resetSearch = function() {
      $scope.searchParams = "";
      $location.search("q", null)
    };
    $scope.showFilter = false;
    $scope.changeInput = function(searchParams) {
      $location.search("q", $scope.searchParams);
      if (!$scope.searchParams) {$location.search("q", null)}
      var searchResult = trainings.search(searchParams);
      if (searchResult.length) {$scope.trainings = searchResult} else {$scope.trainings = []}
    };
    $scope.buildings = ["N 186", "N 177", "N 58", "R 10", "K 1", "K 10", "D 5"]
  });
angular.module("trainings-block", ["ui.highlight"]).directive("trainingsBlock",
  function() {
    var colorss = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E"];
    return {
      scope: { trainings: "=", dateOrder: "=", searchText: "=" },
      templateUrl: "ng-templates/trainings-block.html",
      link: function($scope) {
        $scope.getColor = function(name) {
          var num = name.toLowerCase().charCodeAt(0) - 97;
          return colorss[Math.round((colorss.length - 1) * num / 25)]
        }
      }
    }
  }).filter("unsafe", function($sce) {return $sce.trustAsHtml});

angular.module("stub-data", []).factory("trainings", function() {
  var trainings = [{
    name: "Global Internal Mobility as a Tool for RM #7",
    date: new Date("12-15-2014 12:00"),
    language: "English",
    active: true,
    online: false,
    category: "Management",
    type: "Resource Management Skills",
    key: "RM",
    trainer: "Aleksei Kozak",
    duration: "1:30",
    max: "30",
    start: "27.01.2015 14:00",
    end: "27.01.2015 14:00:00",
    location: { country: "Belarus", city: "Minsk", address: "K 1" },
    description: "This training is aimed at comprehensive explanation of practical usage of Global Internal Mobility as a tool for Resource management. After the training completion you will know: • Why, when and whom Global IM should be proposed"
  }, {
    name: "EPAM Report Portal System",
    date: new Date("12-17-2014 14:00"),
    language: "English",
    active: true,
    online: true,
    category: "Software Testing",
    type: "Automating test",
    key: "QA",
    trainer: "Mike Hudkovski",
    duration: "1:30",
    max: "30",
    location: { country: "Poland", city: "Warsaw", address: "PN 1" },
    description: "This lecture is intended to build Test Automation Expertise in Poland location. Training Objectives: - to create and share practical TA knowledge base; - to expose and reuse TA real projects experience; - to identify experts in particular TA area(s); - to measure and evolve company human capital in the TA area; - to be agile in providing TA services. Agenda: EPAM Report portal system."
  }, {
    name: "AngularJS: Deep Dive into Services",
    date: new Date("12-16-2014 12:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Software",
    type: "Front-End",
    key: "JS",
    trainer: "Alena Karaba",
    duration: "1:30",
    subscribers: 10,
    max: 30,
    location: { country: "Belarus", city: "Minsk", address: "H 186" },
    description: "Learining angular services"
  }, {
    name: "HTML5 and JavaScript: WebStorage API",
    date: new Date("12-16-2014 12:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Software",
    type: "Front-End",
    key: "JS, HTML, CSS",
    trainer: " Kateryna_Toporyshcheva",
    duration: "1:30",
    subscribers: 27,
    max: 30,
    location: { country: "Belarus", city: "Minsk", address: "H 186" },
    description: "The training was previously called HTML5, Module 2. Web Storage JavaScript API"
  }, {
    name: "Introduction to Management Program",
    date: new Date("12-16-2014 12:00"),
    language: "English",
    active: true,
    online: true,
    category: "Management",
    type: "General Management Skills",
    key: "M",
    trainer: "Maryia_Yushkevich",
    duration: "1:30",
    subscribers: 13,
    max: 110,
    location: { country: "China", city: "", address: "" },
    description: "Introduction to Management Program graduates (November 2014). E-Learning Course."
  }, {
    name: "NodeJS. Bootcamp #3",
    date: new Date("12-16-2014 12:00"),
    language: "English",
    active: true,
    online: false,
    category: "Software Development",
    type: "NodeJS",
    key: "JS",
    trainer: "Iurii_Bura",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Belarus", city: "Minsk", address: "H 186" },
    description: " This training is made for software engineers (middle and up) and team leads who plan to work with Node.js or wish to obtain a better understanding of its possibilities. Prior knowledge of JavaScript and basic HTML is a must. Knowledge of any other serverside platform is a plus. Knowledge of Git is a plus, since the code will be shared via Git."
  }, {
    name: "Introduction to .NET",
    date: new Date("12-16-2014 12:00"),
    language: "English",
    active: true,
    online: false,
    category: "Software Development",
    type: ".NET",
    key: ".NET",
    trainer: "Igor_Tkachenko",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Ukrain", city: "Kyiv", address: "T 12" },
    description: "This is a workshop requested by Roman Hapachylo for TA Ukraine only"
  }, {
    name: "Excel Basics",
    date: new Date("12-16-2014 12:00"),
    language: "English",
    active: true,
    online: false,
    category: "Miscellanea",
    type: "Excel",
    key: "MS",
    trainer: "Nataliia_Zubkova",
    duration: "7:30",
    subscribers: 13,
    max: 26,
    location: { country: "Ukrain", city: "Kyiv", address: "T 12" },
    description: "Training describes Excel basics. After the training attendees will be able to use most common functions, deal with Pivot tables, charts"
  }, {
    name: "Human Factor of Job Interview ",
    date: new Date("12-16-2014 12:00"),
    language: "English",
    active: true,
    online: true,
    category: "Soft Skills",
    type: "Interview",
    key: "HR",
    trainer: "Nataliia_Zubkova",
    duration: "7:30",
    subscribers: 13,
    max: 26,
    location: { country: "Poland", city: "Krakov", address: "S 177" },
    description: "Last few years a lot of customers accept our Engineers to the projects after peer-to-peer interview (via Skype, video conference or even in person during customers’ visit to EPAM offices). Job Interview is a nerve wrecking process for everyone, even for customer representatives. Still with Agile methodologies passing interview with customer for new project must be converted from exceptional case (as it is now) to regular working task. Let us consider customer interview as a working task and discuss how to cope with it when it comes"
  }, {
    name: "Conflict Management",
    date: new Date("09-12-2014 14:00"),
    language: "English",
    active: false,
    online: true,
    category: "Soft Skills",
    type: "Management",
    key: "M",
    trainer: "Alina_Antropova",
    duration: "7:30",
    subscribers: 13,
    max: 26,
    location: { country: "Poland", city: "Krakov", address: "S 177" },
    description: "This training is designed for people who want to understand the causes of conflicts, learn to produce efficient behavior strategies in such situations and deal with emotions. Training is based on cases of communication with colleagues, managers and customers."
  }, {
    name: "Linux Basics",
    date: new Date("09-12-2014 14:00"),
    language: "English",
    active: false,
    online: true,
    category: "Software Testing",
    type: "Functional Testing",
    key: "QA",
    trainer: "Oleh_Skoropad",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Poland", city: "Krakov", address: "S 177" },
    description: "Training is required for trained in Hadoop java/BI developers for better understanding of Linux operation and shell scripting."
  }, {
    name: "Customer Communication Basics",
    date: new Date("07-12-2015 14:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Miscellanea",
    type: "Communication",
    key: "M",
    trainer: "Tatsiana_Halavach",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Russia", city: "Moskow", address: "D 14" },
    description: "The training will be useful for specialists who need to be client-oriented in their everyday communication with customer. At the training we will discuss how to build effecient communication with customer, participants will be able to realize typical mistakes and receive specific recommendations and efficient communication techniques."
  }, {
    name: "Employee Adaptation",
    date: new Date("12-12-2014 14:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Miscellanea",
    type: "Communication",
    key: "M",
    trainer: "Tatsiana_Halavach",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Belarus", city: "Minsk", address: "N 58" },
    description: "Adaptation training is aimed at employees who are assuming new management functions. It provides information regarding adaptation process and its value. During this training attendees will find out what is done now and what they can do by themselves to speed-up adaptation process."
  }, {
    name: "Angular JS Bootcamp ",
    date: new Date("12-12-2014 14:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Software Development",
    type: "Angular",
    key: "JS",
    trainer: "Egor Myasnikov",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Belarus", city: "Minsk", address: "N 10" },
    description: "Training for experts in development on Angular JS"
  }, {
    name: "Automated Testing with .NET",
    date: new Date("12-12-2014 14:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Software Testing",
    type: " Automated Testing",
    key: "QA",
    trainer: "Uladzimir_Ramaniuk",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Belarus", city: "Minsk", address: "N 186" },
    description: "The training is supposed to be extremely valuable to TA engineers and should facilitate to their professional growth as TA experts. Agenda: 1. Design patterns in automated testing with .NET 2. Test automation framework designing and implementation"
  }, {
    name: "Mobile Application Testing",
    date: new Date("12-12-2014 14:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Software Testing",
    type: "Mobile Testing",
    key: "QA",
    trainer: "Viktar_Knyshau",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Belarus", city: "Minsk", address: "K 1/3" },
    description: "After training completion, students will be able to Understand the history of mobile applications, building trends, be familiar in modern mobile applications landscape Understand and resolve main challenges in mobile app testing Understand and use all testing types and approaches in mobile app testing Design Test Plan and Test Strategy, specific for mobile app testing For the main mobile platforms - iOS/Android use development/testing tools/environment, specific for the platform(s) apply testing approaches, specific for the platform(s)."
  }, {
    name: "Apache Maven 3",
    date: new Date("12-12-2014 14:00"),
    language: "Russian",
    active: true,
    online: true,
    category: "Software Development",
    type: "Java",
    key: "Java",
    trainer: "Mykhailo_Bibik;",
    duration: "1:30",
    subscribers: 13,
    max: 26,
    location: { country: "Belarus", city: "Minsk", address: "K 1" },
    description: "Build Tools Landscape; Maven &amp;amp; Procedural Build Tools; The POM. The Build Lifecycle; Standard Project Layout; Running Maven; Artifacts and amp; Dependency Management. Repositories; POM Inheritance; Cross-project Configuration; Profiles. Installation and Deployment; Plugins; Lifecycle and Packaging. Version Control; Archetypes; Site and Project Reports; IDE Integration."
  }];
  trainings.search = function(searchParam) {
    var result = [];
    trainings.forEach(function(item) {
      var training = item.name + item.description;
      if (training.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1) {result.push(item)}
    });
    return result
  };
  return trainings
});
angular.module("stub-data").factory("voteTrainings",
  function() {
    return [{
      name: "Ember.js",
      description: "Ember.js - фреймворк для тех, кто хочет делать классные веб-приложения сегодня и сейчас",
      number: "300",
      comments: [{
        author: "Vladimir Shein",
        pic: "",
        text: "Good idea! +1",
        date: "November 28, 2014 14:34"
      }, { author: "Tatyana Alexeenkova", pic: "", text: "Not bad", date: "November 28, 2014 17:34" }, {
        author: "Ivan Krivchenko",
        pic: "",
        text: "It's a dinosaur!!",
        date: "November 30, 2013 14:37"
      }]
    }, { name: "Knockout.js", description: "", number: "125", comments: [] }, {
      name: "Perforce",
      description: "",
      number: "15",
      comments: []
    }]
  });
angular.module("params-block", []).directive("paramsBlock",
  function() {return { scope: { trainings: "=", dateOrder: "=" }, templateUrl: "ng-templates/params-block.html" }});
angular.module("select", []).controller("selectController", function() {}).directive("selectBlock",
  function() {
    return {
      restrict: "E",
      scope: { items: "=?", selected: "=?" },
      controller: "selectController",
      templateUrl: "ng-templates/select.html",
      link: function($scope) {}
    }
  });
angular.module("voteWidget", ["stub-data"]).controller("voteWidgetController",
  function($scope, voteTrainings) {
    $scope.voteTrainings = voteTrainings;
    $scope.addComment = false;
    $scope.commentsVisible = false;
    $scope.vote = function($index, $event) {
      $scope.voteTrainings[$index].number = parseFloat($scope.voteTrainings[$index].number) + 1;
      angular.element($event.target).addClass("disabled")
    };
    $scope.addCommentItem = function($index) {
      var date = new Date;
      var newCommentItem = { author: "Siarhei Mazurkevich", pic: "", text: $scope.newCommentsItem, date: date };
      $scope.voteTrainings[$index].comments.push(newCommentItem);
      $scope.newCommentsItem = ""
    };
    $scope.addVoteIdea = function() {
      var newIdeaItem = { name: $scope.newIdea, description: "", number: "0", comments: [] };
      $scope.voteTrainings.push(newIdeaItem)
    }
  });