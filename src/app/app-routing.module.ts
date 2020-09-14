import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelterComponent } from './shelter/shelter.component';


const routes: Routes = [
  {
    path: '',
    component: ShelterComponent,
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
