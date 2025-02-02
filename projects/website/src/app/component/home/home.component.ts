import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  clientList:any=[
    {name:'Sri Ramdham Uni.',logo:'1 (1).jpg'},    
    {name:'Sunrise Vidyapith',logo:'1 (1).png'},    
    {name:'S.R. Public School',logo:'1 (2).jpg'},    
    {name:'Sri Maa Sharda',logo:'1 (2).png'},    
    {name:'I.P.S. Gwalior',logo:'1 (3).JPG'},    
    {name:'School Name',logo:'1 (3).png'},    
    {name:'Sunrise Public School',logo:'1 (4).jpg'},    
    {name:'D.S. School',logo:'1 (5).jpg'},    
    {name:'Kanha Diagnostic Centre',logo:'1 (6).jpg'},    
    {name:'School Name',logo:'1 (7).jpg'},    
    {name:'School Name',logo:'1 (8).jpg'},    
    {name:'School Name',logo:'1 (9).jpg'},    
    {name:'School Name',logo:'1 (10).jpg'},    
    {name:'School Name',logo:'1 (11).jpg'}    
  ];
  _config=inject(ConfigService)
  constructor(){   
  }
  ngOnInit(): void {
    this._config.loadScript()
  }
}
