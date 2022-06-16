import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPen,
    faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./ToDoList.css";

let clicked = false;
const ToDoList = (props) => {
    const destroy = (id) => {
        axios.delete(`http://localhost:5000/${id}`).then((res) => {});
    };
    const changeElement = (id) => {
        const data = document.getElementById(id);
        if (!clicked) {
            data.outerHTML = `<input type="text" class="col form-control" id="${id}" value="${data.innerText}"/>`;
            clicked = true;
        } else {
            data.outerHTML = `<div class="col" id="${id}">${data.value}</div>`;
            clicked = false;
        }
    };
    return (
        <ul className="list-group">
            {props.dataTodos.map((todo) => {
                return (
                    <li
                        className="list-group-item py-auto my-2 pt-2"
                        key={todo._id}
                    >
                        <div className="row">
                            <div className="col" id={todo._id}>
                                {todo.title}
                            </div>
                            <div className="col text-end">
                                <button
                                    className="btn"
                                    onClick={() => changeElement(todo._id)}
                                >
                                    <FontAwesomeIcon
                                        className={
                                            clicked
                                                ? "text-success"
                                                : "text-info"
                                        }
                                        icon={clicked ? faFloppyDisk : faPen}
                                    ></FontAwesomeIcon>
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => destroy(todo._id)}
                                >
                                    <FontAwesomeIcon
                                        className="text-danger"
                                        icon={faTrash}
                                    ></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default ToDoList;
