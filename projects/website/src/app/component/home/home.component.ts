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
    {name:'DISHA DARSHAN SCHOOL',logo:'DISHA DARSHAN SCHOOL.jpg'},    
    {name:'I.P.S GROUP OF SCHOOL',logo:'I.P.S GROUP OF SCHOOL.jpg'},         
    {name:'OCEAN PUBLIC SCHOOL',logo:'OCEAN PUBLIC SCHOOL.jpg'},         
    {name:'Pt.G.P.NAYAK GIRLS INTER COLLEGE',logo:'Pt.G.P.NAYAK GIRLS INTER COLLEGE.jpg'},         
    {name:'R.J.L.P. SCHOOL',logo:'R.J.L.P.SCHOOL.jpg'},         
    {name:'S.G.M.PUBLIC SCHOOL',logo:'S.G.M.PUBLIC SCHOOL.jpg'},         
    {name:'S.R.PUBLIC SCHOOL',logo:'S.R.PUBLIC SCHOOL.jpg'},         
    {name:'S.V.I. ACADEMY',logo:'S.V.I. ACADEMY.jpg'},         
    {name:'ST.XAVIERS SCHOOL',logo:'ST.XAVIERS SCHOOL.jpg'},         
    {name:'SUNRISE PUBLIC SCHOOL',logo:'SUNRISE PUBLIC SCHOOL.jpg'},         
    {name:'SUNRISE VIDHYAPEETH',logo:'SUNRISE VIDHYAPEETH.jpg'},         
    {name:'THAKUR MAHENDRA SCHOOL',logo:'THAKUR MAHENDRA SCHOOL.jpg'}         
  ];
  _config=inject(ConfigService)
  constructor(){   
  }
  ngOnInit(): void {
    this._config.loadScript()
  }
}
