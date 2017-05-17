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
    
    this.route('myPackage',{
        path:'/package'
    });
    
    this.route('slickPackage',{
        path:'/package/slick'
    });

    this.route('dateTimePackage',{
        path:'/package/date_time'
    });
    
});