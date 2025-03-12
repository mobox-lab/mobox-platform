import Vue from 'vue';
import Web3 from 'web3';
// // import WalletConnect from '@walletconnect/client';
// // // import QRCodeModal from '@walletconnect/qrcode-modal';
// // import i18n from '@/i18n';
// import SelectWallet from '@/components/select-wallet.vue';
// import { Common } from '@/utils';


function selectWallet() {
  return new Promise((resolve) => {
    const Constructor = Vue.extend(SelectWallet);
    const instance = new Constructor({
      i18n,
    });

    instance.$mount();
    document.body.appendChild(instance.$el);
    instance.$on('selected', resolve);
    instance.show();
  });
}


let connector;

export default class WalletUtils {
  static web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));

  
  static getProvider(wallet) {
    if (wallet === 'mobox') {
      return window.mbox.bscWeb3.currentProvider;
    } else if (wallet === 'binance') {
      return window.BinanceChain;
    } else if (wallet === 'trust-wallet' || wallet === 'token-pocket') {
      return window.ethereum;
    } else if (wallet === 'metamask') {
      return window.ethereum?.providers?.find((item) => item.isMetaMask) || (window.ethereum?.isMetaMask ? window.ethereum : null);
    } else if (wallet === 'coinbase') {
      return window.ethereum?.providers?.find((item) => item.isCoinbaseWallet) || (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);
    } else {
      return window.ethereum;
    }
  }

  
  static async connect(wallet) {
    if (!wallet) {
      wallet = await selectWallet();
    }

    const address = await this.getAccount(wallet);

    return {
      address,
      wallet,
    };
  }

  
  static sign(address, wallet, message) {
    return new Promise(async (resolve, reject) => {
      let provider;

      if (wallet === 'mobox') {
        
        window.mbox?.bscWeb3.personal.sign(
          message,
          address,
          (err, data) => {
            if (err) {
              reject(err);
              return;
            }

            resolve(data);
          }
        );
        return;
      } else if (wallet === 'binance') {
        
        const { signature } = await window.BinanceChain.bnbSign(address, message);
        resolve(signature);
        return;
      } else if (wallet === 'wallet-connect') {
        if (!connector) {
          await this.getAccount(wallet);
        }

        const data = await connector.signMessage([address, message]);
        resolve(data);
        return;
      } else if (wallet === 'trust-wallet' || wallet === 'token-pocket') {
        provider = window.ethereum;
      } else if (wallet === 'metamask') {
        provider = window.ethereum?.providers?.find((item) => item.isMetaMask) || (window.ethereum?.isMetaMask ? window.ethereum : null);
      } else if (wallet === 'coinbase') {
        provider = window.ethereum?.providers?.find((item) => item.isCoinbaseWallet) || (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);
      }

      let params = [];

      
      if (provider.isCoinbaseWallet) {
        params = [message, address];
      } else {
        params = [address, message];
      }

      const data = await provider.request({
        method: "personal_sign",
        params,
      });

      resolve(data);
    });
  }

  
  static getMOBalls(address) {
    const contract = new this.web3.eth.Contract([{
      "inputs": [
        {
          "internalType": "address",
          "name": "owner_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id_",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }], '0x9314CdD422cB6fbFAb2954B58B3D911e515A94A1');

    return contract.methods.balanceOf(address, 1).call();
  }

  
  static getAccount(wallet) {
    return new Promise(async (resolve) => {
      let provider;

      if (wallet === 'mobox') {
        if (!window.mbox) {
            store.commit("globalState/addNotify", {
              msg: i18n.t('Tips_1'),
              type: 'error',
            });
            return;
        }
  
        const res = await window.mbox?.BinanceChain?.enable();
        resolve(res[0]);
        return;
      } else if (wallet === 'binance') {
        const res = await window.BinanceChain.enable();
        resolve(res[0]);
        return;
      } else if (wallet === 'wallet-connect') {
        // connector = new WalletConnect({
        //   bridge: "https://bridge.walletconnect.org",
        //   qrcodeModal: QRCodeModal,
        // });

        // connector.on("connect", async (error) => {
        //   if (!error) {
        //     resolve(connector.accounts[0]);
        //   }
        // });

        // if (connector.connected) {
        //   resolve(connector.accounts[0]);
        // } else {
        //   connector.createSession();
        // }

        // return;
      } else if (wallet === 'trust-wallet' || wallet === 'token-pocket') {
        if (!window.ethereum) {
          store.commit("globalState/addNotify", {
            msg: i18n.t('Tips_1'),
            type: 'error',
          });
          return;
        }

        const res = await window.ethereum?.request({
          method: "eth_requestAccounts",
        });

        resolve(res[0]);
        return;
      } else if (wallet === 'metamask') {
        provider = window.ethereum?.providers?.find((item) => item.isMetaMask) || (window.ethereum?.isMetaMask ? window.ethereum : null);
      } else if (wallet === 'coinbase') {
        provider = window.ethereum?.providers?.find((item) => item.isCoinbaseWallet) || (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);
      }

      if (!provider) {
        store.commit("globalState/addNotify", {
          msg: i18n.t('Tips_1'),
          type: 'error',
        });
        return;
      }

      await provider.enable();

      if (provider._state?.isUnlocked === false) {
        store.commit("globalState/addNotify", {
          msg: i18n.t('Tips_2'),
          type: 'error',
        });
        return;
      }

      const res = await provider.request({
          method: "eth_requestAccounts",
      });

      resolve(res[0]);
    });
  }

  
  static async getBNBBalance(address) {
    try {
      const balance = await this.web3.eth.getBalance(address);
      return Common.numFloor(parseInt(balance) / 1e18, 10000);
    } catch(_) {
      return 0;
    }
  }

  
  static async getMboxBalance(address) {
    try {
      const balance = await this.getErc20Balance('0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377', address);
      return Common.numFloor((Number(balance) / 1e18), 1e2);
    } catch(_) {
      return 0;
    }
  }

  
  static async getBusdBalance(address) {
    try {
      const balance = await this.getErc20Balance('0xe9e7cea3dedca5984780bafc599bd69add087d56', address);
      return Common.numFloor((Number(balance) / 1e18), 1e4);
    } catch(_) {
      return 0;
    }
  }

  
  static async getMecBalance(address) {
    try {
      const balance = await this.get1155Balance('0x98387108842a7CfC7bA23E080030351f6ea68ac0', address, 1);
      return Common.numFloor((Number(balance) / 1), 1e4);
    } catch(_) {
      return 0;
    }
  }
  
  
  static async getMecBoxBalance(address) {    
    try {
      const balance = await this.get1155Balance('0xed8711fEff83b446158259981FD97645856e82A5', address, 2);
      return balance;
    } catch(_) {
      return 0;
    }
  }
  
  
  static async getBoxBalance(address) {    
    try {
      const balance = await this.get1155Balance('0xed8711fEff83b446158259981FD97645856e82A5', address, 1);
      return balance;
    } catch(_) {
      return 0;
    }
  }

  
  static async getErc20Balance(token, address) {
    const contract = new this.web3.eth.Contract([{
      type: "function",
      name: 'balanceOf',
      inputs: [{
        type: 'address',
        name: 'ownerAddress'
      }],
      outputs: [{
        type: "uint256",
        name: "_value"
      }],
    }], token);

    return contract.methods.balanceOf(address).call();
  }

  
  static async get1155Balance(token, address, id) {
    const contract = new this.web3.eth.Contract([{
      name: 'balanceOfOneBatch',
      type: "function",
      inputs: [{
        type: 'address',
        name: '_owner'
      }, {
        type: 'uint256[]',
        name: '_memoryids'
      }],
      outputs: [{
        type: "uint256[]",
        name: "_amounts"
      }],
      stateMutability: "view",
    }], token);

    const data = await contract.methods.balanceOfOneBatch(address, [id]).call();
    return data[0];
  }
}
console.log('Debug: fix: fix broken animation frames in combat');
