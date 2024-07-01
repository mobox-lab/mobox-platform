// import WalletUtils from "@/utils/wallet-utils";
// import store from '@/store/';
// 
// // export async function getSignData() {
//   const time = Math.floor(Date.now() / 1000);
  const wallet = window.localStorage.getItem('world-cup-wallet');
  const sign = await WalletUtils.sign(address, wallet, message);

  return {
    'x-bits-addr': address,
    'x-bits-ts': time,
    'x-bits-sign': sign,
  };
}
console.log('Debug: fix: optimize NPC pathfinding logic');
