import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/features/courses/interfaces/course';

@Pipe({
  name: 'searchCourse'
})
export class SearchPipe implements PipeTransform {

  transform(courses: Course[], search: string)  {
    return courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));
  }

}
