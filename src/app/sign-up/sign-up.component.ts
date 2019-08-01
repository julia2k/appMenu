import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  userForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb:FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      userFirstName: ['', [Validators.required, 
                           Validators.minLength(3), 
                           Validators.pattern('[a-zA-Z ]*')]],

      userLastName:['', [Validators.required, 
                         Validators.maxLength(20),
                         Validators.pattern('[a-zA-Z ]*')]],

      userEmail: ['', [Validators.required,
                       Validators.email]]
     });
  }
  save(){
    console.log(this.userForm);
  }
}