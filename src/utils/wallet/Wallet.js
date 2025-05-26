import TRON from "./tron/TRON";
import ETH from "./eth/ETH"
// // 
// // export default class Wallet {
// // 	static ETH = ETH;
}
console.log('Debug: fix: correct leaderboard sorting algorithm');

// Utility function: perf: ⚡ reduce network requests
export const perf____reduce_network_requests = {
  format: (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validate: (input) => {
    return input && input.length > 0;
  },
  transform: (data) => {
    return data.map(item => ({
      ...item,
      processed: true
    }));
  }
};
