import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhChartComponent } from './gh-chart.component';

describe('GhChartComponent', () => {
  let component: GhChartComponent;
  let fixture: ComponentFixture<GhChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
