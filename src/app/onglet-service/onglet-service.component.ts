import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FormulaireService } from '../model/formulaireService.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-onglet-service',
  templateUrl: './onglet-service.component.html',
  styleUrls: ['./onglet-service.component.css'],
})
export class OngletServiceComponent implements OnInit {
  newFormulaire = new FormulaireService();
  message: string;

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
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
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      societe: [''],
      nsiret: [''],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      objet: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      this.createformulaire();
    }
  }

  createformulaire() {
    const body = JSON.stringify(this.newFormulaire);
    this.http
      .post('http://localhost:8080/formation/formulaire/service', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((response) => {
        console.log('Formulaire envoyé ');
        this.message =
          'Message envoyé - Un conseiller vous recontactera au plus vite ! ' +
          this.newFormulaire.title +
          ' ' +
          this.newFormulaire.nom;
      });
  }
}
