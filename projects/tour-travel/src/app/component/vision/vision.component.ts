import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent  implements OnInit {    
  _global = inject(GlobalService)
  ngOnInit(): void {
    this._global.loadScript()
  }
}