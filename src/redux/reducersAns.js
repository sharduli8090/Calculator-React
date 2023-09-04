const initialState = {
    ans: 0,  
  };
  
const reducer2 = (state = initialState, action) => { 
    switch (action.type) {
      case 'SET_ANS':
        return {
          ...state,
          ans: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer2;