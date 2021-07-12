import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DllViewComponent} from './dll-view/dll-view.component'
const routes: Routes = [
  {path:'', component:DllViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
