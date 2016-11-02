'use strict';

module.exports = {
    writeFiles
};

function writeFiles() {
    return {
        writeAllFiles: function() {

            // if no selection, do nothing
            if (!this.props.usevue) {
              this.log('Nothing to do...');
              return;
            }

            this.baseName = this.props.jhipsterVar.baseName;
            this.packageName = this.props.jhipsterVar.packageName;
            this.angularAppName = this.props.jhipsterVar.angularAppName;
            this.frontendBuilder = this.props.jhipsterVar.frontendBuilder;
            var webappDir = this.props.jhipsterVar.webappDir;

            // Pages and modules
            this.template('src/main/webapp/_package.json', webappDir + 'package.json');
            this.template('src/main/webapp/_index.html', webappDir + 'index.html');

            this.copy('src/main/webapp/build/build.js', webappDir + '/build/build.js');
            this.copy('src/main/webapp/static/img/logo-vueister.svg', webappDir + '/static/img/logo-vueister.svg');
        }
    };
}
