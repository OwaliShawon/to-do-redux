import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeAllTodo } from './../actions/index';
import "./Todo.css";
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const list = useSelector(state => state.todoReducers.list);
    const dispatch = useDispatch();
    // console.log(inputData);
    // console.log(list);
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here !</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input
                            type='text'
                            placeholder='Add Your List Here !'
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)} />
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                    </div>
                    <div className="showItems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className='todo-btn'>
                                            <i className='far fa-trash add-btn' title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='showItems'>
                        <i className='btn effect04' title='RemoveAll' onClick={() => dispatch(removeAllTodo())}>Remove All</i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;