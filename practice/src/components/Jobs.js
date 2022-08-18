import React from "react";

const Jobs = (props) => {
    return (
        <>
            <div>
                <h1>{props.salary}</h1>
                <h2>{props.position}</h2>
                <h3>{props.company}</h3>
            </div>
        </>
    );
};

export default Jobs;
