import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkConfirmComponent } from './work-confirm.component';

describe('WorkConfirmComponent', () => {
  let component: WorkConfirmComponent;
  let fixture: ComponentFixture<WorkConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
