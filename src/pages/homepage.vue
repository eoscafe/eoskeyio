<template>
  <q-page padding>
      <div class="">
        <!-- VALIDATE KEY PAIR-->
        <div class="title"><b>{{ $t('register.title') }}:</b></div>
        
        {{$t('register.conditionContent1')}}
        <br>
        {{$t('register.condition1')}}
        <br>
        {{$t('register.condition2')}}
        <br>
        {{$t('register.condition3')}}
        <br>
        {{$t('register.condition4')}}
        <br><br>
        {{$t('register.conditionContent2')}}

        <div class="doc" style="padding-top: 30px;">
          <div class="title"><b>{{ $t('register.convertPrivateTitle') }}</b></div>
          <p class="row">
            <div class="col-md-6">
              {{ $t('register.ethereumPrivateKey') }}:
            </div>
            <span style="padding-left: 7px"/>
            <input class="form-style col-md-6" v-model="ethereumPrivateKey" :placeholder="$t('register.ethereumPrivateKeyText')">
          </p>

          <!--<p class="mid-text" style="width: 400px">{{ $t('register.ethereumPublicKey')}} : {{ ethereumPublicKey }}</p>-->
          <p class="mid-text">{{ $t('register.ethereumAddress')}} : {{ ethereumAddress }}</p>
          <p class="mid-text">{{ $t('register.eosPrivateKey')}} : {{ convertedEOSPrivateKey }}</p>
          <p class="mid-text">{{ $t('register.eosPublicKey')}} : {{ convertedEOSPublicKey }}</p>

          <button style="margin-top:10px;" @click="convertEthereumPrivateToEOSPrivate">{{ $t('register.generatePrivateButton') }} </button>
          {{ statusMessage }}
        </div>

        <div class="doc big-gutter" style="padding-top: 30px;">
          <div class="title col-xs-12">{{ $t('register.languageTitle') }}</div>
          <button class="alt col-xs-6 col-md-3" @click="switchLanguage('en')">English</button>
          <button class="alt col-xs-6 col-md-3" @click="switchLanguage('es')">Español</button>
          <button class="alt col-xs-6 col-md-3" @click="switchLanguage('zh_cn')">简体中文</button>
          <button class="alt col-xs-6 col-md-3" @click="switchLanguage('kr')">한국어</button>
        </div>

      </div>
  </div>
</q-page>

</template>

<script>
import ecc from 'eosjs-ecc'
import eth from 'ethereumjs-util'

export default {
  name: 'register-page',
  components: { },
  data () {
    return {
      ethereumPrivateKey: null,
      ethereumPublicKey: null,
      ethereumAddress: null,
      convertedEOSPublicKey: null,
      convertedEOSPrivateKey: null,
      statusMessage: null
    }
  },
  methods: {
    convertEthereumPrivateToEOSPrivate(){
      this.statusMessage = ''

      if(eth.isValidPrivate(Buffer.from(this.ethereumPrivateKey, 'hex'))) {
        this.ethereumAddress = '0x' + eth.privateToAddress(Buffer.from(this.ethereumPrivateKey, 'hex')).toString('hex')
        this.ethereumPublicKey = eth.privateToPublic(Buffer.from(this.ethereumPrivateKey, 'hex')).toString('hex')

        // Create EOS keys
        let eosWIF = ecc.PrivateKey(Buffer.from(this.ethereumPrivateKey, 'hex')).toWif()
        this.convertedEOSPrivateKey = eosWIF
        this.convertedEOSPublicKey = ecc.privateToPublic(eosWIF)

        this.statusMessage = '   Success!'
      } else {
        this.statusMessage = "Invalid Ethereum Private Key"
      }
    },

    switchLanguage(language){
      this.$i18n.locale = language
    }
  }
}
</script>

<style lang="css">
  .mid-text {
    padding-top: 10px;
    text-overflow: ellipsis;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 100%; }

  .left-side {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #399ef0;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #399ef0;
  }

  .doc button.alt {
    color: #399ef0;
    background-color: transparent;
  }

  .form-style {
    display: inline;
    width: 100%;
    padding: 6px 12px;
    padding: .375rem .75rem;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .status-text {
    display: inline-block;
    padding-left: 10px;
  }
</style>
