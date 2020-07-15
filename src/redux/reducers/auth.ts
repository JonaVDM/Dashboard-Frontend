import * as actions from '../actions/types';

const initialState = {
  token: '',
  requesting: false,
  user: {
    name: '',
    email: ''
  },
  role: {
    permissions: [],
    name: '',
  }
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case actions.REQUEST_LOG_IN: {
      return Object.assign({}, state, {
        requesting: action.payload,
      });
    }

    case actions.SET_TOKEN: {
      const token = action.payload;
      return Object.assign({}, state, {
        token: token,
        requesting: false,
      });
    }

    case actions.SET_USER: {
      const user = action.payload;
      const { role } = user;
      return Object.assign({}, state, {
        user,
        role
      });
    }

    case actions.LOG_OUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
