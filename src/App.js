import './App.css';
import AddnewTransaction from './components/AddnewTransaction';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Title from './components/Title';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="row justify-content-center mt-3">
        <div className='col-md-4 col-sm-12'>

          <Title />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddnewTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
