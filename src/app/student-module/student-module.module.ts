import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { StarRatingModule } from 'angular-star-rating';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    StarRatingModule.forRoot()
    // ToastrModule.forRoot()
  ]
})
export class StudentModuleModule { }
