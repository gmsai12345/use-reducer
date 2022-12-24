import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
    //       if (action.type === 'increment') {
    //     return { count: state.count + 1 };
    //   } else if (action.type === 'decrement') {
    //     return { count: state.count - 1 };
    //   } else {
    //     return state;
    //   }
    // }
  }
}
// same as use state but if you want many complex logics and operations to be performed we can use
// use reducer

export default function MyCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
