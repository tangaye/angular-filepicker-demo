import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeProfileWidgetComponent } from './pe-profile-widget.component';

describe('PeProfileWidgetComponent', () => {
  let component: PeProfileWidgetComponent;
  let fixture: ComponentFixture<PeProfileWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeProfileWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
