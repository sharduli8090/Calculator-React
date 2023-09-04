const initialState = {
    op: "",  
  };
  
const reducer4 = (state = initialState, action) => { 
    switch (action.type) {
      case 'SET_OP':
        return {
          ...state,
          op: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer4;