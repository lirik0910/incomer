var path = require('path');

var root = path.join(__dirname);

var config = {
    rootDir:                root,
    // Targets ========================================================
    serveDir:               path.join(root, '.serve'),
    distDir:                path.join(root, 'dist'),
    clientManifestFile:     'manifest.webpack.json',
    clientStatsFile:        'stats.webpack.json',

    // Source Directory ===============================================
    srcDir:                 path.join(root, 'app'),
    srcServerDir:           path.join(root, 'server'),

    // HTML Layout ====================================================
    srcHtmlLayout:          path.join(root, 'app', 'index.html'),

    // Site Config ====================================================
    siteTitle:              'SPIN v2 (React)',
    siteDescription:        'Dark Dashboard with latest React 16.x and Bootstrap 4.x',
    siteCannonicalUrl:      'http://localhost:4100',
    siteKeywords:           'react dashboard seed bootstrap',
    scssIncludes:           []
}

module.exports = config;