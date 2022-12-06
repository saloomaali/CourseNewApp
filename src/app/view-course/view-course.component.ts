import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {


  data:any = [{"id":1,"title":"Java","description":"Instructor : salooma","venue":"online","duration":"3 months","date":"2022-12-07"}]
}
