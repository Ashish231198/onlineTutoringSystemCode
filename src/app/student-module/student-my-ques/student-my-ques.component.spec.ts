import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyQuesComponent } from './student-my-ques.component';

describe('StudentMyQuesComponent', () => {
  let component: StudentMyQuesComponent;
  let fixture: ComponentFixture<StudentMyQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMyQuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMyQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
