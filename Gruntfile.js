module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // setting up mocha
        mocha:{
            all:{
                src:['tests/testrunner.html']
            },
            options:{
                run:true,
                // for mac
                growlOnSuccess: false
            }
        }
    });
    
    // Load grunt mocha task
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['mocha']);
};