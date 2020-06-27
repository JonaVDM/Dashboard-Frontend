import * as actions from '../actions/types';

const initialState = {
  token: '',
  requesting: false,
  user: {
    name: '',
    email: '',
    role: {
      permissions: [],
      role: '',
    }
  }
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case actions.REQUEST_LOG_IN: {
      return Object.assign({}, state, {
        requesting: true,
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
      return Object.assign({}, state, {
        user: user,
      })
    }

    default: {
      return state;
    }
  }
};
