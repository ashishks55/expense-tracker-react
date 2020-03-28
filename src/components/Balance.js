import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const balance = amounts.reduce((prev, current) => prev + current);
    return (
        <>
          <h4>Your Balance</h4>  
          <h1 id="balance">Rs. {balance.toFixed(2)}</h1>
        </>
    )
}
