import { Table } from "react-bootstrap"
import { GlobalContext } from "../../context/GlobalState"
import { useContext } from "react"


export default function IncomeExpenses() {

    const {state} = useContext(GlobalContext);

    const total = state.transactions.map(item=>item.amount)
    const plus = total.filter(item => item > 0).reduce((acc, item)=>(acc+=item),0)
    const minus = total.filter(item => item < 0).reduce((acc, item)=>(acc+=item),0)*-1

    return (
        <div className="mt-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><h4>Receita</h4></th>
                        <th><h4>Despesa</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{backgroundColor: "#2ecc71", width: "50%"}}>
                            <h5>+R${plus.toFixed(2)}</h5>
                        </td>
                        <td style={{backgroundColor: "#c0392b", color:"#fff",width: "50%"}}>
                            <h5>-R${minus.toFixed(2)}</h5>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
