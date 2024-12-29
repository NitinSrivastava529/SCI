import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ITourInfo } from '../../model/tour-info';
import { TourService } from '../../core/service/tour.service';

@Component({
  selector: 'app-tour-info',
  standalone: true,
  imports: [],
  templateUrl: './tour-info.component.html',
  styleUrl: './tour-info.component.css'
})
export class TourInfoComponent implements OnInit {
  loading=signal('')
 tourInfo: ITourInfo[] = [];
  _global = inject(GlobalService)
  constructor( private tourService: TourService){}
  ngOnInit(): void {
    this.getAllTours()
  }
  getAllTours() {
    this.loading.set('loading data..')
    this.tourService.getAllTours().snapshotChanges().subscribe({
      next: (data) => {
        this.tourInfo = [];
        data.forEach(item => {
          let tour = item.payload.toJSON() as ITourInfo;
          this.tourInfo.push({
            key: item.key || '',
            title: tour.title,
            college: tour.college,
            location: tour.location,
            year: tour.year,
            image: tour.image
          })
        })        
        this.loading.set('')
        this._global.loadScript() 
      }
    })
  }
}
