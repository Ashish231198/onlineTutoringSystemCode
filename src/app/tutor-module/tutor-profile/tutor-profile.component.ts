import { Component } from '@angular/core';

@Component({
  selector: 'app-tutor-profile',
  standalone: true,
  imports: [],
  templateUrl: './tutor-profile.component.html',
  styleUrl: './tutor-profile.component.scss'
})
export class TutorProfileComponent {
  profileDetail: any;
  constructor(){
    this.profileDetail = JSON.parse(localStorage.getItem('userDetails') || '');

  }
}
