<template>
    <div>
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <label>Username</label>
                <md-input v-model="data.username"></md-input>
            </md-input-container>

            <md-input-container md-has-password>
                <label>Password</label>
                <md-input type="password" v-model="data.password"></md-input>
            </md-input-container>

            <md-checkbox id="remember-me" name="remember-me" v-model="data.remember">Remember me</md-checkbox>

            <md-button class="md-raised md-primary" @click="login">Login</md-button>

            <p v-if="error" class="error">Bad login information</p>
        </form>
    </div>
</template>

<script>
    import Auth from '../../Auth'

    export default{
        data(){
            return{
                error: false,
                data: {
                  remember: true,
                  username: '',
                  password: ''
                }
            }
        },

        methods: {
          login() {
              const data = {
                j_username: this.data.username,
                j_password: this.data.password,
                'remember-me': this.data.remember
              }

              Auth.login(this, data);
          }
        }
    }








</script>
