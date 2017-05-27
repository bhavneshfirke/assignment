var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {
                 var students = [
                {
                    name: "Bhavnesh", gender: "Male", hindi_marks: 55, english_marks: 87
                },
                {
                    name: "Suvan", gender: "Female", hindi_marks: 68, english_marks: 45
                },
                {
                    name: "Sampada", gender: "Female", hindi_marks: 57, english_marks: 94
                },
                {
                    name: "Varad", gender: "Male", hindi_marks: 66, english_marks: 71
                },
                {
                    name: "Tanay", gender: "Male", hindi_marks: 59, english_marks: 69
                },
                {
                    name: "Mrunal", gender: "Male", hindi_marks: 78, english_marks: 79
                },
                {
                    name: "Nisarg", gender: "Male", hindi_marks: 51, english_marks: 97
                },
                {
                    name: "Hemraj", gender: "Male", hindi_marks: 73, english_marks: 47
                },
                {
                    name: "Hiral", gender: "Female", hindi_marks: 13, english_marks: 87
                },
                {
                    name: "Hetvi", gender: "Female", hindi_marks: 40, english_marks: 60
                }
            ];

            $scope.students = students;
            
                 $scope.delete = function (student) {
        $scope.students.splice($scope.students.indexOf(student), 1);
    }
                
            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ?
                    !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }
            
            
        $scope.sortDatamin = function (column) {   
            $scope.sortColumn13 = column;
            }
             
      

            $scope.getSortClass = function (column) {

                if ($scope.sortColumn == column) {
                    return $scope.reverseSort
                      ? 'arrow-down'
                      : 'arrow-up';
                }

                return '';
            }
            
            
        $scope.sortDatamin23 = function (column) {   
            $scope.sortColumn23 = column;
            }
        
        $scope.sortDatamin33 = function (column) {   
            $scope.sortColumn33 = column;
            }
        
      

            
            
            
            
            
        });