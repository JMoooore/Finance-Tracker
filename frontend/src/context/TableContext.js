import React, { useState, createContext } from 'react';
import axios from 'axios';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
    const [transData, setTransData] = useState([]);
    // const obj = {}
    // obj.payees = axios.get('/forUser:user_id')
    // obj.categories = axios.get('/forUser:user_id')
    // obj
    
    const getTransData = async (id) => {
        await axios
            .get('http://localhost:3001/users/all/1')
            .then((res) => setTransData(res.data));
    };

    const postNewTrans = async (obj) =>{
        await axios.post('http://localhost:3001/transactions/forUser1', obj).then(res=>console.log(res.data))
    }

    return (
        <TableContext.Provider
            value={{
                transData,
                getTransData,
                postNewTrans
            }}
        >
            {children}
        </TableContext.Provider>
    );
};

export default TableContext;
