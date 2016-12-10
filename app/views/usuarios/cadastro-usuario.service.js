(function () {
    'use strict';

    angular
        .module('pdUsuario')
        .service('CadastroUsuarioService', CadastroUsuarioService);

    CadastroUsuarioService.$inject = ['PdService'];

    /* @ngInject */
    function CadastroUsuarioService(PdService) {
        var vm = this;
        vm.getPdService = getPdService;


        function getPdService() {
            var cs = new PdService();


            cs.provider = [{valor:1, descricao:'Supervisor'},
                {valor:2,descricao:'Normal'}];
            return cs;
        }
    }

})();