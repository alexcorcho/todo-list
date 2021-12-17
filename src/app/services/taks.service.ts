import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Taks } from '../interfaces/taks'
@Injectable({
  providedIn: 'root'
})
export class TaksService {

  constructor(
    private http: HttpClient,
  
  ) { }

//busca en todas las tareas de la API
  getAllTasks(){
    const path = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Taks[]>(path);
  }

  //buscar una tarea tarea por ID
  getTask(id:string){
    const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
    return this.http.get<Taks>(path);
  }

  //crear una nueva tarea
  createTasks(taks:Taks){
    const path = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.post(path, taks);
  }

   //Actualizar  una nueva tarea
   updateTask(taks:Taks){
    const path = `https://jsonplaceholder.typicode.com/todos/${taks.id}`;
    return this.http.put<Taks>(path, taks);
  }

  deleteTask(id:string){
    const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
    return this.http.delete<Taks>(path);
  }
}
