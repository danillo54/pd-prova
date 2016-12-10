(function () {
    'use strict';

    angular
        .module('pdUsuario')
        .controller('IndexRouterController', IndexRouterController);

    IndexRouterController.$inject = ['$state']

    /* @ngInject */
    function IndexRouterController($state) {
        var vm = this;
        vm.title = 'Prova';
        vm.abrirPagina = abrirPagina;

        function abrirPagina(pagina) {
            $state.go(pagina);
        }
    }

})();


