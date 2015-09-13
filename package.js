Package.describe({
    name: 'jedirandy:pickadate',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'The jQuery date picker plugin: Pickadate for meteor',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use('jquery', 'client')
    api.addFiles([
        'lib/picker.js',
        'lib/picker.time.js',
        'lib/picker.date.js',
        'lib/legacy.js',
        'lib/themes/classic.css',
        'lib/themes/classic.time.css',
        'lib/themes/classic.date.css',
    ], 'client');
});
