Package.describe({
    name: 'pappu:slick',
    version: '1.6.0',
    summary: 'Slick responsive carousel',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.use(['jquery', 'templating'], 'client');
    api.addFiles([
        "slick.css",
        "slick-theme.css",
        "slick-override.css",
        "slick.js"
    ], 'client');
    api.addAssets(['slick.scss', "slick-theme.scss"], 'client');
});