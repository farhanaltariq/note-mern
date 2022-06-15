import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./ToDoList.css";

const ToDoList = (props) => {
    const destroy = (id) => {
        axios.delete(`http://localhost:5000/${id}`).then((res) => {});
    };
    return (
        <ul className="list-group">
            {props.dataTodos.map((todo) => {
                return (
                    <li className="list-group-item" key={todo._id}>
                        <div className="row">
                            <div className="col">{todo.title}</div>
                            <div className="col btn text-end">
                                <button className="btn">
                                    <FontAwesomeIcon
                                        className="text-info"
                                        icon={faPen}
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
