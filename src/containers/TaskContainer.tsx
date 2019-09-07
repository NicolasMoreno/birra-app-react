import React, { Component } from "react";
import {Task} from '../models/task.model';
import {TaskList} from '../components/TaskList'
import {NewTaskForm} from '../components/NewTaskForm';

interface TaskContainerState {
    newTask: Task,
    tasks: Task[]
  }

export class TaskContainer extends Component<{},TaskContainerState> {
    private addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState(previousState => ({
          newTask: {
            id: previousState.newTask.id + 1,
            name: "",
            creationDate: new Date()
          },
          tasks: [...previousState.tasks, previousState.newTask]
        }));
      }
    
      private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
          newTask: {
            ...this.state.newTask,
            name: event.target.value
          }
        });
      };
    
      private deleteTask = (taskToDelete: Task) => {
        this.setState(previousState => ({
          tasks: [
            ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
          ]
        }));
      };
    
      state = {
        newTask: {
          id: 1,
          name: "",
          creationDate: new Date()
        },
        tasks: []
      };
    
      render() {
        return (
          <div className="App">
            <h2>Hello React TS!</h2>
            <NewTaskForm 
              task={this.state.newTask}
              onAdd={this.addTask}
              onChange={this.handleTaskChange}/>
            <TaskList tasks={this.state.tasks} onDelete={this.deleteTask}/>
                
          </div>
        );
      }
}