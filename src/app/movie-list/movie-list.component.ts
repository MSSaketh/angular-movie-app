import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList = [];
  deleteList;
  constructor(private movieService: SearchService) {}

  onWorking(id: number) {
    this.movieService
      .deleteMovie(id)
      .subscribe(data => (this.deleteList = data));
    console.log(this.deleteList);
    return this.deleteList;
  }

  ngOnInit() {
    this.movieService
      .getWhishList()
      .subscribe(fullList => (this.movieList = fullList));
  }
}
