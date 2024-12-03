import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HighlightComponent } from './highlight/highlight.component';
import { GiganticHeadingComponent } from './gigantic-heading/gigantic-heading.component';
import { PostsComponent } from './posts/posts.component';
import { CtaComponent } from './cta/cta.component';
import { ColElDirective } from './col-el.directive';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NoSidebarComponent } from './no-sidebar/no-sidebar.component';
import { TwoSidebarComponent } from './two-sidebar/two-sidebar.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadComponent } from './head/head.component';
import { BanComponent } from './ban/ban.component';
import { HighComponent } from './high/high.component';


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
    HighComponent
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
