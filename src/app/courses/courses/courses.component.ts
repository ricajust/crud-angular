import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: "1", name: "Angular", category: "Front-end"},
    {_id: "2", name: "ReactJS", category: "Front-end"},
    {_id: "3", name: "VueJS", category: "Front-end"},
    {_id: "4", name: "Java", category: "Backend-end"},
    {_id: "5", name: "SpringBoot", category: "Backend-end"},
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
