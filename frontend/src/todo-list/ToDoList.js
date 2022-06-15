import "./ToDoList.css";

const ToDoList = (props) => {
    return (
        <ul>
            {props.dataTodos.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>;
            })}
        </ul>
    );
};

export default ToDoList;
