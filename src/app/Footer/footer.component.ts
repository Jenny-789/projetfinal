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
  // email : String; 
  // submitted = false;

  // news: FormGroup = new FormGroup({
  //   email: new FormControl(''),
  
  // });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.news = this.formBuilder.group(
    //   {
    //     email: [''],
      
    //   });
  }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.news.controls;
  //}
  // onSubmit(): void {
  //   this.submitted = true;
  //   if (this.email == null) {
  //     return;
  //   } else {
  //     this.newslettersave();
  //   }
  // }

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
