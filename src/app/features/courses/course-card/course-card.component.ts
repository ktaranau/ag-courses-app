import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Course } from '../interfaces/course';
import { CourseView } from '../interfaces/courseView';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() isEditable: boolean;

  getCourse(id: string) {
    this.coursesStoreService.getCourse(id).subscribe((res) => {
      let newCourse = res.result;
      this.courseView.title = newCourse.title,
        this.courseView.description = newCourse.description,
        this.courseView.creationDate = newCourse.creationDate,
        this.courseView.duration = this.formatDuration(newCourse.duration),
        this.courseView.authors = newCourse.authors.join(", ")
    })
  }

  deleteCourse(id: string) {
    this.coursesStoreService.deleteCourse(id).subscribe((res) => {
      console.log("res", res)
      window.location.reload();
    })
  }

  navigateToCourse(id: string) {
    this.router.navigate([id], { relativeTo: this.route })
  }

  navigateToEditCourse(id: string) {
    this.router.navigate([id, "edit"], { relativeTo: this.route })
  }

  @Input() course: Course;

  courseView: CourseView = {} as CourseView;

  constructor(private coursesStoreService: CoursesStoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id')

    if (this.course) {
      this.courseView = {
        title: this.course.title,
        description: this.course.description,
        creationDate: this.course.creationDate,
        duration: this.formatDuration(this.course.duration),
        authors: this.course.authors.join(", ")
      }
    } else {
      this.getCourse(param)
    }

  }

  formatDuration(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60;
    return hours.toString().padStart(1, '0') + ':' + minutes.toString().padStart(2, '0') + (hours > 1 ? ' hours' : ' hour')
  }

}
