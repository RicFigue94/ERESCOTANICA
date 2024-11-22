import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlantsComponent } from './register-plants.component';

describe('RegisterPlantsComponent', () => {
  let component: RegisterPlantsComponent;
  let fixture: ComponentFixture<RegisterPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPlantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
