import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralPanelComponent } from './central-panel.component';

describe('CentralPanelComponent', () => {
  let component: CentralPanelComponent;
  let fixture: ComponentFixture<CentralPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
