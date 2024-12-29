import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.css'
})
export class WhyChooseComponent implements OnInit {
  _global = inject(GlobalService)
  ngOnInit(): void {
    this._global.loadScript()
  }
}