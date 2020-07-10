import { Work } from './../../models/work.model';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as workActions from '../../store/work.actions';
@Component({
  selector: 'app-work-home',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],

})
export class WorksComponent implements OnInit {
  worksListLoading$: Observable<boolean>;
  selectedWork$: Observable<Work>;
  selectedWork: Work;
  works: Work[];
  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new workActions.LoadWorks());
    this.store.subscribe((state) => { this.works = state.works.works; });
  }



}
