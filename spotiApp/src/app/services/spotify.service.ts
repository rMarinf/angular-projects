import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  public artistas: any[];

  constructor(public http: HttpClient) {
    console.log('Servicio spotify listo');
  }

  getArtistas() {
    const url = 'https://api.spotify.com/v1/search?q=tania%20bowra&type=artist';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBlSVQEoSf5N7HZy-b5dk4JRwsxUGIWTCHtf0Dz_lC1Fa8_YRLniCcXXGPgKdsBd7IBQZJJ1uTELhmDqGA'
    });

    return this.http.get(url, { headers })
      .map((response: any ) => {
        this.artistas = response.artists.items;
        return this.artistas;
      });
  }
}
