import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Work } from 'src/app/models/work.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workForm: FormGroup;
  newWork: Work;
  constructor(
    private workService: WorkService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.workForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
    });
  }

  createWork() {
    if (!this.workForm.invalid) {
      console.log(this.workForm.value);
      this.workService.addWork(this.workForm.value).subscribe((data) => {
        console.log('POST Request is successful ', data);
        this.router.navigate(['/']);

      }, error => {
        console.log('Error', error);
      });

    }
  }
}