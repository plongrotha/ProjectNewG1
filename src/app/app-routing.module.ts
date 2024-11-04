import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Service } from './service/service.component';
import { Home } from './home/home.component';
import { Admin } from './admin/admin.component';
import { Link } from './link/link.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'service',
    component: Service,
  },
  {
    path: 'Admin',
    component: Admin,
  },

  {
    path: 'link',
    component: Link,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
