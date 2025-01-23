import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-our-client',
  standalone: true,
  imports: [],
  templateUrl: './our-client.component.html',
  styleUrl: './our-client.component.css'
})
export class OurClientComponent implements OnInit {
  _config=inject(ConfigService)
  ngOnInit(): void {
    this._config.loadScript()
  }
}