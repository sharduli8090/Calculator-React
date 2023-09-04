const initialState = {
    num: "0",  
  };
  
const reducer4 = (state = initialState, action) => { 
    switch (action.type) {
      case 'SET_NUM':
        return {
          ...state,
          num: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer4;