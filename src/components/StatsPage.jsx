import React from 'react'
import HomeReport from './HomeReport'
import './styles/statsPage.css'
import { PieChart, Pie, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

function StatsPage() {
    const [bills, food, transport, entertainment, others] = [100, 100, 100, 400, 80]
    const limit = {
        bills: 150,
        food: 200,
        transport: 150,
        entertainment: 400,
        others: 100
    }
    const data = [
        { name: "bills", value: 150 },
        { name: "food", value: 200 },
        { name: "transport", value: 150 },
        { name: "entertainment", value: 400 },
        { name: "others", value: 100 },
    ]
    return (
        <>
            <HomeReport />
            <div className="detailedStats">
                <h4>Bills</h4>
                <div style={{ width: (bills * 100 / limit.bills) + '%' }} className="expense"></div>
                <p>{bills} / {limit.bills}</p>
                <br />

                <h4>Food</h4>
                <div style={{ width: (food * 100 / limit.food) + '%' }} className="expense"></div>
                <p>{food} / {limit.food}</p>
                <br />

                <h4>Transport</h4>
                <div style={{ width: (transport * 100 / limit.transport) + '%' }} className="expense"></div>
                <p>{transport} / {limit.transport}</p>
                <br />

                <h4>Entertainment</h4>
                <div style={{ width: (entertainment * 100 / limit.entertainment) + '%' }} className="expense"></div>
                <p>{entertainment} / {limit.entertainment}</p>
                <br />

                <h4>Others</h4>
                <div style={{ width: (others * 100 / limit.others) + '%' }} className="expense"></div>
                <p>{others} / {limit.others}</p>
            </div>

            <PieChart width={380} height={380}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#60b0ff"
                    label
                />
                <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#60b0ff" />
                <Tooltip />
            </PieChart>

            <BarChart
                width={380}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 50,
                    left: 10,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 1, right: 1 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#1976D2" background={{ fill: '#eee' }} />
            </BarChart>

            <div className="invisible"></div>
        </>
    )
}

export default StatsPage