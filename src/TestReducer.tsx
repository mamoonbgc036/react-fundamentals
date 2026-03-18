import { useReducer } from 'react'

interface State {
    count: number
}

type Action = | { type: "increment" } | { type: "decrement" } | { type: "reset" } | { type: "incrementBy", payload: number }

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "reset":
            return { ...state, count: 0 }
        case "incrementBy":
            return { ...state, count: state.count + 5 }
    }
}


export default function TestReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Inc</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Dec</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "incrementBy", payload: 5 })}>Inc by 5</button>
        </>
    )
}