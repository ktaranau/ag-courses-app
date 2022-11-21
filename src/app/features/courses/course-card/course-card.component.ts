import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, forkJoin } from 'rxjs';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
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
    console.log("AAA")
    this.coursesFacade.getSingleCourse(id)
    combineLatest([this.coursesFacade.course$, this.authorFacade.authors$]).subscribe(([course, authors]) => {
      console.log("res", authors, course)
      let newCourse = course;
      this.courseView.title = newCourse.title,
        this.courseView.description = newCourse.description,
        this.courseView.creationDate = newCourse.creationDate,
        this.courseView.duration = this.formatDuration(newCourse.duration),
        this.courseView.authors = newCourse.authors.map((authorId) => authors.find(author => author.id === authorId).name).join(',')
    })

  }

  deleteCourse(id: string) {
    this.coursesFacade.deleteCourse(id);
    window.location.reload();
  }

  navigateToCourse(id: string) {
    this.router.navigate([id], { relativeTo: this.route })
  }

  navigateToEditCourse(id: string) {
    this.router.navigate([id, "edit"], { relativeTo: this.route })
  }

  @Input() course: Course;

  courseView: CourseView = {} as CourseView;

  constructor(private coursesStoreService: CoursesStoreService, private router: Router, private route: ActivatedRoute, private coursesFacade: CoursesStateFacade, private authorFacade: AuthorsStateFacade) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id')
    if (this.course) {
    this.authorFacade.authors$.subscribe((authors)=> {
      this.courseView = {
        title: this.course.title,
        description: this.course.description,
        creationDate: this.course.creationDate,
        duration: this.formatDuration(this.course.duration),
        authors: this.course.authors.map((authorId) => authors.find(author => author.id === authorId).name).join(',')
      }
    })
      
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
