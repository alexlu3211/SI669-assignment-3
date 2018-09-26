import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


	heroes: Hero[];
	selectedHero: Hero;
	orderedById: boolean = true;

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => {
				this.heroes = heroes;
			})
	}

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

	orderById(){
		this.orderedById = true;
		this.heroes.sort(function(a, b){
			if (a.id < b.id) return -1;
			if (a.id > b.id) return 1;
			return 0
		})

	}

	orderAlpha(){
		this.orderedById = false;
		this.heroes.sort(function(a, b){
			return a.name.localeCompare(b.name)
		})
	}

}
