import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './components/works/works.component';

const workRoutes: Routes = [
  { path: 'works', component: WorksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(workRoutes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
