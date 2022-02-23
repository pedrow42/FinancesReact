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
    editTransaction: (id: number, text: string, amount: number) => void
}

export const GlobalContext = createContext<ContextType>({
    state: initialState,
    deleteTransaction: () => null,
    addTransaction: () => null,
    editTransaction: () => null
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

    const editTransaction = (id: number, text: string, amount: number)=>{
        dispatch({
            type: 'EDIT_TRANSACTION',
            payload:{
                id,
                text,
                amount
            }
        })
    }

    return (
        <GlobalContext.Provider value={{state, deleteTransaction, addTransaction, editTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}