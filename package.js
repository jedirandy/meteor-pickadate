Package.describe({
    name: 'jedirandy:pickadate',
    version: '3.5.6',
    summary: 'pickadate package for Meteor',
    git: 'https://github.com/jedirandy/meteor-pickadate.git',
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
