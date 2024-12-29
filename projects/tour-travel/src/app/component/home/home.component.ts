import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RouterLink } from '@angular/router';
import { ITourInfo } from '../../model/tour-info';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TourService } from '../../core/service/tour.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  tourInfo: ITourInfo[] = [];
  _global = inject(GlobalService)
  constructor( private tourService: TourService){}
  ngOnInit(): void {
    this.getAllTours();
  }
  getAllTours() {
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
        this._global.loadScript() 
      }
    })
  }
}
