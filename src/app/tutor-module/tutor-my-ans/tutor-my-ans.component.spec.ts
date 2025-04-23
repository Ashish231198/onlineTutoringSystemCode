import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMyAnsComponent } from './tutor-my-ans.component';

describe('TutorMyAnsComponent', () => {
  let component: TutorMyAnsComponent;
  let fixture: ComponentFixture<TutorMyAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorMyAnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorMyAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
