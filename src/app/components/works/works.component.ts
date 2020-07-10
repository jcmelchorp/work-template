import { WorkConfirmComponent } from './../work-confirm/work-confirm.component';
import { WorkService } from 'src/app/services/work.service';
import { Work } from './../../models/work.model';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-work-home',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  @Output() id: number;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  works: Work[];
  work: Work;
  constructor(
    private workService: WorkService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getWorks();
  }

  getWorks() {
    this.workService.getWorks().subscribe((result) => {
      this.works = result;
    });
  }

  /* softDeleteWork(workId: number) {

  } */

  deleteWork(workId: number) {
    this.workService.deleteWork(workId).subscribe((result) => {
      this.getWorks();
    });
  }

  deleteDialog(itemId: number) {
    this.workService.getWorkById(itemId).subscribe((data) => {
      console.log(data);
      this.work = data;
      console.log(this.work);

      const dialogRef = this.dialog.open(WorkConfirmComponent, {
        width: '300px',
        data: this.work
      });
      dialogRef.afterClosed().subscribe(data => {
        this.deleteWork(itemId);
        //this.softDeleteWork(itemId)
      });
    });
  }
}
