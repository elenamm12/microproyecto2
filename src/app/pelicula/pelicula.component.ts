import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie'
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  id;
  movie;

  constructor(private _route: ActivatedRoute, private service: MoviesService) { 
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.movie = this.service.peliculas.find(x=>{
      return x.Id === this.id;
    })
  }

}
