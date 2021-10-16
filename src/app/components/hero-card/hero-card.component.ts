import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

    @Input('hero') hero: Hero = new Hero;
    thumbnail: string = '';//IMAGEN CHIQUITA    

    constructor() { }

    ngOnInit(): void {
        this.thumbnail = `${this.hero.thumbnail.path}.${this.hero.thumbnail.extension}`//comilla simple
    }

}
