import "./ToDo.css";
import TodoList from "../todo-list/ToDoList";
import ToDoCreate from "../todo-create/ToDoCreate";
import { useEffect, useState } from "react";
import axios from "axios";

const ToDo = () => {
    const [getTodos, setTodos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/")
            .then((res) => {
                setTodos(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const reload = () => {
        axios
            .get("http://localhost:5000/")
            .then((res) => {
                setTodos(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="todo">
            <h3>Todo List</h3>
            <ToDoCreate func={reload} />
            <TodoList dataTodos={getTodos} func={reload} />
        </div>
    );
};

export default ToDo;
