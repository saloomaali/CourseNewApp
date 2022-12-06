import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

  courseTitle = ""
  courseDescription = ""
  courseVenue = ""
  courseDuration = ""
  courseDate = ""

  

    courses:any = [{"title":this.courseTitle,"description":this.courseDescription,"venue":this.courseVenue,"duration":this.courseVenue,"date":this.courseDate}]
  
}
