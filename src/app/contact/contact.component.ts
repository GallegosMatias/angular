import { Component, OnInit } from '@angular/core';
import { UserContact } from '../models/usercontact';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public user: UserContact;

  constructor() {
    this.user = new UserContact('', '', '', '')
    }

  ngOnInit(){
  }

  onSubmit(form){
    console.log("Evento submit lanzado");
    console.log(this.user);
    form.reset();
  }

}
