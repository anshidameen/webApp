import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonserviceComponent } from './salonservice.component';

describe('SalonserviceComponent', () => {
  let component: SalonserviceComponent;
  let fixture: ComponentFixture<SalonserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
