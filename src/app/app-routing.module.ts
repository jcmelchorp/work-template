import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './components/works/works.component';
import { NewWorkComponent } from './components/new-work/new-work.component';

const routes: Routes = [
  {
    path: '', component: WorksComponent
  },
  { path: 'work', component: NewWorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
