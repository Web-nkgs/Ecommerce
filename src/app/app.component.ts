import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-angular-app';

  constructor(private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    this.firestore.collection('test').snapshotChanges().subscribe((people) => {
      console.log(people.map( x => x.payload.doc.data()));
    })
  }

}
