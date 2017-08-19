import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any [] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor(private http: Http) { }

  getArtistas( termino: string ){
    let headers = new Headers();

    headers.append('authorization', 'Bearer BQBh4460Kpg4ihXKi-0nWLMHqHyJjIAB76PZXx0cANpyJQzBmCdi2YrQ6b64-WuIZXsVpaL5ElgjbLlsdoaYQQ');
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
              .map( res => {
                this.artistas = res.json().artists.items;
              })


  }

  getArtista(id: string ){
    let headers = new Headers();

    headers.append('authorization', 'Bearer BQBh4460Kpg4ihXKi-0nWLMHqHyJjIAB76PZXx0cANpyJQzBmCdi2YrQ6b64-WuIZXsVpaL5ElgjbLlsdoaYQQ');

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
              .map( res => {
                return res.json();
              })
  }

  getTop(id: string ){
    let headers = new Headers();

    headers.append('authorization', 'Bearer BQBh4460Kpg4ihXKi-0nWLMHqHyJjIAB76PZXx0cANpyJQzBmCdi2YrQ6b64-WuIZXsVpaL5ElgjbLlsdoaYQQ');
    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
              .map( res => {
                console.log(res.json().tracks);
                return res.json().tracks;
              })


  }


}
