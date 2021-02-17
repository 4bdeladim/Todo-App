import React, { useState } from 'react'
import { AddBtn, RemoveTodoBtnSpe, CancelBtn, CheckBtn, EditBtn, Input, InputContainer, RemoveTodoBtn, Text, Todo, TodoContainer, TodoList, TodoTextContainer, TodoUpdateContainer, TrashBtn, UpdateInput } from '../styles/Todolist'
import { v4 as uuidv4 } from 'uuid';


const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [editable, setEditable] = useState(false);
    let newTodo = ''
    const [trash, setTrash] = useState([]);
    const [istrashOpen, setTrashOpen] = useState(false);
    

    const addTodo = (e) => {
        setTodos([...todos, {
            title: todo,
            id: uuidv4(),
            checked: false
        }])
        setTrashOpen(false)
    };

    const deleteAtodo = (e) => {
        const index = todos.map((todo) => todo.id).indexOf(e.target.id);
        setTrash([...trash, todos[index]])
        setTodos(todos.filter((todo) => todos.indexOf(todo) !== index));
    }
    
    const updateTodo = () => {
        setEditable(!editable)
    }

    const changeTheTodo = (e) => {
        const id = e.target.id
        const index = todos.map((todo) => todo.id).indexOf(id);
        let updatedTodos = todos.map(todo => {
            if (todos.indexOf(todo) === index) {
              todo.title = newTodo;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditable(!editable)
    }

    const OpenandCloseTrash = () => {
        setTrashOpen(!istrashOpen)
    }

    const CheckedTodo = (e) => {
        const id = e.target.id
        const index = todos.map((todo) => todo.id).indexOf(id);
        let updatedTodos = todos.map(todo => {
            if (todos.indexOf(todo) === index) {
              todo.checked = !todo.checked;
            }
            return todo;
        });
        setTodos(updatedTodos);
        console.log(todos)
    }
 
    return (
        <TodoContainer>
            <InputContainer>
                <Input
                    onChange={(e) => setTodo(e.target.value)}

                />
                <AddBtn onClick={addTodo} />
                <TrashBtn
                    onClick={OpenandCloseTrash}
                />

            </InputContainer>
            <TodoList>
                {
                    todos.map((todo) => (
                        <Todo
                            key={uuidv4()}
                            id={todo.id}
                            checked={todo.checked}
                        >    
                            {
                                editable ? (
                                    <TodoUpdateContainer>
                                    <UpdateInput
                                        key={todo.id}
                                        defaultValue={todo.title}
                                        onChange={(e) => newTodo = e.target.value }
                                    />
                                    <CheckBtn id={todo.id} onClick={changeTheTodo} />
                                    <CancelBtn onClick={updateTodo}/>
                                    </TodoUpdateContainer>
                                ) : (
                                    <TodoTextContainer>
                                        <Text>{todo.title}</Text>
                                        {
                                            istrashOpen ? (
                                                <RemoveTodoBtnSpe id={todo.id} onClick={deleteAtodo} />
                                            ) : (
                                                <>
                                                <EditBtn onClick={updateTodo} />
                                                <CheckBtn id={todo.id} onClick={CheckedTodo} />
                                                </>
                                            )
                                        }
                                    </TodoTextContainer> 
                                )
                           
                            } 
                        </Todo>
                    ))
                }
            </TodoList>
        </TodoContainer>
    )
}

export default Todolist
