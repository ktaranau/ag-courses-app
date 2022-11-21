import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,

} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  submitted = false;
  newAuthorValidators = [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9]*'),
  ];

  constructor(private formBuilder: FormBuilder, private coursesStoreService: CoursesStoreService,
     private router: Router, private route: ActivatedRoute, private coursesFacade: CoursesStateFacade, private authorsFacade: AuthorsStateFacade) { }

  getCourse(id: string) {
    this.coursesStoreService.getCourse(id).subscribe((res) => {
      const { result } = res
      this.courseForm = this.formBuilder.group({
        title: [result.title, Validators.required],
        description: [result.description, Validators.required],
        duration: [result.duration, [Validators.required, Validators.min(0)]],
        newAuthor: [''],
        authors: this.formBuilder.array(result.authors?.map((author: string) => this.formBuilder.group({ name: author }))),
      });
    })
  }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id')

    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ["", [Validators.required, Validators.min(0)]],
      newAuthor: [''],
      authors: this.formBuilder.array([]),
    });

    if (param) {
      this.getCourse(param)

    }

  }

  get form() {
    return this.courseForm.controls;
  }

  get authors(): FormArray<FormGroup> {
    return this.courseForm.get('authors') as FormArray<FormGroup>;
  }

  get authorNames(): string[] {
    return this.authors.controls.map((author) => {
      let authorFormGroup = author as FormGroup;
      return authorFormGroup.controls['name'].value;
    });
  }

  newAuthor(): FormGroup {
    return this.formBuilder.group({
      name: '',
    });
  }

  addAuthor() {
    this.addNewAuthorValidators();
    this.courseForm.controls['newAuthor'].markAsTouched({ onlySelf: true });

    console.log(this.courseForm.controls['newAuthor'].errors)

    if (!this.courseForm.controls['newAuthor'].valid) {
      return;
    }

    this.authorsFacade.addAuthor(this.courseForm.get('newAuthor').value)
    
    this.authorsFacade.authors$.subscribe((data)=> console.log( data ))

    this.authors.push(this.newAuthor());
    let currentAuthor = this.authors.length - 1;
    this.authors.controls[currentAuthor]
      .get('name')
      .setValue(this.courseForm.get('newAuthor').value);
  }

  deleteAuthor(index: number) {    
    this.authors.removeAt(index);
  }

  removeNewAuthorValidators() {
    this.courseForm.controls['newAuthor'].removeValidators(
      this.newAuthorValidators
    );
    this.courseForm.controls['newAuthor'].updateValueAndValidity();
  }

  addNewAuthorValidators() {
    this.courseForm.controls['newAuthor'].addValidators(
      this.newAuthorValidators
    );
    this.courseForm.controls['newAuthor'].updateValueAndValidity();
  }

  onSubmit(courseForm: FormGroup) {
    let id = this.route.snapshot.paramMap.get('id')
    if (id) {
      
      this.coursesStoreService.editCourse(id, courseForm.value).subscribe((data) => console.log("EDITED DATA", data))
    } else {
      this.coursesFacade.createCourse(courseForm.value)
      // this.coursesStoreService.createCourse(courseForm.value).subscribe((data) => console.log("CREATE COURSE DATA", data))
    }

    this.removeNewAuthorValidators();
    this.submitted = true;

    if (!this.courseForm.valid) {
      return;
    }

    console.log("After creating", courseForm.value);
    this.submitted = false;
  }

}