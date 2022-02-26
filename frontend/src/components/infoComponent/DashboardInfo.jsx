import React, { useState, useContext } from 'react';
import TableContext from '../../context/TableContext';
import { VictoryPie } from "victory-pie";

    

export default function DashboardInfo() {

    let {
        userData,
        user,
        transactions,
        payees,
        categories,
        accounts,
    } = useContext(TableContext);

    const payeeInfo = () => {
        let obj = {}
        let arr = []
        for(let i = 0; i < transactions.length; i++ ){
            if(obj[transactions[i].payee_name]){
                obj[transactions[i].payee_name] += transactions[i].outflow
            } else {
                obj.transactions[i].payee_name = transactions[i].outflow 
            }
            
        }
        console.log(obj)
        
    }

    payeeInfo()
    // const myData = payeeInfo()

    const myData = [
        { x: "Group A", y: 900 },
        { x: "Group B", y: 400 },
        { x: "Group C", y: 300 },
        { x: "Group B", y: 400 },
        { x: "Group C", y: 300 },
        { x: "Group A", y: 900 },
        { x: "Group B", y: 400 },
        { x: "Group C", y: 300 },
      ];
    
    
  return (
      <>
      <div>
      <VictoryPie
        data={myData}
        colorScale={["blue", "yellow", "red", "blue", "yellow", "red", "blue", "yellow" ]}
        radius={100}
      />
      </div>
      </>
  )
}
