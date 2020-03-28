import React, { useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault(); 
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        setText('');
        setAmount(0);
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e => setText(e.target.value))} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e => setAmount(e.target.value))} required/>
                </div>
                <button type="submit" className="btn">Add transaction</button>
            </form>
        </>
    )
}
