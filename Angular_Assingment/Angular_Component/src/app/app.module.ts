import { Component, Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { GiganticHeadingComponent } from './components/gigantic-heading/gigantic-heading.component';
import { PostsComponent } from './posts/posts.component';
import { CtaComponent } from './components/cta/cta.component';
import { ColElDirective } from './col-el.directive';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsModule } from '@angular/forms';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NoSidebarComponent } from './no-sidebar/no-sidebar.component';
import { TwoSidebarComponent } from './two-sidebar/two-sidebar.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadComponent } from './components/head/head.component';
import { BanComponent } from './ban/ban.component';
import { HighComponent } from './components/high/high.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BannerComponent,
    HighlightComponent,
    GiganticHeadingComponent,
    PostsComponent,
    CtaComponent,
    ColElDirective,
    DirectivesComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    NoSidebarComponent,
    TwoSidebarComponent,
    LoginComponent,
    HeadComponent,
    BanComponent,
    HighComponent,
    TwoWayBindingComponent,
    SignUpComponent,
    LayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
