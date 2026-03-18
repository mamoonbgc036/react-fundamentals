import { useReducer } from "react";

// 1. Define State type
interface State {
    count: number;
}

// 2. Define Action types
type Action =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }
    | { type: "incrementBy"; payload: number }; // action with data

// 3. Write the reducer function
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        case "incrementBy":
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }
}

// 4. Use in component
export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+1</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "incrementBy", payload: 5 })}>+5</button>
        </>
    );
}