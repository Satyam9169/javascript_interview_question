import React, { useState } from 'react'
// import { IconName } from "react-icons/fc";
import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import './common.css'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)}
                className={`${task.completed ? 'complete' : ""}`}>{task.task}</p>
            <LuPenSquare onClick={() => editTodo(task.id)} />
            <FaRegTrashAlt onClick={() => deleteTodo(task.id)} />
        </div>

    )
}

export default Todo