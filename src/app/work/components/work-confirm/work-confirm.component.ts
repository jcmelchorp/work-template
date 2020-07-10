import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Work } from '../../models/work.model';

@Component({
  selector: 'app-work-confirm',
  templateUrl: './work-confirm.component.html',
  styleUrls: ['./work-confirm.component.scss']
})
export class WorkConfirmComponent implements OnInit {
  confirmation: Subject<boolean> = new Subject();
  constructor(
    public dialogRef: MatDialogRef<WorkConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Work
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirm() {
    this.confirmation.next(true);
    this.dialogRef.close();
  }
}
