import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorksComponent } from './components/works/works.component';
import { WorkComponent } from './components/work/work.component';

import { WorkService } from './services/work.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkConfirmComponent } from './components/work-confirm/work-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    WorkComponent,
    WorkConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
