import { Component } from '@angular/core';
import { TaksService } from './services/taks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  constructor(
  
    private taksService: TaksService
  ){}

  getAllTaks(){
    this.taksService.getAllTasks().subscribe(
      tareas => {
        console.log(tareas);
      }
    );
  }

  getTask(){
    

    this.taksService.getTask('2').subscribe(
      tarea => {
        console.log(tarea);
      }
    );
  }


  createTaks(){
    const taks ={
      userId:'1',
      title:'Este es un titulo',
      completed:true
    }
    this.taksService.createTasks(taks).subscribe(
      nuevaTarea => {
        console.log(nuevaTarea);
      }
    );
  }



  updateTaks(){
    const taks ={
      id:'200',
      userId:'1',
      title:'Este es un Actualizado',
      completed:false
    }
    this.taksService.updateTask(taks).subscribe(
      updateTarea => {
        console.log(updateTarea);
      }
    );
  }

  deleteTask(){
    this.taksService.deleteTask('1').subscribe(
      (data)=> {
        console.log(data);
      }
    );
  }

}
