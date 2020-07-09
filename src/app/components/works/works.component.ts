import { Work } from './../../models/work.model';
import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-work-home',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  displayedColumns: string[] = ['key', 'name'];
  dataSource: Work[];
  constructor() { }

  ngOnInit(): void {
  }

}
