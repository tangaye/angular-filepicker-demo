import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEvalOverviewComponent } from './section-eval-overview.component';

describe('SectionEvalOverviewComponent', () => {
  let component: SectionEvalOverviewComponent;
  let fixture: ComponentFixture<SectionEvalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionEvalOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionEvalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
