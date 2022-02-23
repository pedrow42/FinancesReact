import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"

export default function Balance() {

  const {state} = useContext(GlobalContext);
  let amounts = state.transactions.map(item=>item.amount).reduce((acc, item)=>(acc+=item),0);

  const sign = amounts < 0 ? '-' : '+';

  return (
    <div className="card" style={{width: "50%"}}>
        <div className="card-body">
            <p>Saldo</p>
            <h3>{sign}${amounts < 0 ? (amounts*=-1).toFixed(2) : amounts.toFixed(2)}</h3>
        </div>
    </div>
    
  )
}
