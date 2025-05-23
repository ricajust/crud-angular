import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // courses$: Observable<Course[]>; // Tratamento específico de dados para material table
  courses: Course[] = []; // Tratamento genérico de dados para qq table
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    // this.courses$ = this.coursesService.list(); // Tratamento específico de dados para material table
    this.coursesService
      .list()
      .pipe(catchError(error => {
        this.onError("Erro ao carregar cursos.");
        return of([]);
      }))
      .subscribe(courses => this.courses = courses); // Tratamento genérico de dados para qq table
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

}
