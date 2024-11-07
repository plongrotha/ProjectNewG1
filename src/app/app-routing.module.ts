import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Service } from './service/service.component';
import { Home } from './home/home.component';
import { Admin } from './admin/admin.component';
import { Link } from './link/link.component';
import { Temclose } from './Temclose/temclose.component';
import { Edit } from './admin/Edit/edit.cmponent';
import { addimg } from './addimg/addimg.coponent';

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
  {
    path: 'tem',
    component: Temclose,
  },
  {
    path: 'edit',
    component: Edit,
  },
  {
    path: 'addimg',
    component:addimg
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
