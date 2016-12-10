(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdGrid', pdGrid);


    function pdGrid() {

        var directive = {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-grid/pd-grid.directive.html',
            transclude: true,
            scope: {
                defaultGridOptions : '=',
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