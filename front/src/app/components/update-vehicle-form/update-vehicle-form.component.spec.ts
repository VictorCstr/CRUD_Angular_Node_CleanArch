import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleFormComponent } from './update-vehicle-form.component';

describe('UpdateVehicleFormComponent', () => {
  let component: UpdateVehicleFormComponent;
  let fixture: ComponentFixture<UpdateVehicleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVehicleFormComponent]
    });
    fixture = TestBed.createComponent(UpdateVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
