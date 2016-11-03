<template>
  <div>
    <md-toolbar>
      <md-button class="home">
        <md-icon><img class="logo" src="/static/img/logo-vueister.svg"/></md-icon>
        <span class="md-title">{{ title }}</span> <span class="version">?version?</span>
      </md-button>

      <span class="md-title" style="flex: 1">&nbsp;</span>

      <md-button><router-link to="/">Home</router-link></md-button>
      <md-button><router-link to="/bar">Go to Bar</router-link></md-button>

        {{ user }}
    </md-toolbar>
  </div>
</template>

<style>

</style>

<script>
    export default {
      props: ['title', 'user'],

      data () {
        return {
          movie: 'Fight Club'
        }
      }
    }
</script>
