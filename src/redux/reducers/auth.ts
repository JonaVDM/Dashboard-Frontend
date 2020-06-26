import * as actions from '../actions/types';

const initialState = {
  token: '',
  requesting: false,
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

    default: {
      return state;
    }
  }
};
