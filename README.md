# Redux Toolkit Practice

![Redux Toolkit Logo](https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg "redux-toolkit.js.org")

I use this project to practice the Redux ToolKit functions in isolation.

##### This project is a practice of Redux Toolkit

- We first use this code to create our store in src/app/store.js
```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
});

export default store;
```

<!--TODO in src/features description for the Slices and their funtion  in the Slice can be the funtions of for example the Tasks-->
<!--! Funtion and requerimentes of CreateSlice, name, initialState, reducer(the funtions of Slices)-->
<!--! useSelector(geting data of the state) -->
```js
import { useSelector } from "react-redux"

const tasks = useSelector(state => state.task)

{tasks.map(task =>(
            <div key={task.id} className='border-2 text-blue-700'>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
        ))}
```
<!--! useDispact(funtions for update State) -->
```js

```
<!--! The reducers created this  -->
```js
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask : (state, action) => {
            console.log(state, action)
        }
    }
})
```
the state is current state and action the new state 

<!--! Usage in this project uuid for ids of de tasks -->
<!--! Configure React Router -->