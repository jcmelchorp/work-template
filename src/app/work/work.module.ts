import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkService } from './services/work.service';
import { WorkConfirmComponent } from './components/work-confirm/work-confirm.component';
import { WorksListComponent } from './components/works-list/works-list.component';
import { WorkComponent } from './components/work/work.component';
import { WorksComponent } from './components/works/works.component';

import { StoreModule } from '@ngrx/store';
import { workReducer } from './store/work.reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { WorkEffect } from './store/work.effects';
import { MaterialModule } from '../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    WorkConfirmComponent,
    WorksListComponent,
    WorksComponent,
    WorkComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    StoreModule.forFeature('works', workReducer),
    EffectsModule.forFeature([WorkEffect])
  ],
  providers: [WorkService]
})
export class WorkModule { }
