import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
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

  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.courseList = mockedCourseList;
      this.coursesService.getAll().subscribe((data)=>{
        this.courseList = data.result;        ;
      })

  }


}



const mockedCourseList: any= [
  {
    id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
    title: "JavaScript",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
    creationDate: new Date("8/3/2021"),
    duration: 110,
    authors: ["Vasiliy Dobkin", "Nicolas Kim"],
  },
  {
    id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
    title: "Angular",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: new Date("10/11/2020"),
    duration: 210,
    authors: ["Anna Sidorenko", "Valentina Larina"],
  },
];