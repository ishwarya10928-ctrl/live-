import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaticLayouts } from './static-layouts';

describe('StaticLayouts', () => {
  let component: StaticLayouts;
  let fixture: ComponentFixture<StaticLayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticLayouts],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticLayouts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
