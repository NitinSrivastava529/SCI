import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  _config=inject(ConfigService)
  constructor(){
     this._config.loadScript()
  }
  ngOnInit(): void {
    this._config.loadScript()
  }
}
