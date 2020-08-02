import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { transition, trigger, state, style, animate } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor(private dataService: DataService) { }

  model = new Email('','','')
  submit: boolean = false;

  ngOnInit(): void {
  }
  onSubmit(emailForm: NgForm){
    this.submit = true;
    console.log("submit state:",this.submit, "Form valid state:",emailForm.valid);
    this.dataService.postEmailForm(this.model).subscribe(
      result => console.log("success:",result, this.model),
      error => console.log("error",error, this.model)
    )
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }


}
