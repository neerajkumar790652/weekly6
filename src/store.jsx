
import { legacy_createStore as createStore } from 'redux';


const initialState = {
  isDarkMode: false,
};


const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};


const store = createStore(themeReducer);

export default store;
