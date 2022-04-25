import React, { useState } from 'react'
import "./ToDoList.css"

export default function ToDoList() {

    const[inputList, setInputList]=useState("");
    const[items, setItems]=useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };

    const listOfItems=()=>{
        setItems((oldItems) => {
            return[...oldItems, inputList];
        })
        setInputList("");
    };

    const deleteItems=()=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                
            });
        });
    };

  return (
    <div className='main_div'>
        <div className='center_div'>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>

            <ol>
                {/* <li>{inputList}</li> */}

                {items.map((itemVal, index) => {
                    return(<>
                    <div className='todo_style'>
                        <i className='fa fa-times' aria-hidden="true" onClick={deleteItems}/>
                    <li>{itemVal}</li>
                    </div> 
                    </>
                    )})}
            </ol>
        </div>

    </div>
  )
}
