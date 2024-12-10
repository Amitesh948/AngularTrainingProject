import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { SliderComponent } from './components/slider/slider.component';
import { ShopComponent } from './components/shop/shop.component';
import { SavingComponent } from './components/saving/saving.component';
import { WhyComponent } from './components/why/why.component';
import { GiftComponent } from './components/gift/gift.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientComponent } from './components/client/client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SliderComponent,
    ShopComponent,
    SavingComponent,
    WhyComponent,
    GiftComponent,
    ContactComponent,
    ClientComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
