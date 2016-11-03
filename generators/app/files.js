'use strict';

module.exports = {
    writeFiles
};

function writeFiles() {
    return {
        writeAppFiles: function() {

            // if no selection, do nothing
            if (!this.props.usevue) {
              this.log('Nothing to do...');
              return;
            }

            this.baseName = this.props.jhipsterVar.baseName;
            this.packageName = this.props.jhipsterVar.packageName;
            this.angularAppName = this.props.jhipsterVar.angularAppName;
            this.frontendBuilder = this.props.jhipsterVar.frontendBuilder;
            this.webappDir = this.props.jhipsterVar.webappDir;

            // Pages and modules
            this.template('src/main/webapp/_package.json', this.webappDir + 'package.json');
            this.template('src/main/webapp/_index.html', this.webappDir + 'index.html');

            this.template('src/main/webapp/src/_main.js', this.webappDir + '/src/main.js');
            this.template('src/main/webapp/src/_Auth.js', this.webappDir + '/src/Auth.js');
            this.template('src/main/webapp/src/_interceptors.js', this.webappDir + '/src/interceptors.js');
            this.template('src/main/webapp/src/_App.vue', this.webappDir + '/src/App.vue');

            this.template('src/main/webapp/src/components/_NavBar.vue', this.webappDir + '/src/components/NavBar.vue');
            this.template('src/main/webapp/src/components/_Ribbon.vue', this.webappDir + '/src/components/Ribbon.vue');
            this.template('src/main/webapp/src/components/_ProfileService.js', this.webappDir + '/src/components/ProfileService.js');

            this.template('src/main/webapp/src/components/login/_Login.vue', this.webappDir + '/src/components/login/Login.vue');
            this.template('src/main/webapp/src/components/login/_LoginForm.vue', this.webappDir + '/src/components/login/LoginForm.vue');


        },

        writeBuildFiles: function() {

            this.copy('src/main/webapp/build/build.js', this.webappDir + '/build/build.js');
            this.copy('src/main/webapp/build/check-versions.js', this.webappDir + '/build/check-versions.js');
            this.copy('src/main/webapp/build/dev-client.js', this.webappDir + '/build/dev-client.js');
            this.copy('src/main/webapp/build/dev-server.js', this.webappDir + '/build/dev-server.js');
            this.copy('src/main/webapp/build/utils.js', this.webappDir + '/build/utils.js');
            this.copy('src/main/webapp/build/webpack.base.conf.js', this.webappDir + '/build/webpack.base.conf.js');
            this.copy('src/main/webapp/build/webpack.dev.conf.js', this.webappDir + '/build/webpack.dev.conf.js');
            this.copy('src/main/webapp/build/webpack.prod.conf.js', this.webappDir + '/build/webpack.prod.conf.js');
        },

        writeConfigFiles: function() {

            this.copy('src/main/webapp/config/dev.env.js', this.webappDir + '/config/dev.env.js');
            this.copy('src/main/webapp/config/index.js', this.webappDir + '/config/index.js');
            this.copy('src/main/webapp/config/prod.env.js', this.webappDir + '/config/prod.env.js');
            this.copy('src/main/webapp/config/test.env.js', this.webappDir + '/config/test.env.js');
        },

        writeStaticFiles: function() {

          this.copy('src/main/webapp/static/img/logo-vueister.svg', this.webappDir + '/static/img/logo-vueister.svg');
          this.copy('src/main/webapp/src/assets/logo.png', this.webappDir + '/src/assets/logo.png');
        },

        writeTestFiles: function() {

        }
    };
}
