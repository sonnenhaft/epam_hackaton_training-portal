angular.module('training-portal', [
  'ngRoute', 'voteWidget', 'search-page', 'select', 'ui.bootstrap'
]).config(function($routeProvider) {
  $routeProvider.when('/votePage', {
    templateUrl: 'ng-templates/vote-widget.html',
    controller: 'voteWidgetController',
    reloadOnSearch: false
  }).when('/search', {
    templateUrl: 'ng-templates/search-page.html',
    controller: 'searchPage',
    reloadOnSearch: false
  }).otherwise({
    redirectTo: '/search'
  });
}).controller('main', function($scope, $location) {
  $(window).load(function() {
    $("[data-toggle]").click(function() {
      var toggle_el = $(this).data("toggle"),
        $body = $('body');
      if ($('.aside-menu').is(':visible')) {
        $('.floating').css('display', 'none');
        //$('.aside-menu').css('display','none');
      } else {
        $('.floating').css('display', 'block');
        //$('.aside-menu').css('display','block');
      }
      $(toggle_el).toggleClass("open-sidebar");
      if ($body.hasClass('overHidden')) {
        $body.removeClass('overHidden');
      } else {
        $body.addClass('overHidden');
      }
    });
    $('#sidebar-toggle-two').click(function() {
      $('#sidebarTwo').fadeToggle(500);

    });
  });
  $(function() {
    var topPos = $('.floating').offset().top;
    $(window).scroll(function() {
      var top = $(document).scrollTop();
      if (top > topPos) $('.floating').addClass('fixed');
      else $('.floating').removeClass('fixed');
    });
  });
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
});