import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskCardForm } from './task-card-form';

describe('TaskCardEdit', () => {
  let component: TaskCardForm;
  let fixture: ComponentFixture<TaskCardForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
