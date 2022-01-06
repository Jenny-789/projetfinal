import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


// import custom validator to validate that password and confirm password fields match

import Validation from './validation';



@Component({
  selector: 'app-onglet-service',
  templateUrl: './onglet-service.component.html',
  styleUrls: ['./onglet-service.component.css']
})
export class OngletServiceComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    civilite: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    societe: new FormControl(''),
    nsiret: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
    objet: new FormControl(''),
    message: new FormControl(''),
  
  });


    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) { }
    ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          civilite: ['', Validators.required],
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          societe: ['', Validators.required],
          nsiret: [''],
          telephone: ['', Validators.required],
         
          
          email: ['', [Validators.required, Validators.email]],
          objet: ['', Validators.required],
          message: ['', Validators.required],
         


        },
        
      );
    }
  
  
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
  
    onSubmit(): void {
      this.submitted = true;
  
      if (this.form.invalid) {
        return;
      }
  
      console.log(JSON.stringify(this.form.value, null, 2));
    }
  
    onReset(): void {
      this.submitted = false;
      this.form.reset();
    }
  }