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

    headers.append('authorization', 'Bearer BQBEj-aBFDCXjjPkwYLtkbSDs2mFrLEKHBuyxbAVI5v6-dILekndOE3n8VzLJ9ru46rhF7uzFJVO3y1x6bFMNQ');
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
              .map( res => {
                this.artistas = res.json().artists.items;
              })


  }

  getArtista(id: string ){
    let headers = new Headers();

    headers.append('authorization', 'Bearer BQBEj-aBFDCXjjPkwYLtkbSDs2mFrLEKHBuyxbAVI5v6-dILekndOE3n8VzLJ9ru46rhF7uzFJVO3y1x6bFMNQ');

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
              .map( res => {
                return res.json();
              })
  }

  getTop(id: string ){
    let headers = new Headers();

    headers.append('authorization', 'Bearer BQBEj-aBFDCXjjPkwYLtkbSDs2mFrLEKHBuyxbAVI5v6-dILekndOE3n8VzLJ9ru46rhF7uzFJVO3y1x6bFMNQ');
    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
              .map( res => {
                console.log(res.json().tracks);
                return res.json().tracks;
              })


  }


}
