import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
              ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

  getImgCasa(casa: string): string {
    if (casa === 'DC') {
      return '/assets/img/dc-logo.jpeg';
    } else {
      return '/assets/img/marvel-logo.png';
    }
  }
}
