import Vue from 'vue'

export default {
    loggedIn: false,

    username: '',

    login (context, data) {
        context.$http.post('/api/authentication', data, {emulateJSON: true}).then((response) => {
            this.loggedIn = true;

            context.$router.replace(context.$route.query.redirect || '/');

        }, (response) => {
            context.error = true;
        });
    },

    isAuthenticated() {
        if(this.loggedIn) {
            return Promise.resolve(true);
        }

        return Vue.http.get('/api/authenticate').then((response) => {

            response.text().then(result => {

                if(!result) {
                    this.username = null;
                    this.loggedIn = false;

                    return this.loggedIn;
                }

                this.username = result;
                this.loggedIn = true;

                return this.loggedIn;
            });

            // if(response.bodyText) {
            //     this.username = response.text();
            //     this.loggedIn = true;
            //
            //     return true;
            // }

            return false;

        }, (response) => {

            return false;
        });
    }
}
