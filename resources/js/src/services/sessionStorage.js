export const getItemFromStorage = (item) => {
    let toReturn = sessionStorage.getItem(item);
    if (!toReturn) toReturn = '';
    return toReturn;
};

export const saveItemToStorage = (key, item) => {
    sessionStorage.setItem(key, item);
};
  
export const removeItemFromStorage = (key) => {
    sessionStorage.removeItem(key);
};
