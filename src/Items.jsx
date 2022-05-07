import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const Items = (p) => {
    return (
        <>
            <div className="delItmes">
                <Button className = "NewDelBtn" onClick = {()=>{
                    p.onselected(p.val, p.id);
                }}
                >
                    <DeleteIcon />
                </Button>
                <li> {p.val} </li>
            </div>
        </>

    )

}

export default Items;