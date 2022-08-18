import { useState } from "react";
import Task from "./Task";

const ToDo = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        const task = {
            id:
                todoList.length === 0
                    ? 1
                    : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task]);
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    const completTask = (id) => {
        setTodoList(
            todoList.map((task) =>
                task.id === id ? { ...task, completed: true } : task
            )
        );
    };

    return (
        <>
            <div>CrudToDo</div>
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task, i) => (
                    <Task
                        key={i}
                        taskName={task.taskName}
                        id={task.id}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        completTask={completTask}
                    />
                ))}
            </div>
        </>
    );
};

export default ToDo;
