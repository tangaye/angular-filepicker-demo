import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeHomeComponent } from './pe-home.component';

describe('PeHomeComponent', () => {
  let component: PeHomeComponent;
  let fixture: ComponentFixture<PeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
