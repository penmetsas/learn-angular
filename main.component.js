angular.
module('myApp').
component('main', {
  template:'<div>
  {{ $ctrl.message }}
  </div>',
  
  controller: function MainController(){
      this.message =';)';
  }
});
