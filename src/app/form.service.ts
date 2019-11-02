import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Form } from './models/form';
import { FormsModule } from "@angular/forms";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  itemsCollection: AngularFirestoreCollection<Form>;
  items: Observable<Form[]>;

  formData: Form;

  constructor(private servidorsito: AngularFirestore) { 
    this.items = this.servidorsito.collection<Form>('form').valueChanges();

  }

  getItems(){
    return this.items;
  }

  
}
