import { useState } from "react";

const ToDo = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        setTodoList([...todoList, newTask]);
    };

    const deleteTask = (i) => {
        setTodoList([todoList.find((task) => task !== i)]);
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
                    <div key={i}>
                        <h3>{task}</h3>
                        <span>
                            <button onClick={() => deleteTask(i)}>X</button>
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ToDo;
