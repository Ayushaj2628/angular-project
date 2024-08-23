import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import {DatePipe } from '@angular/common'
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../task.service';

// interface Task{
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input({required: true}) task!: Task; 
//  @Output() complete = new EventEmitter<string>();
 private tasksService = inject(TasksService)

 onCompleteTask(){
  this.tasksService.removeTask(this.task.id);
 }
}
