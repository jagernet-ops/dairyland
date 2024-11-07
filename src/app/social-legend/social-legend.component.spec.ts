import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLegendComponent } from './social-legend.component';

describe('SocialLegendComponent', () => {
  let component: SocialLegendComponent;
  let fixture: ComponentFixture<SocialLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLegendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
