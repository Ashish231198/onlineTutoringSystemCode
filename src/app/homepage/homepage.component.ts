import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, RouterLink, TitleCasePipe, NgIf, NgFor, ReactiveFormsModule, NgClass],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  show_eye_slash: Boolean = true;
  next: boolean = false;
  formBuilder = inject(FormBuilder)
  loginForm:any = FormGroup;
  selectedSubject: any = [];
  subjectview: any = [{}]
  previous: boolean = false;
  email: any;
  password: any;
  userRole: string = 'student'
  toastr = inject(ToastrService)
  constructor( public router: Router, public http: HttpClient
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }
  login(){
    let count = 0;
    let jsonFileName = this.userRole == 'student' ? 'registeredStudentDetails' : 'registeredTutorDetails';
    console.log(this.email,this.password, jsonFileName);
    this.http.get('assets/json/'+jsonFileName+'.json').subscribe((data: any) => {
    console.log('data',data);
    data.userList.forEach((user:any) => {
      if(user.email == this.email?.toLowerCase() && user.password === this.password){
        count = count + 1;
         console.log('user logged in successfully');
        this.toastr.success('User Logged In Successfully')

         localStorage.setItem('userDetails', JSON.stringify(user));
         document.getElementById('closeLoginModal')?.click()
         if(this.userRole == 'student'){
          this.router.navigateByUrl('/student/home');
         }
         else if(this.userRole == 'tutor'){
          this.router.navigateByUrl('/tutor/home');
         } 
      }
    });

    if(count ==0){
      this.toastr.error('Invalid Credential')
    }
    })
    
    
  }


}
