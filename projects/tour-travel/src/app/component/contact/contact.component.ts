import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {    
  _global = inject(GlobalService)
  ngOnInit(): void {
    this._global.loadScript()
  }
}
