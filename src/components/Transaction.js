import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'

    return (
    <div  className={sign === '+' ? 'card shadow m-1 border-success': 'card shadow m-1 border-danger'}>
        <div className='card-body'>
            <div className='row'>
                <div className='col-md'>
                    
                    <p className='m-0'><button className="btn btn-sm btn-danger" onClick={() => deleteTransaction(transaction.id)}>X</button> {transaction.text}</p>
                </div>
                <div className='col-md '>   
                    <h4 className={sign === '+' ? 'float-right text-uppercase text-success' : 'float-right text-uppercase text-danger'}>{sign}${Math.abs(transaction.amount)}</h4>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Transaction
