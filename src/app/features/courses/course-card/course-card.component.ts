import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../interfaces/course';
import { CourseView } from '../interfaces/courseView';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;

  courseView: CourseView;

  constructor() { }

  ngOnInit(): void {

    this.courseView = {
      title: this.course.title,
      description: this.course.description,
      creationDate: this.course.creationDate.toLocaleDateString(),
      duration: this.formatDuration(this.course.duration),
      authors: this.course.authors.join(", ")
    }

  }

  formatDuration(totalMinutes:number): string {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60;
    return hours.toString().padStart(1, '0') + ':' + minutes.toString().padStart(2, '0') + (hours > 1 ? ' hours' : ' hour')
  }

}
