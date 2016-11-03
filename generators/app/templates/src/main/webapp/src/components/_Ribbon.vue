<template>
    <div>
        <div v-if="profileDataLoaded" class="ribbon" :class="ribbonEnv"><a href="">{{ribbonEnv}}</a></div>
    </div>
</template>

<style lang="scss">
    .ribbon {
        background-color: #a00;
        box-shadow: 0 0 10px #888;
        left: -3.5em;
        moz-box-shadow: 0 0 10px #888;
        moz-transform: rotate(-45deg);
        ms-transform: rotate(-45deg);
        o-transform: rotate(-45deg);
        overflow: hidden;
        position: absolute;
        top: 40px;
        transform: rotate(-45deg);
        webkit-box-shadow: 0 0 10px #888;
        webkit-transform: rotate(-45deg);
        white-space: nowrap;
        width: 15em;
        z-index: 9999;
        pointer-events: none;

        a {
            border: 1px solid #faa;
            color: #fff !important;
            display: block;
            font: bold 81.25% 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 1px 0;
            padding: 10px 50px;
            text-align: center;
            text-decoration: none;
            text-shadow: 0 0 5px #444;
            pointer-events: none;
        }
    }
</style>

<script>

    import ProfileService from './ProfileService'

    export default {
        data () {
            return {
              profileDataLoaded: false,
              ribbonEnv: ''
            }
        },
        created () {
                ProfileService.getProfileInfo(this).then(function (response) {
                        this.ribbonEnv = response.ribbonEnv
                        this.profileDataLoaded = true
                    }
                )
        },
        components:{
            ProfileService
        }
    }
</script>
