<template>
    <div class="flex-container">
        <md-card>
            <login-form></login-form>
        </md-card>
    </div>
</template>

<style lang="scss">
    .flex-container {
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .md-card {
        width: 320px;
        padding: 16px;
    }
</style>

<script>
    import LoginForm from './LoginForm.vue'

    export default{
        data(){
            return{
            }
        },

       created () {
            this.$http.get('/api/authenticate').then((response) => {
            // success callback
            }, (response) => {

            });
      },

        components:{
            LoginForm
        }
    }


</script>
