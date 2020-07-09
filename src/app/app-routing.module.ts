import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './components/works/works.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: '', component: WorksComponent
  },
  { path: 'work', component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
