import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes:Routes=[
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: '404', component: PagenotfoundComponent},
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
