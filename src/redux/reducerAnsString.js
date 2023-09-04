const initialState = {
    strAns: "",  
  };
  
const reducer3 = (state = initialState, action) => { 
    switch (action.type) {
      case 'SET_STRANS':
        return {
          ...state,
          strAns: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer3;