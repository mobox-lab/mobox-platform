// import WalletUtils from "@/utils/wallet-utils";
// import store from '@/store/';
// 
// // export async function getSignData() {
//   const time = Math.floor(Date.now() / 1000);
  const wallet = window.localStorage.getItem('world-cup-wallet');

  return {
    'x-bits-addr': address,
    'x-bits-ts': time,
    'x-bits-sign': sign,
  };
}
console.log('Debug: fix: optimize NPC pathfinding logic');
console.log('Debug: fix: resolve currency exchange rate miscalculations');
