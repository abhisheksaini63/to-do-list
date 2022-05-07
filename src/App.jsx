import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const App = () => {
    const [inputEvent, setInputval] = useState('');
    const [Items, setItems] = useState([]);

    const updateInput = (element) => {
        setInputval(element.target.value);
    }
    const AddItem = () => {
        if (inputEvent == '') {
            alert("Please Insert An Item");
        }
        else {
            setItems((oldArr) => {
                return [...oldArr, inputEvent];
            });
            setInputval('');
        }
    }

    const deleteItem = (id) => {
        console.log("deleted");

        setItems((oldArr) => {
            return oldArr.filter((arrElm, index) => {
                return id !== index;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="container">
                    <br />
                    <h1>ToDo List </h1>
                    <br />
                    <input type="text" placeholder="Add A Item" value={inputEvent} onChange={updateInput} />
                    <button className="addBtn" onClick={AddItem}>+</button>
                    <br />
                    <br />
                    <ol>
                        {
                            Items.map((val, index) => {
                                return <ToDoLists
                                    key={index}
                                    text={val}
                                    id={index}
                                    onselect={deleteItem}
                                />
                            })

                        }
                    </ol>

                </div>
            </div>
        </>
    )
}

export default App;