import React, {useState, createContext} from 'react'
import axios from 'axios'

const TableContext = createContext()

export const TableProvider = ({children}) => {
    const [transData, setTransData] = useState([])
    const getTransData = async (id) =>{
       await axios.get('http://localhost:3001/users/all/1').then(res=> setTransData(res.data))
    }
    // getTransData()


  return (
    <TableContext.Provider value={{
        transData,
        getTransData
    }}>
        {children}
    </TableContext.Provider>
  )
}

export default TableContext
