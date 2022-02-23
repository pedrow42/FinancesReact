import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"

export default function Balance() {

  const {state} = useContext(GlobalContext);
  let amounts = state.transactions.map(item=>item.amount).reduce((acc, item)=>(acc+=item),0);
  const backColor = amounts < 0 ? "#c0392b" : "#2ecc71";
  const color = amounts < 0 ? "#fff" : "#000";
  const sign = amounts < 0 ? '-' : '+';

  return (
    <div className="card" style={{width: "50%", backgroundColor: backColor, color: color}}>
        <div className="card-body">
            <p>Saldo</p>
            <h3>{sign}R${amounts < 0 ? (amounts*=-1).toFixed(2) : amounts.toFixed(2)}</h3>
        </div>
    </div>
    
  )
}
