import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { WhyComponent } from './components/why/why.component';
import { ClientComponent } from './components/client/client.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', canActivate:[authGuard] ,component: MainComponent
      },
      {
        path: 'shop', component: ShopComponent
      },
      {
        path: 'why', component: WhyComponent
      },
      {
        path: 'client', component: ClientComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      ]      
  },
  {
    path: 'login', canActivate:[noAuthGuard] ,component: LoginComponent
  },
 
  // {
  //   path: '**', component: MainComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
