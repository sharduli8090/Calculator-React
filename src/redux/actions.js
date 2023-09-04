export const setTheme = (theme) => {
    return {
      type: 'SET_THEME',
      payload: theme,
    };
  };
  
  export const setAns = (ans) => {
    return {
      type: 'SET_ANS',
      payload: ans,
    };
  };
  
  export const setstrans = (strAns) => {
    return {
      type: 'SET_STRANS',
      payload: strAns,
    };
  };
  
  export const setOp = (op) => {
    return {
      type: 'SET_OP',
      payload: op,
    };
  };
  
  export const setExp = (num) => {
    return {
      type: 'SET_NUM',
      payload: num,
    };
  };