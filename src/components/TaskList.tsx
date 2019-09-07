import React, { FunctionComponent } from "react";
import {Task} from "../models/task.model"
import {TaskListItem} from './TaskListItem'

interface ListProps {
    onDelete: (task: Task) => void;
    tasks: Task[];
  }

export const TaskList: FunctionComponent<ListProps> = ({ tasks, onDelete }) => (
    <ul>
    {tasks.map(task => (
      <TaskListItem task={task} onDelete={onDelete} />
    ))}
  </ul>
);