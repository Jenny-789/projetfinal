import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletServiceComponent } from './onglet-service.component';

describe('OngletServiceComponent', () => {
  let component: OngletServiceComponent;
  let fixture: ComponentFixture<OngletServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
