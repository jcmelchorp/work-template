import { WorkService } from 'src/app/services/work.service';
import { Work } from './../../models/work.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-work-home',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  works: Work[];
  constructor(
    private workService: WorkService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.workService.getWorks().subscribe((result) => {
      this.works = result;
    });
  }

  deleteWork(workId: string) {
    this.workService
      .deleteWork(workId)
      .subscribe((data) => this.router.navigate(['/']));
  }
}
