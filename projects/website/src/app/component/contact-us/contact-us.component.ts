import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  shareContent: string = '';
  obj: any = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
    message: ''
  };
  ngOnInit(): void {
    
  }
  onChnage(){
    this.shareContent='*-----Enquiry From Website ----*'+
    '%0a *Name :* '+this.obj.fName+' '+this.obj.lName+
    '%0a *Email :* '+this.obj.email+
    '%0a *Phone :* '+this.obj.phone+
    '%0a *Message :* '+this.obj.message;
  }
}
