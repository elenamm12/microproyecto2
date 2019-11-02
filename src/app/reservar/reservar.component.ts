import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormBuilder } from '@angular/forms';
import { Movie } from '../models/movie'
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { PeliculaComponent } from '../pelicula/pelicula.component';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  form: FormGroup; 

  
  id;
  pelicula;

  constructor(private _route: ActivatedRoute, private service: MoviesService, private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.pelicula = this.service.peliculas.find(y=>{
      return y.Id === this.id;
    })

    this.form = this.fb.group({
      name : '',
      lastname : '',
      cedula : '',
      email : '',
      cant: '',
    })
  }

}
