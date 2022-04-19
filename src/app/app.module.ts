import { LinkPipe } from './pipe/link.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DetailsComponent } from './pages/characters/details/details.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HeaderComponent } from './pages/header/header.component';
import { CastComponent } from './pages/cast/cast.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ButtonComponent } from './pages/home/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    DetailsComponent,
    EpisodesComponent,
    HeaderComponent,
    CastComponent,
    LinkPipe,
    HomeComponent,
    FooterComponent,
    
    ButtonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
