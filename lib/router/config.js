Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'errorPage',
    loadingTemplate: 'loading'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        waitOn: function () {
            //
        }
    });
});