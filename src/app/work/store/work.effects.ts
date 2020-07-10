import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WorkService } from '../services/work.service';
import * as workActions from '../store/work.actions';
import { Work } from '../models/work.model';
@Injectable()
export class WorkEffect {
  constructor(
    private actions$: Actions,
    private workService: WorkService

  ) { }

  @Effect()
  loadWorks$: Observable<Action> = this.actions$.pipe(
    ofType<workActions.LoadWorks>(
      workActions.WorkActionTypes.LOAD_WORKS
    ),
    mergeMap((actions: workActions.LoadWorks) =>
      this.workService.getWorks().pipe(
        map((works: Work[]) =>
          new workActions.LoadWorksSuccess(works)),
        catchError((err) => of(new workActions.LoadWorksFail(err)))))
  )
}
