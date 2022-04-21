import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
// import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import CompoA from "./components/CompoA";
import CompoB from "./components/CompoB";
import CompoC from "./components/CompoC";

export const CountContext = React.createContext();

//  export const ChannelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />  
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterOne /> 
      <HookMouse />
      <MouseContainer /> 
      <IntervalHookCounter /> 
      <DataFetching /> 
      <CounterOne /> 
      <CounterTwo /> 
      <CounterThree /> 
       <UserContext.Provider value={"Parul"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        count - {count}
        <CompoA />
        <CompoB />
        <CompoC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
