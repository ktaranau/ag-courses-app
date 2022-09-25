import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  toDo(e:Event): void {}

  isEmpty = true;

  title = this.isEmpty ? "Your list is empty" : ''

  description = this.isEmpty ? "Please use the 'Add new course' button to add your first course" : ''

  constructor() { }

  ngOnInit(): void {
  }

}
