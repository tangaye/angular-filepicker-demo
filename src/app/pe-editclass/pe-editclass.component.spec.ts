import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeEditclassComponent } from './pe-editclass.component';

describe('PeEditclassComponent', () => {
  let component: PeEditclassComponent;
  let fixture: ComponentFixture<PeEditclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeEditclassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeEditclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
