import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TourService } from '../../core/service/tour.service';
import { ITourInfo } from '../../model/tour-info';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-upload-tours',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './upload-tours.component.html',
  styleUrl: './upload-tours.component.css'
})
export class UploadToursComponent implements OnInit {
  loading=signal('')
  sourceImage:any;
  tours: ITourInfo[] = [];
  tourForm!: FormGroup;
    _global = inject(GlobalService)
  constructor(private fb: FormBuilder, private tourService: TourService) {
    this.tourForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      college: new FormControl('', [Validators.required]),
      location: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      image: new FormControl("",[Validators.required])
    })
  }
  ngOnInit(): void {
    this.getAllTours();
  }
  handleUpload(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.tourForm.controls['image'].setValue(reader.result);                             
      };
    }
  }
  remove(key:string){
    if(confirm('are you sure?')){
      this.tourService.deleteTour(key);
      this.tourService.getAllTours();
    }   
  }
  getAllTours() {
    this.loading.set('Loading Data..')
    this.tourService.getAllTours().snapshotChanges().subscribe({
      next: (data) => {
        this.tours = [];
        data.forEach(item => {
          let tour = item.payload.toJSON() as ITourInfo;
          this.tours.push({
            key: item.key || '',
            title: tour.title,
            college: tour.college,
            location: tour.location,
            year: tour.year,
            image: tour.image
          })
        })
        this._global.loadScript()
        this.loading.set('')
      }
    })
  }
  onSubmit() {      
    if (this.tourForm.valid) {      
      this.tourService.addTour(this.tourForm.value);
      this.getAllTours();
      this.tourForm.reset();
    }
    else {
      this.tourForm.markAllAsTouched();
    }
  }
}
