'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var packagejs = require(__dirname + '/../../package.json');
var writeFiles = require('./files').writeFiles;

// Stores JHipster variables
var jhipsterVar = {
  moduleName: 'vuejs'
};

// Stores JHipster functions
var jhipsterFunc = {};

module.exports = yeoman.generators.Base.extend({

  initializing: {
    templates: function(args) {
      this.composeWith('jhipster:modules', {
        options: {
          jhipsterVar: jhipsterVar,
          jhipsterFunc: jhipsterFunc
        }
      });
    }
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('JHipster Vuejs') + ' generator! ' + chalk.yellow('v' + packagejs.version)
    ));

    var questions = 1;


      var prompts = [{
        type: 'confirm',
        name: 'usevue',
        message: '(1/' + questions + ') Do you want to use vue.js as client side framework?',
        default: true
      }];

      this.prompt(prompts, function(props) {
        this.props = props;
        // To access props later use this.props.someOption;
        this.props.jhipsterVar = jhipsterVar;
        done();
      }.bind(this));
  },

  writing: writeFiles(),

  install: function() {
    var injectDependenciesAndConstants = function() {
        //this.spawnCommand('npm', ['install']);
    };

    this.installDependencies({
      callback: injectDependenciesAndConstants.bind(this)
    });

  }

});
