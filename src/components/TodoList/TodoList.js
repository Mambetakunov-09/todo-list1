import React from "react";
import TodoListItem from '../TodoListItem';


const TodoList = ({todos, onAppDelete, onToggleImportant, onToggleDone}) => {
    return (
        <ul className="list-group todo-list">
            {todos.map(function (item) {
                const {id, ...itemProps} = item;
                return (
                    <li key={item.id} className="list-group-item">
                        <TodoListItem
                            {...itemProps}
                            onDelete={() => {onAppDelete(id)}}
                            onTogImportant={() => onToggleImportant(id)}
                            onTogDone={() => onToggleDone(id)}
                        />
                    </li>
                )
            })}
        </ul>
    )
};
export default TodoList;