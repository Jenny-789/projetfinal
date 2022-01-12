import { Component, OnInit } from '@angular/core';
import { Newsletter } from '../model/newsletter.model';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  newsletter = new Newsletter();
  message : String; 
  submitted = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: [''],
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
      this.newslettersave();
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  newslettersave() {
    const body = JSON.stringify(this.newsletter);
    this.http.post("http://localhost:8080/formation/neswletter/email", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    }).subscribe(response => {
      console.log("email enregistré ")
      this.message = "email enregistré " ;
    });

  }

}
