import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  _config=inject(ConfigService)
  constructor(){   
  }
  ngOnInit(): void {
    this._config.loadScript()
  }
}
