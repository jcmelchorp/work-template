import { Component, OnInit, Input } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Work } from 'src/app/models/work.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  @Input() work: Work;
  workForm: FormGroup;
  newWork: Work;
  constructor(private workService: WorkService, private router: Router) { }

  ngOnInit(): void {
    this.workForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      isActive: new FormControl('true'),
      created: new FormControl(''),
      modified: new FormControl('')
    });
  }

  updateWork(id: number) {
    this.workService.updateWork(id).subscribe((result) => { });
  }

  createWork() {
    if (!this.workForm.invalid) {
      console.log(this.workForm.value);
      this.workForm.value.created = Date.now().toString();
      this.workService.addWork(this.workForm.value).subscribe(
        (data) => {
          console.log('POST Request is successful ', data);
          this.router.navigate(['/']);
          alert('Work created');
        },
        (error) => {
          console.log('Error', error);
          alert('Error: ' + error);
        }
      );
    }
  }
}
