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
        const response = await axios.post(
            `/accounts/forUser${userData.id}`,
            obj
        );
        return response.data.id;
    };

    const postNewPayee = async (obj) => {
        const response = await axios.post(`/payees/forUser${userData.id}`, obj);
        return response.data[0].id;
    };

    const postNewCategory = async (obj) => {
        const response = await axios.post(
            `/categories/forUser${userData.id}`,
            obj
        );
        return response.data[0].id;
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

    const postNewTrans = async (obj) => {
        const response = await axios.post(
            `/transactions/forUser${userData.id}`,
            obj
        );
    };

    const addTransaction = async (userInput) => {
        const data = {};
        data.user_id = userData.id;
        data.inflow = userInput.inflow;
        data.outflow = userInput.outflow;

        const payee = userData.payees.find(
            (payee) => payee.name == userInput.payee_name
        );
        if (payee) {
            data.payee_id = payee.id;
        } else {
            const inputObj = {
                user_id: data.user_id,
                name: userInput.payee_name,
            };
            data.payee_id = await postNewPayee(inputObj);
        }

        const category = userData.categories.find(
            (category) => category.name == userInput.category_name
        );
        if (category) {
            data.category_id = category.id;
        } else {
            const inputObj = {
                user_id: data.user_id,
                name: userInput.category_name,
            };
            data.category_id = await postNewCategory(inputObj);
        }

        const account = userData.accounts.find(
            (account) => account.name == userInput.account_name
        );
        console.log(account);
        if (account) {
            data.account_id = account.id;
        } else {
            const inputObj = {
                user_id: data.user_id,
                name: userInput.account_name,
            };
            data.account_id = await postNewAccount(inputObj);
        }

        const response = await axios.post(
            `/transactions/forUser${data.user_id}`,
            data
        );
        const newData = { ...data, ...userInput };
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
