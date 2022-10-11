import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  
} from '@angular/forms';


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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ["", [Validators.required, Validators.min(0)]],
      newAuthor: [''],
      authors: this.formBuilder.array([]),
    });
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
    this.removeNewAuthorValidators();
    this.submitted = true;

    if (!this.courseForm.valid) {
      return;
    }
    
    console.log(courseForm.value);
    this.submitted = false;
  }
}