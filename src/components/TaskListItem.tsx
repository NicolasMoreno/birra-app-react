import React, {FunctionComponent} from 'react'
import { Task } from '../models/task.model'

interface ItemProps {
    task: Task,
    onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<ItemProps> = ({task, onDelete}) => {
    const deleteClick = () => {
        onDelete(task)
    }

    return (
        <li>
            {task.name} <button onClick={deleteClick}>X</button>
        </li>
    )
}