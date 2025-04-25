import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  
  readonly USER = JSON.parse(localStorage.getItem('userDetails') || '{}');
  feedbackForm!: FormGroup
  
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.feedbackForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      feedback: ['', [Validators.required]],
      name: ['', [Validators.required]],
      rate: ['']
    });
  }

  ngOnInit(): void {
    this.feedbackForm.controls['email'].setValue(this.USER.email)
    this.feedbackForm.controls['name'].setValue(this.USER.firstName + ' ' + this.USER.lastName)
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
          this.toastr.success('Feedback Submitted Successfully');
          this.feedbackForm.reset();
          this.feedbackForm.controls['email'].setValue(this.USER.email)
          this.feedbackForm.controls['name'].setValue(this.USER.userName)
       
    } else{
      this.markAllControlsAsTouched(this.feedbackForm);
    }
  }
  markAllControlsAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllControlsAsTouched(control);
      }
    });
  }
  setRate(value: any) {
    this.feedbackForm.controls['rate'].setValue(value);
  }
}
