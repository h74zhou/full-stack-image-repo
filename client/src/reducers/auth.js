export default (state = { authData: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      // Cookie Implementation (instead of localstorage)
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
