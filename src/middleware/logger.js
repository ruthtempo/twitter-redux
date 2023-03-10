// logger will help us view the actions and state of the store as we interact with our application// to make debugging easier

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action:", action); //what is the action
  const returnValue = next(action); // after next dipatches action, we et new state
  console.log("the new State:", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
