import React from 'react';



const ToDoLists = (props) => {
    return (
        <>
            <div className="delItmes">
                <button className="delBtn" onClick={()=>{
                    props.onselect(props.id);
                }} >x</button>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoLists;