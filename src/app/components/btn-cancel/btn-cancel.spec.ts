import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnCancel } from './btn-cancel';

describe('BtnCancel', () => {
  let component: BtnCancel;
  let fixture: ComponentFixture<BtnCancel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCancel],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnCancel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
