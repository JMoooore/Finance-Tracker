import React, { useState, createContext } from 'react';
import axios from 'axios';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
    const [transData, setTransData] = useState([]);
    
    const getTransData = async (id) => {
        await axios
        .get('http://localhost:3001/users/1/data')
        .then((res) => setTransData(res.data));
    };
    
    const {user, transactions, payees, categories, accounts} = transData
    const postNewTrans = async (obj) =>{
        await axios.post('http://localhost:3001/transactions/forUser1', obj).then(res=>console.log(res.data))
    }

    return (
        <TableContext.Provider
            value={{
                transData,
                getTransData,
                postNewTrans,
                user,
                transactions,
                payees,
                categories,
                accounts
            }}
        >
            {children}
        </TableContext.Provider>
    );
};

export default TableContext;
