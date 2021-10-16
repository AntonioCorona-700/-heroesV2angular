import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelService } from 'src/app/services/marvel.service';
@Component({
    
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(public marvelService: MarvelService) { }

    ngOnInit(): void {
        this.marvelService
        .getCharacters()
        .subscribe(heroes => this.heroes = heroes);
    }

}
