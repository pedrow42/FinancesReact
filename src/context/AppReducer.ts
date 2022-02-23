export type stateType = {
    transactions:
        {
            id: number, 
            text: string, 
            amount: number 
        }[]
}

export type actionType = {
    type: string;
    payload: {
        [key:string]: any
    }
}

export default (state: stateType, action: actionType)=>{
    switch(action.type){

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload.id)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload.transaction, ...state.transactions]
            }
        case 'EDIT_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(item => {
                    if(item.id === action.payload.id){
                        return {...item, text:action.payload.text, amount: action.payload.amount}
                    }
                    return item
                })
            }
        default:
            return state
    }
}


