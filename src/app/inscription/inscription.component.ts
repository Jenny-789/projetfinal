import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import Validation from '../onglet-service/validation';
import { Client } from '../model/client.model';
import { ClientsService } from '../services/clients.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  newClient = new Client();
  message: string;

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    birthday: new FormControl(''),
    adresse: new FormControl(''),
    codepostal: new FormControl(''),
    ville: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  registerForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private http: HttpClient,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        birthday: ['', Validators.required],
        adresse: ['', Validators.required],
        codepostal: ['', Validators.required],
        ville: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  // Evite d'avoir de devoir noter tout le chemin dans le html, à la place j'y met juste f
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  // Inscription
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.create();
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  //Remise à zero
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  create() {
    const body = JSON.stringify(this.newClient);
    this.http
      .post('http://localhost:8080/formation/rest/personnes', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((response) => {
        console.log('Inscription réussi ');
        this._router.navigate(['login']);
      });
  }
}
