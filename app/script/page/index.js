require({
    baseUrl: '../',
    paths: {
        'jquery': 'empty:'
    },
    config: {

    }
});

;
(function() {

    require(
        ['modules/index'],

        function(index) {
            index.preload().show();
        });
})();