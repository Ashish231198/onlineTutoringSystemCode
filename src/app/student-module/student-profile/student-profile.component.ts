import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {
  profileDetail: any;
  constructor(){
    this.profileDetail = JSON.parse(localStorage.getItem('userDetails') || '');

  }
}
