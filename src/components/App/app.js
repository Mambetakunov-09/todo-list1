import React, {Component} from 'react';
import TodoList from '../TodoList';
import AppHeader from '../Appheader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from "../itemStatusFilter";
import './app.css';
import ItemAddForm from "../item-add-form";


class App extends Component{
    max = 100;
    state = {
        TodoData :[
            this.createTodoItem('go to school'),
            this.createTodoItem('drive a car '),
            this.createTodoItem('go to sleep'),
            this.createTodoItem('learn react')
    ],
        term: '',
        filter: 'all'

};
    createTodoItem(label){
        return{
            label: label,
            id: this.max++,
            important: false,
            done: false
        }
    }
    deleteItem(id){
        this.setState(({TodoData})=> {
        const idx = TodoData.findIndex((el)=>el.id===id);
        TodoData.splice(idx,1);
         const before =TodoData.splice(0, idx);
         const after = TodoData.splice(idx);
         const newArray = [...before, ...after];
            return{TodoData: newArray}


        })
    };

    addItemForm = (text) => {
    console.log(text);
        const newItem = {
            label: text,
            id: this.max++
        };
        this.setState(({TodoData}) => {

            const newArr = [...TodoData, newItem];
            return {TodoData: newArr}

        })
    };
    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);
        let oldItem = arr[idx];
        let newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

    }
    onToggleImportant =(id) => {
        this.setState(({TodoData}) => {
            return{TodoData: this.toggleProperty(TodoData, id, 'important')};

        })
    };

    onToggleDone = (id) => {
        this.setState(({TodoData}) => {
            return{TodoData: this.toggleProperty(TodoData, id, 'done')};

        })
    };
    searchOnChage(term){
        this.setState({term})
    };

    search(items, term){
        return items.filter((item) => {
            return item.label.includes(term);
        })
    };
    onFilterChange = (name)=>{
        this.setState({filter: name})
    };
    filter(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done);
            default:
                return items

        }
    }


    render(){
    const {TodoData, term, filter} = this.state;
    const doneCount = TodoData.filter((el) => el.done).length;
    const allCount = TodoData.length - doneCount;
    const visibleItems = this.filter(this.search(TodoData,term), filter);
    console.log(visibleItems);

    return (
        <div className="todo-app">
            <AppHeader toDo={allCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel searchTerm={this.searchOnChage.bind(this)}/>
                <ItemStatusFilter
                filter={filter}
                onFilterChange={this.onFilterChange}
                />
            </div>

            <TodoList todos={visibleItems}
                      onAppDelete={this.deleteItem.bind(this)}
                      onToggleImportant={this.onToggleImportant}
                      onToggleDone={this.onToggleDone}
            />
            <ItemAddForm addItem={this.addItemForm}/>
        </div>
        )
    }
}

export default App;