import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      title: 'Kioko Realty LLC'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
