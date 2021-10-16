import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';//no
import { MarvelService } from './services/marvel.service';//no
import { AuthService } from './services/auth/auth.service';//no
import { PipeExPipe } from './pipes/pipe-ex.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';//no
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PagenotfoundComponent,
    HeroCardComponent,
    HeroDetailComponent,
    PipeExPipe,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [MarvelService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
