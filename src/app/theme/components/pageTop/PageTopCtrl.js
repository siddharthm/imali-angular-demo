(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('PageTopCtrl', PageTopCtrl);

    /** @ngInject */
    function PageTopCtrl($scope) {

        $scope.currencies = ['$XBR','$ZER','$EUR'];
    }

})();