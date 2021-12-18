import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddnewTransaction = () => {
    const { transactions, addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        clearInputs()
        const form = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: Number(amount)
        }
        addTransaction(form)
    }

    const clearInputs = () => {
        setText('')
        setAmount(0)
    }
    return (
        <div className='mt-3'>
            <p><strong>Add new transaction</strong></p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' className='form-control' value={text} onChange={e => setText(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label className='m-0' htmlFor='amount'>Amount</label>
                    <p><small>Negative(Expenses), Positive(Income)</small></p>
                    <input type='number' className='form-control' value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <button className='btn btn-info btn-block'>Add </button>
            </form>
        </div>
    )
}

export default AddnewTransaction
