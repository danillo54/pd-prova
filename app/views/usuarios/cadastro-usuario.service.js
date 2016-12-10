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
                { valor:2, descricao:'Normal'}];

            cs.format = "dd/MM/yyyy";
            cs.altInputFormats = ['M!/d!/yyyy'];

            cs.dateOptions = {
                dateDisabled: false,
                formatYear: 'yyyy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };

            cs.nome = "listaUsuario";

            cs.onAntesSalvar = onAntesSalvar;

            function onAntesSalvar(){
                return cs.entidade.senha === cs.entidade.confirmarSenha;
            }
            return cs;
        }
    }

})();