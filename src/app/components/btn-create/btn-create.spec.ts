import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnCreate } from './btn-create';

describe('BtnCreate', () => {
  let component: BtnCreate;
  let fixture: ComponentFixture<BtnCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
