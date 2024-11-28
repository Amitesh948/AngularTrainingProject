import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HighlightComponent } from './highlight/highlight.component';
import { GiganticHeadingComponent } from './gigantic-heading/gigantic-heading.component';
import { PostsComponent } from './posts/posts.component';
import { CtaComponent } from './cta/cta.component';

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
    CtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
