import * as React from 'react';
import MaterialTable from 'material-table';
import { useState, useEffect, useContext } from 'react';
import TableContext from '../../context/TableContext';

export default function Table() {
    const {transData, setTransData} = useContext(TableContext)

    
    
    return (
        <>
            <MaterialTable
                title="Transactions"
                columns={[
                    { title: 'Payee', field: 'payee_name' },
                    { title: 'Category', field: 'category_name' },
                    { title: 'Account', field: 'account_name' },
                    { title: 'Date', field: 'date', type: 'date' },
                    { title: 'Outflow', field: 'outflow', type: 'currency' },
                    { title: 'Inflow', field: 'inflow', type: 'currency' },
                    { title: 'Note', field: 'note' },
                    { title: 'Balance', field: 'account_balance', type: 'currency'}
                ]}
                //should be const data passed in instead of all of this dummy data
                data={transData}
                options={{
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
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                // setData([...data, newData]);

                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                // const dataUpdate = [...data];
                                // const index = oldData.tableData.id;
                                // dataUpdate[index] = newData;
                                // setData([...dataUpdate]);

                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                // const dataDelete = [...data];
                                // const index = oldData.tableData.id;
                                // dataDelete.splice(index, 1);
                                // setData([...dataDelete]);

                                resolve();
                            }, 1000);
                        }),
                }}
            />
            
        </>
    );
}
