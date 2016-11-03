'use strict';
var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    packagejs = require(__dirname + '/../../package.json'),
    fs = require('fs'),
    glob = require("glob");

// Stores JHipster variables
var jhipsterVar = {moduleName: 'vuejs'};

// Stores JHipster functions
var jhipsterFunc = {};

module.exports = yeoman.Base.extend({

  initializing: {

    compose: function (args) {
      this.entityConfig = this.options.entityConfig;
      this.composeWith('jhipster:modules', {
        options: {
          jhipsterVar: jhipsterVar,
          jhipsterFunc: jhipsterFunc
        }
      });
    },

    displayLogo: function () {

      this.log(chalk.white('Running ' + chalk.bold('JHipster VueJS') + ' Generator! ' + chalk.yellow('v' + packagejs.version + '\n')));
    },

    validate: function () {
      // this shouldnt be run directly
      // Does not work yet
      // if (!this.entityConfig) {
        // this.env.error(chalk.red.bold('ERROR!') + ' This sub generator should be used only from JHipster and cannot be run directly...\n');
      // }
    },

    getEntitityNames: function () {
      var existingEntities = [],
      existingEntityNames = [];
      try {
        existingEntityNames = fs.readdirSync('.jhipster');
      } catch(e) {
        this.log(chalk.red.bold('ERROR!') + ' Could not read entities, you might not have generated any entities yet...\n');
      }

      existingEntityNames.forEach(function(entry) {
        if(entry.indexOf('.json') !== -1){
          var entityName = entry.replace('.json','');
          existingEntities.push(entityName);
        }
      });
      this.existingEntities = existingEntities;
    }
  },

  prompting: function () {



    var done = this.async();
    done();
  },
  writing : {
    updateFiles: function () {

      this.baseName = jhipsterVar.baseName;
      this.packageName = jhipsterVar.packageName;
      this.angularAppName = jhipsterVar.angularAppName;
      this.frontendBuilder = jhipsterVar.frontendBuilder;
      this.changelogDate = jhipsterFunc.dateFormatForLiquibase();

      var webappDir = jhipsterVar.webappDir

    },
    updateConfig : function() {

    }
  },

  end: function () {
    this.log('\n' + chalk.bold.green('VueJS Frontend generated'));
  }
});
