(function () {
    'use strict';

    angular
        .module('pdUsuario')
        .controller('CadastroUsuarioController', CadastroUsuarioController);

    CadastroUsuarioController.$inject = ['CadastroUsuarioService'];

    /* @ngInject */
    function CadastroUsuarioController(CadastroUsuarioService) {
        var vm = this;

        vm.pdService = CadastroUsuarioService.getPdService();



    }

})();

