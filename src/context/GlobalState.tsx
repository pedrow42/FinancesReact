import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { stateType } from "./AppReducer";


const initialState = {
    transactions: []
}

type transactionType = { id: number, text: string, amount: number }


type ContextType = {
    state: stateType;
    deleteTransaction: (id:number) => void
    addTransaction: (transaction:transactionType) => void
}

export const GlobalContext = createContext<ContextType>({
    state: initialState,
    deleteTransaction: () => null,
    addTransaction: () => null
})

export const GlobalProvider:React.FC = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const deleteTransaction = (id:number)=>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: {id}
        })
    }

    const addTransaction = (transaction:transactionType)=>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:{
                transaction
            }
        })
    }

    return (
        <GlobalContext.Provider value={{state, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}