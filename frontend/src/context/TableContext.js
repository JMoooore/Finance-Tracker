import React, { useState, createContext, useEffect } from 'react';
import axios from '../config/axios.js';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
    let [userData, setUserData] = useState({});

    const getUserData = async (id) => {
        const response = await axios.get(`/users/${id}/data`);
        setUserData(response.data);
    };

    const { user, transactions, payees, categories, accounts } = userData;

    const postNewAccount = async (obj) => {
        const response = await axios.post(`/accounts/forUser${userData.id}`, obj);
        return response.id;
    };

    const postNewPayee = async (obj) => {
        const response = await axios.post(`/payees/forUser${userData.id}`, obj);
        return response.data[0].id;
    };

    const postNewCategory = async (obj) => {
        const response = await axios.post(`/categories/forUser${userData.id}`, obj);
        return response[0].id;
    };

    const deleteTransaction = async (oldTransaction) => {
        console.log(oldTransaction);
        const transaction_id = oldTransaction.transaction_id;
        const response = await axios.delete(`/transactions/${transaction_id}`);
        if (response.status !== 200) return;
        const newArr = userData.transactions.filter(
            (trans) => trans.transaction_id != transaction_id
        );
        setUserData({ ...userData, transactions: newArr });
    };

    const postNewTrans = async (userId, obj, newData) => {
        const response = await axios.post('/transactions/forUser1', obj);
        setUserData({ ...userData, transactions: [...transactions, newData] });
    };

    const addTransaction = async (userInput) => {
        console.log(userInput)
        const data = {};
        data.user_id = userData.id;
        data.inflow = userInput.inflow;
        data.outflow = userInput.outflow;
        const payee = userData.payees.find(payee => payee.name == userInput.payee_name)
        console.log(payee);
        if (payee) {
            console.log("in here 1");
            data.payee_id = payee.id
        } else {
            console.log("in here 2");
            const inputObj = {user_id: data.user_id, name:userInput.payee_name}
            data.payee_id = await postNewPayee(inputObj)
            console.log("in here 3");
        }
       
console.log(data);

        const category = userData.categories.find(category => category.name == userInput.category_name)
        if (category) {
            data.category_id = category.id
        } else {
            const inputObj = {user_id: data.user_id, name:userInput.category_name}
            data.category_id = await postNewCategory(inputObj)
        }

console.log(data);


        const account = userData.accounts.find(account => account.name == userInput.account_name)
        if (account) {
            data.account_id = account.id
        } else {
            const inputObj = {user_id: data.user_id, name:userInput.account_name}
            data.account_id = await postNewAccount(inputObj)
        }
        data.account_id = userData.accounts.find(
            (account) => account.name == userInput.account_name
        ).id;
        // if(data.payee_id === undefined || data.payee_id === null){
        //     let accountObj = {}
        //     accountObj.user_id = data.user_id
        //     accountObj.name = userInput.account_name
        //     data.account_id = await postNewAccount(data.user_id, accountObj)
        // }
        console.log(data);
        const response = await axios.post(`/transactions/forUser${data.user_id}`, data);
        const [{ id }] = response.data;
        userInput.transaction_id = id;
        userData.transactions.push(userInput);
        setUserData({ ...userData });
    };

    return (
        <TableContext.Provider
            value={{
                addTransaction,
                userData,
                getUserData,
                setUserData,
                postNewTrans,
                postNewAccount,
                postNewCategory,
                postNewPayee,
                deleteTransaction,
                user,
                transactions,
                payees,
                categories,
                accounts,
            }}
        >
            {children}
        </TableContext.Provider>
    );
};

export default TableContext;
