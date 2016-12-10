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

            cs.lista = [];

            cs.defaultGridOptions = {
                columnDefs: [
                    {name: 'Código', field: 'codigo', minWidth: 230},
                    {name: 'Nome', field: 'nome'},
                    {name: 'Login', field: 'login'},
                    {name: 'Email', field: 'email'}

                ],
                data: 'cs.lista',
                enableColumnMenus: true
            };

            return cs;
        }
    }

})();
