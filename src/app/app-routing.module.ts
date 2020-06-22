import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitterComponent } from './gitter/gitter.component';
import { ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'gitter', component: GitterComponent },
  { path: '', component: GitterComponent },
  { path: 'repos', component: ReposComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: './gitter', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
