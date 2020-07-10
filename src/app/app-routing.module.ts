import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/components/work/work.component';
import { WorksComponent } from './work/components/works/works.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./work/work.module').then(m => m.WorkModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
