const logger = store => next => action => {
    // make any side effect
    console.log("[Logger]", store, action)
    next(action);
  }

export default logger;