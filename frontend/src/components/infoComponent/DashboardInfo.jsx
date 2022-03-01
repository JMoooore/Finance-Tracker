import React, { useState, useContext } from 'react';
import TableContext from '../../context/TableContext';
import { VictoryPie } from 'victory-pie';

export default function DashboardInfo() {
    let { payeeSums, userData, transactions, payees, categories, accounts } =
        useContext(TableContext);

    const myData = payeeSums;

    return (
        <>
            <div>
                <VictoryPie
                    data={myData}
                    colorScale={[
                        'blue',
                        'yellow',
                        'red',
                        'blue',
                        'yellow',
                        'red',
                        'blue',
                        'yellow',
                    ]}
                    radius={100}
                    labels={({ datum }) => `${datum.x}: $${datum.y}`}
                />
            </div>
        </>
    );
}
