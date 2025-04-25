import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {
  rating3: any = 3;
  ratingList: any;
  courseRatingData: any = {
    rating: 0,
    feedback: ''
  };
  ratingPoint:any [] = [];
  constructor( private toastr: ToastrService, ) { }
  ngOnInit() {
    this.getCourseRatings();
  }
  getCourseRatings() {
    
  }
  assignItem(item:any){
    this.courseRatingData = structuredClone(item);
  }

  editRating(closeBtn: any) {
    var body = {
      "comment": this.courseRatingData.feedback,
      "courseId": this.courseRatingData.courseId,
      "score": this.courseRatingData.rating
    }
   
        this.toastr.success('Rating Updated');
        this.getCourseRatings();
    this.courseRatingData.rating = 0;
    this.courseRatingData.feedback = '';
    closeBtn.click();
  }
  truncateText(text: string, maxLength: number): string {
    if (text.trim().length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

}
