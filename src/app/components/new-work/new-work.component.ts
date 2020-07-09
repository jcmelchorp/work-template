import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Work } from 'src/app/models/work.model';


@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.scss']
})
export class NewWorkComponent implements OnInit {
  workForm: FormGroup;
  newWork: Work;
  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workForm = new FormGroup({
      key: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
    });
  }

  createWork() {
    if (!this.workForm.invalid) {
      console.log(this.workForm.value);
      this.workService.addWork(this.workForm.value);

    }
  }


}
