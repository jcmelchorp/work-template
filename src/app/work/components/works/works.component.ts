import { Work } from './../../models/work.model';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-work-home',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],

})
export class WorksComponent implements OnInit {
  works$: Observable<any>;
  worksListLoading$: Observable<boolean>;
  selectedWork$: Observable<Work>;
  selectedWork: Work;
  @Output() id: number;
  works: Work[];
  work: Work;
  constructor(

  ) { }

  ngOnInit(): void { }



}
