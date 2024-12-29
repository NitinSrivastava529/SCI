import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ITourInfo } from '../../model/tour-info';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private dbPath = "/tours";
  toursRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.toursRef = db.list(this.dbPath);
  }
  getAllTours() {
    return this.toursRef;
  }
  getTours(key: string) {
    return this.db.object(`${this.dbPath}/${key}`);
  }
  addTour(tour: ITourInfo) {
    this.toursRef.push(tour);
  }
  updateTour(key: string, tour: ITourInfo) {
    this.toursRef.update(key, tour);
  }
  deleteTour(key: string) {
    this.toursRef.remove(key);
  }
}
