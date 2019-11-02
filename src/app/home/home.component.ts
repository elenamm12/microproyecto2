import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  constructor(private moviesService : MoviesService) { 
    this.movies = this.moviesService.getPeliculas();
  }

  ngOnInit() {
  }

}
