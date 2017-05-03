Package.describe({
    name: 'pappu:mypackage',
    version: '0.0.1',
    summary: 'My carousel package',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use(['jquery','templating'], 'client');   
    api.addFiles([
        "mypackage.css",
        "mypackage.js"
    ], 'client');
});