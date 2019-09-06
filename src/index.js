// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import TodoTaskCustomizer from './components/todo-task-customizer'
import TodoList from './components/todo-list'
import TodoFilter from './components/todo-filter'

// Styles
import 'semantic-ui-css/semantic.min.css';
import './css/main.css';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.state = {
            items: [],
            filteredItems: [],
            taskValue: null
        }
    }
    handleChangeValue({ text, categories }) {
        const { items } = this.state;
        const newElement = {
            text: text,
            categories: categories,
            done: false
        }

        this.el_input_task.value = ""; 

        this.setState({
            items: items.concat(newElement)
        });
    }

    render() {
        const { items, filteredItems, taskValue } = this.state;

        return (
            <div>
                <h1 class="ui header">Todo App</h1>
                <TodoTaskCustomizer inputRef={ (el) => { this.el_input_task = el; } } value={ taskValue } onChangeValue={ this.handleChangeValue } />
                <TodoFilter items={ items } onFiltered={(newItems) => { this.setState({ filteredItems: newItems }) }} />
                <TodoList items={ filteredItems.length ? filteredItems : items } />
            </div>
        )
    }
}

ReactDOM.render(<TodoApp/>, document.getElementById("app"));