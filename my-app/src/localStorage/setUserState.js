export const setUserState = (stateValue, stateKey) => {
    try {
      const serializedState = JSON.stringify(stateValue);
      localStorage.setItem(stateKey,serializedState);
    }
    catch (err) {
      throw new Error("Can't save changes in local storage");
    }
    
}