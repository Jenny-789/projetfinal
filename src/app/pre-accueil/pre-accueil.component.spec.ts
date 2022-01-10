import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAccueilComponent } from './pre-accueil.component';

describe('PreAccueilComponent', () => {
  let component: PreAccueilComponent;
  let fixture: ComponentFixture<PreAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
