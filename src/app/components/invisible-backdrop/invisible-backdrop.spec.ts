import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvisibleBackdrop } from './invisible-backdrop';

describe('InvisibleBackdrop', () => {
  let component: InvisibleBackdrop;
  let fixture: ComponentFixture<InvisibleBackdrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvisibleBackdrop],
    }).compileComponents();

    fixture = TestBed.createComponent(InvisibleBackdrop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
