import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as workActions from "../../store/work.actions";
import { MatDialog } from '@angular/material/dialog';
import { WorkConfirmComponent } from '../work-confirm/work-confirm.component';
import { Work } from '../../models/work.model';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksListComponent implements OnInit {
  @Output() workSelected = new EventEmitter<Work>();
  displayedColumns: string[] = ['id', 'name', 'actions'];
  works: Work[];
  work: Work;

  constructor(
    private store: Store<any>,
    public dialog: MatDialog,
    private workService: WorkService) { }
  ngOnInit(): void {
    this.store.dispatch(new workActions.LoadWorks());
    this.store.subscribe((state) => { this.works = state.works.works; });
    this.getWorks();
  }

  onWorkSelected(work: Work): void {
    this.workSelected.emit(work);
  }

  getWorks(): void {
    this.workService.getWorks().subscribe((result) => {
      this.works = result;
    });
  }
  deleteWork(workId: number): void {
    this.workService.deleteWork(workId).subscribe((result) => {
      this.getWorks();
    });
  }
  deleteDialog(itemId: number): void {
    this.workService.getWorkById(itemId).subscribe((data) => {
      console.log(data);
      this.work = data;
      console.log(this.work);

      const dialogRef = this.dialog.open(WorkConfirmComponent, {
        width: '300px',
        data: this.work
      });
      dialogRef.componentInstance.confirmation.subscribe((confirmation: boolean) => {
        if (confirmation) {
          this.deleteWork(itemId);
        }
      });
    });
  }
}
