Package.describe({
    name: 'pappu:bootstrap-datetimepicker',
    version: '2.0.0',
    summary: 'Bootstrap 3 DateTime picker',
    git: 'https://github.com/tsega/meteor-bootstrap3-datetimepicker',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use(['jquery','templating'], 'client');   
    api.addFiles([
        "bootstrap-datetimepicker.css",
        "bootstrap-datetimepicker.js"
    ], 'client');
});