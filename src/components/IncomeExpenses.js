import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    const expense = amounts
        .filter(amount=> amount < 0)
        .reduce((acc, item)=>(acc += item),0)
        .toFixed(2)

    return (
        <div className='card shadow'>
            <div className='card-body'>
                <div className='row text-center'>
                    <div className='col-md'>
                        <p className='text-uppercase m-0'>income</p>
                        <h4 className='text-uppercase text-success'>${income}</h4>
                    </div>
                    <div className='col-md'>
                        <p className='text-uppercase m-0'>expenses</p>
                        <h4 className='text-uppercase text-danger'>${Math.abs(expense).toFixed(2)}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpenses
