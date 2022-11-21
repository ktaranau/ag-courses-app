import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  @Input() term: string;
  @Input() isEditable: boolean;

  courseList: Course[]

  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute, private coursesFacade: CoursesStateFacade) { }

  ngOnInit(): void {
    // this.coursesService.getAll().subscribe((data)=>{
    //   this.courseList = data.result;+
    // })

    if (this.courseList == null)
      this.coursesFacade.getAllCourses()

    this.coursesFacade.allCourses$.subscribe((data) => {
      console.log("COURSES", data)
      this.courseList = data
    })

  }


}
