import { ChangeEvent, useState } from "react"
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";


export default function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('')

    const {addTransaction} = useContext(GlobalContext)

    const handleNewTransaction = ()=>{
        const newTransaction = {
            id: Math.floor(Math.random()*10000000),
            text: text,
            amount: Number(amount)
        }
        if(text && Number(amount) !== 0){
            console.log(amount)
            addTransaction(newTransaction)
            setText('')
            setAmount('')
        }else{
            alert("Por favor, preencha todos os campos.")
        }
        
    }

    return (
        <div>
            <h4 className="mt-3">Adicionar nova operação</h4>
            <div className="card my-3" style={{width: "25rem"}}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Texto</h6>
                    <input className="form-control mb-3" type="text" placeholder="Enter text..." value={text} onChange={
                        (e:ChangeEvent<HTMLInputElement>)=>{
                            setText(e.target.value)
                        }}
                    >
                    </input>
                    <h6 className="card-subtitle mb-2 text-muted">Valor</h6>
                    
                    <input className="form-control mb-2" type="number" placeholder="Enter a number..."
                        value={amount} onChange={
                            (e)=>{
                                setAmount(e.target.value)
                            }}
                    >    
                    </input>
                    <button className="btn btn-primary" type="submit" onClick={handleNewTransaction}>Adicionar operação</button>
                </div>
            </div>
        </div>
    )
}
