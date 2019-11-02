import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormBuilder } from '@angular/forms';
import { Movie } from '../models/movie'
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculaComponent } from '../pelicula/pelicula.component';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  form: FormGroup; 

  name;
  lastname;
  cedula;
  seats;
  Id;
  movie;
  email;
  
  id;
  pelicula;

  constructor(private _route: ActivatedRoute, private service: MoviesService, private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.pelicula = this.service.peliculas.find(y=>{
      return y.Id === this.id;
    })
  }

  morision(){

    this.name = (document.getElementById('name') as HTMLInputElement).value;   
    this.lastname = (document.getElementById('lastname') as HTMLInputElement).value;
    this.cedula = (document.getElementById('cedula') as HTMLInputElement).value; 
    this.seats = (document.getElementById('seats') as HTMLInputElement).value;  
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    const movie = {name:this.name, lastname: this.lastname , cedula: this.cedula, seats: this.seats, email: this.email};
    this.service.addOrder(movie);
    
  }

}
