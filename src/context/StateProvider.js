import React from "react";
import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({children, initialState, reducer}) => {           //passed objects, R & I coming from files(same directory)
    <StateContext.Provider value={ useReducer(reducer, initialState)}>  {/*state context provider*/}
        {children}
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext) //custom hook