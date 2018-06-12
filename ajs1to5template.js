import {UpgradeAdapter} from 'angular2/upgrade';
import {Component, Inject} from 'angular2/core';

try {
  var upgrade = new UpgradeAdapter();
  
  function CustomService() {
  }
  
  CustomService.prototype.sayHello = function() {
    console.log('sayHello');
    console.log('[customService] sayHello');
    return 'hello';
  }
  
  var Cmp = 
    Component({
      selector: 'hello-world'
    }).
    View({
      template: '<div>{{a}}/{{b}}</div>'
    }).
    Class({
      constructor: [ Inject('customService'), Inject('customFactory'), function(cService, cFactory) {
        this.a = cService.sayHello();
        this.b = cFactory.sayHello();
      }]
    });
  
  
  angular.module('heroApp', [])
    .service('customService', CustomService)
    .factory('customFactory', function() {
      return {
        sayHello: function() {
          console.log('[customFactory] sayHello');
          return 'hello';
        }
      };
    })
    .directive('helloWorld', upgrade.downgradeNg2Component(Cmp));
    
  upgrade.upgradeNg1Provider('customService');
  upgrade.upgradeNg1Provider('customFactory');

} catch (e) {
  console.error(e);
}

export function main() {
  console.log('main()');
  try {
    upgrade.bootstrap(document.body, ['heroApp']);
  } catch (e) {
    console.error(e);
  }
  console.log('bootsraped');
}