import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './interfaces/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'https://lili-f269c-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) {

  }

  getTodoList(): Observable<any[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/db.json`);
  }

  addTodo(postData: Todo) {
    return this.http.post(`${this.baseUrl}/db.json`, postData);
  }

  updateTodo(postData: Todo) {
    return this.http.patch(`${this.baseUrl}/db.json/${postData.id}`, postData);
  }

  deleteTodo(id: Todo['id']) {
    return this.http.delete(`${this.baseUrl}/db.json/${id}`);
  }

}