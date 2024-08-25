var app = angular.module("myMod", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.
    when("/teacher", {
        templateUrl: "../views/teacher.html",
        controller: "teacher_ctr"
    }).
    when("/student", {
        templateUrl: "../views/student.html",
        controller: "student_ctr"
    }).
    when("/course", {
        templateUrl: "../views/course.html",
        controller: "course_ctr"
    }).
    when("/gallery", {
        templateUrl: "../views/galary.html",
        controller: "gallery_ctr"
    }).
    otherwise({
        redirectTo: "../index.html"
    });
}]);

app.controller("teacher_ctr", function($scope){

    $scope.teachers = [
        {
            name: "Adil",
            age: 27,
            subject: "Math"
        },
        {
            name: "Asad",
            age: 28,
            subject: "English" 
        },
        {
            name: "Amzad",
            age: 26,
            subject: "Bangla"
        },
        {
            name: "Khalid",
            age: 28,
            subject: "Higher Math"
        },
        {
            name: "Ashik",
            age: 30,
            subject : "Chemistry"
        },
        {
            name: "Atiq",
            age: 29,
            subject: "Physics"
        }
    ];

});

app.controller("student_ctr", function($scope){
    $scope.students=["Rabby", "Shakib", "Anik", "Zawad", "Tomal", "Abid", "Shuvo", "Omor", "Lisun", "Lodi", "Mushfiq", "Rakib", "Sabbir"];
});

app.controller("course_ctr", function($scope){
    $scope.courses=["Bangla", "English", "Physics", "Chemistry", "General Math", "Higher Math"];
});

app.controller("gallery_ctr", function($scope){
    $scope.pic1 = "../images/pic1.jpg";
    $scope.pic2 = "../images/pic2.jpg";
    $scope.pic3 = "../images/pic3.jpg";
    $scope.pic4 = "../images/pic4.jpg";
    $scope.pic5 = "../images/pic5.jpg";
    $scope.pic6 = "../images/pic6.jpg";
});