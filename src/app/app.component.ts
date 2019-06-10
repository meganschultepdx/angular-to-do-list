import { Component, TRANSLATIONS } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finsih weekend Angular home for Epicodus course'),
    new Task('Begin brainstorming possible Javascript group Projects'),
    new Task('Add README file to last few Angular Repos on GitHub')
  ]
 
}
