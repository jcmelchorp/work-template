/* import { State } from '@ngrx/store';

const InitialState = {
  works: [
    {
      name: 'My First Work',
      id: 1
    }
  ],
  loading: false,
  loaded: true
};

export function workReducer(state = InitialState, action) {
  switch (action.type) {
    case 'LOAD_WORKS': {
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }
    default: {
      return state;
    }
  }
}
 */
import * as workActions from './work.actions';
import { Work } from '../models/work.model';
import * as fromRoot from '../../state/app-state';
export interface WorkState {
  works: Work[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  works: WorkState;
}
export const InitialState: WorkState = {
  works: [],
  loading: false,
  loaded: true,
  error: ''
};
export function workReducer(state = InitialState, action: workActions.Actions): WorkState {
  switch (action.type) {
    case workActions.WorkActionTypes.LOAD_WORKS: {
      return {
        ...state,
        loading: true
      }
    }
    case workActions.WorkActionTypes.LOAD_WORKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        works: action.payload
      }
    }
    case workActions.WorkActionTypes.LOAD_WORKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        works: [],
        error: action.payload
      }
    }
    default: { return state; }
  }
}
