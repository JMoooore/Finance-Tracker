import * as React from 'react';
import MaterialTable from 'material-table';
import { useState, useEffect, useContext } from 'react';
import TableContext from '../../context/TableContext';


export default function Table() {
    const { transData, setTransData, getTransData, postNewTrans } = useContext(TableContext);
    useEffect(()=>{
        getTransData()
    }, [])
     
    return (
        <>
            <MaterialTable
                title="Transactions"
                columns={[
                    { title: 'Payee', field: 'payee_name'},
                    { title: 'Category', field: 'category_name' },
                    { title: 'Account', field: 'account_name' },
                    { title: 'Date', field: 'date', type: 'date' },
                    { title: 'Outflow', field: 'outflow', type: 'currency' },
                    { title: 'Inflow', field: 'inflow', type: 'currency' },
                    { title: 'Note', field: 'note' },
                    {
                        title: 'Balance',
                        field: 'account_balance',
                        type: 'currency',
                    },
                ]}
                //should be const data passed in instead of all of this dummy data
                data={transData}
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
                    onRowAdd: async (newData) =>{
                        
                            setTimeout(() => {
                                // const newObj = newData
                                // newObj.user_id = transData[0].user_id
                                // console.log(newObj)
                                // postNewTrans(newObj)
                                // getTransData()
                            }, 1000)
                        },
                    onRowUpdate: async (newData, oldData) =>{
                            setTimeout(() => {
                                // const dataUpdate = [...transData];
                                // const index = oldData.tableData.id;
                                // dataUpdate[index] = newData;
                                // setTransData([...dataUpdate]);

                            }, 1000);
                        },
                    onRowDelete: async (oldData) =>{
                            setTimeout(() => {
                                // const dataDelete = [...transData];
                                // const index = oldData.tableData.id;
                                // dataDelete.splice(index, 1);
                                // setTransData([...dataDelete]);

                            }, 1000);
                        },
                }}
            />
        </>
    );
}
