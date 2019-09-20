import React, {Component} from 'react';
import './Todolistitem.css';

class TodoListItem extends Component{

    render() {


        const {label,  done, important, onTogDone, onTogImportant, onDeleted} = this.props;
        let TodoListItem = 'todo-list-item';
        if (done) {
            TodoListItem = TodoListItem + " done";


        }
        if (important) {
            TodoListItem = TodoListItem + " important";

        }




        return (
            <span className={TodoListItem}>
                <span
                    className="todo-list-item-label"
                    onClick={onTogDone}
                >
                    {label}
                </span>
                <button /*Red trash button*/
                    type="button"
                    className="btn btn-outline-danger float-right"
                    onClick={onDeleted}

                >
                    <i className="fa fa-trash-o"></i>
                </button>
                <button /*Green exclamation button*/
                    type="button"
                    className="btn btn-outline-success float-right"
                    onClick={onTogImportant}

                >
                    <i className="fa fa-exclamation"></i>
                </button>
            </span>
        )
    }
}

export default TodoListItem;