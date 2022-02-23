import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Transaction from '../Transaction/Transaction'

export default function TransactionList() {

  const {state} = useContext(GlobalContext)

  return (
    <div>
      <h3>Histórico</h3>
      {state.transactions.length == 0 &&
        <div>
          Você ainda não tem histórico de operações
        </div>
      }
      <ul style={{margin: "0", padding: "0"}}>
        {state.transactions.map((item)=>(
          <Transaction key={item.id} transaction={item}/>
        ))}
      </ul>
    </div>
  )
}
