import React, { useState, createContext, useEffect } from 'react';
import axios from '../config/axios.js';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
    let [userData, setUserData] = useState({});

    const getUserData = async (id) => {
        const response = await axios.get('/users/1/data');
        setUserData(response.data);
    };

    useEffect(getUserData, []);
    const { user, transactions, payees, categories, accounts } = userData;

    const postNewAccount = async (userId, obj) => {
        const response = await axios.post(
            '/accounts/forUser1',
            obj
        );
        return response.id;
    };

    const postNewPayee = async (userId, obj) => {
        const response = await axios.post(
            '/payees/forUser1',
            obj
        );
        return response[0].id;
    };

    const postNewCategory = async (userId, obj) => {
        const response = await axios.post(
            '/categories/forUser1',
            obj
        );
        return response[0].id;
    };

    const deleteTransaction = async (oldTransaction) => {
        console.log(oldTransaction);
        const transaction_id = oldTransaction.transaction_id;
        const response = await axios.delete(
            `/transactions/${transaction_id}`
        );
        if (response.status !== 200) return;
        const newArr = userData.transactions.filter(
            (trans) => trans.transaction_id != transaction_id
        );
        setUserData({ ...userData, transactions: newArr });
    };

    const postNewTrans = async (userId, obj, newData) => {
        const response = await axios.post(
            '/transactions/forUser1',
            obj
        );
        setUserData({ ...userData, transactions: [...transactions, newData] });
    };

    const addTransaction = async (userInput) => {
        const data = {};
        data.user_id = userData.user[0].id;
        data.inflow = userInput.inflow;
        data.outflow = userInput.outflow;
        data.payee_id = userData.payees.find(
            (payee) => payee.name == userInput.payee_name
        ).id;
        // if(data.payee_id === undefined || data.payee_id === null){
        //     let payeeObj = {}
        //     payeeObj.user_id = data.user_id
        //     payeeObj.name = userInput.payee_name
        //    data.payee_id = await postNewPayee(data.user_id, payeeObj)
        // }

        data.category_id = userData.categories.find(
            (category) => category.name == userInput.category_name
        ).id;
        // if(data.category_id === undefined || data.category_id === null){
        //     let categoryObj = {}
        //     categoryObj.user_id = data.user_id
        //     categoryObj.name = userInput.category_name
        //    data.category_id = await postNewCategory(data.user_id, categoryObj)
        // }

        data.account_id = userData.accounts.find(
            (account) => account.name == userInput.account_name
        ).id;
        // if(data.payee_id === undefined || data.payee_id === null){
        //     let accountObj = {}
        //     accountObj.user_id = data.user_id
        //     accountObj.name = userInput.account_name
        //     data.account_id = await postNewAccount(data.user_id, accountObj)
        // }
        const response = await axios.post(
            '/transactions/forUser1',
            data
        );
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
