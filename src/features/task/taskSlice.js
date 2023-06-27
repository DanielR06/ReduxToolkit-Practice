import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        title: 'Littering',
        description:'Removing garbage from the house',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Cooking',
        description:'Cooking chicken for luch',
        isCompleted: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask : (state, action) => {
            state.push(action.payload) //Directly mutate the state, it is allowed by redux
            //[...state, action.payload] How to muatate in React

        },
        editTask : (state, action) => {
            const {id, title, description} = action.payload
            const taskFound = state.find(task => task.id === id);
            if(taskFound){
                taskFound.title =  title;
                taskFound.description = description;
            }
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload);
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer