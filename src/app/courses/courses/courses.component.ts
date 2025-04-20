import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // courses$: Observable<Course[]>; // Tratamento específico de dados para material table
  courses: Course[] = []; // Tratamento genérico de dados para qq table
  displayedColumns: string[] = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    // this.courses$ = this.coursesService.list(); // Tratamento específico de dados para material table
    this.coursesService.list().subscribe(courses => this.courses = courses); // Tratamento genérico de dados para qq table
  }

  ngOnInit(): void {
  }

}
