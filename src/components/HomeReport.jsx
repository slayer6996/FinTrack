import React from 'react'
import './styles/homeReport.css'

function HomeReport(){
    const date= new Date().toLocaleString('default',{month:'long'})
    const budget=1000
    const expenditure=780
    const percentage=(expenditure/budget)*100;
    return(
        <>
            <div className="homeReportMain">
                <h2>{date}</h2>
                <div style={{width:percentage+'%'}} className="expense"></div>
                <div className="homeReportMainStats">
                    <center>
                        <h3>{expenditure} / {budget}</h3>
                        <h5>Expenditure / Budget</h5>
                    </center>
                </div>
                <div className="homeReportMainEditOpt">
                    <center>
                        <button className="editBudgetOpt">Edit budget</button>
                    </center>
                </div>
            </div>         
        </>
    )
}

export default HomeReport