angular.module('pdUsuario')
    .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {

    var pesquisaUsuario = {
        name:'pesquisaUsuario',
        url:'/pesquisa-usuario',
        templateUrl:'app/views/usuarios/pesquisa-usuario.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/usuarios/pesquisa-usuario.controller.js');
            }
        }
    };

    var cadastroUsuario = {
        name:'cadastroUsuario',
        url:'/cadastro-usuario',
        templateUrl:'app/views/usuarios/cadastro-usuario.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/usuarios/cadastro-usuario.controller.js');
            }
        }
    };

    $stateProvider
        .state('pesquisaUsuario', pesquisaUsuario)
        .state('cadastroUsuario',cadastroUsuario)

}