import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API: string = "/assets/courses.json";

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient
      .get<Course[]>(this.API)
      .pipe(
        //take(1), //só faz uma requisição e fecha a conexão
        first(), //só faz uma requisição e fecha a conexão
        delay(3000),
        tap(courses => console.log(courses))
      );
  }
}
