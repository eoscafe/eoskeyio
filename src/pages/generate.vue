<template>
  <q-page padding>
      <main>
        <div class="left-side">
          <!-- GENERATE -->
          <div class="doc">
            <div class="title">{{ $t('generate.generateTitle') }}</div>

            <p>{{ $t('generate.publicKey')}} : {{ newPublicKey }}</p>
            <p>{{ $t('generate.privateKey')}} : {{ newPrivateKey }}</p>

            <button @click="generateNewKeys">{{ $t('generate.generateButton')}}</button>
          </div>

          <!-- VALIDATE KEY PAIR-->
          <div class="doc" style="padding-top: 30px;">
            <div class="title">{{ $t('generate.validateTitle') }}</div>
            <p>
              {{ $t('generate.publicKey') }}:
              <span style="padding-left: 7px"/>
              <input class="form-style" v-model="validatePublicKey" :placeholder="$t('generate.validatePublicKeyText')">
            </p>
            <p>
              {{ $t('generate.privateKey') }}:
              <input class="form-style" v-model="validatePrivateKey" :placeholder="$t('generate.validatePrivateKeyText')">
            </p>

            <button @click="validateKeys">{{ $t('generate.validateButton') }} </button>

            <p class="status-text" v-if="validationStatus"> {{ validationStatus }} </p>
          </div>

          <!-- GENERATE PUBLIC KEY -->
          <div class="doc" style="padding-top: 30px;">
            <div class="title">{{ $t('generate.findPublicKey') }}</div>
            <p>
              {{ $t('generate.privateKey') }}:
              <input class="form-style" v-model="privateKeyToGeneratePublic" :placeholder="$t('generate.validatePrivateKeyText')">
            </p>
            <p>{{ $t('generate.publicKey')}} : {{ publicKeyFromPrivateKey }}</p>

            <button @click="generatePublicFromPrivate">{{ $t('generate.findButton') }} </button>

            <p class="status-text" v-if="generatePublicKeyStatus"> {{ generatePublicKeyStatus }} </p>
          </div>

          <!-- LANGUAGE -->
          <div class="doc" style="padding-top: 30px;">
            <div class="title">{{ $t('generate.languageTitle') }}</div>
            <button class="alt" @click="switchLanguage('en')">English</button>
            <button class="alt" @click="switchLanguage('es')">Español</button>
            <button class="alt" @click="switchLanguage('zh_cn')">简体中文</button>
            <button class="alt" @click="switchLanguage('kr')">한국어</button>
          </div>
        </div>


      </main>
    </q-page>
</template>

<script>
import ecc from 'eosjs-ecc'

export default {
  name: 'generate',
  components: { },
  data () {
    return {
      newPublicKey: null,
      newPrivateKey: null,
      validatePublicKey: null,
      validatePrivateKey: null,
      validationStatus: null,
      privateKeyToGeneratePublic: null,
      publicKeyFromPrivateKey: null,
      generatePublicKeyStatus: null
    }
  },
  methods: {
    generateNewKeys(){
      ecc.randomKey().then(privateKey => {
        let publicKey = ecc.privateToPublic(privateKey)

        // Set
        this.newPrivateKey = privateKey
        this.newPublicKey = publicKey
      })
    },
    validateKeys(){
      const { validatePublicKey, validatePrivateKey} = this;

      // Valid public key
      if(ecc.isValidPublic(validatePublicKey)){

        // Valid private key
        if(ecc.isValidPrivate(validatePrivateKey)){
          let publicKey = ecc.privateToPublic(validatePrivateKey)

          // The public key is correctly matched to private key
          if(publicKey === validatePublicKey) {
            this.validationStatus = this.$t('generate.validKeyPair')
          } else {
            this.validationStatus = this.$t('generate.invalidPublicKey')
          }
        } else {
          this.validationStatus = this.$t('generate.invalidPrivateKey')
        }
      } else {
        this.validationStatus = this.$t('generate.invalidPublicKey')
      }
    },
    generatePublicFromPrivate(){
      let privateKey = this.privateKeyToGeneratePublic

      if(!ecc.isValidPrivate(privateKey)){
        this.generatePublicKeyStatus = this.$t('generate.invalidPrivateKey')
        return
      }

      let publicKey = ecc.privateToPublic(this.privateKeyToGeneratePublic)
      this.publicKeyFromPrivateKey = publicKey
    },
    switchLanguage(language){
      this.$i18n.locale = language
    }
  }
}
</script>

<style>

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
    width: 600px;
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
