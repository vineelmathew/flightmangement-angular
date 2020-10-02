import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddflightscheduleComponent } from './addflightschedule/addflightschedule.component';
const routes: Routes = [
  {
    path:"app-addflightschedule",
    component:AddflightscheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
