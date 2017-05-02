Package.describe({
    name: 'pappu:slick',
    version: '1.6.0',
    summary: 'Responsive carousel',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use(['jquery','templating'], 'client');   
    api.addFiles([
        "slick.css",
        "slick.js"
    ], 'client');
});