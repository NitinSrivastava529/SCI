import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {    
  _global = inject(GlobalService)
  ngOnInit(): void {
    this._global.loadScript()
  }
}
