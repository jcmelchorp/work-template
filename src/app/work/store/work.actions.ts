import { Action } from '@ngrx/store';

import { Work } from '../models/work.model';

export enum WorkActionTypes {
  LOAD_WORKS = '[Work] Load Works',
  LOAD_WORKS_SUCCESS = '[Work] Load Works Success',
  LOAD_WORKS_FAIL = '[Work] Load Works Fail'

}
export class LoadWorks implements Action {
  readonly type = WorkActionTypes.LOAD_WORKS;
}

export class LoadWorksSuccess implements Action {
  readonly type = WorkActionTypes.LOAD_WORKS_SUCCESS;

  constructor(public payload: Work[]) { }
}

export class LoadWorksFail implements Action {
  readonly type = WorkActionTypes.LOAD_WORKS_FAIL;

  constructor(public payload: string) { }
}

export type Actions = LoadWorks | LoadWorksSuccess | LoadWorksFail;
