import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { FormService } from 'src/app/form.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  forms: Form[];

  reservation: Observable<any[]>;

  

  constructor(db: AngularFirestore, private servi: FormService) {
    this.reservation = db.collection('reservation').valueChanges();
  }
  ngOnInit() {
    this.servi.getItems().subscribe(items => {
      console.log(items);
      this.forms = items;
    })
  }


}
