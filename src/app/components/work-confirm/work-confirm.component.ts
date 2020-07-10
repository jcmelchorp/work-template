import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Work } from 'src/app/models/work.model';

@Component({
  selector: 'app-work-confirm',
  templateUrl: './work-confirm.component.html',
  styleUrls: ['./work-confirm.component.scss']
})
export class WorkConfirmComponent implements OnInit {

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
    this.data.isActive = false;
    this.dialogRef.close();
  }
}
