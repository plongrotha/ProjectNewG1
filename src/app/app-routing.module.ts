import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Serivce } from './service/service.component';
// import { Home } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'service',
    component: Serivce,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
