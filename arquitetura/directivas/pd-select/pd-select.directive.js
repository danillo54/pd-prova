(function () {
    'use strict';

    angular.module('pdAppArquitetura')
        .directive('pdSelect', pdSelect);

    function pdSelect() {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-select/pd-select.directive.html',
            scope: {
                model:'=',
                ngRequired:'=',
                provider:'=',
                propriedadeDescricao:'@',
                propriedadeValor:'@',
                colspan:'@',
                label:'@'
            },
            link: link
        };

        function link(scope, element, attrs){
            scope.idInputSelect = 'pdSelect' + scope.$id;
            scope.classColspan = 'col-md-' + (scope.colspan || '3');

            scope.propriedadeDescricao = scope.propriedadeDescricao || 'descricao';
            scope.propriedadeValor = scope.propriedadeValor || 'valor';
        }
    }
})();