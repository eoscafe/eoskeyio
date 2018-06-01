<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="fa fa-bars" />
        </q-btn>

        <q-toolbar-title>
            <p style="float:left;margin:0;">EOS Key</p>
            <p style="float:right;margin:0;">EOS Cafe Calgary</p>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- Sidebar -->
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">

      <q-list
        no-border
        link
        inset-delimiter>

        <img id="logo" src="../assets/eos_collab.png" class="center" style="width:250px;padding-top: 10px;" alt="EOS Calgary x EOS Cafe">
        <q-list-header>{{ $t('sidebar.tools') }}</q-list-header>
        <q-item @click.native="openPage('/')">
          <q-item-side icon="fa fa-registered" />
          <q-item-main :label="$t('sidebar.mainnetRegister')"/>
        </q-item>

        <q-item @click.native="openPage('generate')">
          <q-item-side icon="fa fa-key" />
          <q-item-main :label="$t('sidebar.generateAndValidateKeys')"/>
        </q-item>

        <q-list-header>Github</q-list-header>
        <a target="_blank" href="https://github.com/eoscafe/eoskeyio" class="q-item q-item-division relative-position">
            <q-item-side icon="fab fa-github" />
            <q-item-main :label="$t('sidebar.sourceCode')"/>
        </a>
      </q-list>
    </q-layout-drawer>

    <!-- Page container -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: true // this.$q.platform.is.desktop
    }
  },
  computed: {
    showDownload(){
      let electron = !!(this.$q.platform.is.electron)
      let cordova = !!(this.$q.platform.is.cordova)

      return electron || cordova ? false : true
    }
  },
  methods: {
    openURL,
    openPage(pageName) {
      this.$router.push(pageName)
    }
  }
}
</script>

<style>
a, a:hover {
  text-decoration: none;
  color: inherit;
}
</style>
