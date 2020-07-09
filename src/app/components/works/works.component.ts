import { WorkService } from 'src/app/services/work.service';
import { Work } from './../../models/work.model';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-work-home',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  @Output() id: number;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  works: Work[];
  constructor(private workService: WorkService, private router: Router) {}

  ngOnInit(): void {
    this.getWorks();
  }

  getWorks() {
    this.workService.getWorks().subscribe((result) => {
      this.works = result;
    });
  }

  deleteWork(workId: string) {
    this.workService.deleteWork(workId).subscribe((result) => {
      if (result) {
        this.getWorks();
      }
    });
  }
}
