const initialState = {
    ans: 0,  
  };
  
  const reducer = (state = initialState, action) => { 
    switch (action.type) {
      case 'calculate':
        return {
          ...state,
          ans: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;