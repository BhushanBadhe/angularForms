import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'create-course-step-3',
  templateUrl: 'create-course-step-3.component.html',
  styleUrls: ['create-course-step-3.component.scss']
})
export class CreateCourseStep3Component {


  form:FormGroup = this.fb.group({
    lessons:this.fb.array([])
  });

  get lessons(){
    return this.form.controls["lessons"] as FormArray;
  }
  
  addLesson(){
    const lessonForm = this.fb.group({
      title:['',Validators.required],
      level:['beginner',Validators.required]
    });
    this.lessons.push(lessonForm);

  }

  deleteLesson(lessonIndex:number){
    this.lessons.removeAt(lessonIndex);
  }

  constructor(private fb:FormBuilder){}

}
