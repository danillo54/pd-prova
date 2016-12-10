angular.module("pdAppArquitetura",[]);

angular.module("pdUsuario",  ['ngMessages',
    'ngAnimate',
    'toastr',
    'ui.grid',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad',
    'pdAppArquitetura',
    'ngTouch',
    'ui.bootstrap',
    'LocalStorageModule','angular-loading-bar']).config(config);

config.$inject = ['cfpLoadingBarProvider'];
function config(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}