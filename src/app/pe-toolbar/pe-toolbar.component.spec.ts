import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeToolbarComponent } from './pe-toolbar.component';

describe('PeToolbarComponent', () => {
  let component: PeToolbarComponent;
  let fixture: ComponentFixture<PeToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
