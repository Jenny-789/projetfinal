import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationcommandeComponent } from './validationcommande.component';

describe('ValidationcommandeComponent', () => {
  let component: ValidationcommandeComponent;
  let fixture: ComponentFixture<ValidationcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationcommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
