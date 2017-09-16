#global module:false

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-exec"

  grunt.initConfig

    copy:
      vue:
        files: [{
          expand: true
          cwd: "bower_components/vue/dist/"
          src: "vue.min.js"
          dest: "./vendor/"
        }]
      normalize:
        files: [{
          expand: true
          cwd: "bower_components/normalize-scss/sass/normalize"
          src: "_variables.scss"
          dest: "./vendor/"
        },{
          expand: true
          cwd: "bower_components/normalize-scss/sass/normalize"
          src: "_normalize-mixin.scss"
          dest: "./vendor/"
        },{
          expand: true
          cwd: "bower_components/normalize-scss/sass/normalize"
          src: "_vertical-rhythm.scss"
          dest: "./vendor/"
        }]

    exec:
      jekyll:
        cmd: "jekyll build --trace"

    watch:
      options:
        livereload: true
      source:
        files: [
          "_drafts/**/*"
          "_includes/**/*"
          "_layouts/**/*"
          "_posts/**/*"
          "css/**/*"
          "js/**/*"
          "_config.yml"
          "*.html"
          "*.md"
        ]
        tasks: [
          "exec:jekyll"
        ]

    connect:
      server:
        options:
          port: 4000
          base: '_site'
          livereload: true

  grunt.registerTask "build", [
    "copy"
    "exec:jekyll"
  ]

  grunt.registerTask "serve", [
    "build"
    "connect:server"
    "watch"
  ]

  grunt.registerTask "default", [
    "serve"
  ]