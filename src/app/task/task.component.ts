import { Component } from '@angular/core';
import { TaskModel } from '../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title="List of tasks"
  taskName:string='';
  task:TaskModel[]=[{
    id:1,
    taskName:'Create Angular Project',
    completion:false
  }]

  onTaskDeleteHandle(id:number){
    //alert(this.taskName)
    this.task=this.task.filter((item, idx)=> idx != id);
    //()=>{console.log('asd')}
    //console.log(2!=2);
    //console.log(this.task.filter(
      //(item, idx)=>idx!=2
   // ))
  }
  onAddTask(){
    lastRecArry: Array;
    const lastRecArry=this.task.slice(this.task.length-1);
    console.log(lastRecArry[0].id);
    const newObj={
      id:lastRecArry[0].id+1,
      taskName:this.taskName,
      completion:false
    }
    this.task.push(newObj);
    console.log(this.task);
    
  }
  onEditTask(id: number){
    this.task.map((item)=>{
      if (item.id == id)
      {
        item.taskName=this.taskName;
        item.completion = !item.completion
      }
      return item;
    })
  }

}
