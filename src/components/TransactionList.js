import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    
    return (
        <div className='mt-3'>
            <p><strong>History</strong></p>
            <hr />
            {transactions &&
                transactions.map((transaction,index) => (
                    <Transaction key={index} transaction={transaction} />
                ))
            }
        </div>
    )
}

export default TransactionList
