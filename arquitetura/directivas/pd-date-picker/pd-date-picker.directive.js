(function () {
    'use strict';

    angular.module('pdAppArquitetura')
        .directive('pdDatePicker', pdDatePicker);

    function pdDatePicker() {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-date-picker/pd-date-picker.directive.html',

            scope: {
                label:'@',
                placeholder:'@',
                model:'=',
                colspan:'@',
                datepickerOptions : '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.idInputText = 'pdDatePicker' + scope.id;
            scope.classColspan = 'col-md-' + (scope.colspan || '3');

            scope.open1 = open1;

            scope.popup1 = {
                opened: false
            };

            function open1() {
                scope.popup1.opened = true;
            };

        }

    }
})();
