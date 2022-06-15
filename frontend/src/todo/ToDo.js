import "./ToDo.css";
import TodoList from "../todo-list/ToDoList";
import ToDoCreate from "../todo-create/ToDoCreate";
import { useState } from "react";
import axios from "axios";

const ToDo = () => {
    const [getTodos, setTodos] = useState([]);

    axios.get("http://localhost:5000/").then((res) => {
        setTodos(res.data);
    });
    // const eventCreateTodo = (todo) => {
    //     setTodos(getTodos.concat(todo));
    // };

    return (
        <div className="todo">
            <h3>Todo List</h3>
            <ToDoCreate />
            <TodoList dataTodos={getTodos} />
        </div>
    );
};

export default ToDo;
