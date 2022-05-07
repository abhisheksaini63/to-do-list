import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Items from './Items';


const NewToDo = ()=>{

    const [item, setItem] = useState('');
    const [itmes, setItems] = useState([]);
    const inputEvent = (elm)=>{
        setItem(elm.target.value);
    }

    const btnEvent = ()=>{
        if (item == '') {
            alert("Please Insert An Item");
        }
        else {
            setItems((oldArr) => {
                return [...oldArr, item];
            });
            setItem('');
        }
    }

    const delItem = (elment , id) =>{

        setItems((oldArr)=>{
            return oldArr.filter((elm ,index)=>{
                return index !== id;
            })
        })

    }




    return (
        <>
            <div className = "main_div">
                <div className = "container">
                    <br/>
                    <h1 className = "newH">To Do List</h1>
                    <br/>
                    <input type = "text" placeholder = "Add A Item" value = {item}
                        onChange = {inputEvent}
                    />
                    <Button className = "newBtn" onClick = {btnEvent}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {
                            itmes.map((elm,index)=>{
                                return <Items 
                                    key = {index}
                                    id = {index}
                                    val = {elm}
                                    onselected = {delItem}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )


}

export default NewToDo;