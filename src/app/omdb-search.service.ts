import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbSearchService {
  searchMovieByTitle(title: string) {
    const _url = 'http://www.omdbapi.com/?s=' + title + '&apikey=d91b55c7';
    return this.http.get(_url).pipe(map((response: Response) => {
      return response.json();
    }));
  }

  constructor(private http: Http) {}
}
