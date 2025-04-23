import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorNewQuesComponent } from './tutor-new-ques.component';

describe('TutorNewQuesComponent', () => {
  let component: TutorNewQuesComponent;
  let fixture: ComponentFixture<TutorNewQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorNewQuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorNewQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
