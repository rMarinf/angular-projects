import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  public artistas: any[] = [];
  public artista: any;
  public topTracks: any[] = [];

  private urlSpotify = 'https://api.spotify.com/v1/';
  private token = 'BQC-4jtz2W7qJTIJVk1UJKzf229-iJKBPATF3ib_zB998plRE-WfpGwtbbZY7j2I9TGdfO_9zmX2yBoVr-M';

  constructor(public http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
  }

  getArtistas(termino: string) {
    const url = `${this.urlSpotify}search?q=${termino}&type=artist`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((response: any ) => {
        this.artistas = response.artists.items;
        return this.artistas;
      });
  }

  getArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((response: any ) => {
        this.artista = response;
        return this.artista;
      });
  }

  getTopTracksArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((response: any ) => {
        this.topTracks = response.tracks;
        return this.topTracks;
      });
  }
}
