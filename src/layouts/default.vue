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

        <q-list-header>{{ $t('sidebar.convertEthereumKeyToEOSKey') }}</q-list-header>
        <q-item @click.native="openPage('/')">
          <q-item-side icon="fa fa-registered" />
          <q-item-main :label="$t('sidebar.mainnetRegister')"/>
        </q-item>

        <q-list-header>{{ $t('sidebar.createAndConfirmEOSKeys') }}</q-list-header>
        <q-item @click.native="openPage('generate')">
          <q-item-side icon="fa fa-key" />
          <q-item-main :label="$t('sidebar.generateAndValidateKeys')"/>
        </q-item>

        <q-list-header v-if="showDownload">{{ $t('sidebar.download') }}</q-list-header>

        <a href="/statics/browser.zip" class="q-item q-item-division relative-position" download>
            <q-item-side icon="fa fa-download" />
            <q-item-main label="Browser"/>
        </a>
        <a href="/statics/eoskeyio-macos-x64.zip" class="q-item q-item-division relative-position" download>
            <q-item-side icon="fab fa-apple" />
            <q-item-main label="MacOS"/>
        </a>
        <a href="/statics/eoskeyio-win32-x64.zip" class="q-item q-item-division relative-position" download>
            <q-item-side icon="fab fa-windows" />
            <q-item-main label="Windows"/>
        </a>
        <a href="/statics/eoskeyio-linux-x64.zip" class="q-item q-item-division relative-position" download>
            <q-item-side icon="fab fa-linux" />
            <q-item-main label="Linux"/>
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
