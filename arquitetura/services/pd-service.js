(function () {
    'use strict';

    angular
        .module('pdUsuario')
        .service('PdService', PdService);

    PdService.$inject = ['$http', '$q', 'AlertService', 'localStorageService'];

    function PdService($http, $q, AlertService,localStorageService) {

        return function (controller) {

            var self = this;
            self.controller = controller;
            self.entidade = {};
            self.lista=[];
            self.salvar = salvar;
            self.limpar = limpar;
            self.excluir = excluir;
            /*
             USE ESTE MÉTODO COM SABEDORIA. POR FAVOR, REGRAS DE NEGÓCIO
             DEVEM SER IMPLEMENTADAS NO BACKEND
             */
            self.onAntesSalvar = onAntesSalvar;
            /*
             USE ESTE MÉTODO COM SABEDORIA. POR FAVOR, REGRAS DE NEGÓCIO
             DEVEM SER IMPLEMENTADAS NO BACKEND
             */
            self.onAntesExcluir = onAntesExcluir;

            self.onSalvarResult = onSalvarResult;
            self.onSalvarFault = onSalvarFault;

            self.metodoSalvar = 'salvar';

            function salvar() {
                var isSalvar = onAntesSalvar();

                if(isSalvar === false){
                    return $q.reject();
                }

                var deffered = $q.defer();

                $http.post('/rest/'+self.controller+'/'+self.metodoSalvar, self.entidade)
                    .then(salvarResult, salvarFault);

                return deffered.promise;

                function salvarResult(response) {
                    AlertService.success('Registro salvo com sucesso');

                    deffered.resolve(response);

                    onSalvarResult(response);
                }

                function salvarFault(rejection) {
                    AlertService.erro('Erro ao salvar o registro. Motivo: '+rejection.message);
                    deffered.reject(rejection);

                    onSalvarFault(rejection);
                }
            }

            function limpar() {
                self.entidade = {};
            }

            function excluir() {
                var isExcluir = onAntesExcluir();

                if(isExcluir === false){
                    return $q.reject();
                }

                var deffered = $q.defer();

                $http.delete('/rest/'+self.controller+'/'+self.metodoExcluir+'/'+self.entidade.id)
                    .then(excluirResult, excluirFault);

                return deffered.promise;

                function excluirResult(response) {
                    AlertService.success('Registro excluído com sucesso');
                    self.limpar();
                    deffered.resolve(response);
                    onExcluirResult(response);
                }

                function excluirFault(rejection) {
                    AlertService.erro('Erro ao excluir o registro. Motivo: '+rejection.message);
                    deffered.reject(rejection);
                    onExcluirFault(rejection);
                }
            }

            function salvarStorage(){
                if(verificarSuporteStorage()) {
                    localStorageService.set(self.nome, self.lista);
                }
            }
            
            function excluirStorage() {
                if(verificarSuporteStorage()) {
                   //TODO excluir no storage
                }
            }
            
            function lerStorage() {
                if(verificarSuporteStorage()) {
                    return localStorageService.get(self.nome);
                }
                return [];
            }

            function verificarSuporteStorage(){
                if(!localStorageService.isSupported){
                    AlertService.error("Desculpe, mas seu navegador nao suporta nossa aplicacao");
                    return false;
                }
                return true;
            }

            function onSalvarResult(response) {}
            function onSalvarFault(rejection) {}
            function onExcluirResult(response) {}
            function onExcluirFault(rejection) {}
            function onAntesSalvar() {return true;}
            function onAntesExcluir() {return true;}
        };
    }

})();