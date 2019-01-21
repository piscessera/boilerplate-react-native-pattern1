import {
  LOGIN_USER
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: {}, //user = null
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: ''};
    default:
      return state;
  }
};
