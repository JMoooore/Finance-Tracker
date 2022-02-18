import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import transactions from "../../dummyData/transactions.json";

const transactionsRows = transactions
const transactionsColums = [
    { field: 'id', headerName: "ID", width: 70 },
    { field: 'name', headerName: "Name", width: 130 },
    { field: 'date', headerName: "Date", width: 200 },
    { field: 'outflow', headerName: "Outflow", width: 130 },
    { field: 'inflow', headerName: "Inflow", width: 130 },
    { field: 'note', headerName: "Note", width: 130 },
]


export default function TransactionsTable() {
  return (
    <div style={{ height: "85vh", width: '60%', marginTop: "5rem" }}>
      <DataGrid
        rows={transactionsRows}
        columns={transactionsColums}
        pageSize={50}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
}
