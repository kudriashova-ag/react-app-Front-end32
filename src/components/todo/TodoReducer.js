import { nanoid } from "nanoid";

const todoReducer = (state, { type, payload }) => {
    switch (type) {
        case 'add':
            return [...state, {
                id: nanoid(),
                done: false,
                title: payload
            }];
        
        case 'remove':
            return state.filter((task) => task.id !== payload);
        
        case 'toggleDone':
            return state.map((task) => {
                if (task.id === payload) {
                    return { ...task, done: !task.done };
                }
                return task;
            });
        
        case 'update':
            return state.map((task) => {
                if (task.id === payload.id) {
                    return { ...task, title: payload.title };
                }
                return task;
            });        
        
        default:
            return state;
    }

    // return state;
}

export default todoReducer;