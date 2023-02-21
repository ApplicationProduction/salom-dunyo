import { Component, OnInit } from "@angular/core";
import { LessonsService } from "./lessons.service";
import { Lesson } from "./lesson";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'lessons',
  template: `
<h1>Lessons</h1>

  <h1> {{ getTitle() }}</h1>
 <ul>
<li *ngFor="let lesson of lessons" (click)="onSelect(lesson)">
  <a [routerLink]="['/darslar, lesson.title']">{{lesson.title}}</a>

</li>

</ul>
{{selecsCount}}
<app-lesson [lesson]="sellectedLessson" (changeTitle)="onTitleChange($event)"> bu <h2> lesson </h2> komponentigagi <div class="mycontent"> kontent </div></app-lesson>


`

})
export class LessonsComponent implements OnInit {

  titlex: string = "Darslar ro'yhati";
  lessons: Lesson[];
  sellectedLessson!: Lesson;
  isPlus: boolean=true;

selecsCount: any;
titleParam: string= '';

  constructor(private route: ActivatedRoute, lessonsSvc: LessonsService) {
    this.lessons = lessonsSvc.getLessons();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
this.titleParam!= params.get('title');
this.getLessonByTitle();
    })

  }
  getLessonByTitle(): void {

    if(!!this.titleParam){
      var lesson=this.lessons.find(les => les.title==this.titleParam);
      this.onSelect(lesson!);
    }
  }
   getTitle(): string {
    return this.titlex;
  }

    onSelect(lesson: Lesson): void{
this.sellectedLessson=lesson;
    }
    onTitleChange(isPlus: boolean){
      isPlus ? this.sellectedLessson.title+="+ ": this.sellectedLessson.title+="-";
    }

  }
