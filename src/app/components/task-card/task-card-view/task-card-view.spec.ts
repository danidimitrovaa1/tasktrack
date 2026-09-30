import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskCardView } from './task-card-view';

describe('TaskCardView', () => {
  let component: TaskCardView;
  let fixture: ComponentFixture<TaskCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardView],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
