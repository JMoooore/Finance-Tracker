import * as React from 'react';
import MaterialTable from 'material-table';
import { useState, useEffect, useContext } from 'react';
import TableContext from '../../context/TableContext';


export default function Table() {
    let { addTransaction, setUserData, userData, postNewPayee, postNewTrans, postNewCategory, postNewAccount, deleteTransaction, user, transactions, payees, categories, accounts } = useContext(TableContext);
    
    return (
        <>
            <MaterialTable
                title="Transactions"
                columns={[
                    { title: 'Payee', field: 'payee_id', validate: rowData => rowData.payee_name !== '', lookup: {}},
                    { title: 'Category', field: 'category_name', validate: rowData => rowData.category_name !== ''},
                    { title: 'Account', field: 'account_name', validate: rowData => rowData.account_name !== '' },
                    { title: 'Date', field: 'date', type: 'date', validate: rowData => rowData.date !== '' },
                    { title: 'Outflow', field: 'outflow', type: 'currency', validate: rowData => rowData.outflow !== '' },
                    { title: 'Inflow', field: 'inflow', type: 'currency', validate: rowData => rowData.inflow !== ''},
                    { title: 'Note', field: 'note' },
                    
                ]}
                //should be const data passed in instead of all of this dummy data
                data={transactions}
                options={{
                    addRowPosition: 'first',
                    pageSizeOptions: [5, 10, 25, 50],
                    pageSize: 10,
                    columnsButton: true,
                    rowStyle: (data, index) =>
                        index % 2 === 0
                            ? {
                                  background: '#f5f5f5',
                                  color: '#001F29',
                                  height: '.5rem',
                              }
                            : {
                                  background: 'white',
                                  color: '#001F29',
                                  height: '.5rem',
                              },
                    grouping: true,
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#003459',
                        color: '#F5F5F5',
                        fontStyle: 'italic',
                    },
                }}
                editable={{
                    onRowAdd: addTransaction,
                    onRowUpdate: async (newData, oldData) =>{
                            setTimeout(() => {
                                // const dataUpdate = [...transData];
                                // const index = oldData.tableData.id;
                                // dataUpdate[index] = newData;
                                // setTransData([...dataUpdate]);

                            }, 1000);
                        },
                    onRowDelete: deleteTransaction
                        
                }}
            />
        </>
    );
}
