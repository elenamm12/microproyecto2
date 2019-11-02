import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  reservation: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.reservation = db.collection('reservation').valueChanges();
  }
  ngOnInit() {
  }

}
