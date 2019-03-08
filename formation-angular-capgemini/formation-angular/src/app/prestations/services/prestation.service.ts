import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestation } from './../../shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private pCollection$: Observable<Prestation[]>;
  // private URL = environment.URL_API;
  presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
    ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // map(tab => tab.map(obj => new Prestation(obj)))
      map((tab) => {
        this.presta$.next(new Prestation(tab[0]));
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
    // Exemple http
    /*this.collection$ = this.http<Prestation[]>.get(`${URL}prestations`).pipe(
      map(tab => tab.map(obj => new Prestation(obj)))
    );*/
  }

  get collection$(): Observable<Prestation[]> {
    return this.pCollection$;
  }

  set collection$(col: Observable<Prestation[]>) {
    this.pCollection$ = col;
  }

  update(item: Prestation): Promise<any> {
    const presta = {...item};
    return this.itemsCollection.doc(item.id).update(presta)
      .catch(error => console.log(error));
    // Exemple http
    /* return this.http.patch(`${URL}prestations`, presta) */
    }

  add(item: Prestation): Promise<any> {
    item.id = this.afs.createId();
    return this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
    // Exemple http
    /* return this.http.post(`${URL}prestations`, presta) */
  }

  delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
    // Exemple http
    /* return this.http.delete(`${URL}prestations/${item.id}`) */
  }

  getItem(id: string): Observable<Prestation> {
    const item = this.afs.doc<Prestation>(`prestations/${id}`).valueChanges();
    return item;
    // Exemple http
    /* return this.http<Prestation[]>.get(`${URL}prestations/${item.id}`) */
  }
}
