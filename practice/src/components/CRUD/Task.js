import React from "react";

const Task = (props) => {
    return (
        <div>
            {" "}
            <div style={{ backgroundColor: props.completed ? "green" : "red" }}>
                <h3>{props.taskName}</h3>
                <span>
                    <button onClick={() => props.deleteTask(props.id)}>
                        X
                    </button>
                    <button onClick={() => props.completTask(props.id)}>
                        Done
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Task;
