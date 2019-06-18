import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { addNewTask, completeTheTask, deleteTheTask } from '../actions';

const TodoListContainer = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    max-width: 50%;
    margin: 25px 0px;
`;

const TaskContainer = styled.div`
    display: flex;
`;

const TaskButton = styled.button`
    height: 24px;
    border: 1px solid red;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-weight: 800;
    align-self: center;
    margin-right: 10px;
    cursor: pointer;
`;

const Task = styled.p`
    cursor: pointer;

    ${props => props.completed && css`
        text-decoration: line-through;
    `}
`;

const AddTaskInput = styled.input`
    border: 1px solid black;
    font-size: 1rem;
    border-radius: 3px;
    padding: 5px;
    outline: none;
`;

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }

    handleChanges = e => {
        this.setState({ title: e.target.value });
    };

    addTask = event => {
        event.preventDefault();
        this.props.addNewTask(this.state.title);
        this.setState({ title: '' });
    };

    deleteTask = index => {
        this.props.deleteTheTask(index);
    }

    completeTask = index => {
        this.props.completeTheTask(index);
    }

    render() {
        return (
            <React.Fragment>
                <TodoListContainer>
                    {this.props.tasks.map((task, index) => (
                        <TaskContainer key={index}>
                            <TaskButton onClick={() => this.deleteTask(index)}>X</TaskButton>
                            <Task completed={task.completed} onClick={() => this.completeTask(index)}>{task.title}</Task>
                        </TaskContainer>
                    ))}
                </TodoListContainer>
                <form onSubmit={this.addTask}>
                    <AddTaskInput 
                        type="text" 
                        value={this.state.title} 
                        onChange={this.handleChanges}
                        placeholder="Add new task" 
                    />
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(mapStateToProps, { addNewTask, completeTheTask, deleteTheTask })(TodoList);