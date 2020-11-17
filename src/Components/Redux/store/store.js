const { createStore } = require("redux");
const { default: userReducer } = require("../reducers/userReducer");

const store = createStore(userReducer);

export default store;