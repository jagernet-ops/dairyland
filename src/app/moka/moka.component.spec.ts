import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MokaComponent } from './moka.component';

describe('MokaComponent', () => {
  let component: MokaComponent;
  let fixture: ComponentFixture<MokaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MokaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
