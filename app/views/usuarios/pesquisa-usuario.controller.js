(function () {
    'use strict';

    angular
        .module('pdUsuario')
        .controller('PesquisaUsuarioController', PesquisaUsuarioController);

    PesquisaUsuarioController.$inject = ['PesquisaUsuarioService'];

    /* @ngInject */
    function PesquisaUsuarioController(PesquisaUsuarioService) {

        var vm = this;
        vm.pdService = PesquisaUsuarioService.getPdService();


    }

})();

