import React, { useContext }  from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction=>transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <>
            <p className='text-uppercase m-0 '>Your Balance</p>
            <h2>${total}</h2>
        </>
    )
}

export default Balance
