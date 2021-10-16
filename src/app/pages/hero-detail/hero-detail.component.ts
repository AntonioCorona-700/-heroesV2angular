import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  thumbnail: string = '';//IMAGEN CHIQUITA    
 heroes: Hero[] = [];
  value=1009149;
    constructor(public marvelService: MarvelService) { }

    ngOnInit(): void {
        this.marvelService
        .getCharacters()
        .subscribe(heroes => this.heroes = heroes);

        //this.marvelService.getCharacterById(1011266)
     // console.log( "sss",this.heroes[3].id,"ee")//,this.marvelService.getCharacterById(1011266).add)
      
    }
}
/*
quiero el hero que tiene por id la id de la url

*/