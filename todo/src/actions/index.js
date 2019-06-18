export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const addNewTask = newTask => {
    const addedTask = { title: newTask, completed: false }
    console.log(addedTask)
    return {
        type: ADD_NEW_TASK,
        payload: addedTask
    };
};

export const COMPLETE_THE_TASK = 'COMPLETE_THE_TASK';
export const completeTheTask = index => {
    return {
        type: COMPLETE_THE_TASK,
        payload: index
    };
};

export const DELETE_THE_TASK = 'DELETE_THE_TASK';
export const deleteTheTask = index => {
    return {
        type: DELETE_THE_TASK,
        payload: index
    }
}