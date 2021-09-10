# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    The context API provides a way to share values between components without having to explicitly pass a prop through every level of the tree. It can help keep our state relatively clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    * Action is an object that tells reducers how to change the state. It must contain a type property. It can optionally contain a payload property.
    * Reducer is a function that returns some state data. Is triggered by an action type.
    * Store is an object that holds the applications state data.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    Redux Thunk is a middleware that allows us to call the action creators that return a function. It sits between action and reducer and can interact with the dispatched action before reaching the reducer function.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    I like using Redux Thunk because we can easily check the action and the data we are passing in the console. I feel I have more control to my application.