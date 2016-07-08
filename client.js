angular.module('todoApp', []);

angular.module('todoApp').controller('MainController', function($scope){
  var todoList = [];
  $scope.handleClick = function() {
  todoList.push($scope.todo)
    // console.log("todo", $scope.todo);
    console.log(todoList);
  }

  $scope.todoList = todoList;

  $scope.deleteTodo = function(clickedTodo) {
    $scope.todoList.splice(todoList.indexOf(clickedTodo), 1)
  }


});
