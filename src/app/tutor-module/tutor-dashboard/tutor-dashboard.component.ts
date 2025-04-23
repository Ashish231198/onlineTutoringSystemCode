import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tutor-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './tutor-dashboard.component.html',
  styleUrl: './tutor-dashboard.component.scss'
})
export class TutorDashboardComponent {
tabName : string = 'Home'
  activeNav: boolean = false;
  userDetails:any;
  router = inject(Router)
  constructor(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl('')
  }
}
