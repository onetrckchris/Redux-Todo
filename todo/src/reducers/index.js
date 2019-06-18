import { ADD_NEW_TASK, COMPLETE_THE_TASK, DELETE_THE_TASK } from '../actions';

const initialState = {
    tasks: [
        { title: 'Learn more about reducers in Redux', completed: false },
        { title: 'Complete the Great Dalarn Heist in Hearthstone', completed: false }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case COMPLETE_THE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task, index) => {
                    if (action.payload === index) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    } else {
                        return task;
                    }
                })
            };
        case DELETE_THE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => action.payload !== index)
            }
        default: 
            return state;
    };
};