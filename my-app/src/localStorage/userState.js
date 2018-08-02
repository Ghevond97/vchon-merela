export const userState = (stateKey) => {
  try {
    const stateStructure = localStorage.getItem(stateKey);
    if (stateStructure == null) {
      return undefined;
    }
    
    return JSON.parse(stateStructure);
    
  }
  catch (e) {
    return undefined;
  }
}