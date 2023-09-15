//리덕스 로직 저장할거임
import { createStore } from "redux";

//리듀서 함수
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
// store.dispatch({ type: "increment" }); 이제는 밖에서 디스패치할거임
