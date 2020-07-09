import { WorkService } from 'src/app/services/work.service';
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
  works: Work[];
  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getWorks().subscribe((result) => {
      this.works = result;
    });
  }

}
