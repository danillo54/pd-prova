(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdCrud', pdCrud);


    function pdCrud() {

        var directive = {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-crud/pd-crud.directive.html',
            transclude: true,
            scope: {
                titulo : '@',
                service : '='

            },
            link: link
        };
        return directive;

        //
        function link(scope, element, attrs) {
            scope.formName = 'tsFormCrud' + scope.id;
        }
    }

})();



