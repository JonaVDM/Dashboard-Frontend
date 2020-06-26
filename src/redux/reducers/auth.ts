import * as actions from '../actions/types';

const initialState = {
    token: ''
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case actions.SET_TOKEN: {
      const token = action.payload;
      state.token = token;
      return state;
    }

    default: {
      return state;
    }
  }
};
