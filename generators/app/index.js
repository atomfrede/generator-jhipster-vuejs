'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var packagejs = require(__dirname + '/../../package.json');

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
        done();
      }.bind(this));
  },

  writing: function() {
    var done = this.async();

    // if no selection, do nothing
    if (!this.props.usevue) {
      this.log('Nothing to do...');
      return;
    }

    this.baseName = jhipsterVar.baseName;
    this.packageName = jhipsterVar.packageName;
    this.angularAppName = jhipsterVar.angularAppName;
    this.frontendBuilder = jhipsterVar.frontendBuilder;
    var webappDir = jhipsterVar.webappDir;

    // Pages and modules
    this.template('src/main/webapp/_package.json', webappDir + 'package.json');
    this.template('src/main/webapp/_index.html', webappDir + 'index.html');

    done();

  },

  install: function() {
    var injectDependenciesAndConstants = function() {
        this.spawnCommand('npm', ['install']);
    };

    this.installDependencies({
      callback: injectDependenciesAndConstants.bind(this)
    });

  }

});
