var queryString = window.location.search;
var initialFile = queryString ? queryString.substr(1).replace('-', ' ') : null;
angular.module('Documentation', [])
    .controller('MainController', function ($scope, $http, $timeout) {
    $scope.files = ['Gantt chart', 'Schedule chart', 'Load chart', 'PERT chart', 'Network diagram', 'More'];
    $scope.selectedFile = initialFile;
    $scope.getStarted = function () {
        $scope.selectedFile = null;
    };
    $scope.selectFile = function (file) {
        $scope.selectedFile = file;
    };
    var technologies = [{ name: 'JavaScript', title: 'HTML + JavaScript®' }, { name: 'TypeScript', title: 'HTML + TypeScript' }, { name: 'AngularJS', title: 'Angular + JQuery' }];
    $scope.technologies = technologies;
    $scope.selectedTechnology = technologies[0];
    $scope.selectTechnology = function (technology) {
        if (technology == $scope.selectedTechnology)
            return;
        $scope.selectedTechnology = technology;
        $scope.selectedFile = null;
    };
});
//# sourceMappingURL=app.js.map