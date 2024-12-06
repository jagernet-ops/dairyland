import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxGameProjectComponent } from './ux-game-project.component';

describe('UxGameProjectComponent', () => {
  let component: UxGameProjectComponent;
  let fixture: ComponentFixture<UxGameProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxGameProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxGameProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
