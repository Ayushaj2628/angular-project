import { Component, Input } from '@angular/core';
import { TasksComponent} from './tasks/tasks.component'
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTaskData } from './tasks/task.model';
import {TasksService} from './task.service'
// import { taskModule } from './task.module';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true}) userId!: string;
@Input({required: true}) name!: string;
isAddingTask = false;
// private tasksService = TasksService;

constructor(private tasksService: TasksService) {
}

get selectedUserTasks(){
  return this.tasksService.getUserTask(this.userId)
}
onCompleteTask(id: string){
  
}

onStartAddTask(){
 this.isAddingTask = true;
}

onCloseAddTask(){
  this.isAddingTask = false;
}

// onAddTask(taskData: NewTaskData) {
 
//   this.isAddingTask = false;
// }

}
