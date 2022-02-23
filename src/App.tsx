import AddTransaction from "./components/AddTransaction/AddTransaction";
import Balance from "./components/Balance/Balance";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/TransactionList/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import './App.css';

function App() {
  
  return (
    <GlobalProvider>
      <div className="card" style={{padding: "40px 65px", marginTop: "20px"}}>
        <h1 className="mb-4">Controle de gastos</h1>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    
  )
}

export default App;
