ng new HeroesV2
ng serve -o
ng g c pages/heroes
ng generate module app-routing --flat --module=app
ng g c shared/pagenotfound

en app component html

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes:Routes=[
  { path: 'heroes', component: HeroesComponent },
 // { path: 'hero/:id', component: HeroDetailsComponent },
  { path: '404', component: PagenotfoundComponent},
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }


<h1 >{{title}}</h1><!--vime limpiar variavblews de ts-->
<router-outlet></router-outlet>
<!--<app-heroes></app-heroes>-->
en index:
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">

ng add @angular/material

import{MatCardModule} from '@angular/material/card';//en app module.ts y en imports agrega MatCardModule
import { MatButtonModule } from '@angular/material/button'; igual

mat-app-background en index

"use directo scss"
ng add schematic-scss-migrate //ya te pone las oopciones //ng g schematic-scss-migrate:scss.migrate

heroes componetn css:

.example-card{
    max-width: 400px;
}
.example-header-image{
    background-image:url("https://www.nationalgeographic.com.es/medio/2021/09/15/luna-dunes_f0f15bdd_949x533.jpg");
    background-size: cover;
}




ng g c components/hero-card 
mudar de heroes a hero-card

en heroes component
<app-hero-card></app-hero-card>
mudar scss heroes a hero donde esta la carta

en app creo una carpeta que se llama models y dentro un hero.models.ts y pongo

export class Hero {
     id: string = '';
     name: string = '';
    powerstats: PowerStats[] =[];
    image: any = {
         url: ''
     };
     wallet: string = "";
 }
 class PowerStats {
     fly: boolean = false;
 }


en hero card component :

hero :Hero=new Hero; //agrega esto propiedad hero de tipo Hero


en ero card component mat card avatar [ngStyle]="{'background-image': 'url(' + hero.image.url + ')'}" 

agregar en la pagina index  al final antes de "</body>"
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>

los pipes son de cosas opcionales
https://angular.io/guide/pipes

<p>hero-card works!</p>
<div class="col-3 mb-2">
  
    <mat-card class="example-card">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image" [ngStyle]="{'background-image': 'url(' + hero.image.url + ')'}" ></div> <!--esta imagewn estga en scss comento en scss y le pongola cosa-->
          <mat-card-title>{{hero.name |uppercase}}</mat-card-title>
          <!--<mat-card-subtitle>Dog Breed</mat-card-subtitle> como no tengo propiedad subtitulo la quite-->
        </mat-card-header>
        <img mat-card-image src={{hero.image.url}} alt="{{hero.name}}_image">
        <!-- va a otener la info es src={{hero.image.url}}   o    [src]="hero.image.url"-->
        <mat-card-content>
          <p>
            can fly ? {{hero.powerstats[0] ? 'yes': 'no'}}
          </p>

          <p>

            Current wallet: {{hero.wallet |currency}}<!--Pipes esto funciona opcional-->
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
</div>

Carta final segunda sesión

borro el model de hace rato y pongo los que me dijo de marvel en los dos archivos call y hero


proxy.conf.json// en root y agrego:


{
    "/api": {
        "target": "https://gateway.marvel.com/v1/public/",
        "secure": false,
        "pathRewrite": {
            "^/api": ""
        }
    }
}


....



npm install crypto-js
