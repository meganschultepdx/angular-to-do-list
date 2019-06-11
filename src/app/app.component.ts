import { Component, TRANSLATIONS } from '@angular/core';
import { Task } from './models/task.model';
import { AotCompiler } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finsih weekend Angular home for Epicodus course', 3),
    new Task('Begin brainstorming possible Javascript group Projects', 2),
    new Task('Add README file to last few Angular Repos on GitHub', 2)
  ]

  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }
  
  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }    
  }
}
