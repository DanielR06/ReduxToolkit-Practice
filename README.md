# Redux Toolkit Practice

![Redux Toolkit Logo](https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg "redux-toolkit.js.org")

I use this project to practice the Redux ToolKit functions in isolation.

##### This project is a practice of Redux Toolkit

- We first use this code to create our store
```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
});

export default store;
```