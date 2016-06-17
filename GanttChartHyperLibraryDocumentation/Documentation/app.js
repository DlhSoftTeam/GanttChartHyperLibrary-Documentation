var queryString = window.location.search;
var initialSelection = queryString ? queryString.substr(1).replace('-', ' ') : null;
angular.module('Documentation', [])
    .controller('MainController', function ($scope, $timeout) {
    var files = ['Gantt chart', 'Schedule chart', 'Load chart', 'PERT chart', 'Network diagram', 'More'];
    $scope.files = files;
    $scope.selectedFile = null;
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
    };
    if (initialSelection == 'AngularJS')
        $scope.selectedTechnology = technologies[2];
    else
        $scope.selectedFile = initialSelection;
    $scope.isInitializing = true;
    $timeout(function () { $scope.isInitializing = false; }, 100);
});
//# sourceMappingURL=app.js.map