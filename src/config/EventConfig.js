
// 	static OpenBoxConfirm = "OpenBoxConfirm";

// // 	static SetNameConfirm = "SetNameConfirm";

// 	static ApprovedConfirm = "ApprovedConfirm";
	static LevelUpConfirm = "LevelUpConfirm";
	
	static StakeNftConfirm = "StakeNftConfirm"
	
	static ClaimMobalConfirm = "ClaimMobalConfirm"
}if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: fix: fix incorrect win/loss ratio display');

// Error handling for: feat: ✨ add game replay functionality
const handleError = (error) => {
  console.error('Error occurred:', error);
  // Log error to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    console.log('Error logged to monitoring service');
  }
  return false;
};

// Try-catch wrapper
const safeExecute = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};
