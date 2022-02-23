import { useContext } from 'react';
import {GlobalContext} from '../../context/GlobalState';
import EditTransaction from '../EditTransaction/EditTransaction';


type Props = {
    transaction: {
        id: number, 
        text: string, 
        amount: number
    }
}

export default function Transaction({transaction}:Props) {

    const {deleteTransaction} = useContext(GlobalContext)


    const sign = transaction.amount < 0 ? '-' : '+';
    const color = transaction.amount < 0 ? '#c0392b' : '#2ecc71'

    return (
        <li style={{position: "relative", border: "1px solid #CDCDCD", borderRight:"5px solid"+color}} className={`transaction-item d-flex justify-content-between mb-2 p-2`}>
            <button onClick={()=> deleteTransaction(transaction.id)} className="closeButton">X</button>
            <EditTransaction/>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        </li>
    )
}
