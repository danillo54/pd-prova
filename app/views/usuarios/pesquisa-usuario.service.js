(function () {
    'use strict';

    angular
        .module('pdUsuario')
        .service('PesquisaUsuarioService', PesquisaUsuarioService);

    PesquisaUsuarioService.$inject = ['PdService'];

    /* @ngInject */
    function PesquisaUsuarioService(PdService) {
        var vm = this;
        vm.getPdService = getPdService;

        function getPdService() {
            var cs = new PdService();


            cs.nome = "listaUsuario";

            cs.gridOptions = {
                columnDefs: [
                    {name: 'Código', field: 'codigo', minWidth: 230},
                    {name: 'Nome', field: 'nome'},
                    {name: 'Login',field: 'login'},
                    {name: 'Email', field: 'email'}
                ],
                data: 'lista',
                enableColumnMenus: false

            };



            return cs;
        }
    }

})();
