var queryString = window.location.search;
var initialSelection = queryString ? queryString.substr(1).replace('-', ' ') : null;

declare var angular;
angular.module('Documentation', [])
    .controller('MainController', ($scope, $timeout) => {
        var files = ['Gantt chart', 'Schedule chart', 'Load chart', 'PERT chart', 'Network diagram', 'More'];
        $scope.files = files;
        $scope.visibleFiles = files;
        $scope.selectedFile = null;
        $scope.getStarted = () => {
            $scope.selectedFile = null;
        };
        $scope.selectFile = (file) => {
            $scope.selectedFile = file;
        };
        var technologies = [{ name: 'JavaScript', title: 'HTML + JavaScript®' }, { name: 'TypeScript', title: 'HTML + TypeScript' }, { name: 'AngularJS', title: 'AngularJS' }, { name: 'Angular', title: 'Angular 8' }, { name: 'React', title: 'React' }, { name: 'Vue', title: 'Vue' }];
        $scope.technologies = technologies;
        $scope.selectedTechnology = technologies[0];
        $scope.selectTechnology = (technology) => {
            if (technology == $scope.selectedTechnology)
                return;
            $scope.selectedTechnology = technology;
            if (technology.name == "Angular" || technology.name == "React" || technology.name == "Vue") {
                var visibleFiles = files.slice();
                visibleFiles.pop(); // "More" should not be available
                $scope.visibleFiles = visibleFiles;
                if ($scope.selectedFile == "More")
                    $scope.selectedFile = null;
            }
            else {
                $scope.visibleFiles = files;
            }
        };
        if (initialSelection == 'AngularJS')
            $scope.selectedTechnology = technologies[2];
        else if (initialSelection == 'Angular')
            $scope.selectedTechnology = technologies[3];
        else if (initialSelection == 'React')
            $scope.selectedTechnology = technologies[4];
        else if (initialSelection == 'Vue')
            $scope.selectedTechnology = technologies[5];
        else
            $scope.selectedFile = initialSelection;
        $scope.isInitializing = true;
        $timeout(() => { $scope.isInitializing = false; }, 4000);
    });
