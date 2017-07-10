import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_UESR_SUCCESS,
  LOGIN_UESR_FAIL,
  LOGIN_UESR_SPINNER
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_UESR_SPINNER:
      return { ...state, loading: true, error: '' };
    case LOGIN_UESR_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
      case LOGIN_UESR_FAIL:
        return { ...state, error: 'Auth failed', password: '', loading: false };
    default:
      return state;
  }
};
