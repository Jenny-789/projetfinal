import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  message:String;

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  submitted = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http :HttpClient) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      { nom: ['', Validators.required],
        prenom: ['', Validators.required],
        telephone: ['', Validators.required, Validators.minLength(1), Validators.maxLength(10)],
        message: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) 
      return;
    else
      this.message="Message envoyé"
  }

}
