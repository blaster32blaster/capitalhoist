<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Capital Hoist and Crane</span>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Capital Hoist</span>
            <nav class="mdl-navigation">
                <div style="margin: 5%">
                <h5>Site</h5>
                <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
                <router-link class="mdl-navigation__link" to="/inspection" @click.native="hideMenu">Inspection</router-link>
                <router-link class="mdl-navigation__link" to="/repair" @click.native="hideMenu">Repair</router-link>
                <router-link class="mdl-navigation__link" to="/training" @click.native="hideMenu">Operator Training</router-link>
                <router-link class="mdl-navigation__link" to="/associates" @click.native="hideMenu">Assoc. and Compliance</router-link>
                </div>
                <div style="margin: 5%">
                    <h5>Contact</h5>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style="width: 80%; margin: 5%"><a href="tel:2708817148">Call</a> </button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style="width: 80%; margin: 5%"><a href="mailto:info@capitalhoistcrane.com?Subject=Customer%20Inquiry" target="_top">Email</a></button>
                </div>
            </nav>
        </div>
        <main class="mdl-layout__content">
            <div class="page-content">
                <router-view></router-view>
            </div>
            <div style="display: block; margin-left: auto; margin-right: auto; text-align: center; margin-bottom: 2%; margin-top: 2%; background-color: transparent">


                <button style="position: fixed; top:85%; right:5%" id="contact-menu" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" ><i style="color: white; width: 90%" class="fa fa-plus-circle" aria-hidden="true"></i></button>
                <ul style="position: fixed; top:60%; right:5%" class="mdl-menu mdl-menu--top-right mdl-js-menu "
                    data-mdl-for="contact-menu">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style="width: 100%; margin: 5%"><a href="tel:2708817148">Call</a> </button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style="width: 100%; margin: 5%"><a href="mailto:info@capitalhoistcrane.com?Subject=Customer%20Inquiry" target="_top">Email</a></button>

                </ul>
            </div>
        </main>
        <footer>

            <p style="font-size:100%; text-align: center; margin: 1%">100 % Veteran Owned and Operated</p>
        </footer>
    </div>
</template>


<!-- Compressed JavaScript -->

<script>
    require('material-design-lite')
    require('./assets/js/analytics.js')
    export default {
      name: 'app',
      methods: {
        hideMenu: function () {
          document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
          document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
        }
      }
    }
</script>


<style>

    @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  /*@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');*/
    @import url('https://code.getmdl.io/1.3.0/material.blue_grey-red.min.css');
    @import url('https://fonts.googleapis.com/css?family=Droid+Sans|Roboto');
    @import url('./assets/styles/styles.scss');
body {
  margin: 0;
}


</style>
