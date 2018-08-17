import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetails } from './movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // searchMovie(title: String) {
  //     const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=35346456';
  //     return this.http.get(url)
  //                 .map((response: Response) => {
  //                     return response.json();
  //                 });
  //

  constructor(private http: HttpClient) {}
  getMovies(title: string) {
    return fetch(
      'http://www.omdbapi.com/?s=' + title + '&apikey=8f89faaf'
    ).then(response => response.json());
  }
  getWhishList(): Observable<MovieDetails[]> {
    const baseUrl = 'http://localhost:8090/api/v1/movieservice/movies';
    return this.http.get<MovieDetails[]>(baseUrl);
  }

  deleteMovie(id: number) {
    const delurl = 'http://localhost:8090/api/v1/movieservice/delete/' + id;
    console.log(delurl);
    return this.http.delete(delurl).pipe(
      map((response1: Response) => {
        return response1.json();
      })
    );
  }

  addMovie(mve) {
    const addurl = 'http://localhost:8090/api/v1/movieservice/movie';
    console.log(addurl);
    return this.http.post(addurl, mve).pipe(
      map((response2: Response) => {
        return response2.json();
      })
    );
  }
}
