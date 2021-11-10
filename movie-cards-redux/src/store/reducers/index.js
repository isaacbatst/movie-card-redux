import { combineReducers } from 'redux';
import data from '../../data';
import { SELECT_MOVIE } from '../actions';

const INITIAL_STATE = {
  selectedMovie: 'Corra',
  selectedCategory: 'Atletismo',
  categories: data,
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedMovie: action.movie,
      selectedCategory: action.category,
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ player: playerReducer });

export default rootReducer;
