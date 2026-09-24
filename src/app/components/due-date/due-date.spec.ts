import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DueDate } from './due-date';

describe('DueDate', () => {
  let component: DueDate;
  let fixture: ComponentFixture<DueDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DueDate],
    }).compileComponents();

    fixture = TestBed.createComponent(DueDate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
