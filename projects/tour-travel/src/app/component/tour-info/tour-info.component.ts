import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { tourInfo } from '../../model/tour-info';

@Component({
  selector: 'app-tour-info',
  standalone: true,
  imports: [],
  templateUrl: './tour-info.component.html',
  styleUrl: './tour-info.component.css'
})
export class TourInfoComponent implements OnInit {
 tourInfo: tourInfo[] = [];
  _global = inject(GlobalService)
  ngOnInit(): void {
    this._global.loadScript()
    this.tourInfo = [
      {
        title: 'Taj Mahal School Tour',
        college:'St. Mary School',
        location: 'Agra, Uttar Pradesh',
        year: '2023',
        image: 'https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
      },
      {
        title: 'The Agra Fort',
        college:'St. Mary School',
        location: 'Agra, Uttar Pradesh',
        year: '2023',
        image: 'https://cdn.britannica.com/37/178637-050-22E50FA5/Jahangirs-Palace-Agra-Fort-India-Uttar-Pradesh.jpg'
      },
      {
        title: 'The Place of Lord Ram',
        college:'St. Mary School',
        location: 'Ayodhya, Uttar Pradesh',
        year: '2024',
        image: 'https://pravase.co.in/admin_pravase/uploads/yatradham/Ayodhya-Birth-Plcae-Lord-Shri-Ram-One-of-Seven-Sacred-City-Hinduism_1645879280.JPG'
      },
      {
        title: 'Mathur Vrindaban',
        college:'St. Mary School',
        location: 'Mathura, Uttar Pradesh',
        year: '2024',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/94/06/caption.jpg'
      },
      {
        title: 'Taj Mahal School Tour',
        college:'St. Mary School',
        location: 'Agra, Uttar Pradesh',
        year: '2023',
        image: 'https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
      },
      {
        title: 'Taj Mahal School Tour',
        college:'St. Mary School',
        location: 'Agra, Uttar Pradesh',
        year: '2023',
        image: 'https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
      },
      {
        title: 'The Agra Fort',
        college:'St. Mary School',
        location: 'Agra, Uttar Pradesh',
        year: '2023',
        image: 'https://cdn.britannica.com/37/178637-050-22E50FA5/Jahangirs-Palace-Agra-Fort-India-Uttar-Pradesh.jpg'
      },
      {
        title: 'The Place of Lord Ram',
        college:'St. Mary School',
        location: 'Ayodhya, Uttar Pradesh',
        year: '2024',
        image: 'https://pravase.co.in/admin_pravase/uploads/yatradham/Ayodhya-Birth-Plcae-Lord-Shri-Ram-One-of-Seven-Sacred-City-Hinduism_1645879280.JPG'
      },
      {
        title: 'Mathur Vrindaban',
        college:'St. Mary School',
        location: 'Mathura, Uttar Pradesh',
        year: '2024',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/94/06/caption.jpg'
      }
    ]
  }
}
