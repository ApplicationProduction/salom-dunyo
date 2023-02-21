import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Lesson } from '../lesson';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @Input() lesson?: Lesson;
  @Output("changeTitle") changeTitle=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onPlusButtonClick(){
this.changeTitle.emit(true);
  }

  onMinusButtonClick(){
    this.changeTitle.emit(false);
  }

  // title='Angular asoslari';
  // price=50.0;
  // duration=20;
  // intakeDeadline= new Date(1998, 9 , 12);


}
