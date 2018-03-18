import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {

  public artista: any = '';
  public topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public _spotify: SpotifyService) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params.id )
      .subscribe(id => {
        this._spotify.getArtista(id)
          .subscribe(artista => {
            this.artista = artista;
            console.log(artista);
          });

        this._spotify.getTopTracksArtista(id)
          .subscribe(topTracks => {
            this.topTracks = topTracks;
            console.log(topTracks, '<<< topTracks');
          });
      });
  }

}
