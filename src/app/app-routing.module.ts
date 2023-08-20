import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DetailsComponent } from './page/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full',
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
