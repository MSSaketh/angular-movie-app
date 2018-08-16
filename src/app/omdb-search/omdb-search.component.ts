import { Component, OnInit } from '@angular/core';
import { OmdbSearchService } from '../omdb-search.service';

@Component({
  selector: 'app-omdb-search',
  templateUrl: './omdb-search.component.html',
  styleUrls: ['./omdb-search.component.css']
})
export class OmdbSearchComponent implements OnInit {

  title: String;
  result = [];
  searchMovie(title: string) {
    this.omdbService.searchMovieByTitle(title)
    .subscribe((result) => {
      this.result = result;
      console.log(result);
    });

  }

  constructor(private omdbService: OmdbSearchService) { }

  ngOnInit() {
  }

}
