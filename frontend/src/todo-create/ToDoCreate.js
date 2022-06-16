import "./ToDoCreate.css";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ToDoCreate = (props) => {
    const [getNewTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getNewTodo.length > 0) {
            const newTodo = {
                title: getNewTodo,
            };
            axios.post("http://localhost:5000/", newTodo).then((res) => {});
        }
        setNewTodo(``);
    };
    const handleNewTodo = (e) => {
        setNewTodo(e.target.value);
    };
    props.func();

    return (
        <form
            className="text-center"
            style={{ width: "80%", marginInlineStart: "10%" }}
            onSubmit={handleSubmit}
        >
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="New Note"
                    aria-describedby="basic-addon2"
                    value={getNewTodo}
                    onChange={handleNewTodo}
                />
                <button
                    type="submit"
                    className="input-group-text text-white bg-primary"
                    id="basic-addon2"
                >
                    Add
                    <FontAwesomeIcon
                        className="text-white"
                        icon={faPlus}
                    ></FontAwesomeIcon>
                </button>
            </div>
        </form>
    );
};
export default ToDoCreate;
