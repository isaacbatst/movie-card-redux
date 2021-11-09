import { combineReducers } from 'redux';

const INITIAL_STATE = {
  selectedMovie: 'Corra',
  selectedCategory: 'Atletismo',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const rootReducer = combineReducers({ player: playerReducer });

export default rootReducer;
