import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitterComponent } from './gitter/gitter.component';
import { ReposComponent } from './repos/repos.component';


const routes: Routes = [
  {path: 'gitter', component: GitterComponent},
  {path: 'repos', component: ReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
