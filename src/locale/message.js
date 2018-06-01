const messages = {
  en: {
    sidebar: {
      tools: 'Tools',
      mainnetRegister: 'Mainnet Fallback Registration',
      generateAndValidateKeys: 'Generate and Validate Keys',
      download: 'Download Offline',
      sourceCode: 'Full Source Code'
    },
    register: {
      title: 'Mainnet Fallback Registration',
      conditionContent1: `Be aware, you are only eligible for fallback registration if:`,
      conditionContent2: `If you're eligible for fallback registration, use this tool to generate your EOS private key.`,
      condition1: `(1) You failed to register`,
      condition2: `(2) You registered a malformed key`,
      condition3: `(3) You had an outgoing transaction from your ethereum address within the block range of the snapshot.`,
      condition4: `(4) Your address is not a contract.`,
      convertPrivateTitle: 'Convert Ethereum Private Key to EOS Private Key',
      convertPublicTitle: 'Convert Ethereum Public Key to EOS Public Key',
      generatePrivateButton: 'Generate EOS Private Key',
      generatePublicButton: 'Generate EOS Public Key',
      ethereumPrivateKey: 'Ethereum Private Key',
      ethereumPublicKey: 'Ethereum Public Key',
      ethereumAddress: 'Ethereum Address',
      ethereumPrivateKeyText: "Enter ethereum private key",
      eosPrivateKey: 'EOS Private Key',
      eosPublicKey: 'EOS Public Key',
      languageTitle: 'Language'
    },
    generate: {
      generateTitle: 'Generate Keys',
      publicKey: 'Public Key',
      privateKey: 'Private Key',
      generateButton: 'Generate',
      validateTitle: 'Validate Key Pair',
      validatePublicKeyText: "Enter public key (starts with 'EOS')",
      validatePrivateKeyText: 'Enter private key',
      validateButton: 'Validate',
      findPublicKey: 'Find Public Key',
      findButton: 'Find',
      languageTitle: 'Language',
      validKeyPair: 'Valid Key Pair!',
      invalidPrivateKey: 'Invalid Private Key.',
      invalidPublicKey: 'Invalid Public Key.'
    }
  },
  zh_cn: {
    sidebar: {
      tools: 'Tools',
      mainnetRegister: '主网注册',
      generateAndValidateKeys: '生成并校验密钥对',
      download: '下载',
      sourceCode: '全部源代码'
    },
    register: {
      title: '主网注册回撤',
      conditionContent1: `请注意，只有在下列情况下，你才需要进行回撤`,
      conditionContent2: `如果你的条件符合回撤，使用这个工具来生成你的EOS私钥`,
      condition1: `(1) 你的注册失败`,
      condition2: `(2) 你注册了一个异常的密钥`,
      condition3: `(3) 在快照时，你的以太坊账户上仍然有一笔尚未完成的交易.`,
      condition4: `(4) 你的地址不是一个合约.`,
      convertPrivateTitle: ' 转换以太坊私钥为EOS私钥',
      convertPublicTitle: '转换以太坊公钥为EOS 公钥',
      generatePrivateButton: '生成EOS私钥',
      generatePublicButton: '生成EOS公钥',
      ethereumPrivateKey: '以太坊私钥',
      ethereumPublicKey: '以太坊公钥',
      ethereumAddress: '以太坊地址',
      ethereumPrivateKeyText: "输入以太坊私钥",
      eosPrivateKey: 'EOS私钥',
      eosPublicKey: 'EOS公钥',
      languageTitle: '选择语言'
    },
    generate: {
      generateTitle: '密钥生成器',
      publicKey: '公钥',
      privateKey: '私钥',
      generateButton: '生成',
      validateTitle: '验证密钥对',
      validatePublicKeyText: "输入你的公钥",
      validatePrivateKeyText: '输入你的私钥',
      validateButton: '验证',
      findPublicKey: '查找公钥',
      findButton: '查找',
      languageTitle: '语言',
      validKeyPair: '验证密钥对',
      invalidPrivateKey: '不正确的私钥',
      invalidPublicKey: '不正确的公钥'
    }
  },
  kr: {
    sidebar: {
      tools: '툴킷',
      mainnetRegister: '메인넷 등록',
      generateAndValidateKeys: '키 생성 및 유효성 검증',
      download: '다운로드',
      sourceCode: '전체 소스 코드'
    },
    register: {
      title: '메인넷 비상 등록',
      conditionContent1: `다음과 같은 경우에만 비상 등록 자격이 있음을 유의하십시오.`,
      conditionContent2: `비상 등록 자격이 있는 경우 이 툴킷을 사용하여 EOS 개인 키를 생성하십시오.`,
      condition1: `(1) 등록에 실패했습니다.`,
      condition2: `(2) 잘못된 키를 등록했습니다.`,
      condition3: `(3) 스냅 샷의 블록 범위에 이더리움 주소로부터 외부로 발생된 트랜잭션이 있습니다.`,
      condition4: `(4) 여러분의 주소는 컨트랙트가 아닙니다.`,
      convertPrivateTitle: '이더리움 프라이빗 키를 EOS 프라이빗 키로 변경',
      convertPublicTitle: '이더리움 퍼블릭키를 EOS 퍼블릭 키로 변경',
      generatePrivateButton: 'EOS 프라이빗 키 생성',
      generatePublicButton: 'EOS 퍼블릭키 생성',
      ethereumPrivateKey: '이더리움 프라이빗 키 생성',
      ethereumPublicKey: '이더리움 퍼블릭 키',
      ethereumAddress: '이더리움 주소',
      ethereumPrivateKeyText: "이더리움 프라이빗 키 입력",
      eosPrivateKey: 'EOS 프라이빗 키',
      eosPublicKey: 'EOS 퍼블릭 키',
      languageTitle: '언어'
    },
    generate: {
      generateTitle: '키(keys) 생성하기',
      publicKey: '공개키',
      privateKey: '개인키',
      generateButton: '생성하기',
      validateTitle: '키(keys) 매칭 유효성 확인하기 ',
      validatePublicKeyText: "공개키를 입력하세요 (‘EOS’로 시작하는)",
      validatePrivateKeyText: '개인키를 입력하세요',
      validateButton: '검사하기',
      findPublicKey: '공개 키(key) 확인하기',
      findButton: '발견',
      languageTitle: '언어',
      validKeyPair: '유효하지 않은 공개키',
      invalidPrivateKey: '유효하지 않은 개인키',
      invalidPublicKey: '유효하지 않은 공개키'
    }
  },
  es: {
    sidebar: {
      tools: 'Herramientas',
      mainnetRegister: 'Registro Red Principal',
      generateAndValidateKeys: 'Generar y validar Keys',
      download: 'Descargar',
      sourceCode: 'Código Fuente Completo'
    },
    register: {
      title: 'Registro de respaldo de la red principal',
      conditionContent1: `Ten en cuenta que solamente eres elegido para respaldar registro si:`,
      conditionContent2: `Si eres elegido para respaldar registro, usa esta herramienta para generar tu private key de EOS.`,
      condition1: `(1) Registro fallido`,
      condition2: `(2) Registraste una llave malformada`,
      condition3: `(3) Tuviste una transacción saliente desde tu dirección ethereum junto con el rango de bloque del snapshot.`,
      condition4: `(4) Tu dirección no es un contrato.`,
      convertPrivateTitle: 'Convertir Private Key de Ethereum a Private Key de EOS',
      convertPublicTitle: 'Convertir Public Key de Ethereum a Public Key de EOS',
      generatePrivateButton: 'Generar Private Key de EOS',
      generatePublicButton: 'Generar Public Key de EOS',
      ethereumPrivateKey: 'Private Key de Ethereum',
      ethereumPublicKey: 'Public Key de Ethereum',
      ethereumAddress: 'Dirección Ethereum',
      ethereumPrivateKeyText: 'Ingresa la Private Key de Ethereum',
      eosPrivateKey: 'Private Key de EOS',
      eosPublicKey: 'Public Key de EOS',
      languageTitle: 'Idioma'
    },
    generate: {
      generateTitle: 'Generar Keys',
      publicKey: 'Public Key',
      privateKey: 'Private Key',
      generateButton: 'Generar',
      validateTitle: 'Validar Key Pair',
      validatePublicKeyText: "Ingresa public key (empieza con 'EOS')",
      validatePrivateKeyText: 'Ingresa private key',
      validateButton: 'Validar',
      findPublicKey: 'Encontrar Public Key',
      findButton: 'Encontrar',
      languageTitle: 'Idioma',
      validKeyPair: 'Validar Key Pair!',
      invalidPrivateKey: 'Invalidar Private Key.',
      invalidPublicKey: 'Invalidar Public Key.'
    }
  }
}

export default messages
