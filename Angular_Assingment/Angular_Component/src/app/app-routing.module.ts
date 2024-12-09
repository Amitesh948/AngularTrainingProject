import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo: ''
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', component: MainComponent
      },
      {
        path: 'left_sidebar', component: LeftSidebarComponent
      },
      {
        path: 'right_sidebar', component: RightSidebarComponent
      },
    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
    path: '**', component: NotFoundComponent //wildcard route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
